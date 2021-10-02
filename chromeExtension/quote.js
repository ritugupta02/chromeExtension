
const para = document.querySelector('p');
fetch('https://api.quotable.io/random')
    .then(res => res.json())
    .then(data => para.innerHTML = data.content)
