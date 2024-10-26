import { callRickAndMortyApi } from "../apis/rick-and-morty";

export const getAllCharacters = async ({ page }) =>
  await callRickAndMortyApi(`/character/?page=${page}`, "get");
