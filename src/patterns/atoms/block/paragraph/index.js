import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map";
import { ifDefined } from "lit-html/directives/if-defined";

export default ({ text, classes = {}, lang }) => html`<p class=${classMap({paragraph: true, ...classes})} lang=${ifDefined(lang)}>${text}</p>`;