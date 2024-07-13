/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderHead, g as renderComponent } from '../astro_CSbH6D6X.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as $$Footer } from './404_BCUAUsq9.mjs';
/* empty css                          */

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>About</title>${renderHead()}</head> <body> <h1></h1> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/gustavo/Desktop/Projects/Caelis Chaos/CaelisChaos/src/pages/about.astro", void 0);

const $$file = "/home/gustavo/Desktop/Projects/Caelis Chaos/CaelisChaos/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
