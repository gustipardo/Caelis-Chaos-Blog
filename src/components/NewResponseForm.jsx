import React, { useState, useRef } from "react";
import "@/styles/NewResponseForm.css";
import { Button } from "antd";

const NewResponseForm = ({ user_id, topicId }) => {
  const [value, setValue] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const textareaRef = useRef(null);

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
      const response = await fetch("http://localhost:1234/forum/response", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          topicId: topicId,
          authorId: user_id,
          content: value,
        }),
      });
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
      /* Reload page after a successful response submission */
      window.location.reload();
    }
  }, [isSuccess]);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        rows="1"
        placeholder="Write your response here..."
        className="response-input"
        id="textarea-adjust"
        style={{ overflow: "hidden" }}
      />
      <Button
        htmlType="button"
        className="buttonOutline"
        type="primary"
        ghost
        onClick={handleCancel}
      >
        Cancel
      </Button>
      <Button className="submit" type="submit" htmlType="submit">
        Submit
      </Button>
    </form>
  );
};

export default NewResponseForm;
