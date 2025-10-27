function setCookie(name = "", value = "",  maxAgeDuration = 60) {
    document.cookie = `${name}=${value};max-age=${maxAgeDuration}`;
}

function getCookie(name = "") {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
        const [name, value] = cookie.split("=");
        if (name.trim() === name.trim()) {
            return value;
        }
    }
    
    return undefined;
}

function getCookies() {
    return document.cookie.split(";");
}

function deleteCookie(name = "") {
    const cookies = getCookies();
    for (const cookie of cookies) {
        const [name, value] = cookie.split("=");
        if (name) {
            console.log(`Clearing cookie ${name.trim()}`);
            setCookie(name.trim(), value.trim(), 0);
        }
    }
}
