import React from 'react';
import {Container, Tab, Box} from '@mui/material';
import {TabContext, TabList, TabPanel, Masonry} from '@mui/lab';

export const Portfolio = () => {
  const [value, setValue] = React.useState ('1');

  const handleChange = (event, newValue) => {
    setValue (newValue);
  };
  return (
    <div id="portfolio" className="section">
      <Container maxWidth="xl">
        <div className="section-title ">
          <div className="h2">PORTFOLIO</div>
          <p className="p2">
            I have worked on various projects. Most of them are made from scratch in order to achieve the best results. Here is a small selection of my work .
          </p>
        </div>
        <TabContext value={value}>
          <Box>
            <TabList onChange={handleChange} centered>
              <Tab className="h5" label="All" value="1" />
              <Tab className="h5" label="CSS/Bootstrap" value="2" />
              <Tab className="h5" label="React" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Box>
              <Masonry spacing={2} columns={{xs: 1, sm: 2, md: 3}}>
                {itemData.map ((item, index) => (
                  <div className="portfolio-wrap" key={index}>

                    <img
                      src={`${item.img}?w=162&auto=format`}
                      srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                      style={{
                        borderBottomLeftRadius: 4,
                        borderBottomRightRadius: 4,
                        display: 'block',
                        width: '100%',
                      }}
                    />
                    <div className="portfolio-info">
                      <h4 className="h5">{item.title}</h4>

                      <div className="portfolio-links">

                        <a
                          href={item.url}
                          className="portfolio-details-lightbox h6"
                        >
                          {item.url}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </Masonry>
            </Box>
          </TabPanel>
          <TabPanel value="2">
          <Masonry spacing={2} columns={{xs: 1, sm: 2, md: 3}}>
                {staticData.map ((item, index) => (
                  <div className="portfolio-wrap" key={index}>

                    <img
                      src={`${item.img}?w=162&auto=format`}
                      srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                      style={{
                        borderBottomLeftRadius: 4,
                        borderBottomRightRadius: 4,
                        display: 'block',
                        width: '100%',
                      }}
                    />
                    <div className="portfolio-info">
                      <h4 className="h5">{item.title}</h4>

                      <div className="portfolio-links">

                        <a
                          href={item.url}
                          className="portfolio-details-lightbox h6"
                        >
                          {item.url}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </Masonry>
          </TabPanel>
          <TabPanel value="3">
          <Masonry spacing={2} columns={{xs: 1, sm: 2, md: 3}}>
                {reactData.map ((item, index) => (
                  <div className="portfolio-wrap" key={index}>

                    <img
                      src={`${item.img}?w=162&auto=format`}
                      srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                      style={{
                        borderBottomLeftRadius: 4,
                        borderBottomRightRadius: 4,
                        display: 'block',
                        width: '100%',
                      }}
                    />
                    <div className="portfolio-info">
                      <h4 className="h5">{item.title}</h4>

                      <div className="portfolio-links">

                        <a
                          href={item.url}
                          className="portfolio-details-lightbox h6"
                        >
                          {item.url}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </Masonry>
          </TabPanel>
        </TabContext>
      </Container>
    </div>
  );
};
const itemData = [
  {
    img: '../assets/doctor-network.JPG',
    title: 'Docktor Network',
    url: 'https://doctor-network.netlify.app/',
  },
  {
    img: '../assets/focus.JPG',
    title: 'Wedding Focus',
    url: 'https://wedding-focus.netlify.app/',
  },
  {
    img: '../assets/guled.JPG',
    title: 'Guled',
    url: ' https://guleed-home.netlify.app/',
  },
  {
    img: '../assets/restraunt.JPG',
    title: 'Lanta Wok',
    url: 'https://retraunt.netlify.app/',
  },
  {
    img: '../assets/crypto.JPG',
    title: 'Crypto Bros',
    url: 'https://crypto-bros.netlify.app/',
  },
  {
    img: '../assets/word-skill.JPG',
    title: 'Word Skill',
    url: 'https://word-skill.netlify.app/',
  },
  {
    img: '../assets/counter.JPG',
    title: 'Counter',
    url: 'https://counterapp12.netlify.app/',
  },
  {
    img: '../assets/ticktak.JPG',
    title: 'Tick Tak Toe',
    url: 'https://tic-tac-toe-run.netlify.app/',
  },
  {
    img: '../assets/todo.JPG',
    title: 'Todo',
    url: 'https://todotask-here.netlify.app/',
  },
  

];
const staticData = [
  {
    img: '../assets/doctor-network.JPG',
    title: 'Docktor Network',
    url: 'https://doctor-network.netlify.app/',
  },
  {
    img: '../assets/focus.JPG',
    title: 'Wedding Focus',
    url: 'https://wedding-focus.netlify.app/',
  },
  {
    img: '../assets/guled.JPG',
    title: 'Guled',
    url: ' https://guleed-home.netlify.app/',
  },
  {
    img: '../assets/restraunt.JPG',
    title: 'Lanta Wok',
    url: 'https://retraunt.netlify.app/',
  },
  {
    img: '../assets/crypto.JPG',
    title: 'Crypto Bros',
    url: 'https://crypto-bros.netlify.app/',
  },
  {
    img: '../assets/word-skill.JPG',
    title: 'Word Skill',
    url: 'https://word-skill.netlify.app/',
  },


];
const reactData = [
  {
    img: '../assets/counter.JPG',
    title: 'Counter',
    url: 'https://counterapp12.netlify.app/',
  },
  {
    img: '../assets/ticktak.JPG',
    title: 'Tick Tak Toe',
    url: 'https://tic-tac-toe-run.netlify.app/',
  },
  {
    img: '../assets/todo.JPG',
    title: 'Todo',
    url: 'https://todotask-here.netlify.app/',
  },
  


];