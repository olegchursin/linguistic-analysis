// Text sentiment tabs component

import React from 'react';
import { Tab } from 'semantic-ui-react'

// Components
import SentimentGoogle from './sentiment/SentimentGoogle'
import SentimentWatson from './sentiment/SentimentWatson'

const panes = [
  { menuItem: 'Google Sentiment', render: () =>
    <Tab.Pane>
      <SentimentGoogle />
    </Tab.Pane> },

  { menuItem: 'Watson Tone Analyzer', render: () =>
    <Tab.Pane>
      <SentimentWatson />
    </Tab.Pane> },

  { menuItem: 'Microsoft Azure', render: () =>
    <Tab.Pane>
      <SentimentGoogle />
    </Tab.Pane> },
]

const TextSentimentTabs = () => (
  <div className="tab-panes">
    <Tab panes={panes} />
  </div>
)

export default TextSentimentTabs;
