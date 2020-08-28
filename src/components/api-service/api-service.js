import RequestTemplates from "./request-templates";

export default class ApiService {
    static _apiBase = "/api";
    static _apiToken = "AuthToken";

    static signUp = (form) => {
        RequestTemplates.postData(this._apiBase + "/signUp", form)
            .then(r=>ApiService._setToken(r));
    }

    static signIn = (form) => {
        RequestTemplates.postData(this._apiBase + "/signIn", form)
            .then(r=>ApiService._setToken(r));
    }

    static signOut = () => {
        RequestTemplates.deleteData(this._apiBase + "/signOut")
            .then(ApiService.deleteCookie(this._apiToken));
    }

    static _setToken(tokenContainer) {
        if (tokenContainer.value != null) {
            document.cookie = this._apiToken + "=" + tokenContainer.value;
        }
    }

    static getCookie = (name) => {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    static deleteCookie = (name) => {
        document.cookie = name + "=;'max-age': -1";
    }

    static getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        return await res.json();
    };

    static getAllCourses = async () => {
        const res = await this.getResource(`${this._apiBase}/courses/`);
        console.log(res.json());
        return res.json();
    };
}