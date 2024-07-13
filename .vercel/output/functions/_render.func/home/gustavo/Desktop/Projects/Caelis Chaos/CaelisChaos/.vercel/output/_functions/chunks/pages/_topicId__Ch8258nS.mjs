/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, g as renderComponent } from '../astro_CSbH6D6X.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                          */
import { jsx, jsxs } from 'react/jsx-runtime';
import { create } from 'zustand';
import { Button } from 'antd';
/* empty css                              */
import { g as getSession, $ as $$Layout } from './404_BCUAUsq9.mjs';
import React, { useState, useRef } from 'react';

const getResponseContentById = async ({ quote }) => {
  try {
    const result = await fetch(
      `${"https://caelischaosforumapi.onrender.com"}/forum/quote/${quote}`
    );
    const data = await result.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

const useResponseStore = create((set) => ({
  response_id: null,
  content: '',
  username: '',
  setResponseId: (id) => set({ response_id: id }),
  setContent: (content) => set({ content }),
  setUsername: (username) => set({ username }),
  clearResponse: () => set({ response_id: null, content: '', username: '' })
}));

const ResponseReply = ({ response_id, content, username }) => {
  const setResponseId = useResponseStore((state) => state.setResponseId);
  const setContent = useResponseStore((state) => state.setContent);
  const setUsername = useResponseStore((state) => state.setUsername);
  const Comment = /* @__PURE__ */ jsxs("svg", { t: "1569682881658", className: "icon2", fill: "var(--secondary)", viewBox: "0 0 1024 1024", version: "1.1", "p-id": "8185", width: "32", height: "32", children: [
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("style", { type: "text/css" }) }),
    /* @__PURE__ */ jsx("path", { d: "M573 421c-23.1 0-41 17.9-41 40s17.9 40 41 40c21.1 0 39-17.9 39-40s-17.9-40-39-40zM293 421c-23.1 0-41 17.9-41 40s17.9 40 41 40c21.1 0 39-17.9 39-40s-17.9-40-39-40z", "p-id": "8186" }),
    /* @__PURE__ */ jsx("path", { d: "M894 345c-48.1-66-115.3-110.1-189-130v0.1c-17.1-19-36.4-36.5-58-52.1-163.7-119-393.5-82.7-513 81-96.3 133-92.2 311.9 6 439l0.8 132.6c0 3.2 0.5 6.4 1.5 9.4 5.3 16.9 23.3 26.2 40.1 20.9L309 806c33.5 11.9 68.1 18.7 102.5 20.6l-0.5 0.4c89.1 64.9 205.9 84.4 313 49l127.1 41.4c3.2 1 6.5 1.6 9.9 1.6 17.7 0 32-14.3 32-32V753c88.1-119.6 90.4-284.9 1-408zM323 735l-12-5-99 31-1-104-8-9c-84.6-103.2-90.2-251.9-11-361 96.4-132.2 281.2-161.4 413-66 132.2 96.1 161.5 280.6 66 412-80.1 109.9-223.5 150.5-348 102z m505-17l-8 10 1 104-98-33-12 5c-56 20.8-115.7 22.5-171 7l-0.2-0.1C613.7 788.2 680.7 742.2 729 676c76.4-105.3 88.8-237.6 44.4-350.4l0.6 0.4c23 16.5 44.1 37.1 62 62 72.6 99.6 68.5 235.2-8 330z", "p-id": "8187" }),
    /* @__PURE__ */ jsx("path", { d: "M433 421c-23.1 0-41 17.9-41 40s17.9 40 41 40c21.1 0 39-17.9 39-40s-17.9-40-39-40z", "p-id": "8188" })
  ] });
  const handleClick = () => {
    setResponseId(response_id.toString());
    setContent(content);
    setUsername(username);
  };
  return /* @__PURE__ */ jsx(Button, { type: "secondary", shape: "circle", icon: Comment, onClick: () => handleClick() });
};

const $$Astro$1 = createAstro();
const $$Response = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Response;
  const { imageSrc, username, content, quote, response_id } = Astro2.props;
  console.log(imageSrc, username, content, quote);
  let quoteContent = "";
  if (quote) {
    console.log(quote);
    const quoteFetching = await getResponseContentById({ quote });
    quoteContent = quoteFetching.content;
  }
  return renderTemplate`${maybeRenderHead()}<div class="response-container" data-astro-cid-mkefvr5p> <div class="user-profile" data-astro-cid-mkefvr5p> <img class="image"${addAttribute(imageSrc, "src")}${addAttribute(username, "alt")} data-astro-cid-mkefvr5p> <p class="user-info" data-astro-cid-mkefvr5p>@${username}</p> </div> ${quoteContent && renderTemplate`<p class="quote" data-astro-cid-mkefvr5p>Quoting @${username}: ${quoteContent}</p>`} <p data-astro-cid-mkefvr5p>${content}</p> <div class="options" data-astro-cid-mkefvr5p> ${renderComponent($$result, "ResponseReply", ResponseReply, { "response_id": response_id, "content": content, "username": username, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/gustavo/Desktop/Projects/Caelis Chaos/CaelisChaos/src/components/ResponseReply", "client:component-export": "ResponseReply", "data-astro-cid-mkefvr5p": true })} </div> </div> `;
}, "/home/gustavo/Desktop/Projects/Caelis Chaos/CaelisChaos/src/components/Response.astro", void 0);

const getTopicById = async ({ topicId }) => {
  try {
    const res = await fetch(`${"https://caelischaosforumapi.onrender.com"}/forum/${topicId}`);
    const json = await res.json();
    return json;
  } catch (err) {
    console.log(err.message);
  }
};

const getResponsesById = async ({ id }) => {
  try {
    const result = await fetch(
      `${"https://caelischaosforumapi.onrender.com"}/forum/response/${id}`
    );
    const data = await result.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

const NewResponseForm = ({ user_id, topicId }) => {
  const [value, setValue] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const textareaRef = useRef(null);
  const response_id = useResponseStore((state) => state.response_id);
  const content = useResponseStore((state) => state.content);
  const username = useResponseStore((state) => state.username);
  const clearResponse = useResponseStore((state) => state.clearResponse);
  const Close = /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024",
      className: "CloseIcon",
      fill: "black",
      width: "24",
      height: "24",
      children: /* @__PURE__ */ jsx("path", { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64Zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372Zm128.013 198.826c.023.007.042.018.083.059l45.02 45.019c.04.04.05.06.058.083a.118.118 0 0 1 0 .07c-.007.022-.018.041-.059.082L557.254 512l127.861 127.862a.268.268 0 0 1 .05.06l.009.023a.118.118 0 0 1 0 .07c-.007.022-.018.041-.059.082l-45.019 45.02c-.04.04-.06.05-.083.058a.118.118 0 0 1-.07 0c-.022-.007-.041-.018-.082-.059L512 557.254 384.14 685.115c-.042.041-.06.052-.084.059a.118.118 0 0 1-.07 0c-.022-.007-.041-.018-.082-.059l-45.02-45.019c-.04-.04-.05-.06-.058-.083a.118.118 0 0 1 0-.07c.007-.022.018-.041.059-.082L466.745 512l-127.86-127.86a.268.268 0 0 1-.05-.061l-.009-.023a.118.118 0 0 1 0-.07c.007-.022.018-.041.059-.082l45.019-45.02c.04-.04.06-.05.083-.058a.118.118 0 0 1 .07 0c.022.007.041.018.082.059L512 466.745l127.862-127.86c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z" })
    }
  );
  const textAreaAdjust = (element) => {
    element.style.height = "1px";
    element.style.height = `${25 + element.scrollHeight}px`;
  };
  const handleKeyUp = () => {
    textAreaAdjust(textareaRef.current);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
    textAreaAdjust(textareaRef.current);
  };
  const handleCancel = () => {
    setValue("");
    clearResponse();
    const textarea = textareaRef.current;
    textarea.style.height = "1px";
    textarea.style.height = "50px";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postNewResponse();
  };
  const postNewResponse = async () => {
    try {
      console.log("Submitting new response with values:", {
        topicId,
        authorId: user_id,
        content: value,
        quoted_response_id: response_id
      });
      const response = await fetch(
        `${"https://caelischaosforumapi.onrender.com"}/forum/response`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            topicId,
            authorId: user_id,
            content: value,
            quoted_response_id: response_id
          })
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("New response added:", data);
        setIsSuccess(true);
      } else {
        console.error("Error adding a new response:", response.statusText);
      }
    } catch (error) {
      console.error("Error posting the request:", error);
    }
  };
  React.useEffect(() => {
    if (isSuccess) {
      window.location.reload();
    }
  }, [isSuccess]);
  const handleClick = () => {
  };
  return /* @__PURE__ */ jsxs("form", { className: "form", onSubmit: handleSubmit, children: [
    response_id && /* @__PURE__ */ jsxs("div", { className: "responseQuoted-container", children: [
      /* @__PURE__ */ jsxs("p", { id: "responseQuoted", className: "responseQuoted", children: [
        "@",
        username,
        " wrote: ",
        content
      ] }),
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "secondary",
          shape: "circle",
          icon: Close,
          onClick: () => clearResponse()
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "textarea",
      {
        ref: textareaRef,
        value,
        onChange: handleChange,
        onKeyUp: handleKeyUp,
        onClick: handleClick,
        rows: "1",
        placeholder: "Write your response here...",
        className: "response-input",
        id: "textarea-adjust",
        style: { overflow: "hidden" }
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        htmlType: "button",
        className: "buttonOutline",
        type: "primary",
        ghost: true,
        onClick: handleCancel,
        children: "Cancel"
      }
    ),
    /* @__PURE__ */ jsx(Button, { className: "submit", type: "submit", htmlType: "submit", children: "Submit" })
  ] });
};

const $$Astro = createAstro();
const $$topicId = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$topicId;
  const { topicId } = Astro2.params;
  console.log(topicId);
  const Responses = await getResponsesById({ id: topicId });
  console.log(Responses);
  const Topic = await getTopicById({ topicId });
  console.log(Topic);
  const session = await getSession(Astro2.request);
  console.log(session);
  const userId = session?.user?.id;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-nz4l3glx": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2 class="titleTopic" data-astro-cid-nz4l3glx> ${Topic.title} </h2> <div class="topic-container" data-astro-cid-nz4l3glx> <div class="user-profile" data-astro-cid-nz4l3glx> <img class="image"${addAttribute(Topic.author_image, "src")}${addAttribute(Topic.author_username, "alt")} data-astro-cid-nz4l3glx> <div class="user-info" data-astro-cid-nz4l3glx> <p class="author_username" data-astro-cid-nz4l3glx>@${Topic.author_username}</p> <!--             <p class="author_name">Tobias Bersia</p> --> </div> </div> <div class="topic-content" data-astro-cid-nz4l3glx> <p class="topic-text-content" data-astro-cid-nz4l3glx>${Topic.content}</p> </div> ${Responses.map((response) => renderTemplate`${renderComponent($$result2, "Response", $$Response, { "response_id": response.response_id, "imageSrc": response.author_image, "username": response.author_username, "content": response.content, "quote": response.quoted_response_id, "data-astro-cid-nz4l3glx": true })}`)} <div class="response-container" data-astro-cid-nz4l3glx> ${renderComponent($$result2, "NewResponseForm", NewResponseForm, { "user_id": userId, "topicId": topicId, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/NewResponseForm.jsx", "client:component-export": "default", "data-astro-cid-nz4l3glx": true })} </div> </div> ` })} `;
}, "/home/gustavo/Desktop/Projects/Caelis Chaos/CaelisChaos/src/pages/forum/[topicId].astro", void 0);

const $$file = "/home/gustavo/Desktop/Projects/Caelis Chaos/CaelisChaos/src/pages/forum/[topicId].astro";
const $$url = "/forum/[topicId]";

export { $$topicId as default, $$file as file, $$url as url };
