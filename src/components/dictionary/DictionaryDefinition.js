// Dictionary definitions tabs component

import React from 'react';
import { Tab } from 'semantic-ui-react'

// Components
import OxfordDefinition from './OxfordDefinition'
import YandexDefinition from './YandexDefinition'
import TwinwordDefinition from './TwinwordDefinition'
import WordsApiDefinition from './WordsApiDefinition'
import UrbanDefinition from './UrbanDefinition'

const panes = [
  { menuItem: 'Oxford', render: () =>
    <Tab.Pane>
      <OxfordDefinition />
    </Tab.Pane> },

  { menuItem: 'Yandex', render: () =>
    <Tab.Pane>
      <YandexDefinition />
    </Tab.Pane> },

    { menuItem: 'Twinword', render: () =>
    <Tab.Pane>
      <TwinwordDefinition />
    </Tab.Pane> },

  { menuItem: 'WordsAPI', render: () =>
    <Tab.Pane>
      <WordsApiDefinition />
    </Tab.Pane> },

    { menuItem: 'Urban', render: () =>
      <Tab.Pane>
        <UrbanDefinition />
      </Tab.Pane> },

]

const DictionaryDefinition = () => (
  <div className="tab-panes">
    <Tab panes={panes} />
  </div>
)

export default DictionaryDefinition;
