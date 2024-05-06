import React, { useState } from "react";

const NewTopicForm = ({ user_id }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const postNewTopic = async () => {
    try {
      const response = await fetch("http://localhost:1234/forum/topic", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          authorId: user_id,
          content: content,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Nuevo tema creado:", data);
      } else {
        console.error("Error al crear el nuevo tema:", response.statusText);
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postNewTopic();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Content</label>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewTopicForm;
