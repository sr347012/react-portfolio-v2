import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import './../Assets/001.png';
import './Styles.css';

function History() {
  return (
    <>
    <div className='history-heading'>  <h3>History</h3></div>
    <div className='history'>
    <Timeline position="alternate">
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0', 
        // boxShadow: '1px 1px 5px 0px white', 
        fontSize: '24px' }}
        align="right"
        variant="body"
        color="#EF9166"
      >
        Dec 2008
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color="primary" variant="outlined">
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
      <span className='img-tcs'></span>
      </TimelineContent>
      {/* <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="span" color="white">
          Assistant System Engineer
        </Typography>
        <Typography color="white">Started my career</Typography>
      </TimelineContent> */}
    </TimelineItem>

    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' ,fontSize: '24px'}}
        variant="body"

        color="#EF9166"
        align='right'
      >
        April 2011
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color="primary" variant="outlined">
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
      <span className='img-brillio'></span>
      </TimelineContent>
      {/* <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="span" color="white">
          Senior Software Engineer
        </Typography>
        <Typography color="white">Mainframes Application Development & Db2 Administration</Typography>
      </TimelineContent> */}
    </TimelineItem>
    
    <TimelineItem>
    <TimelineOppositeContent
        sx={{ m: 'auto 0' ,fontSize: '24px'}}
        variant="body"
        color="#EF9166"
      >
        October 2014
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color="primary" variant="outlined">
        </TimelineDot>
        <TimelineConnector  />
      </TimelineSeparator>
      <TimelineContent>
      <span className='img-cgi'></span>
      </TimelineContent>
      {/* <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="span" color="white">
          Senior Software Engineer
        </Typography>
        <Typography color="white">DB2 Administration</Typography>
      </TimelineContent> */}
    </TimelineItem>
    
    <TimelineItem>
    <TimelineOppositeContent
        sx={{ m: 'auto 0',fontSize: '24px' }}
        variant="body"
        color="#EF9166"
      >
        April 2016
      </TimelineOppositeContent>
      <TimelineSeparator >
        <TimelineConnector />
        <TimelineDot color="primary" variant="outlined">
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
      <span className='img-wipro'></span>
      </TimelineContent>
      {/* <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="span" color="white">
          Lead
        </Typography>
        <Typography color="white">Angular & React JS</Typography>
      </TimelineContent> */}
    </TimelineItem>
    <TimelineItem>
    <TimelineOppositeContent
        sx={{ m: 'auto 0',fontSize: '24px' }}
        variant="body"
        color="#EF9166"
      >
        June 2021 
      </TimelineOppositeContent>
      <TimelineSeparator >
        <TimelineConnector  />
        <TimelineDot color="primary" variant="outlined">
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
      <span className='img-photon'></span>
      </TimelineContent>      
      {/* <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="span" color="white">
          Technical Lead
        </Typography>
        <Typography color="white">Angular & React JS</Typography>
      </TimelineContent> */}
    </TimelineItem>
    <TimelineItem>
    <TimelineOppositeContent
        sx={{ m: 'auto 0' ,fontSize: '24px'}}
        variant="body"
        color="#EF9166"
      >
        August 2022 
      </TimelineOppositeContent>
      <TimelineSeparator >
        <TimelineConnector  />
        <TimelineDot color="primary" variant="outlined">
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
      <span className='img-abacus'></span>
      </TimelineContent>      
      {/* <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="span" color="white">
          Technical Lead
        </Typography>
        <Typography color="white">React JS</Typography>
      </TimelineContent> */}
    </TimelineItem>
    <TimelineItem>
    <TimelineOppositeContent
        sx={{ m: 'auto 0' ,fontSize: '24px'}}
        variant="body"
        color="#EF9166"
      >
        June 2023 
      </TimelineOppositeContent>
      <TimelineSeparator >
        <TimelineConnector  />
        <TimelineDot color="primary" variant="outlined">
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
      <span className='img-psl'></span>
      </TimelineContent>      
      {/* <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6"  component="span" color="white">
          Architect
        </Typography>
        <Typography color="white">React JS</Typography>
      </TimelineContent> */}
    </TimelineItem>
  </Timeline>
    </div>

    </>

  )
}

export default History
