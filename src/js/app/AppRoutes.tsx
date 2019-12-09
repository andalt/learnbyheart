import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import App from './App';

console.log(Route);

function AppRoutes() {
    return (
        <App>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <div>{'Hello 123'}</div>
                    </Route>
                </Switch>
            </Router>
        </App>
    );
}

export default AppRoutes;
