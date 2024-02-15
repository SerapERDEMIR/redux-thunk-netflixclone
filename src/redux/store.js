
import { combineReducers, createStore, applyMiddleware} from "redux";
import movieReducer from "./reducers/movieReducer";
import { thunk } from "redux-thunk";
import genreReducer from "./reducers/genre.Reducer";
const rootReducers=combineReducers({
movie:movieReducer,
genre:genreReducer,

})
export default createStore(rootReducers, applyMiddleware(thunk));