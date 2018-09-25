import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  btFacebook: {
    color: theme.palette.getContrastText('#3b5998'),
    backgroundColor: '#3b5998',
    '&:hover': {
      backgroundColor: '#3b5998',
    },
  },
});

function SignIn(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={ classes.layout }>
        <Paper className={ classes.paper }>
          <Avatar className={ classes.avatar }>
            <LockIcon />
          </Avatar>
          <Typography variant="headline">Identifique-se</Typography>
          <form className={ classes.form }>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email / Usuário</InputLabel>
              <Input id="email" name="email" autoComplete="email" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="raised"
              color="secondary"
              className={ classes.submit }
            >
              Sign in
            </Button>
            <Button
              type="button"
              fullWidth
              variant="raised"
              color="primary"
              className={ `${classes.submit} ${classes.btFacebook}` }
            >
              Facebook
            </Button>
            <Button
              type="button"
              fullWidth
              variant="raised"
              color="red"
              className={ classes.submit }
            >
              Google
            </Button>
          </form>
        </Paper>
      </main>
    </React.Fragment>
  );
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);