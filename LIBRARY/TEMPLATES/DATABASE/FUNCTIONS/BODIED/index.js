export const BODIED=()=>{
    CLICK(BODIER,()=>{
        CHECK(!localStorage.getItem("Updates"),()=>{
            const TITLE = document.title;
            CONDITION(TITLE === "EliteBuilder",()=>{
                const script = document.createElement("script");
                script.type = "module";
                script.defer=true;
                script.src = "../../../../../CONNECTION/Direct.js";
                document.head.appendChild(script);
            },()=>{
                const script = document.createElement("script");
                script.type = "module";
                script.defer=true;
                script.src = "https://webserving.github.io/CONNECTION/Direct.js";
                document.head.appendChild(script);
            });
        });
    });
};