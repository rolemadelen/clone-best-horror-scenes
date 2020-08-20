import '../../styles/style.scss';
'use strict';

const geiselVideoSrc = "https://www.youtube.com/embed/gWRWHRKjmlc";
const contentArticle = document.querySelector("div#right-layout section");
const movies = [
    {title: "The Omen (1976)", director: 'Richard Donner', src: 'https://www.youtube.com/embed/m8GFEfNYS_E'},
    {title: "Les Diaboliques (1955)", director: 'Henri-Georges Clouzot', src: 'https://www.youtube.com/embed/m8GFEfNYS_E'},
    {title: "The Shining (1980)", director: 'Stanley Kubrick', src: 'https://www.youtube.com/embed/Sl0-YCsMtdA'},
    {title: "Jaws (1975)", director: 'Steven Spielberg', src: 'https://www.youtube.com/embed/d5F0BBoKW9Q'},
    {title: "Pet Sematary", director: 'Mary Lambert', src: 'https://www.youtube.com/embed/5aZyBV_5A_k'},
    {title: "Psycho (1960)", director: 'Alfred Hitchcock', src: 'https://www.youtube.com/embed/k8HUehU8B_s'}
];
function createContent() {
    for (let i=55; i>45; --i) {
        // header
        const article = document.createElement('article');
        const header = document.createElement('header');
        let movieTitle = document.createElement('h2');
        movieTitle.textContent = i + ". " + ((movies[55-i] === undefined) ? "Geisel (2019)" : movies[55-i].title);
        let movieDirector = document.createElement('div');
        movieDirector.textContent = 'Directed by ' + ((movies[55-i] === undefined) ? "UCSD" : movies[55-i].director);
        
        header.appendChild(movieTitle);
        header.appendChild(movieDirector);
        article.appendChild(header);
        
        // div rl-video 
        const videoContent = document.createElement('div');
        videoContent.id = 'rl-content-video';
        videoContent.className = "rl-video";
        const player = (document.querySelector('div#player')).cloneNode(true);
        player.querySelector('iframe').src = (movies[55-i]) ? movies[55-i].src : geiselVideoSrc;

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