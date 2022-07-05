import React from 'react';
import { NavLink } from 'react-router-dom';

// @ts-ignore
import { Divider, List } from 'semantic-ui-react';
import {
  HASHTAG_ANALYSIS_PATH,
  HOME_PATH,
  LEXICAL_ANALYSIS_PATH,
  SEMANTIC_ANALYSIS_PATH,
  TEXT_ANALYSIS_PATH
} from '../../routing';

import SitemapHeader from './SitemapHeader';

interface ISiteLink {
  id: string;
  label: string;
  pathname: string;
  children?: ISiteLink[];
}

const siteLinks: ISiteLink[] = [
  {
    id: 'home',
    label: 'Homepage',
    pathname: HOME_PATH
  },
  {
    id: 'lexicalAnalysis',
    label: 'Lexical Analysis',
    pathname: LEXICAL_ANALYSIS_PATH,
    children: [
      {
        id: 'definition',
        label: 'Definition',
        pathname: LEXICAL_ANALYSIS_PATH
      },
      {
        id: 'thesaurus',
        label: 'Thesaurus',
        pathname: LEXICAL_ANALYSIS_PATH
      },
      {
        id: 'translation',
        label: 'Translation',
        pathname: LEXICAL_ANALYSIS_PATH
      },
      {
        id: 'rhymesWith',
        label: 'Rhymes with',
        pathname: LEXICAL_ANALYSIS_PATH
      }
    ]
  },
  {
    id: 'textAnalysis',
    label: 'Text Analysis',
    pathname: TEXT_ANALYSIS_PATH,
    children: [
      {
        id: 'wordCount',
        label: 'Word Count',
        pathname: TEXT_ANALYSIS_PATH
      },
      {
        id: 'summarization',
        label: 'Summarization',
        pathname: TEXT_ANALYSIS_PATH
      },
      {
        id: 'sentiment',
        label: 'Sentiment',
        pathname: TEXT_ANALYSIS_PATH
      },
      {
        id: 'keyWordExtractor',
        label: 'Key word extractor',
        pathname: TEXT_ANALYSIS_PATH
      }
    ]
  },
  {
    id: 'semanticAnalysis',
    label: 'Semantic Analysis',
    pathname: SEMANTIC_ANALYSIS_PATH,
    children: [
      {
        id: 'associativeList',
        label: 'Associative list',
        pathname: SEMANTIC_ANALYSIS_PATH
      }
    ]
  },
  {
    id: 'hashtagAnalysis',
    label: 'Hashtag Analysis',
    pathname: HASHTAG_ANALYSIS_PATH,
    children: [
      {
        id: 'hashtagSuggestion',
        label: 'Hashtag Suggestion',
        pathname: HASHTAG_ANALYSIS_PATH
      },
      {
        id: 'hashtagDefinition',
        label: 'Hashtag Definition',
        pathname: HASHTAG_ANALYSIS_PATH
      }
    ]
  }
];

const Sitemap: React.FC = () => {
  return (
    <div>
      <SitemapHeader />
      <div className="ui main text container main-content">
        <Divider section hidden />
        <List bulleted>
          {siteLinks.map(link => {
            const { id, label, children, pathname } = link;

            const getChildren = kids => {
              return kids.map(kid => {
                const { id, label, pathname } = kid;

                return (
                  <List.Item key={id}>
                    <NavLink to={pathname} exact>
                      {label}
                    </NavLink>
                  </List.Item>
                );
              });
            };

            return (
              <List.Item key={id}>
                <NavLink to={pathname} exact>
                  {label}
                </NavLink>
                {children ? (
                  <List.List>{getChildren(children)}</List.List>
                ) : null}
              </List.Item>
            );
          })}
        </List>
      </div>
      <Divider section hidden></Divider>
    </div>
  );
};

export default Sitemap;
