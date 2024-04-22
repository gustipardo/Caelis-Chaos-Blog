const getTopicById = async ({ topicId }) => {
  try {
    const res = await fetch(`http://localhost:1234/forum/${topicId}`);
    const json = await res.json();
    return json;
  } catch (err) {
    console.log(err.message);
  }
};

export default getTopicById;
