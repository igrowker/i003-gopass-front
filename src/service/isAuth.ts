const isAuthenticated = () => {
  return !!sessionStorage.getItem("token")
}

export default isAuthenticated
