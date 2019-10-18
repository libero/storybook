import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map';
import { ifDefined } from 'lit-html/directives/if-defined';

const index = ({
  href, text, classes = {}, lang,
}) => html`<a href=${href} class=${classMap(classes)} lang=${ifDefined(lang)}>${text}</a>`;

const span = ({ text, classes = {}, lang }) => html`<span class=${classMap(classes)} lang=${ifDefined(lang)}>${text}</span>`;

export default (args) => html`${args.href ? index(args) : span(args)}`;
