

// Libs
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';
import Typography from 'material-ui/Typography';

// App resources
import { UPDATE_HOST, UPDATE_PORT } from './store';

const actionCreators = {
    updateHost: host => ({ type: UPDATE_HOST, host }),
    updatePort: port => ({ type: UPDATE_PORT, port })
};

const styles = theme => ({
    connection: {
        fontSize: '12px'
    },
    header: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        display: 'flex',
        justifyContent: 'space-between',
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
    },
    port: {
        marginLeft: '1rem'
    }
});

const Header = connect(state => state, actionCreators)(
    class Header extends Component {
        updateHost = event => this.props.updateHost(event.target.value);
        updatePort = event => this.props.updatePort(event.target.value);

        render () {
            const { classes, host, port } = this.props;

            return (
                <div className={classes.HEADER}>
                    <Typography variant="display3">Wall Patterns</Typography>

                    <div className={classes.connection}>
                        <Input
                          classes={{root: classes.connection}}
                          label="Host"
                          onChange={this.updateHost}
                          value={host}
                        />
                        <Input
                          classes={{root: classes.connection}}
                          className={classes.port}
                          label="Port"
                          onChange={this.updatePort}
                          value={port}
                        />
                    </div>
                </div>
            );
        }
    }
);

export default withStyles(styles)(Header);
