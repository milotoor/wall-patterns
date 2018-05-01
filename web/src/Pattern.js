
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import classNames from 'classnames';

import patternLoader from './patternLoader';
import { UPDATE_PATTERN } from './store';


const updatePattern = (patternName) => ({
    type: UPDATE_PATTERN,
    pattern: patternName
});

const patternStyles = theme => ({
    pattern: {
        cursor: 'pointer',
        padding: '0.5rem'
    },
    selected: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.common.white
    }
});

const actionCreators = { updatePattern };
const Pattern = connect(state => state, actionCreators)(withStyles(patternStyles)(
    class Pattern extends Component {
        static propTypes = {
            pattern: PropTypes.string,
            name: PropTypes.string.isRequired
        };

        onClick = () => {
            this.props.updatePattern(this.props.name);
            patternLoader();
        };

        render () {
            const { classes, pattern, name } = this.props;
            const patternClasses = classNames(classes.pattern, {
                [classes.selected]: pattern === name
            });

            return (
                <Card className={patternClasses} onClick={this.onClick}>
                    <Typography variant="headline">
                        {name}
                    </Typography>
                </Card>
            );
        }
    }
));


const styles = {
    patterns: {
        display: 'grid',
        gridGap: '1rem',
        gridTemplateColumns: 'repeat(3, 1fr)',
        marginTop: '3rem',
        padding: '0 2rem',
    }
};

export default withStyles(styles)(
    class Patterns extends Component {
        state = {
            selected: null
        };

        static patternOrder = [
            [
                'Simple Crawl',
                'Random Row or Column',
                'Game of Life'
            ]
        ];

        render () {
            const { classes } = this.props;
            return (
                <div className={classes.patterns}>
                    {Patterns.patternOrder.map((patternRow, i) =>
                        patternRow.map((name, j) =>
                            <Pattern
                              key={name}
                              name={name}
                              isSelected={this.state.selected === name}
                            />
                        )
                    )}
                </div>
            );
        }
    }
)
