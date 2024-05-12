const getResponseContentById = async ({ quote }) => {
  try {
    const result = await fetch(`http://localhost:1234/forum/quote/${quote}`);
    const data = await result.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export default getResponseContentById;
