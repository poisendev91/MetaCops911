import React from "react";

import FeaturedLaunch from "./FeaturedLaunch/FeaturedLaunch"
import ExploreAllLaunches from "./ExploreAllLaunches/ExploreAllLaunches"
import "./Launchpad.css";

const Launchpad = () => {
    return (
        <div className="launchpad_container">
            <FeaturedLaunch/>
            {/* <ExploreAllLaunches/> */}
        </div>
    );
};

export default Launchpad;
