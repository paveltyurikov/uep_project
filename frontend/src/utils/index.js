export const isDevEnv = () => process.env.NODE_ENV !== 'production';

export const varIsArray = (variable) => Object.prototype.toString.call(variable) === "[object Array]";
export const varIsObject = (variable) => Object.prototype.toString.call(variable) === "[object Object]";

export const objectNotEmpty = (obj) => varIsObject(obj) && Object.keys(obj).length > 0;


export const makeActionCreator = (type, ...argNames) => {
    return function (...args) {
        let action = {type};
        argNames.forEach((arg, index) => {
            action[argNames[index]] = args[index]
        });
        return action
    }
};

export const createReducer = (initialState, handlers) => {
    return (state = initialState, action) => {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action)
        } else {
            return state
        }
    }
};

export const parseCookies = () => {
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

export const getCsrfToken = () => {
    const cookies = parseCookies();
    return cookies.csrftoken
};

export const getSessionId = () => {
    const cookies = parseCookies();
    return cookies.sessionid
};

export const getFormData = data => {
    const formData = new FormData();
    Object.keys(data).forEach(key => formData.append(key, data[key]));
    return formData;
};

export const scrollWindowToTop = () => window.scrollTo({
    top: 0,
    behavior: "smooth"
});

export const scrollWindowToBottom = () => window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
});
