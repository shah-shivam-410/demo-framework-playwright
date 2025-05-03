import { APIRequestContext, APIResponse, expect } from "@playwright/test";
import Ajv from "ajv";
import fs from "fs";
import path from "path";

interface SchemaValidationOptions {
    response: APIResponse;
    schemaString?: string;
    schemaFileName?: string;
}

async function validateSchema({
    response,
    schemaString,
    schemaFileName,
}: SchemaValidationOptions): Promise<void> {
    const ajv = new Ajv();
    let schemaJson: string;

    if (schemaString) {
        schemaJson = schemaString;
    } else if (schemaFileName) {
        const schemaFilePath = path.join(__dirname, `../../src/schemas/${schemaFileName}.json`);
        schemaJson = fs.readFileSync(schemaFilePath, 'utf-8');
    } else {
        throw new Error("Either 'schemaString' or 'schemaFileName' must be provided.");
    }

    const schema = JSON.parse(schemaJson);
    const validate = ajv.compile(schema);

    const responseJson = await response.json();
    const isValid = validate(responseJson);

    if (!isValid) {
        console.error('Schema validation failed:', validate.errors);
    }
    expect(isValid).toBeTruthy();
     
}

async function logDetails(
    request: APIRequestContext,
    response: APIResponse,
    testInfo: any
): Promise<void> {

    const respText = await response.text();
    const formattedBody = (() => {
        try {
            return JSON.stringify(JSON.parse(respText), null, 2);
        } catch {
            return respText;
        }
    })();
    
    const logs = `
        ----------------
        URL: ${response.url()}
        Response Body: ${formattedBody}
        ----------------
        `;
    
    testInfo.attach('API Response', {
        body: Buffer.from(logs),
        contentType: 'text/plain',
    });

}


export {
    validateSchema,
    logDetails
}
