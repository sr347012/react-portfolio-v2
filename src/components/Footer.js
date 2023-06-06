import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <div class="footer-icons">            
      <a href="https://www.youtube.com/channel/UCJnQ77FsLDZmQtnZyxU8IYA">      
        <YouTubeIcon style={{color:'#EF9166'}}/>
      </a>  
      <a href="https://github.com/sr347012/">
        <GitHubIcon style={{color:'#EF9166'}}/>
      </a>
      <a href="https://www.instagram.com/shafia_sriram/">  
        <InstagramIcon style={{color:'#EF9166'}}/>  
      </a>
      <a href="https://twitter.com/Sriram2387">
        <TwitterIcon style={{color:'#EF9166'}}/>  
      </a>            
      <a href="https://www.linkedin.com/in/sriramachandrakarra/">
        <LinkedInIcon style={{color:'#EF9166'}}/>  
      </a>            
    </div>
  )
}

export default Footer
