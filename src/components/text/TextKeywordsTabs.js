// Keywords extraction tabs component

import React from 'react';
import { Tab } from 'semantic-ui-react'

// Components
import KeywordsTextAnalysis from './keywords/KeywordsTextAnalysis'

const panes = [
  { menuItem: 'Suggested keywords', render: () =>
    <Tab.Pane>
      <KeywordsTextAnalysis />
    </Tab.Pane> }
]

const TextKeywordsTabs = () => (
  <div className="tab-panes">
    <Tab panes={panes} />
  </div>
)

export default TextKeywordsTabs;
