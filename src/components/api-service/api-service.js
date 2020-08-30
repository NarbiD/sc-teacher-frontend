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

    static updateCourses(setCourses) {
        RequestTemplates.getData(this._apiBase + "/courses")
            .then(courses=>setCourses(courses));
    }
}