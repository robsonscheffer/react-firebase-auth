import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockIcon from '@material-ui/icons/LockOutlined';
import withStyles from '@material-ui/core/styles/withStyles';

import {
  Typography, Grid, Divider, Paper,
  Input, InputLabel, FormControl,
} from '@material-ui/core';

import { Link } from 'react-router-dom';

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

class SignIn extends React.Component {
  render() {
    const {
      classes, authFacebook, authGoogle, authEmail,
    } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <main className={ classes.layout }>
          <Paper className={ classes.paper }>
            <Avatar className={ classes.avatar }>
              <LockIcon />
            </Avatar>
            <Typography variant="subheading">Olá! Escolha uma opção para entrar</Typography>
            <form className={ classes.form } onSubmit={ authEmail }>
              <Grid container spacing={ 16 }>
                <Grid item xs={ 6 }>
                  <Button
                    onClick={ authFacebook }
                    type="button"
                    fullWidth
                    variant="raised"
                    color="primary"
                    className={ `${classes.submit} ${classes.btFacebook}` }
                  >
                    Facebook
                  </Button>
                </Grid>
                <Grid item xs={ 6 }>
                  <Button
                    onClick={ authGoogle }
                    type="button"
                    fullWidth
                    variant="raised"
                    className={ classes.submit }
                  >
                    Google
                  </Button>
                </Grid>
                <Grid item xs={ 12 }>
                  <Typography variant="caption" align="center" style={ { marginBottom: 10 } }>
                    Nunca postaremos nas suas redes sociais
                    <br />
                    ou use seu login
                    <b> GrupoRBS</b>
                  </Typography>
                  <Divider />
                </Grid>
              </Grid>

              <Grid item xs={ 12 }>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="email">Email / Usuário</InputLabel>
                  <Input id="email" name="email" autoComplete="email" autoFocus />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="password">Senha</InputLabel>
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
                  Entrar
                </Button>
              </Grid>
              <Grid item xs={ 12 }>
                <Divider style={ { marginTop: 20, marginBottom: 20 } } />
                <Typography variant="body2" align="center">
                  Não tem conta?
                  <Link to="/register">Cadastre-se</Link>
                </Typography>
              </Grid>
            </form>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

SignIn.defaultProps = {
  authFacebook: () => {},
  authGoogle: () => {},
  authEmail: () => {},
};

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
  authFacebook: PropTypes.func,
  authGoogle: PropTypes.func,
  authEmail: PropTypes.func,
};

export default withStyles(styles)(SignIn);
