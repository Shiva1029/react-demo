import React from 'react';
import { connect } from 'react-redux';
import styles from './HomeContainer.sass';
import HomeComponent from '../../components/HomeComponent/HomeComponent';

const HomeContainer = props => (
  <div className={styles.homeContainer}><HomeComponent
    {...props}
  />
  </div>);

const mapStateToProps = state => ({
  name: state.auth.name,
});

export default connect(mapStateToProps)(HomeContainer);
