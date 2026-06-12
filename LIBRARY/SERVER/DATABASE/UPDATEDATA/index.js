export const UPDATEDATA=(LINK,NAME,ID,INFO,CALLBACK)=>{
    CAPITALIZED(NAME,(NAMEDATA)=>{
        const DATA={
            "action":"update",
            "spreadsheetUrl":LINK,
            "sheetName":NAMEDATA,
            "id":ID,
            "Data":INFO
        };
        FETCH(UPDATEDATAAPI,DATA,(Data)=>{
            CALLBACK(Data);
        });
    });
}; 