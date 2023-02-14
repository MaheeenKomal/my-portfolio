import React from 'react';
import {Container, Grid, LinearProgress} from '@mui/material';

export const Skill = () => {
  return (
    <div id="skills" className="section">
      <Container maxWidth="xl">
        <div className="section-title ">
          <div className="h2">Skills</div>
          <p className="p2">
            I have a keen interest in technology, web applications, and user experience and as someone who takes responsibility for his own personal development very serious, I’m continually evaluating and upgrading my skills to stay at the cutting edge of the information technology market.

          </p>
        </div>

        <Grid container spacing={1} className="data-list">
          <Grid item xs={12} md={6}>
            HTML / JSX
            <LinearProgress variant="determinate" value={90} />

          </Grid>
          <Grid item xs={12} md={6}>
            CSS
            <LinearProgress variant="determinate" value={90} />

          </Grid>
          <Grid item xs={12} md={6}>
            SASS
            <LinearProgress variant="determinate" value={90} />

          </Grid>
          <Grid item xs={12} md={6}>
            JAVASCRIPT
            <LinearProgress variant="determinate" value={70} />

          </Grid>
          <Grid item xs={12} md={6}>
            REACT
            <LinearProgress variant="determinate" value={68} />

          </Grid>
          <Grid item xs={12} md={6}>
            BOOTSTRAP
            <LinearProgress variant="determinate" value={85} />

          </Grid>
          <Grid item xs={12} md={6}>
            SEMANTIC UI / MATERIAL UI
            <LinearProgress variant="determinate" value={80} />

          </Grid>
          <Grid item xs={12} md={6}>
            JQUERY
            <LinearProgress variant="determinate" value={70} />

          </Grid>
          <Grid item xs={12} md={6}>
            PHP
            <LinearProgress variant="determinate" value={60} />

          </Grid>
        </Grid>

      </Container>
    </div>
  );
};
