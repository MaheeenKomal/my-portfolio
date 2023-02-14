import React from 'react';

import {Container, Stack} from '@mui/material';
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import {BsSkype, BsGithub, BsLinkedin} from 'react-icons/bs';
export const Header = () => {
  const [text] = useTypewriter ({
    words: ['Frontend Developer', 'Web Designer', 'Freelancer'],
    loop: 0,
  });
  return (
    <div id="header">
      <Container maxWidth="xl">
        <Stack
          className="header-info"
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing={3}
        >
          <h1 className="h1">Maheen Komal</h1>
          <p className="p1">
            I'm
            <span className="theme-color"> {text}</span>
            <Cursor cursorColor="blue" />
          </p>
          <Stack direction="row" spacing={4} className="social-icon-box">

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
        </Stack>
      </Container>
    </div>
  );
};
