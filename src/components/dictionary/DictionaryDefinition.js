import React from 'react';
import { Tab } from 'semantic-ui-react';

import DefinitionYandex from './definition/DefinitionYandex';
import DefinitionTwinword from './definition/DefinitionTwinword';
import DefinitionWordsApi from './definition/DefinitionWordsApi';
import DefinitionUrban from './definition/DefinitionUrban';

const panes = [
  {
    menuItem: 'Yandex',
    render: () => (
      <Tab.Pane>
        <DefinitionYandex />
      </Tab.Pane>
    )
  },
  {
    menuItem: 'Twinword',
    render: () => (
      <Tab.Pane>
        <DefinitionTwinword />
      </Tab.Pane>
    )
  },
  {
    menuItem: 'WordsAPI',
    render: () => (
      <Tab.Pane>
        <DefinitionWordsApi />
      </Tab.Pane>
    )
  },
  {
    menuItem: 'Urban',
    render: () => (
      <Tab.Pane>
        <DefinitionUrban />
      </Tab.Pane>
    )
  }
];

const DictionaryDefinition = () => (
  <div className="tab-panes">
    <Tab panes={panes} />
  </div>
);

export default DictionaryDefinition;
