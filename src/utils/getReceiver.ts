import {store} from "@/store";

export const getReceiver = (participants, senderId) => {
  return participants.filter(user => user._id !== senderId)[0];
}

export const getUser = (userId) => {
  return store.getState().app.users.find(user => user._id === userId);
}
