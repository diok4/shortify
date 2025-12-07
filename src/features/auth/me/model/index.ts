export const getMe = async () => {
  const res = fetch("/api/auth/me", {
    method: "GET",
    credentials: "include",
  });

  return (await res).json();
};
