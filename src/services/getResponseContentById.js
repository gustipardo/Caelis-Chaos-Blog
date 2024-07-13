const getResponseContentById = async ({ quote }) => {
  try {
    const result = await fetch(
      `${import.meta.env.PUBLIC_BACKEND_URL}/forum/quote/${quote}`
    );
    const data = await result.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export default getResponseContentById;
