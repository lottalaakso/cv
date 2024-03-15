import React from 'react';
import ContactPhoneRoundedIcon from '@mui/icons-material/ContactPhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import CakeRoundedIcon from '@mui/icons-material/CakeRounded';

const Header = () => {
  return (
    <div className="header">
      <h1>Lotta Laakso</h1>
      <p><CakeRoundedIcon/>11.08.2000  
      <EmailRoundedIcon/>lottaolivia@gmail.com  
      <ContactPhoneRoundedIcon />+350 509129968 
      <a href="https://www.linkedin.com/in/lotta-laakso-731b59220/" target="blank" style={{ color: 'white' }}>Linkedin</a></p>
    
    </div>
  );
};

export default Header;

