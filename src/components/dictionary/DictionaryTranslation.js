// Dictionary definitions tabs component

import React from 'react';
import { Tab } from 'semantic-ui-react'


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

const DictionaryTranslation = () => (
  <div className="tab-panes">
    <Tab panes={panes} />
  </div>
)

export default DictionaryTranslation;
