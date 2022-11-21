// GET comments
getComments(); // load the comments as soon as the page is opened.

function getComments()
{
    let xhr = new XMLHttpRequest();
    xhr.open('GET', ' https://us-central1-assignment5-c2ed0.cloudfunctions.net/getcomments\n');
// Track the state changes of the request.
    xhr.onreadystatechange = function () {
        let DONE = 4; // readyState 4 means the request is done.
        let OK = 200; // status 200 is a successful return.
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
                let sHTML = "";
                let data = JSON.parse(xhr.responseText);
                for(let i=0; i<data.length; i++)
                {
                    sHTML += "<p> Comment: " + data[i].comment+ "</p>";
                    comments.innerHTML = sHTML;
                }
            } else {
                console.log('Error: ' + xhr.status); // An error occurred during the request.
            }}};
// Send the request to https://us-central1-my-cool-web-app37271.cloudfunctions.net/getcomments
    xhr.send(null);
}
