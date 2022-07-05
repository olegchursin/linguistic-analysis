# Linguistic Analysis

This app was initially built in 2018. Light years ago on a tech timeline (React without hooks, Redux pre RTK, SemanticUI). In February 2022 I decided to resurrect it. My first feeling was, let's write everything from scratch (Typescript, modern React with suspence, React Query, Tailwind CSS) - and linguistic-analysis-app repo was born. But couple of hours into the work, I was like: Wait a second, I invested so much time in the repo back in the days, I don't want to kill it. Let me fix this legacy code. So first things first, refresh couple of API tokens and breing the app back locally. Couple snags with crazy old deps, deleted unncessary cruft and boom, it's live again locally. Oh, that warm feeling. Now deploy. Heroku it was in 2018, let it still be it (even though for most of my other side projects are on Netlify with a few on vercel and AWS). Couple of snags with prod build that made me eject out of CRA and tweak webpack configs, and boom - it's back up on the Internet. Feels nice. Moving components to TS feels just right. Deleting cruft and cleaning up the code feels even better. Well, let's give the deps a refresher and move data fetching to React Query. Let SemanticUI sit for a bit for now. To be continued...

## Where Natural Language Processing APIs come together to serve your lexical, semantic, and text analytics needs

This tool will help anyone who needs to perform lexical, text, and semantic analysis to do it efficiently. It will allow you to run definition analysis, pull definitions from various dictionaries, and display one on the single page. You will be able to perform sentiment analysis of the given text and compare sentiment results provided by various APIs. You will also be able to find an associative list of lexemes and build a lexical field for a predefined conceptual domain.

## User stories

### Lexical analysis

- As a user, I want to be able to define a lexeme.
- As a user, I want to be able to compare several definitions.
- As a user, I want to be able to to have access to the definitions from various dictionaries on one page.
- As a user, I want to be able to translate a lexeme EN-ES, EN-FR, EN-RU, EN-DE.

### Text analysis

- As a user, I want to be able to enter a text into a text area for further analysis.
- As a user, I want to be able to analyze the tone of the text.
- As a user, I want to be able to single out the keywords.
- As a user, I want to be able to perform text extraction (summarization) from a given input.

### Hashtag analysis

- As a user, I want to be able to get hashtag suggestions for a given lexeme.
- As a user, I want to be able to get hashtags definitions.
