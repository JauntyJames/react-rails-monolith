import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router'

import CerealsIndexContainer from './CerealsIndexContainer'
import CerealShowContainer from './CerealShowContainer'
import NavBar from './navbar'

const App = (props) => {

  return(
    <Router history={browserHistory}>
      <Route path='/' component={NavBar} >
        <IndexRoute component={CerealsIndexContainer} />
        <Route path="/cereals/:id" component={CerealShowContainer}/>
      </Route>
    </Router>
  )
}
export default App;
