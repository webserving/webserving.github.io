let UPDATEDATAAPI;
if (localStorage.getItem("Native")) {
    UPDATEDATAAPI = "'Hello'";
} else {
    UPDATEDATAAPI = "Hello";
};
export { UPDATEDATAAPI };