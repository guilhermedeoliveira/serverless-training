import React from 'react';
import { withAuthenticator } from 'aws-amplify-react';

import CreateNote from './modules/note/CreateNote';

const App = () => <CreateNote />;

export default withAuthenticator(App, { includeGreetings: true });
