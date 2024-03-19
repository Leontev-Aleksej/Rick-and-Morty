import api from "./axiosClient";
import { createEffect } from "effector";

export const getLocationFx = createEffect(async () => {
  try {
    const response = await api.get("location");
    return response.data.results;
  } catch (error) {
    throw error;
  }
});
