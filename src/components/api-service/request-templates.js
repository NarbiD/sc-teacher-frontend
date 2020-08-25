async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return await response.json();
}

async function getData(url = '', params = {}) {
    const response = await fetch(url, { method: 'GET' });
    return await response.json();
}