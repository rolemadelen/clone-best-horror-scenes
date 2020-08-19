import '../../styles/style.scss';
'use strict';

let contentArticle = document.querySelector("div#right-layout section");

function createContent() {
    for (let i=51; i>0; --i) {
        // header
        let newArticle = document.createElement('article');
        let newHeader = document.createElement('header');
        let newH2 = document.createElement('h2');
        newH2.textContent = i + '. Geisel (????)';
        let newDiv = document.createElement('div');
        newDiv.textContent = 'Directed by Jione Eu';
        
        newHeader.appendChild(newH2);
        newHeader.appendChild(newDiv);
        newArticle.appendChild(newHeader);
        
        // div rl-video 
        newDiv = document.createElement('div');
        newDiv.className ="rl-video";
        newArticle.appendChild(newDiv);

        // footer
        // newFooter = document.createElement('footer');
        // newButton = document.createElement('button');
        // newButton.className = "rl-raiting-up";
        // newButton.typeName = "button"; // maybe?
        // newSvg = document.createElement('svg');

        contentArticle.appendChild(newArticle);
    }
}

document.onload = createContent();