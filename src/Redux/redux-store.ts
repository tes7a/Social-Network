import {combineReducers, createStore, Store} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer
})

export const store: Store<AppRootStateType, any> = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppStoreType = typeof store;

