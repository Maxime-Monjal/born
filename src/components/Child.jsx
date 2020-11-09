/* eslint-disable no-useless-rename */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Child.css';

class Child extends Component {
  render() {
    const {
      occurrence: occurrence,
      annee_naissance: year,
      sexe: sexe,
      prenom: prenom,
    } = this.props;
    return (
      <div className="Child">
        <span>The name of Baby</span>
        <span>{prenom}</span>
        <span>{sexe}</span>
        <span>{occurrence}</span>
        <span>{year}</span>
      </div>
    );
  }
}

Child.propTypes = {
  sexe: PropTypes.string.isRequired,
  prenom: PropTypes.string.isRequired,
  annee_naissance: PropTypes.string.isRequired,
  occurrence: PropTypes.number.isRequired,
};

export default Child;
