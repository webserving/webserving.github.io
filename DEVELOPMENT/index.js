const LINK="https://eliteserving.github.io/LIBRARY/DEMO/Data.json";

const MOBILEVIEW=()=>{

    CLEAR("");

    VIEWS("",(HOLDER)=>{

        HEIGHT(HOLDER,"");

        HEAD(HOLDER,(DATA)=>{
    
            ICONS(DATA,BLACKMENUICON,WHITEMENUICON,()=>{
    
            });
    
            HEADER(DATA,"ShylanSiraj Fashion Hub",()=>{
    
            });
    
            ICONS(DATA,WHITESHOPPINGCART,WHITESHOPPINGCART,()=>{
    
            });
    
        });
    
    });
  
};

const DESKTOPVIEW=()=>{

    CLEAR("");

    HEADER("","NCOO",()=>{

    });
    
};

VIEW(()=>{MOBILEVIEW();},()=>{DESKTOPVIEW()});