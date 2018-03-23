import React from 'react'

// Redux
import { connect } from 'react-redux'

// Semantic UI
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const LoginForm = (props) => {
  console.log(props)
  
  return (
    <div className='login-form'>
      {/*
        Heads up! The styles below are necessary for the correct render of this example.
        You can do same with CSS, the main idea is that all the elements up to the `Grid`
        below must have a height of 100%.
      */}
      <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 100%;
        }
      `}</style>
      <Grid
        textAlign='center'
        style={{ height: '100%' }}
        verticalAlign='middle'
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='blue' textAlign='center'>
            <Image src='/img/logo.png' />
            {' '}Log-in to your account
          </Header>
          <Form
            size='large'
            onSubmit={props.handleSubmit}
            >
            <Segment>
              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                name="email"
                value={props.email}
                placeholder='E-mail address'
                onChange={props.handleChange}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                name="password"
                value={props.password}
                placeholder='Password'
                type='password'
                onChange={props.handleChange}
              />

              <Button
                color='blue'
                fluid
                size='large'>Login</Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a href='/signup'>Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    resUsername: state.auth.username,
    resEmail: state.auth.email,
    resPassword: state.auth.password,
    isLoading: state.auth.isLoading
  }
}


export default connect(mapStateToProps)(LoginForm);
