/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, o as renderTransition, f as renderSlot, g as renderComponent } from '../astro_CSbH6D6X.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                          */
import { $ as $$Layout } from './404_BCUAUsq9.mjs';
import { jsx } from 'react/jsx-runtime';
import 'react';
import { Space, Dropdown } from 'antd';
/* empty css                          */
import 'clsx';
/* empty css                          */

const $$Astro$3 = createAstro();
const $$Post = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Post;
  const { title, url, authors, date, description, frontImage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a id="post"${addAttribute(url, "href")} data-astro-cid-huxyrzvi${addAttribute(renderTransition($$result, "suzhcwza", "", url), "data-astro-transition-scope")}> <imagePost id="imagePost" class="[grid-area:imagePost]" data-astro-cid-huxyrzvi> <img class="imagePost-image"${addAttribute(`../../${frontImage}`, "src")}${addAttribute(title, "alt")} data-astro-cid-huxyrzvi> </imagePost> <headPost id="headPost" class="[grid-area:headPost]" data-astro-cid-huxyrzvi> <h1 style="font-size: 16px;" class="text-left title" data-astro-cid-huxyrzvi>${title}</h1> <p class="text-left posted" data-astro-cid-huxyrzvi>Posted by ${authors} on ${date}</p> </headPost> <descriptionPost id="descriptionPost" class="[grid-area:descriptionPost]" data-astro-cid-huxyrzvi> <p class="text-left truncated-text" data-astro-cid-huxyrzvi>${description}</p> </descriptionPost> </a> `;
}, "/home/gustavo/Desktop/Projects/Caelis Chaos/CaelisChaos/src/components/Post.astro", "self");

function comparePostsByDate(postA, postB) {
  const dateStringA = postA.frontmatter.date;
  const dateStringB = postB.frontmatter.date;
  const dateNumberA = parseInt(dateStringA.split("/").reverse().join(""));
  const dateNumberB = parseInt(dateStringB.split("/").reverse().join(""));
  return dateNumberB - dateNumberA;
}

const handleButtonClick = (e) => {
  const item = items && items[0];
  if (item) {
    const link = document.createElement("a");
    link.href = `/downloads/${item.label}`;
    link.setAttribute("download", item.label);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    console.log("No downloads");
  }
};
const handleMenuClick = (e) => {
  const item = items.find((item2) => item2.key === e.key);
  if (item) {
    const link = document.createElement("a");
    link.href = `/downloads/${item.label}`;
    link.setAttribute("download", item.label);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
const items = [
  {
    label: "Caelis_Chaos_0.3.0.rar",
    key: "0"
  },
  {
    label: "Caelis Chaos 0.2.4.exe",
    key: "1"
  }
];
const menuProps = {
  items,
  onClick: handleMenuClick
};
const DropdownButton = () => {
  return /* @__PURE__ */ jsx(Space, { wrap: true, children: /* @__PURE__ */ jsx(Dropdown.Button, { menu: menuProps, onClick: handleButtonClick, className: "dropdown", children: items[0]?.label }) });
};

const $$Astro$2 = createAstro();
const $$CastleBarracksTowers = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CastleBarracksTowers;
  return renderTemplate`${maybeRenderHead()}<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 608" width="720" height="608"> <title>image</title> <defs> <image width="720" height="608" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAngAAAJHCAMAAAA0ZdtwAAAAAXNSR0IB2cksfwAAAeBQTFRFAAAAAAAAdD85PygyqqqqWmmI+vr6i5u0OkRmGBQlAAD//udhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlAAAgAAAzAAAAAABgAABfAABAAAAALBkWOiAcAAB/AACvAABjAAAdAACfSSgjAADvAADfQiUhVy8qHRDOFgzaSCeDAAC/LBgVAABVAAAAJlxCAAAAJhUTZjcyKxi1DgjmAACZVzArZTdSAACPAAAfAAAACQUFDggHHRAOZjhSMxw4DwgHEAkJSCgjCgYGAAAAJBQSSCcjBwQEAAA/AAAUAADPAAApODAhk3wo5MYb/9U4AAAzAAAAAAAXGh8kGTw+CAUHCAVWCAXlCAVVWTM1Uy4pYjExKBkfRiszbTw4UjA0JxkfNR8hUjE0QikzQiozYDY2cT44XDU1Pi48PTJFTC0zYzc2NR4hPDZMTC40Zzk3ajo3Zjk3UzE1XTQ2TC00RSszXTU2Yzg3ajo4WTQ1SSw0SS0zTy8zOUNkOEBiTy80NT1dJitENT5eISQ6HyA0HR0wHh0wKzFMKC5IJyxGRiozKS5IcD44SSwzTC4zWTQ2UC81Yzg2azo4VjI1Mik7ajs4XDQ2RSYiXzQxNyMrKyQ0ISY8GRkpFRIgGRkqAAAAppwBYwAAAKB0Uk5TAP//////////////QL9PMGBfECBv/1Cf////f8/////Pj//////f////////vz//3+/////v/////x/P//////9v/69v/////8//v/////+fgK///////////////////////////////////////////////////////////////////////////////////////////+//////////ULQRjh8AACFDSURBVHic7Z2LnxxF1YbpXcCQ3cAmS9wlm11gYSWaSNYYL4mIGjFq/L6PiKACJqvoIoIkrqJ4QRFRiTe8oRC88K9+XVNTU9Xd1d3V1zpV73l+P2Cmu6fmvKceemZ6e3puuGE0kpTxno3JA9t/2OBEAO1/ksylQEYnAWz/YYMTAbL/Yic/NwV0h+8V2P7DBicCaP9l6Pl5/W+Y6CSA7T9scCKA9l/Enp8gg8tbENFJANt/2OBEAO1/NjZU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"></image> </defs> <style>
	</style> <use id="Background" href="#img1" x="0" y="0"></use> </svg>`;
}, "/home/gustavo/Desktop/Projects/Caelis Chaos/CaelisChaos/src/icons/castleBarracksTowers.astro", void 0);

const $$Astro$1 = createAstro();
const $$Title = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Title;
  const { HaveBorder = true } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h2${addAttribute({ borderBottom: HaveBorder ? "2px solid var(--gray)" : "none" }, "style")} class="title" data-astro-cid-zfufvvig> ${renderSlot($$result, $$slots["default"])} </h2> `;
}, "/home/gustavo/Desktop/Projects/Caelis Chaos/CaelisChaos/src/components/Title.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./posts/Thebeginning.mdx": () => import('./Thebeginning_Dghe6pfl.mjs').then(n => n.T)}), () => "../pages/posts/*.mdx");
  const sortedPosts = allPosts.sort(comparePostsByDate);
  const firstThreePosts = sortedPosts.slice(0, 3);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Caelis Chaos", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p class="text" data-astro-cid-j7pv25f6>Real-time strategy game for 4 players. A free-for-all where the game is influenced by upgrades and abilities while units act on their own.</p> <div class="castle" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "CastleBarracksTowers", $$CastleBarracksTowers, { "data-astro-cid-j7pv25f6": true })} <img src="/Sprites/Knight.webp" class="sprite knight" data-astro-cid-j7pv25f6> <img src="/Sprites/Bigbird.webp" class="sprite bigbird" data-astro-cid-j7pv25f6> <img src="/Sprites/archer.webp" class="sprite archer" data-astro-cid-j7pv25f6> <img src="/Sprites/footman.webp" class="sprite2 footman" data-astro-cid-j7pv25f6> <img src="/Sprites/Mage.webp" class="sprite2 mage" data-astro-cid-j7pv25f6> <img src="/Sprites/cannon.webp" class="sprite2 cannon" data-astro-cid-j7pv25f6> </div> ${renderComponent($$result2, "DropdownButton", DropdownButton, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/DropdownButton.tsx", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Title", $$Title, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`Oficial Trailer` })} <div class="trailer" data-astro-cid-j7pv25f6> <iframe width="540" height="292" src="https://www.youtube.com/embed/3wMDPq6bHUw" data-astro-cid-j7pv25f6></iframe> </div> ${renderComponent($$result2, "Title", $$Title, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`Recent Posts` })} <ul class="list" data-astro-cid-j7pv25f6> ${firstThreePosts.map((post) => renderTemplate`${renderComponent($$result2, "Post", $$Post, { "url": post.url, "title": post.frontmatter.title, "authors": post.frontmatter.author, "date": post.frontmatter.date, "description": post.frontmatter.description, "frontImage": post.frontmatter.frontImage, "data-astro-cid-j7pv25f6": true })}`)} </ul> ` })} `;
}, "/home/gustavo/Desktop/Projects/Caelis Chaos/CaelisChaos/src/pages/index.astro", void 0);

const $$file = "/home/gustavo/Desktop/Projects/Caelis Chaos/CaelisChaos/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Post as $, comparePostsByDate as c, index as i };
