import React from 'react';
import PropTypes from 'prop-types';

const HomeComponent = props => (
  <h2>Welcome {props.name}</h2>
);

HomeComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

export default HomeComponent;
