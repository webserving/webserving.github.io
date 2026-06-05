let PESAPALAPI;
if (localStorage.getItem("Native")) {
    PESAPALAPI = "'Hello'";
} else {
    PESAPALAPI = "Hello";
};
export { PESAPALAPI };