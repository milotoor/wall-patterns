
// Libs
import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

// App resources
import theme from './theme';
import Pattern from './Pattern';
import './App.css';


export default class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Typography variant="display3">Wall Patterns</Typography>

                <div id="patterns">
                    <Pattern
                      name="Simple Crawl"
                      script="simple_crawl"
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}
