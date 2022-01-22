const getRequestTemplate = () => {
    const urlParams = new URLSearchParams(params);
    const request = new Request('http://localhost:8080/testing-web-app/rest/testGet?' + urlParams.toString());
    console.log(request);

    fetch(request)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}