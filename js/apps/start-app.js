import html from '../helper/html.js';
import StartForm from '../apps/start-form.js';

function makeTemplate() {
    return html`
    <div id="form"></div>
    `;
}



export default class StartApp {
    render() {
        const dom = makeTemplate();

        const userForm = dom.getElementById('form');

        const form = new StartForm();

        userForm.appendChild(form.render());

        return dom;
    }
}