import{_ as r}from"./preload-helper.ygWHROA3.js";import{j as t}from"./Compact.BnC6XZYP.js";/* empty css                           */import{B as o}from"./button.DmgfHEG2.js";const c=({setIsOpen:n})=>{const e=async()=>{const{signIn:i}=await r(()=>import("./client.BqElmF-z.js"),[]);i("google")};return t.jsxs("div",{children:[t.jsx("div",{className:"popup-overlay",children:t.jsxs("div",{className:"popup-content",children:[t.jsx("h2",{children:"Login"}),t.jsx(o,{type:"primary",className:"login-button",onClick:e,children:"LogIn With Google"}),t.jsx(o,{type:"primary",className:"buttonOutline",onClick:()=>n(!1),children:"Close"})]})}),t.jsx("style",{jsx:!0,children:`
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
      `})]})};export{c as L};
