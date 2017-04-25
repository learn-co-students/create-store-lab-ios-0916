export default function manageUsers(state = { users: []}, action){

  switch (action.type) {
    case 'ADD_USER':
      return Object.assign({}, state, {
        users: [...state.users, action.user]
      })
    default:
      return state
  }
}


// store.dispatch({
//   type: 'ADD_USER',
//   user: {
//     username: 'bob',
//     hometown: 'philly'
//   },
