const isAuthenticated = (): boolean => {
  const token = sessionStorage.getItem("token")
  return token !== null
  // return true
}

export default isAuthenticated
