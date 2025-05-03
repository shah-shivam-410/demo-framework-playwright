import test, { expect } from "@playwright/test";
import Endpoints from "@api/Endpoints";
import { Tag } from "@utils/Tags";
import HttpMethods from "@api/HttpMethods";
import { logDetails, validateSchema } from "@utils/APiUtils";


test("Validate get workitem api", { tag: Tag.sanity }, async ({ request }, testInfo) => {
    const resp = await HttpMethods.getRequest(request, Endpoints.getWorkItemEndpoint("29"))
    await logDetails(request, resp, testInfo)
    expect(resp.status()).toBe(200);
    validateSchema({ response: resp, schemaFileName: "GetWorkItemSchema"})
}); 