import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './text.css';
import './text.scss';

const Text = ({ children, level, ...rest }) => {
  return (
    <div
      className={['storybook-text', `storybook-text--${level}`].join(' ')}
      {...rest}
    >
      {children}
    </div>
  );
};

Text.propTypes = {
  children: PropTypes.string,
  level: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl', 'xxl']),
};

Text.defaultProps = {
  children: 'Text M',
  level: 'm',
};

export default memo(Text);
