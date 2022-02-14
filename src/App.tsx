import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components Import
import Footer from "./components/Footer/footer";
import Navbar from "./components/Header/Navbar";

// Pages import
import Landing from "./pages/Landing/index";
import Sell from "./pages/Sell/Sell";
import Contact from "./pages/Contact/Contact";
import Launchpad from "./pages/Launchpad/Launchpad";
import CollectionUI from "./pages/CollectionUI/CollectionUI";
import Explore from "./pages/Explore/Explore";
const cors=require("cors");
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 





const App=()=> {
     
    return (
        <Router>
            
            <Navbar />
            
            <Switch>
              
                <Route exact path="/">
                    <Landing />
                </Route>
                <Route exact path="/roadmap">
                    <Sell />
                </Route>
                <Route exact path="/mint">
               
                    <Launchpad 
                    
                    />
                    
                </Route>
            
             
                <Route exact path="/collection-ui">
                    <CollectionUI />
                </Route>
                <Route exact path="/whitepaper">
                    <Explore />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
