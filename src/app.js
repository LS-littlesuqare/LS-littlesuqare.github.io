import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ShowcasePage from './components/ShowcasePage';
import ProfilePage from './components/ProfilePage';
import AuthPage from './components/AuthPage';

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/showcase" component={ShowcasePage} />
                <Route path="/profile" component={ProfilePage} />
                <Route path="/auth" component={AuthPage} />
            </Switch>
            <Footer />
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));