import {createListenerMiddleware} from "@reduxjs/toolkit";
import {store} from "../store";
import {loadCourses} from "../Action/course.action";
import {getAllStudents} from "../Action/app.action";


export const appMiddleware = createListenerMiddleware();

appMiddleware.startListening({
  predicate: (action) => {
    return action.type?.startsWith("auth/login")
  },
  effect: async (action, listenerApi) => {
    switch (action.type) {
      case 'auth/login/fulfilled':
        listenerApi.dispatch(loadCourses());
        listenerApi.dispatch(getAllStudents());
    }
  }
})
