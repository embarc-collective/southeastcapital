import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Link } from 'gatsby';

const IndexPage = () => {
  return(
    <Layout>
      <SEO title="Home" />
      <div style={{maxWidth:900}}>
        <h1>A directory of startup funders in the Southeast United States</h1>
        <p>We believe conveners and community partners can help provide transparency and education to the process of starting and scaling a startup. Our hope with this list is that startups can more easily find local capital resources and that funding opportunities will be better distributed throughout the Southeast—no matter where you are located.</p>
        <p>Note: This is a list of capital providers of venture-backed startups in the Southeast US region; currently active as a firm or investor. To include any firm or investor we did not already surface, please <Link to="/form">add your firm</Link>.</p>
      </div>
      <iframe title="airtable-embed" src="https://airtable.com/embed/shr3rDt8NXRAhT8dO?backgroundColor=transparent" frameborder="0" onmousewheel="" width="100%" height="900px" style={{background: '#ffc730', border: '1px solid #ccc'}}></iframe>
    </Layout>
  )
}

export default IndexPage;