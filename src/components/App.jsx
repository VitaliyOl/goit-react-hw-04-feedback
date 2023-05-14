import React, { useState } from 'react';
import { Section } from './Section/Section';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countFeedback = e => {
    switch (e) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <>
      <Section title={'Please Leave Feedback'}>
        <Feedback
          options={Object.keys({ good, neutral, bad })}
          feedbackClick={countFeedback}
        ></Feedback>
      </Section>

      <Section title={'Statistics'}>
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            percent={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
};

// class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = ({ good }) => {
//     const total = this.countTotalFeedback();

//     if (!total) {
//       return 0;
//     }

//     return Math.round((good / total) * 100);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();

//     return (
//       <>
//         <Section title={'Please Leave Feedback'}>
//           <Feedback
//             options={Object.keys(this.state)}
//             feedbackClick={this.countFeedback}
//           ></Feedback>
//         </Section>

//         <Section title={'Statistics'}>
//           {!total ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback(this.state)}
//               percent={this.countPositiveFeedbackPercentage(this.state)}
//             />
//           )}
//         </Section>
//       </>
//     );
//   }
// }

// export default App;
