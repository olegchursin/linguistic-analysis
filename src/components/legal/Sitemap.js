import React from 'react'

// Semantic UI
import {Divider, List} from 'semantic-ui-react'

// Components
import SitemapHeader from './SitemapHeader'

const Sitemap = (props) => {
  return (
      <div>
          <SitemapHeader/>
          <div className="ui main text container main-content">
            <Divider section hidden/>
            <List bulleted>
              <List.Item href='/'>Homepage</List.Item>
              <List.Item href='/text'>Text Analysis
                <List.List>
                  <List.Item href='/text'>Word Count</List.Item>
                  <List.Item href='/text'>Summarization</List.Item>
                  <List.Item href='/text'>Sentiment</List.Item>
                  <List.Item href='/text'>Key word extractor</List.Item>
                </List.List>
              </List.Item>
              <List.Item href='/lexical'>
                Lexical Analysis
                <List.List>
                  <List.Item href='/lexical'>Definition</List.Item>
                  <List.Item href='/lexical'>Thesaurus</List.Item>
                  <List.Item href='/lexical'>Translation</List.Item>
                  <List.Item href='/lexical'>Rhymes with</List.Item>
                </List.List>
              </List.Item>
              <List.Item href='/semantics'>Semantic Analysis
                <List.List>
                  <List.Item href='/semantics'>Associative list</List.Item>
                </List.List>
              </List.Item>
              <List.Item href='/hashtag'>Hashtag Analysis
                <List.List>
                  <List.Item href='/hashtag'>Hashtag Suggestion</List.Item>
                  <List.Item href='/hashtag'>Hashtag Definition</List.Item>
                </List.List>
              </List.Item>
            </List>
          </div>
          <Divider section hidden></Divider>
      </div>
    )
}

export default Sitemap;
