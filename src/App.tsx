import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components Import
import Footer from "./components/Footer/footer";
import Navbar from "./components/Header/Navbar";

// Pages import
import Landing from "./pages/Landing/index";
import Stats from "./pages/Stats/index";

import Collection from "./pages/Collections/index";

import Profile from "./pages/Profile/Profile";

import Sell from "./pages/Sell/Sell";
import Contact from "./pages/Contact/Contact";
import NFT from "./pages/NFT/NFT";
import Create from "./pages/Create/Create";
import Launchpad from "./pages/Launchpad/Launchpad";
import Message from "./pages/MessageUi/MessageUi";
import ChatRoom from "./pages/MessageUi/ChatRoom";
import CollectionForm from "./pages/CollectionForm/CollectionForm";
import FAQs from "./pages/FAQs/FAQs";
import UserId from "./pages/UserId/UserId";
import CollectionUI from "./pages/CollectionUI/CollectionUI";
import Explore from "./pages/Explore/Explore";
import Notification from "./pages/Notification/Notification";
import Datawall from "./pages/Datawall/Datawall";

function App() {
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
                    <Launchpad />
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
              

{/*               

                <Route exact path="/stats">
                    <Stats />
                </Route>
                   <Route exact path="/userid">
                    <UserId />
                </Route>
                    <Route exact path="/faqs">
                    <FAQs />
                </Route>
                <Route exact path="/collection">
                    <Collection />
                </Route>
                <Route path="/profile/:id">Hello</Route>
                <Route exact path="/profile">
                    <Profile />
                </Route>
                <Route exact path="/nft/:id">
                    <NFT />
                </Route>
                <Route exact path="/create">
                    <Create />
                </Route>
                <Route exact path="/message">
                    <Message />
                </Route>
                <Route exact path="/chatroom">
                    <ChatRoom />
                </Route>
              
              
                <Route exact path="/notification">
                    <Notification />
                </Route>
                <Route exact path="/datawall">
                    <Datawall />
                </Route> */}
             
              
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
