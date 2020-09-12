export default {
  signedIn: (state) => {
    try {
      return state.authUser.id !== null
    } catch {
      return false
    }
  },
}
