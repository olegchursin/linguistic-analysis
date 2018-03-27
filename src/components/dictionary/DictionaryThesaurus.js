// Dictionary thesaurus tabs component

import React from 'react';
import { Tab } from 'semantic-ui-react'

import ThesaurusSyn from './thesaurus/ThesaurusSyn'
import ThesaurusAssoc from './thesaurus/ThesaurusAssoc'
// import ThesaurusAnt from './thesaurus/ThesaurusAnt'

const panes = [
  { menuItem: 'Synonyms', render: () =>
    <Tab.Pane>
      <ThesaurusSyn />
    </Tab.Pane> },

  // { menuItem: 'Antonyms', render: () =>
  //   <Tab.Pane>
  //     <ThesaurusAnt />
  //   </Tab.Pane> },

  { menuItem: 'Associations', render: () =>
    <Tab.Pane>
      <ThesaurusAssoc />
    </Tab.Pane> },
]

const DictionaryThesaurus = () => (
  <div className="tab-panes">
    <Tab panes={panes} />
  </div>
)

export default DictionaryThesaurus;
