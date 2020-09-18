import React from 'react';
import '../src/component/Styles/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../src/Navbar/navbar';
import Login from '../src/component/Components/login';
import ViewClaim from '../src/component/Components/view_claim';
import UpdateClaim from '../src/component/Components/update_claim';
import Footer from '../src/Footer/footer';
import Start from '../src/component/Components/Start'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Start}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/viewclaim" component={ViewClaim}/>
          <Route exact path="/updateclaim/:id" component={UpdateClaim}/>
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
