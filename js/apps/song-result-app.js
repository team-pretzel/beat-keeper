import html from '../helper/html.js';
import Header from '../header.js';

var data = JSON.parse(localStorage.getItem('userSettings'));

function makeTemplate() {
    return html`
    <header></header>
    <div class="result-buttons">
    <button id="play">Play</button>
    <button type="button" onclick="javascript:history.back()">Back</button>
    </div>
    `;
}

export function playSample(audio, gif) {
    var x = document.createElement('AUDIO');
    x.setAttribute('src', audio);
    x.setAttribute('controls', 'controls');
    x.setAttribute('autoplay', 'autoplay');
    x.setAttribute('hidden', 'hidden');
    x.setAttribute('loop', 'loop');
    document.body.appendChild(x);
    var image = document.createElement('IMG');
    image.setAttribute('src', gif);
    image.classList.add('song-results-img');
    document.body.appendChild(image);
}

export default class SongResultApp {
    render() {
        const dom = makeTemplate();

        dom.querySelector('#play').addEventListener('click', function() {
            if(data.sample1 === true && data.sample2 === false && data.sample3 === false) {
            //sample1, just the kick
                playSample('assets/newrock-kick.mp3', 'https://media.giphy.com/media/4Lyd8tJk410iI/giphy.gif');
            }
            if(data.sample2 === true && data.sample1 === false && data.sample3 === false) {
            //sample2, just the snare
                playSample('assets/newrock-snare.mp3', 'https://media.giphy.com/media/26BkMkEayiz8Ebjby/giphy.gif');
            }
            if(data.sample3 === true && data.sample1 === false && data.sample2 === false) {
            //sample3, just the percussion
                playSample('assets/newrock-percussion.mp3', 'https://media.giphy.com/media/1iv69b8Yq4H8pr2Ux2/giphy.gif');
            }
            if(data.sample1 === true && data.sample3 === true && data.sample2 === false) {
            //sample1, the kick
                playSample('assets/newrock-kick.mp3', 'https://media.giphy.com/media/3oGRFHyKog2FrqoI2k/giphy.gif');
            //sample3, percussion
                playSample('assets/newrock-percussion.mp3', '');
            }
            if(data.sample1 === true && data.sample2 === true && data.sample3 === false) {
            //sample1, the kick
                playSample('assets/newrock-kick.mp3', 'https://media.giphy.com/media/BERl7tFjzsDrG/giphy.gif');
            //sample2, snare 
                playSample('assets/newrock-snare.mp3', '');
            }
            if(data.sample2 === true && data.sample3 === true && data.sample1 === false) {
            //sample2, snare
                playSample('assets/newrock-snare.mp3', 'https://media.giphy.com/media/3o6Mbba0Ok7SquCHAI/giphy.gif');
            //sample3, percussion
                playSample('assets/newrock-percussion.mp3', '');
            }
            if(data.sample1 && data.sample2 && data.sample3 === true) {
            //sample1, the kick
                playSample('assets/newrock-kick.mp3', 'https://media.giphy.com/media/GtFKXMBujHEFq/giphy.gif');
            //sample2, snare
                playSample('assets/newrock-snare.mp3', '');
            //sample 3, percussion
                playSample('assets/newrock-percussion.mp3', '');
            }
        });

        const headerSection = dom.querySelector('header');
        const header = new Header();
        headerSection.appendChild(header.render());

        return dom;
    }
}