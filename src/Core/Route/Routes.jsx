import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LegalPage } from '../../Core/Footer/LegalPage/LegalPage';
import { HomePage } from '../../Pages/HomePage';

export function Routes () {
    return (
        <Switch>
            <Route path="/datausage">
                <LegalPage />
            </Route>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route path="*">
                  <h3>URL NOT FOUND</h3>
            </Route>
        </Switch>
    )
}
export default Routes;
