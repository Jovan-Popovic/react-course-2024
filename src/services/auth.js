import { callReqresApi } from "../apis/reqres";

export const loginUser = async data =>
  await callReqresApi("/login", data, "post");
