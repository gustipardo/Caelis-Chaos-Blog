/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, g as renderComponent } from '../astro_CSbH6D6X.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                          */
import { g as getSession, $ as $$Layout } from './404_BCUAUsq9.mjs';
import 'clsx';
/* empty css                          */
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { Button } from 'antd';

const $$Astro$2 = createAstro();
const $$Comments = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Comments;
  return renderTemplate`<!--?xml version="1.0" standalone="no"?-->${maybeRenderHead()}<svg t="1569682881658" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8185" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30"><defs><style type="text/css"></style></defs><path d="M573 421c-23.1 0-41 17.9-41 40s17.9 40 41 40c21.1 0 39-17.9 39-40s-17.9-40-39-40zM293 421c-23.1 0-41 17.9-41 40s17.9 40 41 40c21.1 0 39-17.9 39-40s-17.9-40-39-40z" p-id="8186"></path><path d="M894 345c-48.1-66-115.3-110.1-189-130v0.1c-17.1-19-36.4-36.5-58-52.1-163.7-119-393.5-82.7-513 81-96.3 133-92.2 311.9 6 439l0.8 132.6c0 3.2 0.5 6.4 1.5 9.4 5.3 16.9 23.3 26.2 40.1 20.9L309 806c33.5 11.9 68.1 18.7 102.5 20.6l-0.5 0.4c89.1 64.9 205.9 84.4 313 49l127.1 41.4c3.2 1 6.5 1.6 9.9 1.6 17.7 0 32-14.3 32-32V753c88.1-119.6 90.4-284.9 1-408zM323 735l-12-5-99 31-1-104-8-9c-84.6-103.2-90.2-251.9-11-361 96.4-132.2 281.2-161.4 413-66 132.2 96.1 161.5 280.6 66 412-80.1 109.9-223.5 150.5-348 102z m505-17l-8 10 1 104-98-33-12 5c-56 20.8-115.7 22.5-171 7l-0.2-0.1C613.7 788.2 680.7 742.2 729 676c76.4-105.3 88.8-237.6 44.4-350.4l0.6 0.4c23 16.5 44.1 37.1 62 62 72.6 99.6 68.5 235.2-8 330z" p-id="8187"></path><path d="M433 421c-23.1 0-41 17.9-41 40s17.9 40 41 40c21.1 0 39-17.9 39-40s-17.9-40-39-40z" p-id="8188"></path></svg>`;
}, "/home/gustavo/Desktop/Projects/Caelis Chaos/CaelisChaos/src/icons/Comments.astro", void 0);

const getTimeElapsed = async (creationTime) => {
  const creationTimeDate = new Date(creationTime);
  const now = new Date();

  const subtractionInMs = now - creationTimeDate;

  const minutes = Math.round(subtractionInMs / (1000 * 60));
  const hours = Math.round(minutes / 60);
  const days = Math.round(hours / 24);
  const months = Math.round(days / 30);

  let timeElapsed;

  if (minutes < 60) {
    timeElapsed = minutes + (minutes === 1 ? " minute" : " minutes");
  } else if (hours < 24) {
    timeElapsed = hours + (hours === 1 ? " hour" : " hours");
  } else if (days < 30) {
    timeElapsed = days + (days === 1 ? " day" : " days");
  } else {
    timeElapsed = months + (months === 1 ? " month" : " months");
  }

  return timeElapsed;
};

const $$Astro$1 = createAstro();
const $$Topic = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Topic;
  const { title, url, authors, creation_time, response_count, frontImage } = Astro2.props;
  const timeElapsed = getTimeElapsed(creation_time);
  return renderTemplate`${maybeRenderHead()}<div class="container-topics" data-astro-cid-jehqqamt> <a${addAttribute(url, "href")} data-astro-cid-jehqqamt> <img class="image"${addAttribute(frontImage, "src")}${addAttribute(title, "alt")} data-astro-cid-jehqqamt> <h1 class="title margin-left" data-astro-cid-jehqqamt>${title}</h1> <p class="last-reply margin-left" data-astro-cid-jehqqamt>Created by @${authors} ${timeElapsed} ago</p> <p class="comments-quantity margin-left" data-astro-cid-jehqqamt>${response_count} Comments</p> <div class="comments-button" data-astro-cid-jehqqamt>${renderComponent($$result, "Comments", $$Comments, { "data-astro-cid-jehqqamt": true })}</div> </a> </div> `;
}, "/home/gustavo/Desktop/Projects/Caelis Chaos/CaelisChaos/src/components/Topic.astro", void 0);

const getTopicsCards = async () => {
  try {
    const res = await fetch(`${"https://caelischaosforumapi.onrender.com"}/forum/topicscards`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

const plusCircle = /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon-plus",
    viewBox: "0 0 1024 1024",
    children: [
      /* @__PURE__ */ jsx("path", { d: "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8Z" }),
      /* @__PURE__ */ jsx("path", { d: "M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8Z" })
    ]
  }
);
const AntAnchor = ({ children, route }) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Button, { className: "anchor-button", type: "primary", children: /* @__PURE__ */ jsxs("a", { className: "anchor", href: route, children: [
    /* @__PURE__ */ jsx("icon", { children: plusCircle }),
    children
  ] }) }) });
};

const $$Astro = createAstro();
const $$Forum = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Forum;
  const session = await getSession(Astro2.request);
  console.log(session);
  const TopicsCards = await getTopicsCards();
  console.log(TopicsCards);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Forum", "data-astro-cid-coa4dvk3": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="buttons-container" data-astro-cid-coa4dvk3> ${renderComponent($$result2, "AntAnchor", AntAnchor, { "route": "/forum/CreateNewTopic", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/AntAnchor", "client:component-export": "default", "data-astro-cid-coa4dvk3": true }, { "default": ($$result3) => renderTemplate`Create new topic` })} </div> <ul data-astro-cid-coa4dvk3> ${TopicsCards.map((topic) => renderTemplate`${renderComponent($$result2, "Topic", $$Topic, { "url": `/forum/${topic.topic_id}`, "title": topic.title, "authors": topic.author_username, "creation_time": topic.creation_time, "frontImage": topic.author_image, "response_count": topic.response_count, "data-astro-cid-coa4dvk3": true })}`)} </ul> ` })} `;
}, "/home/gustavo/Desktop/Projects/Caelis Chaos/CaelisChaos/src/pages/forum.astro", void 0);

const $$file = "/home/gustavo/Desktop/Projects/Caelis Chaos/CaelisChaos/src/pages/forum.astro";
const $$url = "/forum";

export { $$Forum as default, $$file as file, $$url as url };
