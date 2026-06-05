let MAINCONNECTIONAPI;
if (localStorage.getItem("Native")) {
    MAINCONNECTIONAPI = "'Hello'";
} else {
    MAINCONNECTIONAPI = "Hello";
};
export { MAINCONNECTIONAPI };