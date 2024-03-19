import { getEpisodeFx } from "../api/episodes";
import { createStore } from "effector";

export const episodesStore = createStore([]);

episodesStore.on(getEpisodeFx.doneData, (state, episodes) => episodes);
