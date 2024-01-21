import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components Import
import Footer from "./components/Footer/footer";
import Navbar from "./components/Header/Navbar";

// Pages import

import CollectionUI from "./pages/CollectionUI/CollectionUI";
import Explore from "./pages/Explore/Explore";
import Staking from "./pages/Staking/Staking";

const App=()=> {
     
    return (
        <Router>
            
            <Navbar />
            
            <Switch>
              
                <Route exact path="/">
                <CollectionUI />
                </Route>
                <Route exact path="/whitepaper">
                    <Explore />
                </Route>
                <Route exact path="/staking">
                    <Staking />
                </Route>
           
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
