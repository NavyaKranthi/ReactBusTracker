import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});

class InputField extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                {/* <input type={props.type}
                    placeholder={props.placeholder}
                    className={props.ClassName + " input-field"}
                    id={props.id} /> */}
                <TextField
                    label={this.props.label}
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    margin="normal"
                    className={classes.textField}
                    id={this.props.id}
                />
            </div>
        )
    }
}

export default withStyles(styles)(InputField);