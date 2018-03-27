// Text sentiment tabs component

import React from 'react';
import { Tab } from 'semantic-ui-react'

// Components
import SentimentDatumbox from './sentiment/SentimentDatumbox'
import SentimentTwinword from './sentiment/SentimentTwinword'

const panes = [
  { menuItem: 'Consize result', render: () =>
    <Tab.Pane>
      <SentimentDatumbox />
    </Tab.Pane> },

  { menuItem: 'Detailed result', render: () =>
    <Tab.Pane>
      <SentimentTwinword />
    </Tab.Pane> },

]

const TextSentimentTabs = () => (
  <div className="tab-panes">
    <Tab panes={panes} />
  </div>
)

export default TextSentimentTabs;
