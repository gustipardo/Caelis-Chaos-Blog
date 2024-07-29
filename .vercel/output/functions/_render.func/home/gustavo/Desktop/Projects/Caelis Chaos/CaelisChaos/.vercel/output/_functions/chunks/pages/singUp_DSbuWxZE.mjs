/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent } from '../astro_CSbH6D6X.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './404_8gciT1cH.mjs';

const $$Astro = createAstro();
const $$SingUp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SingUp;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sing Up" })}`;
}, "/home/gustavo/Desktop/Projects/Caelis Chaos/CaelisChaos/src/pages/singUp.astro", void 0);

const $$file = "/home/gustavo/Desktop/Projects/Caelis Chaos/CaelisChaos/src/pages/singUp.astro";
const $$url = "/singUp";

export { $$SingUp as default, $$file as file, $$url as url };
