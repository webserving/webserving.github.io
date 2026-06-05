let INSERTDATAAPI;
if (localStorage.getItem("Native")) {
    INSERTDATAAPI = "'Hello'";
} else {
    INSERTDATAAPI = "Hello";
};
export { INSERTDATAAPI };