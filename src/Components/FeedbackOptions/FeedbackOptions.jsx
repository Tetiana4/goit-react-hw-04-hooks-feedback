import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, List, Button } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onHandleButton }) {
  return (
    <Container>
      <Title>Please leave feedback</Title>
      {Object.keys(options).map(option => (
        <List key={option}>
          <Button type="button" onClick={() => onHandleButton(option)}>
            {option}
          </Button>
        </List>
      ))}
    </Container>
  );
}

FeedbackOptions.propType = {
  options: PropTypes.arrayOf(
    PropTypes.exact({
      option: PropTypes.string.isRequired,
    }),
  ),
};
