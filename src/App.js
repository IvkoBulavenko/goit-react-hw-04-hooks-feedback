import { useState, useEffect } from 'react';

import { Section } from './components/Section/Section';
import Buttons from './components/Button/ButtonsOptions';
import Statistics from './components/Statistics/Statistics';
import Container from './components/Container/Container';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [totalFeedback, setTotalFeedback] = useState(0);
  const [positiveFeedback, setpositiveFeedback] = useState(0);

  const onButtonClick = value => {
    switch (value) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    setTotalFeedback(good + bad + neutral);
  }, [good, neutral, bad]);

  useEffect(() => {
    setpositiveFeedback(Math.round((good * 100) / totalFeedback));
  }, [good, totalFeedback]);

  return (
    <>
      <Container>
        <Section title="Please leave feedback">
          <Buttons data={{ good, neutral, bad }} onBtnClick={onButtonClick} />
        </Section>
        <Section title="Statistics">
          {totalFeedback === 0 ? (
            <p>No stats yet</p>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positiveFeedback}
            />
          )}
        </Section>
      </Container>
    </>
  );
}

export default App;
