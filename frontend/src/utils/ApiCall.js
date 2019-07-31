// SuccessCallBack
// ErrorsCallBack
import {getHeaders} from "./request";

const defaultOptions = {
    method: "GET",
    headers: {}
}

export default class Request {
    constructor({
                    url,
                    options = defaultOptions,
                    successAction,
                    errorAction
                }) {
        this.url = url;
        this.options = options;
        this.responseStatus = null;
        this.statusText = '';
        this.successAction = successAction;
        this.errorAction = errorAction;
    }

    request = ({url = this.url, options}) => {
        fetch(url, options)
            .then(this.processResponse)
            .catch(this.processErrors)
    };

    processResponse = response => {
        this.responseStatus = response.responseStatus;
        this.status = response.status;
        response.text()
            .then(this.processResponseContent)
            .catch()
    };

    checkRequestErrors = () => {

    }

    processErrors = errors => {
        console.log('processErrors', errors)
    };

    processResponseContent = text => {
        try {
            return JSON.parse(text)
        } catch (error) {
            if (error.name === 'SyntaxError') {
                this.processNonJsonResponse(text)
            } else {
                throw error
            }
        }
    };

    processNonJsonResponse = text => {
        if (this.status)
            console.log('processResponseContent: Non JSON response', text)
    };

    getRequestBody = data => {
        return JSON.stringify(data)
    };

    get = (data) => {
        const options = {...this.options};
        options.method = "GET";
        this.request({options})
    };

    post = (data) => {
        const options = {...this.options};
        options.method = "POST";
        options.body = this.getRequestBody(data);
        this.request({options})
    };

    update = (data) => {
        const options = {...this.options};
        options.method = "UPDATE";
        options.body = this.getRequestBody(data);
        this.request({options})
    };

    delete = () => {
        const options = {...this.options};
        options.method = "DELETE";
        options.headers = getHeaders();
        this.request({options})
    }
}