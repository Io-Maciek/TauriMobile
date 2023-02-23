//import { invoke } from '/@tauri-apps/api'

//const { invoke } = window.__TAURI__.tauri;

const log = (mess) => invoke("log", {mess: mess});

var inputImie;
var spanImie;

/*async*/ function btnImieHandler(imie){
    //spanImie.innerText = await invoke("imie_change", {imie: inputImie.value});
    spanImie.innerText = "Witaj "+inputImie.value+"!";
}
console.log("ey");

window.addEventListener("DOMContentLoaded", () => {
    spanImie = document.getElementById("spanImie");
    inputImie = document.getElementById("inputImie");

    document.getElementById("btnMain")
        .addEventListener("click", btnImieHandler);
});