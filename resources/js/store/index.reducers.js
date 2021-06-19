import { combineReducers } from "redux";
import {cmsReducer} from './cms/cms.reducer'

export const rootReducer = combineReducers({ cmsReducer });