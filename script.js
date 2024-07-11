import {apicall} from "./api.client.js";

function getvalue() {

    const value = document.getElementById("artistInput").value;
    console.log(value);
    LoadData(value);



}
const myButton = document.getElementById("getResultButton");
myButton.addEventListener("click", getvalue);

async function LoadData(value) {

    const URL = https://itunes.apple.com/search?term=jack+johnson&limit=25
    try{
        const response = await apicall(URL);
        const obj = await response.json();
        console.log(obj.results[1].previewUrl);
        console.log(typeof obj.results)
        console.log(obj.results.length);
        console.log(obj.results[0].artistId);
        LoadMusic(obj.results);

    } catch (err) {
        console.log("Invalid Error");

    }
}
function LoadMusic(artist){
    for(var i=0;i <artist.length;i++){
        loadAudios(artist[i])
    }


}




