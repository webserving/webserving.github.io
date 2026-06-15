let CREATETABLEAPI;
if (localStorage.getItem("Native")) {
    CREATEDATABASELINK = "'https://script.google.com/macros/s/AKfycbzS-M9Q2tPzFWyMTc3vmvKwtXG1YCRuQbplcLZxr5XKYmSoKOjFztrHujqGD--VKwGYkQ/exec'";
} else {
    CREATEDATABASELINK = "https://script.google.com/macros/s/AKfycbzS-M9Q2tPzFWyMTc3vmvKwtXG1YCRuQbplcLZxr5XKYmSoKOjFztrHujqGD--VKwGYkQ/exec";
};
export { CREATEDATABASELINK };