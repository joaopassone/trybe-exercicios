function backgroundColor() {
    document.body.style.backgroundColor = document.getElementById('background-color').value;
    let bgColor = document.body.style.backgroundColor;
    localStorage.setItem('bg-color', JSON.stringify(bgColor));
}

document.getElementById('background-btn').addEventListener('click', backgroundColor);

function textColor() {
    document.body.style.color = document.getElementById('text-color').value;
    let txtColor = document.body.style.color;
    localStorage.setItem('text-color', JSON.stringify(txtColor));
}

document.getElementById('text-btn').addEventListener('click', textColor);

function fontSize() {
    document.body.style.fontSize = document.getElementById('font-size').value;
    let fontSize = document.body.style.fontSize;
    localStorage.setItem('font-size', JSON.stringify(fontSize));
} 

document.getElementById('font-size-btn').addEventListener('click', fontSize);

function lineHeight() {
    document.body.style.lineHeight = document.getElementById('line-height').value;
    let lineHeight = document.body.style.lineHeight;
    localStorage.setItem('line-height', JSON.stringify(lineHeight));
}

document.getElementById('line-height-btn').addEventListener('click', lineHeight);

function fontFamily() {
    document.body.style.fontFamily = '"' + document.getElementById('font-family').value + '"';
    let fontFamily = document.body.style.fontFamily;
    localStorage.setItem('font-family', JSON.stringify(fontFamily));
}

document.getElementById('font-family-btn').addEventListener('click', fontFamily);

window.onload = function() {
    document.body.style.backgroundColor = JSON.parse(localStorage.getItem('bg-color'));
    document.body.style.color = JSON.parse(localStorage.getItem('text-color'));
    document.body.style.fontSize = JSON.parse(localStorage.getItem('font-size'));
    document.body.style.lineHeight = JSON.parse(localStorage.getItem('line-height'));
    document.body.style.fontFamily = JSON.parse(localStorage.getItem('font-family'));
}
