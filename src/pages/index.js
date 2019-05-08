import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => {
  return(
    <Layout>
      <SEO title="Home" />
      <div style={{maxWidth:900}}>
        <h1>A directory of startup funders in the Southeast United States</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <iframe title="airtable embed" src="https://airtable.com/embed/shr3rDt8NXRAhT8dO?backgroundColor=transparent" frameborder="0" onmousewheel="" width="100%" height="900px" style={{background: '#ffc730', border: '1px solid #ccc'}}></iframe>
    </Layout>
  )
}

export default IndexPage;