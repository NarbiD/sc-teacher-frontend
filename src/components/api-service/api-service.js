import RequestTemplates from "./request-templates";
import objectAdapter from "./object-adapter";

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
            .then(courses=>objectAdapter(courses, 'title', 'label'))
            .then(setCourses);
    }

    static editCourse(course, editAppState) {
        let courseDto = objectAdapter(course, 'label', 'title');
        RequestTemplates.putData(this._apiBase + "/courses/" + course.id, courseDto)
            .then(()=>editAppState(course));
    }

    static removeCourse(id, editAppState) {
        RequestTemplates.deleteData(this._apiBase + "/courses/" + id)
            .then(editAppState);
    }

    static addCourse(course, editAppState) {
        let courseDto = objectAdapter(course, 'label', 'title');
        RequestTemplates.postData(this._apiBase + "/courses/", courseDto)
            .then(resp=>{
                course.id = resp.value;
                editAppState(course)
            });
    }

    static getContent(course_id, contentType, editPageContent) {
        RequestTemplates.getData(this._apiBase + "/courses/" + course_id + "/" + contentType)
            .then(editPageContent);
    }

    static getStudents (course_id, editStudentList) {
        RequestTemplates.getData(this._apiBase + "/courses/" + course_id + "/students")
            .then(students=>objectAdapter(students, 'name', 'label'))
            .then(editStudentList);
    }

    static _getStudentBaseUrl(course_id, student_id) {
        return this._apiBase + "/courses/" + course_id + "/students/" + student_id;
    }

    static getMessages(course_id, student_id, amount, editMessageBox) {
        RequestTemplates.getData(this._getStudentBaseUrl(course_id, student_id) + "?amount=" + amount)
            .then(editMessageBox);
    }

    static searchMessages(course_id, student_id, amount, text, editMessageBox) {
        RequestTemplates.getData(this._getStudentBaseUrl(course_id, student_id)
            + "?amount=" + amount + "&text=" + text)
            .then(editMessageBox);
    }

    static getResume(student_id, editResumePage) {
        RequestTemplates.getData(this._apiBase + "/students/" + student_id + "/resume")
            .then(editResumePage);
    }
}