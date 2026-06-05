let GOOGLEDRIVEAPI;
if (localStorage.getItem("Native")) {
    GOOGLEDRIVEAPI = "'Hello'";
} else {
    GOOGLEDRIVEAPI = "Hello";
};
export { GOOGLEDRIVEAPI };