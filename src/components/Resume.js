import React from 'react';
import {Container} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from '@mui/lab';

import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import Typography from '@mui/material/Typography';
import HtmlOutlinedIcon from '@mui/icons-material/HtmlOutlined';
import DeveloperModeOutlinedIcon
  from '@mui/icons-material/DeveloperModeOutlined';
export const Resume = () => {
  return (
    <div id="resume" className="section">
      <Container maxWidth="xl">
        <div className="section-title ">
          <div className="h2">Work experience</div>
          <p className="p2">
            Frontend Developer with more than 2 years of experience in helping companies to create and maintain a better code base for reusability. I am a quick learner who love to explore and apply new concepts on my websites to achieve the best outcome.
          </p>
        </div>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent
              sx={{m: 'auto 0'}}
              align="right"
              variant="h5"
              className="theme-color"
            >
              Priceoye
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="secondary">
                <DeveloperModeOutlinedIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{py: '12px', px: 2}}>

              <Typography variant="h5 position-name">
                Software Engineer
              </Typography>
              <Typography>
                Identified web based user interactions and developed highly responsive user interface components via Vue Js.
              </Typography>
              <Typography>
                Worked with Laravel framework to achieve the design needs of Priceoye Pages.
              </Typography>

            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent
              sx={{m: 'auto 0'}}
              variant="h5"
              className="theme-color"
            >
              Pioneer 3D Studios
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{py: '12px', px: 2}}>
              <Typography variant="h5 position-name">
                Frontend Web Developer
              </Typography>
              <Typography>
                Created SPA using React JS.
              </Typography>
              <Typography>
                Worked with React Components, Forms, Events, Routers, and Animations.
              </Typography>
              <Typography>
                Implemented SEMANTIC UI and other libraries and customize them according to the design need.
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent
              sx={{m: 'auto 0'}}
              align="right"
              variant="h5"
              className="theme-color"
            >
              Media Park(SMC-Pvt.) Ltd
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="warning">
                <HtmlOutlinedIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{py: '12px', px: 2}}>
              <Typography variant="h5 position-name">
                Junior Frontend Web Developer

              </Typography>
              <Typography>
                Converted PSD and XD designs into website from scratch and implemented advance JavaScript features to make a website user-friendly and interactive.

              </Typography>
              <Typography>
                Implemented Light Gallery , Isotope , Swiper Slider , Slick Slider , JavaScript and JQuery plugins and many more to enhance the functionalities of a website.
              </Typography>

            </TimelineContent>
          </TimelineItem>

        </Timeline>
      </Container>
    </div>
  );
};
