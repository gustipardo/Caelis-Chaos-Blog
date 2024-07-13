/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent } from '../astro_CSbH6D6X.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                          */
import { g as getSession, $ as $$Layout } from './404_BCUAUsq9.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import React, { useState } from 'react';
/* empty css                                   */
import { Button, Input } from 'antd';

const { TextArea } = Input;
const NewTopicForm = ({ user_id }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const postNewTopic = async () => {
    try {
      const response = await fetch(
        `${"https://caelischaosforumapi.onrender.com"}/forum/topic`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            title,
            authorId: user_id,
            content
          })
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("New Topic added:", data);
        setIsSuccess(true);
      } else {
        console.error("Error adding a new Topic:", response.statusText);
      }
    } catch (error) {
      console.error("Error posting the request:", error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postNewTopic();
    } catch (error) {
      console.error("Error posting the request:", error);
    }
  };
  React.useEffect(() => {
  }, []);
  React.useEffect(() => {
    if (isSuccess) {
      window.location.href = "/forum";
    }
  }, [isSuccess]);
  return /* @__PURE__ */ jsxs("form", { className: "form", onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsx("label", { className: "label", children: "Topic title" }),
    /* @__PURE__ */ jsx(
      TextArea,
      {
        className: "input input-title",
        type: "text",
        value: title,
        onChange: (e) => setTitle(e.target.value),
        laceholder: "Controlled autosize",
        autoSize: { minRows: 1, maxRows: 5 }
      }
    ),
    /* @__PURE__ */ jsx("label", { className: "label", children: "Content" }),
    /* @__PURE__ */ jsx(
      TextArea,
      {
        className: "input input-content",
        value: content,
        onChange: (e) => setContent(e.target.value),
        placeholder: "Controlled autosize",
        autoSize: { minRows: 3, maxRows: 5 }
      }
    ),
    /* @__PURE__ */ jsx(Button, { className: "submit", type: "submit", htmlType: "submit", children: "Submit" })
  ] });
};

const $$Astro = createAstro();
const $$CreateNewTopic = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CreateNewTopic;
  const session = await getSession(Astro2.request);
  console.log(session);
  const userId = session?.user?.id;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "New Topic", "data-astro-cid-ej2ah73i": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NewTopic", NewTopicForm, { "user_id": userId, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/NewTopic.jsx", "client:component-export": "default", "data-astro-cid-ej2ah73i": true })} ` })} `;
}, "/home/gustavo/Desktop/Projects/Caelis Chaos/CaelisChaos/src/pages/forum/CreateNewTopic.astro", void 0);

const $$file = "/home/gustavo/Desktop/Projects/Caelis Chaos/CaelisChaos/src/pages/forum/CreateNewTopic.astro";
const $$url = "/forum/CreateNewTopic";

export { $$CreateNewTopic as default, $$file as file, $$url as url };
