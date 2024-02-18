import {createListenerMiddleware} from "@reduxjs/toolkit";
import {store} from "../store";
import {loadCourses} from "../Action/course.action";
import {getAllStudents, getAllTeacher} from "../Action/app.action";


export const appMiddleware = createListenerMiddleware();

appMiddleware.startListening({
  predicate: (action) => {
    return action.type?.startsWith("auth/login") || action.type?.startsWith("app/delete-student") || action.type?.startsWith("app/create-user")
  },
  effect: async (action, listenerApi) => {
    switch (action.type) {
      case 'auth/login/fulfilled':
        const {account} = store.getState().auth;
        listenerApi.dispatch(loadCourses());
        if (account && account.isAdmin) {
          listenerApi.dispatch(getAllStudents());
          listenerApi.dispatch(getAllTeacher());
        }
        break;
      case 'app/delete-student/fulfilled':
        listenerApi.dispatch(getAllStudents());
        break;
      case 'app/create-user/fulfilled':
        listenerApi.dispatch(getAllStudents());
        break;
      case 'app/update-profile/fulfilled':
        listenerApi.dispatch(getAllStudents());
        break;
    }
  }
})
