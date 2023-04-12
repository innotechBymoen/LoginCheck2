let token = Cookies.get(`token`);

if(token === undefined) {
    window[`location`] = `/index.html`
} else {
    let logout_container = document.querySelector(`#logout_container`);
    logout_container.insertAdjacentHTML(`beforeend`, `<button>Log Out</button>`)
}