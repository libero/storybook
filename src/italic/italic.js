import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map";
import './italic.scss';

export default ({ text, classes = [] }) => html`<i class="italic ${classMap(classes)}">${text}</i>`;
