import React, {Component} from 'react';
import {Grid, Cell} from "react-mdl";

class Landingpage extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="/avatar.png"
                        alt="avatar"
                        className="avatar-img"/>

                        <div className="banner-text">
                            <h1>Software Developer</h1>
                            <hr/>
                            <p>HTML/CSS | JavaScript | React | NodeJS | Express</p>
                            <div className="social-links">
                                {/*LinkedIn*/}
                                <a href="http://google.com" rel="noopener norferrer" target="_blank">
                                    <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                                </a>
                                {/*Github*/}
                                <a href="http://github.com/rpsr15" rel="noopener norferrer" target="_blank">
                                    <i className="fa fa-github-square"  aria-hidden="true"/>
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Landingpage;