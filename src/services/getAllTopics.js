const getAllTopics = async () => {
  try {
    const res = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/forum`);
    const json = await res.json();
    return json;
  } catch (err) {
    console.log(err.message);
  }
};

export default getAllTopics;
