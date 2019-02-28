import React from "react"
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });

  function button(props) {
    const { classes } = props;
    return (
      <div className="n3">
        <Button onClick = {props.clickFunction} variant="outlined" type="button" color="primary" className={classes.button}>
        {props.name}
        </Button>
      </div>
    );
  }
  
  export default withStyles(styles)(button);
