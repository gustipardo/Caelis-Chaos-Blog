const createNewTopic = async ({ title, authorId, content }) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      authorId: authorId,
      content: content,
    }),
  };
  try {
    const response = await fetch(
      `${import.meta.env.PUBLIC_BACKEND_URL}/forum/topic`,
      options
    );
    if (response.ok) {
      const data = await response.json();
      console.log("New Topic added:", data);
      setIsSuccess(true);
    } else {
      console.error("Error adding a new Topic:", response.statusText);
    }
    /*     const json = await res.json();
    return json; */
  } catch (error) {
    console.error("Error posting the request:", error);
  }
};

export default createNewTopic;
