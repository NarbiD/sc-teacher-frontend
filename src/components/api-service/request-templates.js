export default class RequestTemplates {
    static async postData(url = '', data = {}) {
    const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
            });
          return await response.json();
    }

    static async putData(url = '', data = {}) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        return await response.json();
    }

    static async getData(url = '', params = {}) {
        const response = await fetch(url, { method: 'GET' });
        return await response.json();
    }

    static async deleteData(url='') {
        const response = await fetch(url, { method: 'DELETE' });
        return await response.json();
    }

}