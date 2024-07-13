const getImageUrl = async ({ id }) => {
  try {
    const result = await fetch(
      `${import.meta.env.PUBLIC_BACKEND_URL}/users/${id}`
    );
    const data = await result.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export default getImageUrl;
