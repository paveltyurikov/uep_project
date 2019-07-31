import request from "../../utils/request";

export const LOGIN_URL = '/api/auth/login';

const parseCookies = () => {
    let cookies = {};
    if (document.cookie && document.cookie !== '') {
        document.cookie.split(';').forEach(function (c) {
            let m = c.trim().match(/(\w+)=(.*)/);
            if (m !== undefined) {
                cookies[m[1]] = decodeURIComponent(m[2]);
            }
        });
    }
    return cookies;
};

const getCsrfToken = () => {
    const cookies = parseCookies();
    return cookies.csrftoken
};

export const getHeaders = () => {
    return {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'X-CSRFToken': getCsrfToken(),
        //'Authorization': `Token ${localStorage.getItem('questionsToken')}`
    }
};


const getErrorData = (data) => {
    try {
        JSON.stringify(data);
    } catch (e) {
        console.log(e, data);
        return {details: "Data not JSON serializable"}
    }
    return data
};

const Api = {

    authLogin: async (action) => {
        return request(
            {
                url: LOGIN_URL,
                options: {
                    method: 'POST',
                    headers: getHeaders(),
                    body: JSON.stringify(action.data)
                }
            }
        );
    },
    authLogout: async (action) => {
        const response = await fetch(
            LOGIN_URL,
            {
                method: 'post',
                headers: getHeaders(),
                credentials: 'same-origin',

            });
        const {ok, status} = response;
        const data = await response.json();
        if (ok) return data;
        throw new Error(JSON.stringify({status: status, ...getErrorData(data)}))
    },
};

export default Api;