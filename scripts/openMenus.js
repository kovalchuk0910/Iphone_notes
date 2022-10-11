const mainFooter = document.querySelector('.mainFooter');
const menuOpenFooter = document.querySelector('.menuOpenFooter');
const alignMenuOpen = document.querySelector('.alignMenuOpen');

const alignBtn = document.querySelector('.alignBtn');
const closeAlign = document.querySelector('.closeAlign');

const closeAlignMenu = document.querySelector('.closeAlignMenu');
const menuFonts = document.querySelector('.menuFonts');

let isMenuOpen = false;

function hideAndOpenAlign() {
    mainFooter.classList.add('hide');
    menuOpenFooter.classList.add('hide');
    alignMenuOpen.classList.add('hide');

    if(isMenuOpen === false) {
        mainFooter.classList.remove('hide');
    } else {
        mainFooter.classList.add('hide');
        menuOpenFooter.classList.remove('hide');
    }

}
hideAndOpenAlign();


alignBtn.addEventListener('click', () => {
    if(isMenuOpen === false) {
        isMenuOpen = true;
        hideAndOpenAlign();
    } 
})
closeAlign.addEventListener('click', () => {
    if(isMenuOpen = true) {
        isMenuOpen = false;
        hideAndOpenAlign();
    }
})

menuFonts.addEventListener('click', () => {
    if(isMenuOpen === true) {
        alignMenuOpen.classList.remove('hide');
        menuOpenFooter.classList.add('hide');
    }
})
closeAlignMenu.addEventListener('click', () => {
    alignMenuOpen.classList.add('hide');
    menuOpenFooter.classList.remove('hide');
})