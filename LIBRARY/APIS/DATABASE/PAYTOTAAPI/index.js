let PAYTOTAAPI;
if (localStorage.getItem("Native")) {
    PAYTOTAAPI = "'Hello'";
} else {
    PAYTOTAAPI = "Hello";
};
export { PAYTOTAAPI };