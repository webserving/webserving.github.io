let CREATEDATABASEAPI;
if (localStorage.getItem("Native")) {
    CREATEDATABASEAPI = "'Hello'";
} else {
    CREATEDATABASEAPI = "Hello";
};
export { CREATEDATABASEAPI };