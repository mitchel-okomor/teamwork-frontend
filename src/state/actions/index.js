import {DATA_LOADED} from '../constants/index';

//get all posts action
export const getData = ()=> {
    return dispatch =>{
        return fetch("http://localhost:8000/posts")
          .then(response => response.json())
          .then(json => {
              console.log(json.data);
            dispatch({ type: DATA_LOADED, payload: json.data });
          });
        
        }
      }

//signup fetch action
export const userPostFetch = user => {
  return dispatch => {
    return fetch("http://localhost:8000/signup", {
     method: "POST",
     headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
     },
     body: JSON.stringify({user}) 
    })
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        localStorage.setItem("token", data.jwt);
        dispatch(loginUser(data.user));
      }
    });
  }
}

//login fetch action
export const userLoginFetch = user => {
  return dispatch => {
    return fetch("http://localhost:8000/signin", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({user})
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.error) {
          console.log(data.error);
        } else {
          localStorage.setItem("token", data.jwt)
          dispatch(loginUser(data.user))
        }
      })
  }
}

//get user profile after login
export const getProfileFetch = () => {
  return dispatch => {
    const token = localStorage.token;
    if (token) {
      return fetch("http://localhost:3000/api/v1/profile", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.message) {
            // An error will occur if the token is invalid.
            // If this happens, you may want to remove the invalid token.
            localStorage.removeItem("token")
          } else {
            dispatch(loginUser(data.user))
          }
        })
    }
  }
}

//login user action
const loginUser = userObj => ({
  type: 'LOGIN_USER',
  payload: userObj
});