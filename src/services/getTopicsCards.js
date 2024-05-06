const getTopicsCards = async () => {
  try {
    const res = await fetch("http://localhost:1234/forum/topicscards");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export default getTopicsCards;
