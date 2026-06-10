const SMALLDATA=[
    {
        "Name":"FoodPAck"
    },
    {
        "Name":"FoodPAck"
    },
    {
        "Name":"FoodPAck"
    },
    {
        "Name":"FoodPAck"
    },
]

const MOBILEVIEW=()=>{

    CLEAR("");

    HEAD("",(DATA)=>{

        ICONS(DATA,BLACKMENUICON,WHITEMENUICON,()=>{

        });

        HEADER(DATA,"NCOO",()=>{

        });

        ICONS(DATA,BLACKUSERICON,WHITEUSERICON,()=>{

        });

        ICONS(DATA,WHITESHOPPINGCART,WHITESHOPPINGCART,()=>{

        });

    });

    INLINEVIEW("",(DATA)=>{

        BACKGROUND(DATA,"#cdcdcd50");

        DIV(DATA,(DATATED)=>{

            WIDTH(DATATED,"80px");
            HEIGHT(DATATED,"80%");
            BORDERRADIUS(DATATED,"50px");
            BACKGROUND(DATATED,"blue");
            BORDER(DATATED,"white");

        });

        DIV(DATA,(DATATED)=>{

            WIDTH(DATATED,"80px");
            HEIGHT(DATATED,"80%");
            BORDERRADIUS(DATATED,"50px");
            BACKGROUND(DATATED,"blue");
            
        });

         DIV(DATA,(DATATED)=>{

            WIDTH(DATATED,"80px");
            HEIGHT(DATATED,"80%");
            BORDERRADIUS(DATATED,"50px");
            BACKGROUND(DATATED,"blue");
            
        });

    });

  
};

const DESKTOPVIEW=()=>{

    CLEAR("");

    HEADER("","NCOO",()=>{

    });
    
};

VIEW(()=>{MOBILEVIEW();},()=>{DESKTOPVIEW()});