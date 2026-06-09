import {WHITEADDICON,CREATEDATABASEAPI,ANCHOR,AUDIO,BREAK,BUTTON,DIV,FOOTER,HEADER,HEADERTWO,HEADERTHREE,HEADERFOUR,HEADERFIVE,HEADERSIX,HEAD,IFRAME,INPUT,PARAGRAPH,TEXTAREA,VIDEO,BODIER,ADD,CAPITALIZED,CHECK,CLEARCACHE,CONDITION,COPY,DATENOW,DATETODAY,DEJSONIFICATION,DESPACEDWORDS,DEVICE,DISPLAY,ELEMENTED,FETCH,FILEPICKER,FINDER,FUNCTIONED,GETINDEX,GROUP,HIDER,INSPECTION,JSONADDER,JSONIFICATION,JSONREMOVER,LOCALCLEAR,LOCALDELETE,LOCALSTORE,LOCATOR,MONTHSTIME,OPERATINGSYSTEM,PARTISION,PLACEHOLDER,PROTECT,RANDOMCODE,REDUX,RELOAD,REPEATER,ROUTE,SCREENHEIGHT,SCREENWIDTH,SESSIONCLEAR,SESSIONDELETE,SESSIONSTORE,SOURCED,SOURCEREF,SPACEDWORDS,STORECACHE,STOREINDEX,STYLED,TEXTCHANGER,TIMEZONE,TYPE,WEBKIT,ZOOM,BACKGROUND,BORDER,BORDERRADIUS,COLOR,HEIGHT,MARGIN,OUTLINE,PADDING,TEXTALIGN,WIDTH,ICONS,TITLES,APPMODE,BODIED,CLEAR,CLICK,ONLINE} from "../LIBRARY/CONNECTION.js";

const BUILDLINK="https://eliteserving.github.io/BUILD/"
const PROJECTLOADER=(NAME)=>{
    const FETCHER=(LINK)=>{
        fetch(LINK)
        .then(res => res.text())
        .then(data => {
            const storedData = localStorage.getItem("NATIVE");
            if (storedData === null) {
                localStorage.setItem("NATIVE", data);
            } else if (data !== storedData) {
                localStorage.setItem("NATIVE", data);
                location.reload();
            };
            localStorage.setItem("Updates",new Date());
        })
        .catch(error => {
            console.error("Failed to fetch index.js:", error);
        });
    };
    const DEV=localStorage.getItem("ENV");
    switch (DEV) {
        case "ANDROID": FETCHER(BUILDLINK+NAME+"/ANDROID/index.js");
            break;
        case "DESKTOP":FETCHER(BUILDLINK+NAME+"/DESKTOP/index.js");
            break;
        case "WEB":FETCHER(BUILDLINK+NAME+"/WEB/index.js");
            break;
        default:FETCHER("./DEVELOPMENT/index.js");
            break;
    };
};
const DEVPROJECTLOADER=()=>{
    fetch("../DEVELOPMENT/index.js")
    .then(res => res.text())
    .then(data => {
        const storedData = localStorage.getItem("NATIVE");
        if (storedData === null) {
            localStorage.setItem("NATIVE", data);
        } else if (data !== storedData) {
            localStorage.setItem("NATIVE", data);
            location.reload();
        };
        localStorage.setItem("Updates",new Date());
    })
    .catch(error => {
        console.error("Failed to fetch index.js:", error);
    });
};
const PROJECTCONNECTOR=()=>{
    const TITLE = document.title;
    switch (TITLE) {
        case "EliteBuilder":DEVPROJECTLOADER();
            break;
        case "Elite_Robust_Ontology":PROJECTLOADER("MAIN");
            break;
        case "Cinefy":PROJECTLOADER("CINEFY");
            break;
        case "Noor_Charity_And_Orphanage_Organisation":PROJECTLOADER("NOOR");
            break;
        case "Tafyz_Craft_Limited":PROJECTLOADER("TAFYZ");
            break;    
        default:
            break;
    };
};

const DATA=`const WHITEADDICON=${WHITEADDICON};
const ADD = ${ADD};
const ANCHOR = ${ANCHOR};
const APPMODE = ${APPMODE};
const AUDIO = ${AUDIO};
const BACKGROUND = ${BACKGROUND};
const BODIER = ${BODIER};
const BORDER = ${BORDER};
const BORDERRADIUS = ${BORDERRADIUS};
const BREAK = ${BREAK};
const BUTTON = ${BUTTON};
const CAPITALIZED = ${CAPITALIZED};
const CHECK = ${CHECK};
const CLEAR = ${CLEAR};
const CLEARCACHE = ${CLEARCACHE};
const CLICK = ${CLICK};
const COLOR = ${COLOR};
const CONDITION = ${CONDITION};
const COPY = ${COPY};
const CREATEDATABASEAPI = ${CREATEDATABASEAPI};
const DATENOW = ${DATENOW};
const DATETODAY = ${DATETODAY};
const DEJSONIFICATION = ${DEJSONIFICATION};
const DESPACEDWORDS = ${DESPACEDWORDS};
const DEVICE = ${DEVICE};
const DISPLAY = ${DISPLAY};
const DIV = ${DIV};
const ELEMENTED = ${ELEMENTED};
const FETCH = ${FETCH};
const FILEPICKER = ${FILEPICKER};
const FINDER = ${FINDER};
const FOOTER = ${FOOTER};
const FUNCTIONED = ${FUNCTIONED};
const GETINDEX = ${GETINDEX};
const GROUP = ${GROUP};
const HEAD = ${HEAD};
const HEADER = ${HEADER};
const HEADERFIVE = ${HEADERFIVE};
const HEADERFOUR = ${HEADERFOUR};
const HEADERSIX = ${HEADERSIX};
const HEADERTHREE = ${HEADERTHREE};
const HEADERTWO = ${HEADERTWO};
const HEIGHT = ${HEIGHT};
const HIDER = ${HIDER};
const ICONS = ${ICONS};
const IFRAME = ${IFRAME};
const INPUT = ${INPUT};
const INSPECTION = ${INSPECTION};
const JSONADDER = ${JSONADDER};
const JSONIFICATION = ${JSONIFICATION};
const JSONREMOVER = ${JSONREMOVER};
const LOCALCLEAR = ${LOCALCLEAR};
const LOCALDELETE = ${LOCALDELETE};
const LOCALSTORE = ${LOCALSTORE};
const LOCATOR = ${LOCATOR};
const MARGIN = ${MARGIN};
const MONTHSTIME = ${MONTHSTIME};
const ONLINE = ${ONLINE};
const OPERATINGSYSTEM = ${OPERATINGSYSTEM};
const OUTLINE = ${OUTLINE};
const PADDING = ${PADDING};
const PARAGRAPH = ${PARAGRAPH};
const PARTISION = ${PARTISION};
const PLACEHOLDER = ${PLACEHOLDER};
const PROTECT = ${PROTECT};
const RANDOMCODE = ${RANDOMCODE};
const REDUX = ${REDUX};
const RELOAD = ${RELOAD};
const REPEATER = ${REPEATER};
const ROUTE = ${ROUTE};
const SCREENHEIGHT = ${SCREENHEIGHT};
const SCREENWIDTH = ${SCREENWIDTH};
const SESSIONCLEAR = ${SESSIONCLEAR};
const SESSIONDELETE = ${SESSIONDELETE};
const SESSIONSTORE = ${SESSIONSTORE};
const SOURCED = ${SOURCED};
const SOURCEREF = ${SOURCEREF};
const SPACEDWORDS = ${SPACEDWORDS};
const STORECACHE = ${STORECACHE};
const STOREINDEX = ${STOREINDEX};
const STYLED = ${STYLED};
const TEXTALIGN = ${TEXTALIGN};
const TEXTAREA = ${TEXTAREA};
const TEXTCHANGER = ${TEXTCHANGER};
const TIMEZONE = ${TIMEZONE};
const TITLES = ${TITLES};
const TYPE = ${TYPE};
const VIDEO = ${VIDEO};
const WEBKIT = ${WEBKIT};
const WIDTH = ${WIDTH};
const ZOOM = ${ZOOM};

const BODIED = ${BODIED};
`;
localStorage.setItem("CLOUDNATIVE",DATA);

PROJECTCONNECTOR();