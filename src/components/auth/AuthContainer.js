import React from 'react'

// Redux
import { connect } from 'react-redux'

// Components
import LoginForm from './LoginForm'

// Actions
import { authLogin } from '../../actions/authActions'

class AuthContainer extends React.Component {
  state = {
    isLoading: false,
    username: '',
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.authLogin(this.state.email, this.state.password);
  }

  render (props) {
    return (
      <div>
          <div className="auth-header"></div>
          <LoginForm
            email={this.state.email}
            password={this.state.password}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps, { authLogin })(AuthContainer);
