import { Button } from "antd";
import "@/styles/ButtonOutline.css";
import "@/styles/global.css";

export const LoadMore = ({ children }) => {
  return (
    <a href="">
      <Button className="buttonOutline" type="primary" ghost>
        {children}
      </Button>
    </a>
  );
};

export default LoadMore;
