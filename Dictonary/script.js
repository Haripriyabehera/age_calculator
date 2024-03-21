const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", ()=> {
    let inpWord = document.getElementById("inp-word").value;
    fetch(`${url}${inpWord}`)
    .then((response) => response.json())
    .then((data)=> {
        console.log(data);
        result.innerHTML =`<div class="word">
        <h3>${inpWord}</h3>
        <button>
            <i class="fa-solid fa-volume-high"></i>
        </button>
    </div>
    <div class="details">
        <p>pos</p>
        <p>/Sample/</p>
    </div>
    <p class="word-meaning"> ${data[0].meanings[0].partsofSpeech} </p>
    <p class="word-example">${data[0].phonetic} </p>`
    });
});