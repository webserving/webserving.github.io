let CREATETABLEAPI;
if (localStorage.getItem("Native")) {
    CREATEDATABASELINK = "'Hello'";
} else {
    CREATEDATABASELINK = "Hello";
};
export { CREATEDATABASELINK };