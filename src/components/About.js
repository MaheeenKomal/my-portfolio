import React from 'react';
import {Container, Stack, Grid, ListItem, ListItemIcon} from '@mui/material';

import ArrowForwardIosOutlinedIcon
  from '@mui/icons-material/ArrowForwardIosOutlined';

export const About = () => {
  const bio = {
    introduction: '   I am a CS graduate with more than 2 years of experience in Frontend Development. I can achieve any design from customization or from scratch. Have a passion for responsive website design and a firm believer in the mobile-first approach.',
    title: 'Frontend Developer',
    subTitle: '  Being a Frontend Developer I love and enjoy creating beautiful pages with high performance.',
    img: '../assets/about.png',
    personalInfo: {
      degree: 'Bachelors of Science in Computer Science',
      birthday: '18 November 1998',
      phone: '+923379769097',
      city: 'Islamabad, Pakistan',
      email: 'maheenkomal992@gmail.com',
      freelance: 'available',
    },
  };
  return (
    <div id="about" className="section">
      <Container maxWidth="xl">
        <div className="section-title ">
          <div className="h2">ABOUT</div>
          <p className="p2">
            {bio.introduction}

          </p>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <img className="about-img" src={bio.img} alt="about-img" />
          </Grid>
          <Grid item xs={12} md={8}>
            <Stack className="about-intro" direction="column" spacing={2}>
              <div className="h3 ">{bio.title}</div>
              <p className="p2">  {bio.subTitle}</p>

              <Grid container spacing={1} className="data-list">

                {Object.entries (bio.personalInfo).map (([key, value]) => {
                  return (
                    <Grid item xs={12} md={6} key={key}>
                      <ListItem>
                        <ListItemIcon className="list-icon">
                          <ArrowForwardIosOutlinedIcon />
                        </ListItemIcon>
                        <div className=" about-text">
                          <span className="h4"> {key}: </span>
                          {bio.personalInfo[key]}
                        </div>
                      </ListItem>
                    </Grid>
                  );
                })}
              </Grid>
            </Stack>

          </Grid>
        </Grid>

      </Container>
    </div>
  );
};
