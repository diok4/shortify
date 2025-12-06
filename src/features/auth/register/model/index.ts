export const registerUser = async (data: {
  username: string;
  email: string;
  password: string;
}) => {
  const res = fetch("api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return (await res).json();
};
