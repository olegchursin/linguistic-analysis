class AuthApi {

  // Login
  static authLogin(email, password){
    return fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json"
      },
      body: JSON.stringify({
        email: `${email}`,
        password: `${password}`
      })
    })
    .then(res => res.json())
  }

}

export default AuthApi;
