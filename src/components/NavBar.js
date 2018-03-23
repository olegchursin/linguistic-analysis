import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

// Semantic UI React
import { Dropdown, Menu } from 'semantic-ui-react'

export default class NavBar extends Component {
  state = {}

  handleItemClick = (e, { name }) =>
    this.setState({
      activeItem: name
    })

  render() {
    const { activeItem } = this.state

    return (
      <Menu fixed='top'>
        <Menu.Item>
          <NavLink to="/" exact><img src='../img/logo.png' alt="logo" className="nav-logo" /></NavLink>
        </Menu.Item>

        <Dropdown text='Lexical Analysis' className='link item' simple>
          <Dropdown.Menu>

            <Dropdown.Header>Dictionary</Dropdown.Header>
            <Dropdown.Item
              href='/dictionary'
              name='definition'
              active={activeItem === 'definition'}
              onClick={this.handleItemClick}
            >
              Definition
            </Dropdown.Item>

            <Dropdown.Item
              href='/dictionary'
              name='thesaurus'
              active={activeItem === 'thesaurus'}
              onClick={this.handleItemClick}
            >
              Thesaurus
            </Dropdown.Item>

            <Dropdown.Item
              href='/dictionary'
              name='translation'
              active={activeItem === 'translation'}
              onClick={this.handleItemClick}
            >
              Translation
            </Dropdown.Item>

            <Dropdown.Divider />

            <Dropdown.Header>Phonetics</Dropdown.Header>

            <Dropdown.Item
              href='/phonetics'
              name='rhymes'
              active={activeItem === 'rhymes'}
              onClick={this.handleItemClick}
            >
              Rhymes with
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Item
          href='/semantics'
          name='text'
          active={activeItem === 'hashtag'}
          onClick={this.handleItemClick}
        >
          Semantic Analysis
        </Menu.Item>

        <Menu.Item
          href='/text'
          name='text'
          active={activeItem === 'text'}
          onClick={this.handleItemClick}
        >
          Text Analysis
        </Menu.Item>
        <Menu.Item
          href='/hashtag'
          name='text'
          active={activeItem === 'hashtag'}
          onClick={this.handleItemClick}
        >
          Hashtag Analysis
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item
            href='/login'
            name='login'
            active={activeItem === 'login'}
            onClick={this.handleItemClick}
          >
            Login
          </Menu.Item>
        </Menu.Menu>

      </Menu>
    )
  }
}
