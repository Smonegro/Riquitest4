import instance from "./Instance";

export function register(values) {
  return instance.post("auth/register", values);
}

export function login(values) {
  return instance.post("auth/login", values);
}

// export function forgotPassword(values) {
//   return instance.post("auth/forgot-password", values);
// }
