import { get, post } from "@/services/api/api";
import API from "../constants";
import { User } from "../interfaces";

export function getListUser() {
  return get(API.LIST);
}

export function createUser(user: User) {
  return post(API.CREATE, user);
}
