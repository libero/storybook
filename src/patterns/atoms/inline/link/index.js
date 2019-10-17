import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map";
import { ifDefined } from "lit-html/directives/if-defined"

export default args => html`${args.href ? index(args) : span(args)}`;

const index = ({ href, text, classes = {}, lang }) => html`<a href=${href} class=${classMap(classes)} lang=${ifDefined(lang)}>${text}</a>`;

const span = ({ text, classes = {}, lang }) => html`<span class=${classMap(classes)} lang=${ifDefined(lang)}>${text}</span>`;
