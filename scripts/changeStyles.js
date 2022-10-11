const buttons = document.querySelectorAll('.btn');
const content = document.querySelector('.content');

const fontSizeUp = document.querySelector('.fontSizeUp');
const fontSizeDown = document.querySelector('.fontSizeDown');

const fontsizeSpan = document.querySelector('.fontsize span');

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {
        let command = e.target.getAttribute('data');

        if(command === "insertImage") {
            let url = prompt("Link: ", "http://");
            document.execCommand(command, false, url);
            console.log("Image")
        } else {
            document.execCommand(command, false, null);
        }
    })
}

document.querySelector('.clearContentBtn').addEventListener('click', () => {
    content.innerHTML = "";
})

const fontButtons = document.querySelectorAll('.fontBtn');

for(let i = 0; i < fontButtons.length; i++) {
    fontButtons[i].addEventListener('click' , (e) => {  
        selectButton();
        let fontAtr = e.target.getAttribute('font');
        e.target.classList.add('selectedBtn');
        changeFont(fontAtr);
    })
}

function selectButton() {
    for(let i = 0; i < fontButtons.length; i++) {
        fontButtons[i].classList.remove('selectedBtn')
    }
}

function changeFont(atr) {
    if(atr === "title1") {
        content.style = 'font-size: 100px';
    } else if(atr === "title2") {
        content.style = 'font-size: 80px';
    } else if(atr === "title3") {
        content.style = 'font-size: 60px';
    } else if(atr === "body") {
        content.style = 'font-family: Sans Serif';
    }
}