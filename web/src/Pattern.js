
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card from 'material-ui/Card';
import Typography from 'material-ui/Typography';


const patternStyles = {
    pattern: {
        cursor: 'pointer',
        padding: '0.5rem'
    }
};

const Pattern = withStyles(patternStyles)(
    class Pattern extends Component {
        static propTypes = {
            name: PropTypes.string.isRequired,
            script: PropTypes.string.isRequired
        };

        constructor (props) {
            super(props);
            this.state = {
                selected: false
            };
        }

        render () {
            const { classes, name } = this.props;
            const { selected } = this.state;

            return (
                <Card className={classes.pattern} >
                    <Typography variant="headline">
                        {name}
                    </Typography>
                </Card>
            );
        }
    }
);


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
        static patternOrder = [
            [
                { name: 'Simple Crawl', script: 'simple_crawl' }
            ]
        ];

        render () {
            const { classes } = this.props;
            return (
                <div className={classes.patterns}>
                    {Patterns.patternOrder.map((patternRow, i) =>
                        patternRow.map((patternProps, j) =>
                            <Pattern
                              key={patternProps.name}
                              {...patternProps}
                            />
                        )
                    )}
                </div>
            );
        }
    }
)
