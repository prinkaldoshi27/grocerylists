const apiRequests = async (API_URL = '', optionsObj = null, errMsg = null) => {
    try {
    
        const res =await fetch(API_URL, optionsObj);
        if (!res.ok) throw Error('Try Reloading the application');
    } catch(err) {
        errMsg = err.message;
    } finally {
        return errMsg
    }
}

export default apiRequests;