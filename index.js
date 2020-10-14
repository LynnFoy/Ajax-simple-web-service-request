const quote = document.getElementById('Edit');
const author = document.getElementById('Author');
const authorPic = document.querySelector('Img');
const run = document.getElementById('Try');

function getQuote(){
    fetch('https://thatsthespir.it/api')
    .then(res => res.json())
    .then((data)=>{
        printQuote(data)
    })
}

function printQuote(data){
    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
    authorPic.src = data.photo;
}

getQuote()

Try.addEventListener('click', getQuote)
