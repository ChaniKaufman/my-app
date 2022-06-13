import { createStore,applyMiddleware,combineReducers} from "redux";
import userReducer from './reducer/user'
import recipyReducer from './reducer/recipy'

import  {UserMiddlerware} from "./middleWare/user";
import  {RecipyMiddlerware} from "./middleWare/recipy";

// const logAction=(store)=>(next)=>(action)=>{
//     return next(action)
// }


const MyReducer=combineReducers({userReducer,recipyReducer})
const MyMiddleware=applyMiddleware(UserMiddlerware,RecipyMiddlerware)
const MyMiddleware2=applyMiddleware(RecipyMiddlerware)
// const middleWare1=applyMiddleware(UserMiddlerware)

// const middleWare=applyMiddleware<e1,e2[],s>(
//     UserMiddlerware:middleWare<e1,s,any>
//     RecipyMiddlerware:middleWare<e2,s,any>
//     StoreEventhancer<{dispatch:e1 & e2}>)

const store=createStore(MyReducer,MyMiddleware);
window.store=store;
export default store;

// export function applyMiddleware<Ext1, Ext2, S>(
//     middleware1: Middleware<Ext1, S, any>,
//     middleware2: Middleware<Ext2, S, any>
//   ): StoreEnhancer<{ dispatch: Ext1 & Ext2 }>