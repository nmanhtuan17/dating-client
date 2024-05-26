import {createListenerMiddleware} from "@reduxjs/toolkit";
import {getAllConversation, getPosts, getUsers} from "@/store/Action/app.action.ts";


export const appMiddleware = createListenerMiddleware();

appMiddleware.startListening({
  predicate: (action) => {
    return action.type?.startsWith("auth/login") || action.type?.startsWith("user/upload-avatar") || action.type?.startsWith("conversation/create")
  },
  effect: async (action, listenerApi) => {
    switch (action.type) {
      case 'auth/login/fulfilled':
        listenerApi.dispatch(getUsers());
        listenerApi.dispatch(getAllConversation());
        listenerApi.dispatch(getPosts());
        break;
      case 'user/upload-avatar/fulfilled':
        listenerApi.dispatch(getUsers());
        break;
      case 'conversation/create/fulfilled':
        listenerApi.dispatch(getAllConversation());
        break;
    }
  }
})
