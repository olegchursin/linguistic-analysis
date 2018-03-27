import React from 'react'

class Profile extends React.Component {
  componentDidMount(){
    if(localStorage.getItem('token')){
      fetch("URL", {
        headers: {
          "Authorization": `Token ${localStorage.getItem("token")}`
        }
      })
    }
  }

  render () {

  }
}

export default Profile;
