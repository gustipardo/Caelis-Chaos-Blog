const getAllTopics = async () => {
  try {
    const res = await fetch(`http://localhost:1234/forum`);
    const json = await res.json();
    return json;
  } catch (err) {
    console.log(err.message);
  }
};

export default getAllTopics;
