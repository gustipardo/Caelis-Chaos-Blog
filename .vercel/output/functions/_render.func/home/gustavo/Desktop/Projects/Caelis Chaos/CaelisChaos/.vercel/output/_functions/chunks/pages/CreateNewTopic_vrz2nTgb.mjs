/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent } from '../astro_CSbH6D6X.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                          */
import { g as getSession, $ as $$Layout } from './404_8gciT1cH.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import React, { useState } from 'react';
/* empty css                                   */
import { Button, Input } from 'antd';
/* empty css                              */

const LoginPopup = ({ setIsOpen }) => {
  const handleSignIn = async () => {
    const { signIn } = await import('../client_CCgZ2-ys.mjs');
    signIn("google");
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "popup-overlay", children: /* @__PURE__ */ jsxs("div", { className: "popup-content", children: [
      /* @__PURE__ */ jsx("h2", { children: "Login" }),
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "primary",
          className: "login-button",
          onClick: handleSignIn,
          children: "LogIn With Google"
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "primary",
          className: "buttonOutline",
          onClick: () => setIsOpen(false),
          children: "Close"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("style", { jsx: true, children: `
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .popup-content {
          background: white;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
        }
        .popup-content h2 {
          margin-top: 0;
        }
        .popup-content button {
          margin: 10px;
        }
      ` })
  ] });
};

const { TextArea } = Input;
const NewTopicForm = ({ user_id }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const postNewTopic = async () => {
    try {
      const response = await fetch(
        `${"http://localhost:1234"}/forum/topic`,
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
    if (user_id == null) {
      setIsOpen(true);
    }
  }, []);
  React.useEffect(() => {
    if (isSuccess) {
      window.location.href = "/forum";
    }
  }, [isSuccess]);
  return /* @__PURE__ */ jsxs("form", { className: "form", onSubmit: handleSubmit, children: [
    isOpen && /* @__PURE__ */ jsx(LoginPopup, { setIsOpen }),
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

const CreateNewTopic = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CreateNewTopic,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { CreateNewTopic as C, LoginPopup as L };
