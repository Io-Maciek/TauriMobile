const { invoke } = window.__TAURI__.tauri;

var inputImie;
var spanImie;

async function btnImieHandler(imie){
    spanImie.innerText = await invoke("greet", {name: inputImie.value});
}

window.addEventListener("DOMContentLoaded", () => {
    spanImie = document.getElementById("spanImie");
    inputImie = document.getElementById("inputImie");

    document.getElementById("btnMain")
        .addEventListener("click", btnImieHandler);
});