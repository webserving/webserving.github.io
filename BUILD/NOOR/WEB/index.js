const LINK="https://eliteserving.github.io/LIBRARY/DEMO/Data.json";

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

        FETCH(LINK,"",(Data)=>{

            CLEAR(DATA);

            REDUX(Data,(Info)=>{

                DIV(DATA,(DATATED)=>{

                    OVERFLOW(DATATED,"hidden");
                    FLEXSHRINK(DATATED);
                    MARGIN(DATATED,"5%");
                    WIDTH(DATATED,"80px");
                    HEIGHT(DATATED,"80%");
                    BORDERRADIUS(DATATED,"50px");
                    BACKGROUND(DATATED,"blue");
                    BORDER(DATATED,"white");

                });

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