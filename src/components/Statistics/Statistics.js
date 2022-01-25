import React from 'react';

import { StatItem } from './Statistics.styled';
import { ListItem } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ListItem>
      <StatItem> Goog: {good}</StatItem>
      <StatItem> Neutral: {neutral}</StatItem>
      <StatItem> Bad: {bad}</StatItem>
      <StatItem> Total: {total}</StatItem>
      <StatItem> Positive feedback: {positivePercentage}%</StatItem>
    </ListItem>
  );
};

export default Statistics;
