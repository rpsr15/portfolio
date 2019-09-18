import React from 'react';
import {Switch, Route} from "react-router-dom";
import Landingpage from "./landingpage";
import Aboutme from "./aboutme";
import Contact from "./contact";
import Resume from "./resume";
import Projects from "./projects";

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landingpage}/>
        <Route  path="/aboutme" component={Aboutme}/>
        <Route  path="/contact" component={Contact}/>
        <Route  path="/resume" component={Resume}/>
        <Route  path="/projects" component={Projects}/>
    </Switch>

)

export default  Main;