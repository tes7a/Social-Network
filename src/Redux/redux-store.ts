import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {userReducer} from "./users-reducer";
import { authReducer } from "./auth-reducer";
import {reducer as formReducer} from "redux-form";
import thunk from "redux-thunk";
import { appReducer } from "./app-reducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: userReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

export const store: Store<AppRootStateType, any> = createStore(rootReducer,applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppStoreType = typeof store;

