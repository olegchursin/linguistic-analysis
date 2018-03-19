// Keywords extraction tabs component

import React from 'react';
import { Tab } from 'semantic-ui-react'

// Components
import KeywordsTextAnalysis from './keywords/KeywordsTextAnalysis';
import KeywordsTwinword from './keywords/KeywordsTwinword';

const panes = [
  { menuItem: 'Twinword', render: () =>
    <Tab.Pane>
      <KeywordsTwinword />
    </Tab.Pane> },

  { menuItem: 'Text Analysis', render: () =>
    <Tab.Pane>
      <KeywordsTextAnalysis />
    </Tab.Pane> },
]

const TextKeywordsTabs = () => (
  <div className="tab-panes">
    <Tab panes={panes} />
  </div>
)

export default TextKeywordsTabs;
