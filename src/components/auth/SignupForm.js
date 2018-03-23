import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const SignupForm = (props) => (
  <div className='login-form'>
    <div className="auth-header"></div>
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
          {' '}Create an account
        </Header>
        <Form
          size='large'
          onSubmit={props.handleSubmit}
          >
          <Segment stacked>
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
              name="pswd"
              value={props.pswd}
              placeholder='Password'
              type='password'
              onChange={props.handleChange}
            />

            <Button
              color='blue'
              fluid
              size='large'>Sign Up</Button>
          </Segment>
        </Form>
        <Message>
          Already with us? <a href='/login'>Login</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)

export default SignupForm
