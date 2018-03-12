import React from 'react';
import { Tab } from 'semantic-ui-react'
import OxfordDefinition from './OxfordDefinition'

const panes = [
  { menuItem: 'Oxford', render: (props) =>
    <Tab.Pane>
      <OxfordDefinition definition={props.definitionOxford} />
    </Tab.Pane> },

  { menuItem: 'Cambridge', render: () =>
    <Tab.Pane>
      Tab 2 Content
    </Tab.Pane> },

  { menuItem: 'WordsAPI', render: () =>
    <Tab.Pane>
      Tab 3 Content
    </Tab.Pane> },
]

const DictionaryDefinition = () => (
  <div className="tab-panes">
    <Tab panes={panes} />
  </div>
)

export default DictionaryDefinition;
