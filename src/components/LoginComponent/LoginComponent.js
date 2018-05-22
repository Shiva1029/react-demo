import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './LoginComponent.sass';
import * as authService from '../../services/authService';
import SpinnerComponent from '../SpinnerComponent/SpinnerComponent';

class LoginComponent extends Component {
  state = {
    email: '',
    password: '',
    button: true,
  };

  setEmail = (event) => {
    event.preventDefault();
    this.setState({ email: event.target.value });
    this.updateButton();
  };

  setPassword = (event) => {
    event.preventDefault();
    this.setState({ password: event.target.value });
    this.updateButton();
  };

  updateButton = () => {
    this.setState({ button: !this.validEmail() || this.state.password === '' });
  };

  validEmail = () => (/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(this.state.email));

  onSubmit = (event) => {
    event.preventDefault();
    if (this.validEmail() && this.state.password) {
      this.props.onValidSubmit(this.state.email, this.state.password);
    }
  };

  // TODO: Add persistent login using localStorage

  render() {
    const { loading, message } = this.props;
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Login</h2>
        <form onSubmit={this.onSubmit}>
          <div className={styles.group}>
            <input type="text" onChange={this.setEmail} className={styles.input} value={this.state.email} />
            <span className={styles.bar} />
            <label className={styles.label}>Email</label>
          </div>
          <div className={styles.group}>
            <input
              type="password"
              autoComplete="false"
              onChange={this.setPassword}
              className={styles.input}
              value={this.state.password}
            />
            <span className={styles.bar} />
            <label className={styles.label}>Password</label>
          </div>
          <button
            className={this.state.button ? `${styles.button} ${styles.disabled}` : styles.button}
            onClick={this.onSubmit}
            disabled={this.state.button}
          >Login
          </button>
        </form>
        {loading ? <div className={styles.spinnerContainer}><SpinnerComponent /></div> : null}
        {message ? <div className={styles.errorMessage}>* {message}</div> : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.auth.loading,
  message: state.auth.error,
});

const mapDispatchToProps = dispatch => ({
  onValidSubmit: (email, password) => dispatch(authService.authService(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
