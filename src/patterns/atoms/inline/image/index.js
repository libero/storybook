import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map';
import { ifDefined } from 'lit-html/directives/if-defined';
import { repeat } from 'lit-html/directives/repeat';

export default ({ image, classes = {}, sources = [] }) => html`<picture class=${classMap({ image: true, ...classes })}>
    ${repeat(sources, (source) => html`<source srcset=${source.srcset} sizes=${ifDefined(source.sizes)} type=${ifDefined(source.type)} media=${ifDefined(source.media)}>`)}
    <img src=${image.src} class=${classMap({ image__img: true, ...image.classes })} alt=${image.alt}>
</picture>`;
