/**
 * @module Clock
 * @desc clock icon
 */

import React from 'react';
import PropTypes from 'prop-types';

const Clock = ({ style, ...props }) => (
    <svg
        viewBox="0 0 24 24"
        style={{
            width: '1.25rem',
            ...style,
        }}
        {...props}
    >
        <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />
    </svg>
);

Clock.propTypes = {
    style: PropTypes.object,
};

export default Clock;
