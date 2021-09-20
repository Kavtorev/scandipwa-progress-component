import React from 'react';
import './Progress.style.scss';
import { nanoid } from 'nanoid';
import ProgressStep from './ProgressStep';
import ProgressStepSeparator from './ProgressSeparator';

class Progress extends React.Component {
  findCheckoutStepIndex = () => {
    const { stepMap, checkoutStep } = this.props;
    return Object.keys(stepMap).findIndex(
      (stepMapKey) => stepMapKey === checkoutStep
    );
  };

  render() {
    const { stepMap } = this.props;

    const renderedSteps = Object.keys(stepMap).map((stepKey, idx) => {
      const { title, areTotalsVisible } = stepMap[stepKey];

      if (areTotalsVisible) {
        const isActive = idx === this.findCheckoutStepIndex();
        const isCompleted = idx < this.findCheckoutStepIndex();

        return (
          <>
            <ProgressStepSeparator isActive={isActive || isCompleted} />
            <ProgressStep
              title={title}
              number={idx + 1}
              key={nanoid()}
              isActive={isActive}
              isCompleted={isCompleted}
            />
          </>
        );
      }
    });

    const isFinished =
      this.findCheckoutStepIndex() === Object.keys(stepMap).length - 1;

    renderedSteps.push(<ProgressStepSeparator isActive={isFinished} />);

    return <div className='Progress'>{renderedSteps}</div>;
  }
}

export default Progress;
