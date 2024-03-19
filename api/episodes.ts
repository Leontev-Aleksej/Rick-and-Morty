import api from "./axiosClient";
import { createEffect } from "effector";

export const getEpisodeFx = createEffect(async () => {
  try {
    const response = await api.get("episode");
    return response.data.results;
  } catch (error) {
    throw error;
  }
});
