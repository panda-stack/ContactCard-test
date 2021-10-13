import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Box, Typography } from '@material-ui/core'

const styles = () => ({
  circle: {
    stroke: "url(#linearColors)"
  }
});

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);

function CircularProgressWithContent(props: any) {
  const { classes, avatarUrl, percent } = props;
  return (
      <Box position="relative" display="inline-flex">
        <svg width="0" height="0">
          <linearGradient id="linearColors" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6D55F6" />
            <stop offset="100%" stopColor="#E25398" />
          </linearGradient>
        </svg>
        <Box 
          top={-10}
          left={26}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            width: 30,
            height: 30,
            bgcolor: 'blue'
          }}
          borderRadius="50%"
          zIndex={10}
        >
          <WhiteTextTypography >
            {percent}
          </WhiteTextTypography>
        </Box>
        <CircularProgress
          classes={classes}
          variant="determinate"
          thickness={4} 
          value={percent}
          size={89}
        />
        <Box
            top={0}
            left={0}
            bottom={0}
            right={0}
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
            width={75}
            height={75}
        >
            <Typography variant="caption" component="div" color="textSecondary">
                <img src={avatarUrl} width="100%" height="100%" alt="img" />
            </Typography>
        </Box>
      </Box>
  );
}

export default withStyles(styles)(CircularProgressWithContent);
