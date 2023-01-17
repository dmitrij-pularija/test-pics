import { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = (event) => {
      const key = event.target.name;
      this.setState(prevFfeedback => {return {[key]: prevFfeedback[key] += 1}});
  };

  countTotalFeedback = () => {
		const { good, neutral, bad } = this.state;
		return good + neutral + bad;
  };  

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };  

  render() {
		const { good, neutral, bad } = this.state;
		const feedbacks = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title={'Please leave feedback'}>
        <FeedbackOptions feedbacks={feedbacks} handleClick={this.handleClick} />
        </Section>
        <Section title={'Statistics'}>
        {total > 0 ?  
        <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
        :
        <Notification message="There is no feedback" />
        }
        </Section>
      </>
    );
  }
}

export default App;
