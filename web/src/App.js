
// Libs
import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';

// App resources
import Header from './Header';
import Patterns from './Pattern';
import appTheme from './theme';


export default class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={appTheme}>
                <Header />
                <Patterns />
            </MuiThemeProvider>
        );
    }
}
