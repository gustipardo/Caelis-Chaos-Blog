const getTopicById = async ({ topicId }) => {
  try {
    const res = await fetch(
      `${import.meta.env.PUBLIC_BACKEND_URL}/forum/${topicId}`
    );
    const json = await res.json();
    return json;
  } catch (err) {
    console.log(err.message);
  }
};

export default getTopicById;
