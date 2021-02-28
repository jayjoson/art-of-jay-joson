import * as React from 'react';
import Header from '../components/header/header';
import ContactContent from '../components/contact/contactContent';
import favicon from '../images/icon.png';
import Helmet from 'react-helmet';

// Contact page component
const ContactPage = () => {
  return (
    <main style={{ height: '100vh' }}>
      <Helmet>
        <link rel='icon' href={favicon} />
      </Helmet>
      <Header />
      <ContactContent />
    </main>
  );
};

export default ContactPage;
