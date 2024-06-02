const getTopicsCards = async () => {
  try {
    const res = await fetch(`${import.meta.env.BACKEND_URL}/forum/topicscards`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export default getTopicsCards;
