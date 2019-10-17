import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map';
import { ifDefined } from 'lit-html/directives/if-defined';
import link from '../../atoms/inline/link';

const h1 = ({ text, classes, lang }) => html`<h1 class=${classMap(classes)} lang=${ifDefined(lang)}>${text}</h1>`;

const h2 = ({ text, classes, lang }) => html`<h2 class=${classMap(classes)} lang=${ifDefined(lang)}>${text}</h2>`;

const h3 = ({ text, classes, lang }) => html`<h3 class=${classMap(classes)} lang=${ifDefined(lang)}>${text}</h3>`;

const h4 = ({ text, classes, lang }) => html`<h4 class=${classMap(classes)} lang=${ifDefined(lang)}>${text}</h4>`;

const h5 = ({ text, classes, lang }) => html`<h5 class=${classMap(classes)} lang=${ifDefined(lang)}>${text}</h5>`;

const h6 = ({ text, classes, lang }) => html`<h6 class=${classMap(classes)} lang=${ifDefined(lang)}>${text}</h6>`;

const other = ({
  level, text, classes, lang,
}) => html`<h6 class=${classMap(classes)} lang=${ifDefined(lang)} aria-level=${level}>${text}</h6>`;

export default (args) => {
  args.classes = { heading: true, ...args.classes };
  args.text = html`${args.href ? link({ classes: { heading__link: true }, href: args.href, text: args.text }) : args.text}`;

  // eslint-disable-next-line no-nested-ternary
  return html`${args.level === 1 ? h1(args) : args.level === 2 ? h2(args) : args.level === 3 ? h3(args) : args.level === 4 ? h4(args) : args.level === 5 ? h5(args) : args.level === 6 ? h6(args) : other(args)}`;
};
