import { BrowserRouter, Switch, Route} from 'react-router-dom'
import React from 'react'
import Landing from './pages/landing'
import OrphanagesMap from './pages/OrpahangesMap'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={OrphanagesMap} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes