import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import SavedPage from './pages/Saved';
import SearchPage from './pages/Search';
import NavBar from './components/nav-bar';

function App () {
    return (
        <div className="App">
            <Router>
                <NavBar />
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
