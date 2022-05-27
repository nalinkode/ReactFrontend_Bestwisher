// Used to set token in header for every request
export default function AuthorizationHeader(type) {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  if (currentUser && currentUser.token) {
    return { Authorization: "Bearer " + currentUser.token };
  } else {
    return {};
  }
}
