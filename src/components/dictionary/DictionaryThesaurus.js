// Dictionary thesaurus tabs component

import React from 'react';
import { Tab } from 'semantic-ui-react'

import ThesaurusSyn from './thesaurus/ThesaurusSyn'
import ThesaurusAssoc from './thesaurus/ThesaurusAssoc'
import ThesaurusTheme from './thesaurus/ThesaurusTheme'

const panes = [
  { menuItem: 'Synonyms', render: () =>
    <Tab.Pane>
      <ThesaurusSyn />
    </Tab.Pane> },

  { menuItem: 'Associations', render: () =>
    <Tab.Pane>
      <ThesaurusAssoc />
    </Tab.Pane> },

    { menuItem: 'Theme', render: () =>
    <Tab.Pane>
      <ThesaurusTheme />
    </Tab.Pane> },
]

const DictionaryThesaurus = () => (
  <div className="tab-panes">
    <Tab panes={panes} />
  </div>
)

export default DictionaryThesaurus;
