
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'material-ui/Card';
import Typography from 'material-ui/Typography';


export default class Pattern extends Component {
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
        const { name } = this.props;
        const { selected } = this.state;

        return (
            <div className="pattern">
                <Card>
                    <Typography variant="headline">
                        {name}
                    </Typography>
                </Card>
            </div>
        );
    }
}
