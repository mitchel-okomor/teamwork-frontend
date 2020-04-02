
import {DATA_LOADED, ADD_ARTICLE, LOGIN_USER} from '../constants/index';


const initialState = {
    articles: [],
    remoteArticles: [],
    currentUser: []
};

function rootReducer(state = initialState, action){
  switch(action.type){
      case ADD_ARTICLE:
  return Object.assign({}, state,{
           articles: state.articles.concat(action.payload)
       }); 
     
       case DATA_LOADED: 
    return Object.assign({}, state, {
    remoteArticles: state.remoteArticles.concat(action.payload)
});
 
case LOGIN_USER:
 return Object.assign({}, state, {
     currentUser: state.currentUser.concat(action.payload)
 })   

   default:
    return state;
}
}



export default rootReducer;