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
      <Menu attached='top'>
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

            <Dropdown.Header>Semantics</Dropdown.Header>
            <Dropdown.Item
              href='/semantics'
              name='semantic-field'
              active={activeItem === 'semantic-field'}
              onClick={this.handleItemClick}
            >
              Semantic field
            </Dropdown.Item>

            <Dropdown.Divider />

            <Dropdown.Header>Phonetics</Dropdown.Header>
            <Dropdown.Item
              href='/phonetics'
              name='pronunciation'
              active={activeItem === 'pronunciation'}
              onClick={this.handleItemClick}
            >
              Pronunciation
            </Dropdown.Item>

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
            name='sign-in'
            active={activeItem === 'sign-in'}
            onClick={this.handleItemClick}
          >
            Sign-in
          </Menu.Item>
        </Menu.Menu>

      </Menu>
    )
  }
}
