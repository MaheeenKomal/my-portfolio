import React from 'react';
import {Container, Stack} from '@mui/material';
import {BsSkype, BsGithub, BsLinkedin} from 'react-icons/bs';
export const Footer = () => {
  return (
    <div id="footer" className="section">
      <Container maxWidth="xl">
        <div className="section-title ">
          <div className="footer-text">
            Maheen Komal
          </div>
          <p className="p2">
            Web design is all about the way a website looks, while front end development is how the design actually gets implemented on the website. I Build websites that are user friendly and easy to understand. You can find me on the links below.
            {' '}
          </p>
          <Stack
            direction="row"
            spacing={4}
            className="social-icon-box"
            justifyContent="center"
          >

            <a href="https://github.com/MaheeenKomal" className="social-icon">
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/maheen-komal-a86431160"
              className="social-icon"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://join.skype.com/invite/LmEO8thYrGK8"
              className="social-icon"
            >
              <BsSkype />
            </a>
          </Stack>
        </div>
      </Container>
    </div>
  );
};
