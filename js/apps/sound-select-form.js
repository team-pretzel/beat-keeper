import html from '../helper/html.js';
import userData from '../services/user-api.js';

function makeTemplate() {
    return html`
    <form id="sound-select-form">
    <h1 id = "header">Choose your sounds</h1>
        <fieldset id="sample1-fieldset">
            <label class="neon" for="sample1">Kick</label>
            <input type="checkbox" name="sample1" id="sample1">
        </fieldset>
        <fieldset id="sample2-fieldset">
            <label class="neon" for="sample2">Snare</label>
            <input type="checkbox" name="sample2" id="sample2">
        </fieldset>
        <fieldset id="sample3-fieldset">
            <label class="neon" for="sample3">Percussion</label>
            <input type="checkbox" name="sample3" id="sample3">
        </fieldset>
        <button type="submit" id="button-sound-select">Submit</button>
    </form>
    `;
}

export default class SoundSelectForm {
    constructor(form) {
        this.form = form;
    }
    render() {
        const dom = makeTemplate();
        const form = dom.getElementById('sound-select-form');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const elements = form.elements;
            const data = {
                sample1: elements.sample1.checked,
                sample2: elements.sample2.checked,
                sample3: elements.sample3.checked,
            };
            if(data.sample1 === false && data.sample2 === false && data.sample3 === false){
                alert ('Please select at least one');
            }
            else {
                userData.add(data);

                window.location = './song-result.html';
            }
        });
        return dom;
    }
}