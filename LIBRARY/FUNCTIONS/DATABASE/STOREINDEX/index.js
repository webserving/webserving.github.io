export const STOREINDEX = (DATABASE,STORE,DATA,CALLBACK) => {
    try {
        const Request =indexedDB.open(DATABASE, 1);
        Request.onupgradeneeded = (event) => {
            const DB =event.target.result;
            if (
                !DB.objectStoreNames.contains(STORE)
            ) {
                DB.createObjectStore(STORE, {
                    keyPath: "id",
                    autoIncrement: true
                });
            };
        };
        Request.onsuccess = () => {
            const DB =Request.result;
            DB.onversionchange = () => {
                DB.close();
                CALLBACK("Database version changed, connection closed");
            };
            const Transaction =DB.transaction(STORE, "readwrite");
            const ObjectStore =Transaction.objectStore(STORE);
            let RequestStore;
            if (DATA.id !== undefined) {
                RequestStore =ObjectStore.put(DATA);
            }
            else {
                RequestStore =ObjectStore.add(DATA);
            }
            RequestStore.onsuccess = () => {
                CALLBACK(DATA);
                DB.close();
            };
            RequestStore.onerror = () => {
                CALLBACK(RequestStore.error.message);
                DB.close();
            };
            Transaction.onerror = () => {
                CALLBACK(Transaction.error.message);
                DB.close();
            };
        };
        Request.onerror = () => {
            CALLBACK(Request.error.message);
        };
        Request.onblocked = () => {
            CALLBACK("Database upgrade blocked by another open tab");
        };
    } catch (error) {
        CALLBACK(error.message);
    };
};