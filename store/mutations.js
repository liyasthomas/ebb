import initialState from './state'

export default {
  RESET_STORE: (state) => {
    Object.assign(state, initialState())
  },

  SET_AUTH_USER: (state, { authUser }) => {
    state.authUser = {
      uid: authUser.uid,
      displayName: authUser.displayName,
      photoURL:
        authUser.photoURL ||
        `https://avatars.dicebear.com/v2/avataaars/${Math.random()
          .toString(36)
          .substring(7)}.svg?mood[]=happy`,
      email: authUser.email,
      emailVerified: authUser.emailVerified,
    }
  },
}
