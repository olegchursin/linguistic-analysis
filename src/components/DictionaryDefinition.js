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
      Cambridge Definition
    </Tab.Pane> },

  { menuItem: 'Yandex', render: () =>
    <Tab.Pane>
      Yandex definition
    </Tab.Pane> },

  { menuItem: 'WordsAPI', render: () =>
    <Tab.Pane>
      WordsAPI defintion
    </Tab.Pane> },

  { menuItem: 'Twinword', render: () =>
    <Tab.Pane>
      Twinword defintion
    </Tab.Pane> },
]

const DictionaryDefinition = () => (
  <div className="tab-panes">
    <Tab panes={panes} />
  </div>
)

export default DictionaryDefinition;
