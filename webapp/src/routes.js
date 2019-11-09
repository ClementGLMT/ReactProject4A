import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import App from './App';
import App2 from './pages/2ndPage';

const Routes = () => (
    <Router>
            <Route exact path="/" component={App} />
            <Route path="/App2" component={App2} />
    </Router>
);

export default Routes;