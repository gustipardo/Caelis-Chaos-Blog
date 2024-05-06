import { Button } from "antd";
import "@/styles/AntAnchor.css";
import "@/styles/global.css";

const plusCircle = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon-plus"
    viewBox="0 0 1024 1024"
  >
    <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8Z" />
    <path d="M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8Z" />
  </svg>
);

const AntAnchor = ({ children, route }) => {
  return (
    <>
      <Button className="anchor-button" type="primary">
        <a className="anchor" href={route}>
          <icon>{plusCircle}</icon>
          {children}
        </a>
      </Button>
    </>
  );
};

export default AntAnchor;
