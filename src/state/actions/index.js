import {DATA_LOADED} from '../constants/index';
import history from '../../services/history';
const token = localStorage.token;



//get all posts action
export const getData = ()=> {
    return dispatch =>{
        return fetch("http://localhost:8000/posts",
        {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': `Bearer${token}`
          }
        }
        )
          .then(response => response.json())
          .then(json => {
              console.log(json.data);
            dispatch({ type: DATA_LOADED, payload: json.data });
          })
          .catch((error) => {
            console.error('Error:', error);
  
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
     body: JSON.stringify( { email: user.email,
     password: user.password,
     firstName: user.firstname,
     lastName: user.lastname,
     jobRole: user.role,
     gender: user.gender,
     department: user.department,
     address: user.address,
     isAdmin: user.isAdmin,
     dateOfBirth: user.dateOfBirth }) 
    })
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        localStorage.setItem("token", data.data.token);
        dispatch(loginUser(data.data));
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
      body: JSON.stringify({email:user.email, password: user.password})
    })
      .then(res => res.json())
      .then(data => {
          
        console.log(data);
        if (data.status === 'error') {
          console.log(data.error);
        } else {
          localStorage.setItem("token", data.data.token);
          console.log(data.data.token);
           history.push('/')
       window.location.reload();
        dispatch(loginUser(data.data.user));
        }
      })
      
     
  }
}

//get user profile after login
export const getProfileFetch = () => {
  return dispatch => {
   
    if (token) {
      return fetch("http://localhost:8000/profile", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer${token}`
        }
      })
        .then(resp => resp.json())
        .then(data => {
            history.push('/dashboard')
          if (data.message) {
            // An error will occur if the token is invalid.
            // If this happens, you may want to remove the invalid token.
            localStorage.removeItem("token")
          } else {
            dispatch(loginUser(data.data.user))
          

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