export const getMe = async () => {
  const res = fetch("/api/auth/me", {
    method: "GET",
  });

  return (await res).json();
};
