import React from 'react';
import { NavLink } from 'react-router-dom';

// @ts-ignore
import { Container, Menu, Image } from 'semantic-ui-react';
import {
  HASHTAG_ANALYSIS_PATH,
  HOME_PATH,
  LEXICAL_ANALYSIS_PATH,
  SEMANTIC_ANALYSIS_PATH,
  TEXT_ANALYSIS_PATH
} from '../routing';

interface INavLink {
  id: string;
  name: string;
  href: string;
  label: string;
}

const navLinks: INavLink[] = [
  {
    id: 'lexicalAnalysis',
    name: 'lexical',
    href: LEXICAL_ANALYSIS_PATH,
    label: 'Lexical Analysis'
  },
  {
    id: 'textAnalysis',
    name: 'text',
    href: TEXT_ANALYSIS_PATH,
    label: 'Text Analysis'
  },
  {
    id: 'semanticAnalysis',
    name: 'semantics',
    href: SEMANTIC_ANALYSIS_PATH,
    label: 'Semantic Analysis'
  },
  {
    id: 'hashtagAnalysis',
    name: 'hashtag',
    href: HASHTAG_ANALYSIS_PATH,
    label: 'Hashtag Analysis'
  }
];

const NavBar: React.FC = () => {
  return (
    <Menu fixed="top">
      <Container>
        <div className="navbar__logo-container">
          <NavLink to={HOME_PATH} exact>
            <Image
              src="../img/logo-full.svg"
              className="nav-logo"
              alt="Logo"
              avatar
            />
          </NavLink>
        </div>

        <Menu.Menu position="right">
          {navLinks.map(navLink => {
            const { id, name, href, label } = navLink;

            return (
              <Menu.Item key={id} name={name}>
                <NavLink to={href} exact>
                  {label}
                </NavLink>
              </Menu.Item>
            );
          })}
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default NavBar;
