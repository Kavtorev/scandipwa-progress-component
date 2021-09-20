import React from 'react';
import tick_src from './assets/tick.svg';
class ProgressStep extends React.Component {
  render() {
    const { title, number, isActive, isCompleted } = this.props;

    const circleContent = isCompleted ? (
      <img src={tick_src} alt='Tick Logo' className='TickImage' />
    ) : (
      number
    );

    const containerClassName =
      'ProgressStepContainer' + (isActive || isCompleted ? ' active' : '');

    return (
      <div className={containerClassName}>
        <div className='ProgressStepCircle'>{circleContent}</div>
        <span className='ProgressStepText'>{title}</span>
      </div>
    );
  }
}

export default ProgressStep;
