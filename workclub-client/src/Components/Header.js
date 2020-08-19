import React from 'react';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

function Header() {
  const handleSignOut = () => {};
  return (
    <header>
      <h1>
        <ContactPhoneIcon className='header--icon' fontSize='large' />
        Contacts
      </h1>
    </header>
  );
}

export default Header;
