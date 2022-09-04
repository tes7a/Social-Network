import { applyMiddleware, combineReducers, compose, createStore, Store } from 'redux';
import { userReducer } from './users-reducer';
import { authReducer } from './auth-reducer';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { appReducer } from './app-reducer';
import { dialogsReducer } from './dialogs-reducer';
import { profileReducer } from './profile-reducer';
import { sidebarReducer } from './sidebar-reducer';

const rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: userReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store: Store<AppRootStateType, any> = createStore(rootReducers, composeEnhancers( applyMiddleware(thunk)));

export type AppRootStateType = ReturnType<typeof rootReducers>;

export type AppStoreType = typeof store;

