import { getLocationFx } from "../api/locations";
import { createStore } from "effector";

export const locationsStore = createStore([]);

locationsStore.on(getLocationFx.doneData, (state, locations) => locations);

