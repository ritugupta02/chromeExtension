
// async function getlink() {
//     const res = await fetch('https://meme-api.herokuapp.com/gimme')
//     const data = await res.json()
//     return data;
// }

const para = document.querySelector('p');
fetch('https://api.quotable.io/random')
    .then(res => res.json())
    .then(data => para.innerHTML = data.content)