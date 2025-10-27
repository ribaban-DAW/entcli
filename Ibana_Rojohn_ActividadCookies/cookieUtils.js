function setCookie(name = "", value = "",  maxAgeDuration = 60) {
    console.log(`Set cookie '${name}' to '${value}' with a duration of ${maxAgeDuration}s`)
    document.cookie = `${name}=${value};max-age=${maxAgeDuration}`;
}

function getCookie(name = "") {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key.trim() === name.trim()) {
            console.log(`Found ${key.split()}`);
            return value;
        }
    }
    
    console.log(`Couldn't find ${name}`);
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
