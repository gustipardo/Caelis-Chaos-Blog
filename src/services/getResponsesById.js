const getResponsesById = async ({ id }) => {
  try {
    const result = await fetch(
      `${import.meta.env.PUBLIC_BACKEND_URL}/forum/response/${id}`
    );
    const data = await result.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export default getResponsesById;
