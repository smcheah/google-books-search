import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import SavedPage from './pages/Saved';
import SearchPage from './pages/Search';
import NavBar from './components/nav-bar';
import HeroHeader from './components/hero-header';

function App () {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <HeroHeader>
                    <h1>Google Books Search</h1>
                    <h2>Search for and save books of interest</h2>
                </HeroHeader>
                <Switch>
                    <Route exact path="/saved">
                        <SavedPage />
                    </Route>
                    <Route exact path="/">
                        <SearchPage />
                    </Route>
                    <Route path="*" component={ () => <p>404. Page not found!</p> } />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
