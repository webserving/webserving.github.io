let GETDATAAPI;
if (localStorage.getItem("Native")) {
    GETDATAAPI = "'Hello'";
} else {
    GETDATAAPI = "Hello";
};
export { GETDATAAPI };