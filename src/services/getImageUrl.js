const getImageUrl = async ({ id }) => {
  try {
    const result = await fetch(`http://localhost:1234/users/${id}`);
    const data = await result.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export default getImageUrl;
