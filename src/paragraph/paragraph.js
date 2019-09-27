import {classMap} from "lit-html/directives/class-map";
import {html} from "lit-html";
import './paragraph.scss';

export default ({ text, classes = [] }) => html`<p class="paragraph ${classMap(classes)}">${text}</p>`;
