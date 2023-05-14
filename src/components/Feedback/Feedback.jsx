import React from 'react';
import PropTypes from 'prop-types';
import { Btn, Item, List } from './Feedback.styled';

export const Feedback = ({ options, feedbackClick }) => {
  return (
    <List>
      {options.map(value => (
        <Item key={value}>
          <Btn type="button" value={value} onClick={() => feedbackClick(value)}>
            {value}
          </Btn>
        </Item>
      ))}
    </List>
  );
};

Feedback.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func,
};
