
// Libs
import React, { Component } from 'react';
import { MuiThemeProvider, withTheme } from 'material-ui/styles';
import Typography from 'material-ui/Typography';


// App resources
import appTheme from './theme';
import Patterns from './Pattern';


export default class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={appTheme}>
                <ThemeHeader />
                <Patterns />
            </MuiThemeProvider>
        );
    }
}


class Header extends Component {
    render () {
        const { theme } = this.props;
        const primaryColor = theme.palette.primary.main;

        const styles = {
            primaryColor: {
                backgroundColor: primaryColor,
                padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
                color: theme.palette.common.white,
            },
        };

        return (
            <div style={styles.primaryColor}>
                <Typography variant="display3">Wall Patterns</Typography>
            </div>
        );
    }
}

const ThemeHeader = withTheme()(Header);
