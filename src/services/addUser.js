const addUser = async ({ id, username, image_url, email }) => {
  console.log(id, username, image_url, email);
  try {
    const result = await fetch(`${import.meta.env.BACKEND_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        username,
        image_url,
        email,
      }),
    });
    const data = await result.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export default addUser;
