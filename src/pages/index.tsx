import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import HeroBanner from 'components/HeroBanner';
import Services from 'components/Services';
import Testimonials from 'components/Testimonials';
import Portfolio from 'components/Portfolio';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="About Me" />
      <HeroBanner />
      <Services />
      {/* <hr />
      <Testimonials /> */}
    <hr />
    <Portfolio />
    </Layout>
  );
};

export default IndexPage;
