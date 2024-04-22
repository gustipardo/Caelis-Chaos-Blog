const creatNewTopic = async ({ title, authorId, content }) => {
  const input = {
    title,
    authorId,
    content,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  };
  try {
    const res = await fetch(`http://localhost:1234/forum/topic`, options);
    const json = await res.json();
    return json;
  } catch (err) {
    console.log(err.message);
  }
};

export default creatNewTopic;
