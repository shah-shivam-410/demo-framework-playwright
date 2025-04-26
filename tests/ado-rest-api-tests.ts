import test, { expect, request } from "@playwright/test";
import Endpoints from "@utils/Endpoints";
import { Tag } from "@utils/Tags";
import Ajv from "ajv";
import fs from "fs";
import path from "path";


test.skip("Validate get workitem api", { tag: Tag.sanity }, async ({ request }) => {

    let authToken = "Basic " + Buffer.from(`${process.env.API_USERNAME}:${process.env.API_TOKEN}`).toString('base64');
    const resp = await request.get(Endpoints.getWorkItemEndpoint("29"), {
        headers: {
            'Authorization': authToken
        }
    });
    expect(resp.status()).toBe(200);
    const expectedSchemaFile = fs.readFileSync(path.join(__dirname, "../src/schemas/GetWorkItemSchema.json"), "utf-8");
    // Write logic to compare actual respSchema with expectedSchema
    const ajv = new Ajv();
    const expectedSchema = ajv.compile(JSON.parse(expectedSchemaFile));
    const actualResp = await resp.json();
    const isValid = expectedSchema(actualResp);
    if (!isValid) {
        console.log(expectedSchema.errors);
    }
    expect(isValid).toBeTruthy();
}); 