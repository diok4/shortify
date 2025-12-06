export const loginUser = async (data: { email: string; password: string }) => {
  const res = fetch("api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return (await res).json();
};
