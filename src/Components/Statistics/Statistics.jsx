import React from 'react';
import PropTypes from 'prop-types';
import { Container, Item } from './Statistics.styled';

const Statistics = ({ onGood, onNeutral, onBad, onTotal, onPercentage }) => (
  <Container>
    <Item>Good: {onGood}</Item>
    <Item>Neutral: {onNeutral}</Item>
    <Item>Bad: {onBad}</Item>
    <Item>Total: {onTotal}</Item>
    <Item>Positive feedback: {onPercentage}%</Item>
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
