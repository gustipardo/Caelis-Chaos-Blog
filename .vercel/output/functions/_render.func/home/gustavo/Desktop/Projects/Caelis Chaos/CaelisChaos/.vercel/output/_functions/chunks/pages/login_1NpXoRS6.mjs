/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_CSbH6D6X.mjs';
import 'kleur/colors';
import 'html-escaper';
import { g as getSession, $ as $$Layout } from './404_BCUAUsq9.mjs';
/* empty css                          */

const $$Astro = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  const session = await getSession(Astro2.request);
  console.log(session);
  console.log(session?.user?.id);
  const addNewUser = async (user) => {
    try {
      const res = await fetch(`${"https://caelischaosforumapi.onrender.com"}/users`, {
        method: "POST",
        body: JSON.stringify({
          id: user.id,
          username: user.name,
          email: user.email,
          image_url: user.image
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
    } catch (error) {
      console.error("Error creating new user:", error);
    }
  };
  addNewUser(session?.user);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Log In" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div>Hola esta es la pagina para inciar sesion</div> ${session ? renderTemplate`<div> <p>Hola, ${session.user?.name}</p> <button id="logout">Logout</button> </div>` : renderTemplate`<button id="login-google">Login Google</button>`}` })} `;
}, "/home/gustavo/Desktop/Projects/Caelis Chaos/CaelisChaos/src/pages/login.astro", void 0);
const $$file = "/home/gustavo/Desktop/Projects/Caelis Chaos/CaelisChaos/src/pages/login.astro";
const $$url = "/login";

export { $$Login as default, $$file as file, $$url as url };
