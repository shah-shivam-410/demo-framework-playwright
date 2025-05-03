import { APIRequestContext, APIResponse } from "@playwright/test";


const API_TOKEN = "Basic " + Buffer.from(`${process.env.API_USERNAME}:${process.env.API_TOKEN}`).toString('base64');


async function getRequest(request: APIRequestContext, endpoint: string, authRequired = true): Promise<APIResponse> {
    return request.get(endpoint, authRequired ? {
        headers: {
            'Authorization': API_TOKEN
        }
    } : {});
}

async function postRequest(request: APIRequestContext, endpoint: string, reqbody: string, authRequired = true): Promise<APIResponse> {
    return request.post(endpoint,  authRequired ? {
        headers: {
            'Authorization': API_TOKEN
        },
        data: reqbody
    } : {});
}

async function deleteRequest(request: APIRequestContext, endpoint: string, authRequired = true): Promise<APIResponse> {
    return request.delete(endpoint, authRequired ? {
        headers: {
            'Authorization': API_TOKEN
        }
    } : {});
}

async function patchRequest(request: APIRequestContext, endpoint: string, reqbody: string, authRequired = true): Promise<APIResponse> {
    return request.patch(endpoint, authRequired ? {
        headers: {
            'Authorization': API_TOKEN
        },
        data: reqbody
    } : {});
}

export default {
    getRequest,
    postRequest,
    deleteRequest,
    patchRequest
};