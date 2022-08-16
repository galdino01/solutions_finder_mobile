const initialState = { userEmailAndPass: null, loggedUserData: null, loggedUserToken: null, getUsers: null, getPosts: null }
const AuthReducers = (state = [], action) => {
  switch (action.type) {
    // SET USER EMAIL AND PASSWORD
    case 'USER_EMAIL_AND_PASS':
      return { ...state, userEmailAndPass: action.payload }
    // POST LOGIN AND GET A RESPONSE
    case 'LOGGED_USER_DATA':
      return { ...state, loggedUserData: action.payload }
    // GET USERS
    case 'GET_USERS':
      return { ...state, getUsers: action.payload }
    default:
      return initialState;
  }
}
export default AuthReducers;