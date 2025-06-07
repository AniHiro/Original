import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Original. Все права защищены.</p>
    </footer>
  );
};

export default Footer;
