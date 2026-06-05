let GOOGLEDRIVETHUMBNAILAPI;
if (localStorage.getItem("Native")) {
    GOOGLEDRIVETHUMBNAILAPI = "'Hello'";
} else {
    GOOGLEDRIVETHUMBNAILAPI = "Hello";
};
export { GOOGLEDRIVETHUMBNAILAPI };