import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Link } from 'gatsby';

const About = () => {
  return(
    <Layout>
      <SEO title="About" />
      <div style={{maxWidth:900}}>
        <div>
          <h1>About</h1>
          <p>The Southeastern U.S. produces 20% of American GDP and is home to half of America's fasting growing cities. In addition to 84 Fortune 500 companies, 15% of wealthiest Americans, and six leading American universities, as of 2018 more than 2,335 startups called the Southeast home. Yet, despite economic stability, a rapidly growing talent pool, and public-private emphasis on innovation, only 5.3% of 2018's record-breaking venture capital funds found its way into the region.</p>
          <p>Together, we set out to create a living and breathing resource to help connect local startups with funding opportunities in the Southeast. We seek to drive founders and funds to look beyond their own city limits and consider the collective potential of a collaborative Southeast (#BuildInSE). New industries and emerging business models require access to diverse capital sources made possible by cross-regional connectivity.</p>
          <p>For this project, we defined the Southeast as a collection of states including Alabama, Florida, Georgia, Kentucky, Mississippi, North Carolina, South Carolina, Tennessee, Virginia, &amp; West Virginia. This report is a high-level illustration of the Southeast Capital Landscape that seeks to outline key organizations, investors, and trends throughout the region. Data was aggregated and analyzed from PWC MoneyTree Reports, BIP Capital, Crunchbase, and self-reported by accelerators, entrepreneurs, and investors from within the region.</p>
          <p>Collaboration, as demonstrated through this project, is vital to taking the Southeast to the next level in growing and retaining more high value companies. Meet the collaborators:</p>
          <p>ModernCapital: At ModernCapital, our mission is to increase the number of startup success stories in the Southeast by leveraging a cross-regional, collaborative network. We believe the future of company building will be geographically distributed, hyper-personalized, and driven by creativity. Based in Nashville, ModernCapital believes the best talent will #BuildInSE (translation: Build In Southeast).</p>
          <p>Embarc Collective: Embarc Collective helps Tampa Bay's startup talent build bold, scalable, thriving companies. Launched in early 2019, Embarc Collective's offering is hands-on and driven by the specific goals and needs of each startup being supported.</p>
          <p>Launch Tennessee: Launch Tennessee is a public-private partnership that supports entrepreneurs from ideation to exit. We’re guided by a vision of making Tennessee the most startup-friendly state in the country, so that entrepreneurs stay here to build companies and create jobs.</p>
          <p>HQ1: HQ1 believes in the financial upside of flyover country. We capitalize on this through early stage investment, network building, education, and by always striving to be bold.</p>
        </div>
        <div>
          <Link to="/">Go Back Home</Link>
        </div>
      </div>
    </Layout>
  )
}

export default About;