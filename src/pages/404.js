import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Link } from 'gatsby';


const NotFoundPage = () => {
  return(
    <Layout>
      <SEO title="404: Not found" />
      <div>
        <div>
          <h1>Hmm, looks like there's nothing here.</h1>
        </div>
        <div>
          <Link to="/">Go Home</Link>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage;