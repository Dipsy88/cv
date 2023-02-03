import React from 'react';
import { Box, Typography } from '@material-ui/core';

// @ts-ignore
const ProgressBar = ({ value }) => {
    return (
        <Box width={`${value}%`} height="10px" bgcolor="#f44336" />
    );
};

export default ProgressBar;