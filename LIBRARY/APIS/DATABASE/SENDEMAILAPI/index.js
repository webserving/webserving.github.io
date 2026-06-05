let SENDEMAILAPI;
if (localStorage.getItem("Native")) {
    SENDEMAILAPI = "'Hello'";
} else {
    SENDEMAILAPI = "Hello";
};
export { SENDEMAILAPI };