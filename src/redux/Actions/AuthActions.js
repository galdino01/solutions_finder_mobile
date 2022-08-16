export const userEmailAndPass = (userEmailAndPass) => ({
  type: 'USER_EMAIL_AND_PASS',
  payload: userEmailAndPass,
})

export const loggedUserData = (loggedUserData) => ({
  type: 'LOGGED_USER_DATA',
  payload: loggedUserData,
})

export const getUsers = (getUsers) => ({
  type: 'GET_USERS',
  payload: getUsers,
})