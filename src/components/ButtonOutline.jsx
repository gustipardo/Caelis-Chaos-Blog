import { Button } from "antd";
import "@/styles/ButtonOutline.css";
import "@/styles/global.css";
import getCurrentPost from "@/services/getCurrentPost";
import getNextPreviousPost from "@/services/getNextPreviousPost.js";

export const ButtonOutline = ({ children, isNext = true, sortedPosts }) => {
  const currentPost = getCurrentPost();
  const nextPreviousPost = getNextPreviousPost({
    isNext,
    postname: currentPost,
    sortedPosts,
  });
  return (
    <>
      {nextPreviousPost && (
        <a href={nextPreviousPost}>
          <Button className="buttonOutline" type="primary" ghost>
            {children}
          </Button>
        </a>
      )}
    </>
  );
};

export default ButtonOutline;
