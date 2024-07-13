/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_CSbH6D6X.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                          */
import { $ as $$Layout } from './404_BCUAUsq9.mjs';
import { c as comparePostsByDate, $ as $$Post } from './index_ByB-1Qtr.mjs';
/* empty css                            */

const $$Astro = createAstro();
const $$Updates = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Updates;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./posts/Thebeginning.mdx": () => import('./Thebeginning_Dghe6pfl.mjs').then(n => n.T)}), () => "../pages/posts/*.mdx");
  const sortedPosts = allPosts.sort(comparePostsByDate);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog", "data-astro-cid-czan4xuo": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul data-astro-cid-czan4xuo> ${sortedPosts.map((post) => renderTemplate`${renderComponent($$result2, "Post", $$Post, { "url": post.url, "title": post.frontmatter.title, "authors": post.frontmatter.author, "date": post.frontmatter.date, "description": post.frontmatter.description, "frontImage": post.frontmatter.frontImage, "data-astro-cid-czan4xuo": true })}`)} </ul> ` })} `;
}, "/home/gustavo/Desktop/Projects/Caelis Chaos/CaelisChaos/src/pages/updates.astro", void 0);

const $$file = "/home/gustavo/Desktop/Projects/Caelis Chaos/CaelisChaos/src/pages/updates.astro";
const $$url = "/updates";

export { $$Updates as default, $$file as file, $$url as url };
