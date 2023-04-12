function login_success(response) {
    Cookies.set(`token`, response[`data`][`token`]);
    window[`location`] = `/pages/logout.html`;
}

function login_failure(error) {
    let status_container = document.querySelector(`#status_container`);
    status_container.insertAdjacentHTML(`beforeend`, `<p>Sorry, that was incorrect</p>`)
}

function login_click(details) {
    let email_input = document.querySelector(`#email_input`);
    let email_value = email_input[`value`];
    let password_input = document.querySelector(`#password_input`);
    let password_value = password_input[`value`];

    axios.request({
        url: `https://reqres.in/api/login`,
        method: `POST`,
        data: {
            email: email_value,
            password: password_value
        }
    }).then(login_success).catch(login_failure);
}

let login_button = document.querySelector(`#login_button`);
login_button.addEventListener(`click`, login_click);