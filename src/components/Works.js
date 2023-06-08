import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function Works() {
  return (
    <div>
    <Box
      sx={{
        
        // border: '1px dashed #EF9166',
        // borderRadius: '20px',
        display: 'flex',
        '& > :not(style)': {
          m: 2,
          p: 2,
          width: 200,
          height: 320,
          borderRadius: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'transparent',
          color: '#EF9166',
          fontSize: '24px',
          border: '1px solid #f47b03',
        },
      }}
    >
      <Paper elevation={1} sx={{boxShadow: '0px 0px 1px 1px #EF9166',}}>Javascript</Paper>
      <Paper elevation={1} sx={{boxShadow: '1px 1px 3px 1px #EF9166',}}>React</Paper>
      <Paper elevation={24} sx={{boxShadow: '1px 1px 5px 2px #EF9166',}}>Angular</Paper>
      <Paper elevation={1} sx={{boxShadow: '1px 1px 3px 2px #EF9166',}}>Gaming</Paper>
      {/* <Paper elevation={1} sx={{boxShadow: '0px 0px 1px 1px #EF9166',}}>Others</Paper> */}
    </Box>
    </div>
  )
}

export default Works
