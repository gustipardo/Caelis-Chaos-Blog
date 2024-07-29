/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, m as maybeRenderHead, f as renderSlot, g as renderComponent, h as renderHead } from '../astro_CSbH6D6X.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */
/* empty css                          */
/* empty css                          */
import { Auth } from '@auth/core';
import { parseString } from 'set-cookie-parser';
import GitHub from '@auth/core/providers/github';
import Twitch from '@auth/core/providers/twitch';
import Google from '@auth/core/providers/google';
/* empty css                          */
/* empty css                        */

const defineConfig = (config) => {
  config.prefix ??= "/api/auth";
  return config;
};

const authConfig = defineConfig({
  providers: [
    Twitch({
      clientId: "65s0wnsijirg84uladcea5h8g6hpe6",
      clientSecret: "fwnth0ihm0zl785s2tm3yc5ool9g7n"
    }),
    GitHub({
      clientId: "f1d192f646af75dd8f20",
      clientSecret: "c8a43731ddcfaa56b7f15a52ca2bb270fa6572ee"
    }),
    Google({
      clientId: "1054581382234-i1ses6e52kr7q099q74a07f1dohkucmk.apps.googleusercontent.com",
      clientSecret: "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"
    })
  ],
  callbacks: {
    session: ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.sub
      }
    })
  }
});

const actions = [
  "providers",
  "session",
  "csrf",
  "signin",
  "signout",
  "callback",
  "verify-request",
  "error"
];
function AstroAuthHandler(prefix, options = authConfig) {
  return async ({ cookies, request }) => {
    const url = new URL(request.url);
    const action = url.pathname.slice(prefix.length + 1).split("/")[0];
    if (!actions.includes(action) || !url.pathname.startsWith(prefix + "/"))
      return;
    const res = await Auth(request, options);
    if (["callback", "signin", "signout"].includes(action)) {
      res.headers.getSetCookie().forEach((cookie) => {
        const { name, value, ...options2 } = parseString(cookie);
        cookies.set(name, value, options2);
      });
      res.headers.delete("Set-Cookie");
    }
    return res;
  };
}
function AstroAuth(options = authConfig) {
  const { AUTH_SECRET, AUTH_TRUST_HOST, VERCEL, NODE_ENV } = Object.assign({"PUBLIC_BACKEND_URL": "http://localhost:1234", "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}, { AUTH_SECRET: "8ebf493aac43a90503c4638cc044dec9", _: process.env._, NODE: process.env.NODE, NODE_ENV: process.env.NODE_ENV });
  options.secret ??= AUTH_SECRET;
  options.trustHost ??= !!(AUTH_TRUST_HOST ?? VERCEL ?? NODE_ENV !== "production");
  const { prefix = "/api/auth", ...authOptions } = options;
  const handler = AstroAuthHandler(prefix, authOptions);
  return {
    async GET(context) {
      return await handler(context);
    },
    async POST(context) {
      return await handler(context);
    }
  };
}
async function getSession(req, options = authConfig) {
  options.secret ??= "8ebf493aac43a90503c4638cc044dec9";
  options.trustHost ??= true;
  const url = new URL(`${options.prefix}/session`, req.url);
  const response = await Auth(new Request(url, { headers: req.headers }), options);
  const { status = 200 } = response;
  const data = await response.json();
  console.log("aca", url, options, data);
  if (!data || !Object.keys(data).length)
    return null;
  if (status === 200)
    return data;
  throw new Error(data.message);
}

const $$Astro$6 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/home/gustavo/Desktop/Projects/Caelis Chaos/CaelisChaos/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$5 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<h1 class="header" data-astro-cid-3ef6ksr2> ${renderSlot($$result, $$slots["default"])} </h1> `;
}, "/home/gustavo/Desktop/Projects/Caelis Chaos/CaelisChaos/src/components/Header.astro", void 0);

const $$Astro$4 = createAstro();
const $$Swords = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Swords;
  return renderTemplate`<!--?xml version="1.0" encoding="utf-8"?-->${maybeRenderHead()}<svg width="60px" height="60px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path fill="var(--primary)" file-rule="nonzero" d="M7.05 13.406l3.534 3.536-1.413 1.414 1.415 1.415-1.414 1.414-2.475-2.475-2.829 2.829-1.414-1.414 2.829-2.83-2.475-2.474 1.414-1.414 1.414 1.413 1.413-1.414zM3 3l3.546.003 11.817 11.818 1.415-1.414 1.414 1.414-2.474 2.475 2.828 2.829-1.414 1.414-2.829-2.829-2.475 2.475-1.414-1.414 1.414-1.415L3.003 6.531 3 3zm14.457 0L21 3.003l.002 3.523-4.053 4.052-3.536-3.535L17.457 3z"></path> </g> </svg>`;
}, "/home/gustavo/Desktop/Projects/Caelis Chaos/CaelisChaos/src/icons/swords.astro", void 0);

const getImageUrl = async ({ id }) => {
  try {
    const result = await fetch(
      `${"http://localhost:1234"}/users/${id}`
    );
    const data = await result.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

const addUser = async ({ id, username, image_url, email }) => {
  console.log(id, username, image_url, email);
  try {
    const result = await fetch(`${"http://localhost:1234"}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id,
        username,
        image_url,
        email
      })
    });
    const data = await result.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

const $$Astro$3 = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Navbar;
  const session = await getSession(Astro2.request);
  console.log(session);
  const user = await getImageUrl({ id: session?.user?.id });
  if (Array.isArray(user) && user.length === 0) {
    console.log("no user");
    await addUser({ id: session?.user?.id, username: session?.user?.name, image_url: session?.user?.image, email: session?.user?.email });
  }
  console.log(user[0]);
  return renderTemplate`${maybeRenderHead()}<nav class="navbar" data-astro-cid-5blmo7yk> <div class="swords" data-astro-cid-5blmo7yk> ${renderComponent($$result, "Swords", $$Swords, { "data-astro-cid-5blmo7yk": true })} <a href="/" data-astro-cid-5blmo7yk> <h1 class="navbar_header" data-astro-cid-5blmo7yk>Caelis Chaos</h1> </a> </div> <div class="menu" data-astro-cid-5blmo7yk> ${renderComponent($$result, "MenuSidebar", null, { "session": user[0], "client:only": true, "client:component-hydration": "only", "data-astro-cid-5blmo7yk": true, "client:component-path": "@/components/MenuSidebar", "client:component-export": "default" })} </div> </nav> `;
}, "/home/gustavo/Desktop/Projects/Caelis Chaos/CaelisChaos/src/components/Navbar.astro", void 0);

const $$Astro$2 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-sz7xmlte> <div id="container" class="container" data-astro-cid-sz7xmlte> <h3 style="font-family: source_serif_pro_bold; font-size: 18px; height: 32px;" class="[grid-area:title]" data-astro-cid-sz7xmlte>More from Caelis Chaos:</h3> <ul class="urls [grid-area:left]" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a href="/updates" data-astro-cid-sz7xmlte>Blog</a></li> <li data-astro-cid-sz7xmlte><a href="/forum" data-astro-cid-sz7xmlte>Forum</a></li> <li data-astro-cid-sz7xmlte><a href="/trailer" data-astro-cid-sz7xmlte>Oficial Trailer</a></li> </ul> <ul class="moreInfo [grid-area:right]" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a href="/privacypolicy" data-astro-cid-sz7xmlte>Privacy Policy</a></li> <li data-astro-cid-sz7xmlte><a href="/termsofuse" data-astro-cid-sz7xmlte>Terms of Use</a></li> <li data-astro-cid-sz7xmlte><a href="/constact" data-astro-cid-sz7xmlte>Contact</a></li> </ul> <p class="copy [grid-area:copy]" data-astro-cid-sz7xmlte>Copyright © 2022-2023 Software - all rights reserved.</p> </div> </footer> `;
}, "/home/gustavo/Desktop/Projects/Caelis Chaos/CaelisChaos/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es" data-astro-cid-s6tr6vzr> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="@/styles/global.css"><!--     <link rel="icon" href="castleIcon.png" type="image/x-icon"> -->${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "data-astro-cid-s6tr6vzr": true })}${renderHead()}</head> <body data-astro-cid-s6tr6vzr> ${renderComponent($$result, "Navbar", $$Navbar, { "data-astro-cid-s6tr6vzr": true })} ${title && renderTemplate`${renderComponent($$result, "Header", $$Header, { "data-astro-cid-s6tr6vzr": true }, { "default": ($$result2) => renderTemplate`${title}` })}`} <article class="text-center article" data-astro-cid-s6tr6vzr> ${renderSlot($$result, $$slots["default"])} </article> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-s6tr6vzr": true })} </body></html>`;
}, "/home/gustavo/Desktop/Projects/Caelis Chaos/CaelisChaos/src/layout/Layout.astro", void 0);

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 Not Found", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="notFound" data-astro-cid-zetdm5md> <img src="../../hammering.gif" data-astro-cid-zetdm5md> </div> ` })} `;
}, "/home/gustavo/Desktop/Projects/Caelis Chaos/CaelisChaos/src/pages/404.astro", void 0);

const $$file = "/home/gustavo/Desktop/Projects/Caelis Chaos/CaelisChaos/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, AstroAuth as A, _404 as _, $$Footer as a, $$ViewTransitions as b, $$Navbar as c, getSession as g };
