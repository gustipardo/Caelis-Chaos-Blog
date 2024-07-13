import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, h as renderHead, f as renderSlot } from './astro_CSbH6D6X.mjs';
import 'kleur/colors';
import 'html-escaper';
import { b as $$ViewTransitions, c as $$Navbar, a as $$Footer } from './pages/404_BCUAUsq9.mjs';
/* empty css                         */
import { c as comparePostsByDate } from './pages/index_ByB-1Qtr.mjs';
/* empty css                                */

const $$Astro = createAstro();
const $$PostLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostLayout;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/posts/Thebeginning.mdx": () => import('./pages/Thebeginning_Dghe6pfl.mjs').then(n => n.T)}), () => "../pages/posts/*.mdx");
  const sortedPosts = allPosts.sort(comparePostsByDate);
  console.log(sortedPosts);
  return renderTemplate`<html lang="es"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="@/styles/global.css"><link rel="icon" href="bigbird.jpg" type="image/x-icon">${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> ${renderComponent($$result, "Navbar", $$Navbar, {})} <article class="article"> ${renderSlot($$result, $$slots["default"])} </article> <div class="buttons-container"> ${renderComponent($$result, "ButtonOutline", null, { "sortedPosts": sortedPosts, "isNext": false, "client:only": true, "client:component-hydration": "only", "client:component-path": "@/components/ButtonOutline", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`Previous Post` })} ${renderComponent($$result, "ButtonOutline", null, { "sortedPosts": sortedPosts, "client:only": true, "client:component-hydration": "only", "client:component-path": "@/components/ButtonOutline", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`Next Post` })} </div> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/gustavo/Desktop/Projects/Caelis Chaos/CaelisChaos/src/layout/PostLayout.astro", void 0);

export { $$PostLayout as default };
