import html from '../helper/html.js';
import SoundSelectForm from '../apps/sound-select-form.js';


function makeTemplate() {
    return html`
    <nav>
        <div>
            <a href="./beat-keeper/index.html">Home</a>
        </div>
        <div>
            <a href="./beat-keeper/about-us.html">About The Devs</a>
        </div>
    </nav>  
    <div id="form"></div>
    `;
}



export default class SoundSelectApp {
    render() {
        const dom = makeTemplate();

        const userForm = dom.getElementById('form');

        const form = new SoundSelectForm();

        userForm.appendChild(form.render());

        return dom;
    }
}