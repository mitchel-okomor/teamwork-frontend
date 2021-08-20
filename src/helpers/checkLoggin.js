import jwt_decode from 'jwt-decode';

const confirm = () => {
  const token = localStorage.token;

  if (token) {
    const decoded = jwt_decode (token);
    const {exp} = decoded;
    console.log(Date.now () >= exp * 1000)
    if (Date.now () >= exp * 1000) {
      localStorage.removeItem ('token');
      return false;
    }
    return true;
  }
  return false;
};

export default confirm;
