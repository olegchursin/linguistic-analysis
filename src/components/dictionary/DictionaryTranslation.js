// Dictionary translations tabs component

import React from 'react';
import { Tab } from 'semantic-ui-react'

import TranslationEs from './translation/TranslationEs'
import TranslationFr from './translation/TranslationFr'
import TranslationIt from './translation/TranslationIt'
import TranslationRu from './translation/TranslationRu'
import TranslationDe from './translation/TranslationDe'

const panes = [
  { menuItem: 'Spanish', render: () =>
    <Tab.Pane>
      <TranslationEs />
    </Tab.Pane> },

  { menuItem: 'French', render: () =>
    <Tab.Pane>
      <TranslationFr />
    </Tab.Pane> },

    { menuItem: 'Italian', render: () =>
    <Tab.Pane>
      <TranslationIt />
    </Tab.Pane> },

  { menuItem: 'Russian', render: () =>
    <Tab.Pane>
      <TranslationRu />
    </Tab.Pane> },

    { menuItem: 'German', render: () =>
      <Tab.Pane>
        <TranslationDe />
      </Tab.Pane> },

]

const DictionaryTranslation = () => (
  <div className="tab-panes">
    <Tab panes={panes} />
  </div>
)

export default DictionaryTranslation;
