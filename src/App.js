import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';
import SignUpPage from './SignUpPage';
import LandingPage from './LandingPage'; // Add this line
import './styles.css';


const App = () => {
    return (
        <Router>
            <NavigationBar />
            <Switch>
                <Route path="/" exact component={LandingPage} /> {/* Update this line */}
                <Route path="/contact" component={ContactPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/signup" component={SignUpPage} />
            </Switch>
        </Router>
    );
};

export default App;
