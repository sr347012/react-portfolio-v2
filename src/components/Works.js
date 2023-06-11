import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function Works() {
  
  return (
    <div>
      <h3 className='works-heading'>Works</h3>
    <Box
      sx={{
        
        // border: '1px dashed #EF9166',
        // borderRadius: '20px',
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 3,
          p: 2,
          width: 200,
          height: 320,
          rotate: '20deg',
          borderRadius: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'transparent',
          color: '#EF9166',
          fontSize: '24px',
          border: '1px solid #f47b03',
          boxShadow: '2px 2px 2px 2px #EF9166'
          
        },
      }}
    >
      {/* elevation={1} sx={{boxShadow: '0px 0px 1px 1px #EF9166',}} */}
      <Paper >Javascript</Paper>
      <Paper >React</Paper>
      <Paper >Angular</Paper>
      <Paper >Gaming</Paper>
      {/* <Paper elevation={1} sx={{boxShadow: '0px 0px 1px 1px #EF9166',}}>Others</Paper> */}
    </Box>
    </div>
  )
}

export default Works
