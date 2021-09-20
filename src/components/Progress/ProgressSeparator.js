import React from 'react';
class ProgressStepSeparator extends React.Component {
  render() {
    const { isActive } = this.props;

    const separatorClassName =
      'ProgressStepSeparator' + (isActive ? ' active' : '');

    return <div className={separatorClassName}></div>;
  }
}

export default ProgressStepSeparator;
