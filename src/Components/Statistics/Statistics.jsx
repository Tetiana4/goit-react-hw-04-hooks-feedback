import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './Statistics.styled';

const Statistics = ({ onGood, onNeutral, onBad, onTotal, onPercentage }) => (
  <Container>
    <p>Good: {onGood}</p>
    <p>Neutral: {onNeutral}</p>
    <p>Bad: {onBad}</p>
    <p>Total: {onTotal}</p>
    <p>Positive feedback: {onPercentage}%</p>
  </Container>
);

export default Statistics;

Statistics.propTypes = {
  onGood: PropTypes.number.isRequired,
  onNeutral: PropTypes.number.isRequired,
  onBad: PropTypes.number.isRequired,
  onTotal: PropTypes.number.isRequired,
  onPercentage: PropTypes.number.isRequired,
};
