// This file contains the endpoints for the Azure DevOps API.
let endpoints = {
    getWorkItem: "/wit/workitems/{id}?api-version=7.2-preview.3",
    createWrkItem: "/wit/workitems/${type}?api-version=7.2-preview.3",
    updateWorkItem: "/wit/workitems/{id}?api-version=7.2-preview.3",
    deleteWorkItem: "/wit/workitems/{id}?api-version=7.2-preview.3",
    listWorkItems: "/wit/workitems?ids={ids}&api-version=7.2-preview.3",
}

const getWorkItemEndpoint = (id: string) => {
    return process.env.API_BASE_URL + endpoints.getWorkItem.replace("{id}", id);
}
const createWrkItemEndpoint = (type: string) => {
    return process.env.API_BASE_URL + endpoints.createWrkItem.replace("{type}", type);
}
const updateWorkItemEndpoint = (id: string) => {
    return process.env.API_BASE_URL + endpoints.updateWorkItem.replace("{id}", id);
}
const deleteWorkItemEndpoint = (id: string) => {
    return process.env.API_BASE_URL + endpoints.deleteWorkItem.replace("{id}", id);
}
const listWorkItemsEndpoint = (ids: string[]) => {
    return process.env.API_BASE_URL + endpoints.listWorkItems.replace("{ids}", ids.join(","));
}

export default {
    getWorkItemEndpoint,
    createWrkItemEndpoint,
    updateWorkItemEndpoint,
    deleteWorkItemEndpoint,
    listWorkItemsEndpoint
}