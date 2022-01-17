const inputBtn = document.getElementById("btn");
const searchBtn = document.getElementById("xell");
const word = document.getElementById('word')
const phonetic = document.getElementById('phonetic')
const meaning = document.getElementById('meaning')
const example = document.getElementById('example')


searchBtn.addEventListener("click", searchSubmit);

function searchSubmit() {
    let btn = document.getElementById('btn').value.trim();
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${btn}`)
    .then(res => res.json())
    .then(data => {
       
        word.innerHTML = data[0].word
        phonetic.innerHTML = data[0].phonetic
        meaning.innerHTML = data[0].meanings[0].definitions[0].definition
        example.innerHTML = data[0].meanings[0].definitions[0].example
        
    })
}