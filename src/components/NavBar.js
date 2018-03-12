import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class NavBar extends Component {
  state = {}

  handleItemClick = (e, { name }) =>
    this.setState({
      activeItem: name
    })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable>
        <Menu.Item>
          <img src='../img/logo.png' alt="logo" />
        </Menu.Item>

        <Menu.Item
          name='dictionary'
          active={activeItem === 'dictionary'}
          onClick={this.handleItemClick}
        >
          Dictionary
        </Menu.Item>

        <Menu.Item
          name='thesaurus'
          active={activeItem === 'thesaurus'}
          onClick={this.handleItemClick}
        >
          Thesaurus
        </Menu.Item>

        <Menu.Item
          name='sign-in'
          active={activeItem === 'sign-in'}
          onClick={this.handleItemClick}
        >
          Sign-in
        </Menu.Item>
      </Menu>
    )
  }
}
