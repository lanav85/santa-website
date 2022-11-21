// POST comments
function postComments() {

    let xhr = new XMLHttpRequest();
    xhr.open('POST', ' https://us-central1-assignment5-c2ed0.cloudfunctions.net/postComments\n');
    xhr.setRequestHeader("Content-type", "application/json");
// Track the state changes of the request.
    xhr.onreadystatechange = function () {
        let DONE = 4; // readyState 4 means the request is done.
        let OK = 200; // status 200 is a successful return.
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
                getComments(); // 'Call get comments to retrieve the latest'
            } else {
                console.log('Error: ' + xhr.status); // An error occurred durinng the request.
            }
        }
    };
    xhr.send(JSON.stringify(
        {"comment": document.getElementById('comment').value}
    ));

}

