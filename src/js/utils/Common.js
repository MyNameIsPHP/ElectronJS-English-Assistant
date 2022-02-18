export const getUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);
  else return null;
};

export const getToken = () => {
  return localStorage.getItem("token") || null;
};


export const setUserLocal = (token, user) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
  // localStorage.setItem("notes", JSON.stringify(notes));
};


export const removeUserLocal = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};


