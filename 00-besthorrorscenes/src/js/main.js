import Plyr from 'plyr';
import '../../styles/style.scss';
'use strict';

// const contentVideo = document.querySelector('div#rl-content-vdieo');


const contentArticle = document.querySelector("div#right-layout section");
const movies = [
    "The Omen (1976)",
    "Les Diaboliques (1955)",
    "The Shining (1980)",
    "Jaws (1975)",
    "Pet Sematary",
    "Psycho (1960)"
];
function createContent() {
    for (let i=55; i>45; --i) {
        // header
        const article = document.createElement('article');
        const header = document.createElement('header');
        let movieTitle = document.createElement('h2');
        movieTitle.textContent = i + ". " + ((movies[55-i] === undefined) ? "Geisel (2019)" : movies[55-i]);
        let movieDirector = document.createElement('div');
        movieDirector.textContent = 'Directed by Jione Eu';
        
        header.appendChild(movieTitle);
        header.appendChild(movieDirector);
        article.appendChild(header);
        
        // div rl-video 
        const videoContent = document.createElement('div');
        videoContent.id = 'rl-content-video';
        videoContent.className = "rl-video";
        const player = (document.querySelector('div#player')).cloneNode(true);
        videoContent.appendChild(player);
        article.appendChild(videoContent);

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