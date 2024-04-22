const getUserUuid = async ({ id, provider }) => {
  try {
    const res = await fetch(`http://localhost:1234/users/${id}/${provider}`);
    const json = await res.json();
    return json[0].user_id;
  } catch (err) {
    console.log(err.message);
  }
};

export default getUserUuid;
