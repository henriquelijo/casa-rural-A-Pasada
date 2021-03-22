import React from 'react'; 
import { Route, Switch } from 'react-router-dom';
import App from '../../App';
import LegalPage from '../Footer/LegalPage/LegalPage';

export function Routes () {
    return (
        <Switch>
            <Route path="/">
                <App />
            </Route>
            <Route path="/datausage">
                <LegalPage /> 
            </Route>
            <Route path="*">
                <h3>URL NOT FOUND</h3>
            </Route>
        </Switch>
    )
}
