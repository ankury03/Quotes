const quote = document.querySelector("#quote");
const name = document.querySelector("#name");

const api_url = "https://api.quotable.io/random";

async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json(); 
    quote.innerHTML = data.content;
    name.innerHTML = data.author;
}

function post(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "---- by " + name.innerHTML , "Post window")
}



