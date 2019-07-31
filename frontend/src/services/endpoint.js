import request, {getHeaders} from "../utils/request";
import {getFormData} from "../utils";

export default function Endpoint(endpoint) {


    const checkFilesInData = (data) => {
        return Object.keys(data).reduce(function (filesPersist, dataKey) {
            if (data[dataKey] instanceof File && filesPersist === false) {
                return true
            }
            return filesPersist
        }, false);
    };

    const getOptions = (method, data={}) => {
        // Check if files in request data
        const isFilesInData = checkFilesInData(data);
        const requestMethod = method.toUpperCase();

        // Check if isFilesInData format data as 'multipart/form-data'
        const requestHeaders = isFilesInData ? getHeaders('multipart/form-data') : getHeaders();
        const requestBody = isFilesInData ? getFormData(data) : JSON.stringify(data)

        return requestMethod === 'GET' ?
            {
                method: requestMethod,
                headers: requestHeaders,
            }
            :
            {
                method: requestMethod,
                headers: requestHeaders,
                body: requestBody
            }
    };

    return {
        list: async (action) => {
            return request(
                {
                    url: endpoint,
                }
            );
        },
        create: async (action) => {
            return request(
                {
                    url: endpoint,
                    options: getOptions('post', action.data)
                }
            );
        },
        retrieve: async (action) => {
            const {id, data} = action;
            const url = `${endpoint}${id}/`;
            return request(
                {
                    url: url,
                    options: getOptions('get', data)
                }
            );
        },
        update: async (action) => {
            const {id, data} = action;
            const url = `${endpoint}${id}/`;
            return request(
                {
                    url: url,
                    options: getOptions('patch', data)
                }
            );
        },
        delete: async (action) => {
            const url = `${endpoint}${action.id}/`;
            return request(
                {
                    url: url,
                    options: {
                        method: 'DELETE',
                        headers: getHeaders(),
                    }
                }
            );
        },
    }
};