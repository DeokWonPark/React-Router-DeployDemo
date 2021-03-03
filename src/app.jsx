import './app.css';
import { BrowserRouter ,Switch, Route, Link} from 'react-router-dom';

function App() {
  return <BrowserRouter>
    <Switch>
      <Route path={"/"} exact={true}>
        <h1>Hello :)</h1>
        <Link to="/ROUTE">/ROUTE</Link>
      </Route>
      <Route path={"/ROUTE"}>
        <h1>World</h1>
        <Link to="/">/</Link>
      </Route>
    </Switch>
  </BrowserRouter>
}

export default App;
