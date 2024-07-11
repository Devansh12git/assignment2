export async function apicall(URL){
    try{
        const response = await fetch(URL);
        return response;

    }
    catch(err){
        throw err;
    }
}