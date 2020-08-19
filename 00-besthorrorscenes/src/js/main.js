import '../../styles/style.scss';
'use strict';

const contentArticle = document.querySelector("div#right-layout section");

function createContent() {
    for (let i=51; i>0; --i) {
        // header
        const article = document.createElement('article');
        const header = document.createElement('header');
        let movieTitle = document.createElement('h2');
        movieTitle.textContent = i + '. Geisel (????)';
        let movieDirector = document.createElement('div');
        movieDirector.textContent = 'Directed by Jione Eu';
        
        header.appendChild(movieTitle);
        header.appendChild(movieDirector);
        article.appendChild(header);
        
        // div rl-video 
        movieDirector = document.createElement('div');
        movieDirector.className ="rl-video";
        article.appendChild(movieDirector);

        // footer
        const footer = document.createElement('footer');
        footer.textContent = "Do you agree?";

        const ratePositiveBtn = document.createElement('button');
        const rateNegativeBtn = document.createElement('button');
        ratePositiveBtn.className = "rl-rating-up";
        rateNegativeBtn.className = "rl-rating-down";
        ratePositiveBtn.type = "button";
        rateNegativeBtn.type = "button";

        // positive and negative rating svg
        const svgs = document.querySelectorAll('svg');
        const positiveSvg = svgs[0].cloneNode(true);
        const negativeSvg = svgs[1].cloneNode(true);

        ratePositiveBtn.appendChild(positiveSvg);
        rateNegativeBtn.appendChild(negativeSvg);
        footer.appendChild(ratePositiveBtn);
        footer.appendChild(rateNegativeBtn);
        article.appendChild(footer);
        contentArticle.appendChild(article);
    }
}

document.onload = createContent();