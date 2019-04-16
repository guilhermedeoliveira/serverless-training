import React from 'react';
import { withAuthenticator } from 'aws-amplify-react';

import Note from './modules/note';

const App = () => <Note />;

export default withAuthenticator(App, { includeGreetings: true });
