import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Headroom from 'react-headroom';
import Button from './button';


export const PureHeader = ({ siteTitle, backgroundColor, children }) => (
  <div
    style={{
      backgroundColor: backgroundColor,
      marginBottom: `4rem`,
      alignItems: `flex-end`,
      justifyContent: `space-between`,
      flexWrap: `wrap`,
      display: `flex`,
    }}
  >
    
    <div
      style={{
        margin: `0`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Link
          to="/"
          style={{
            color: `#3b383f`,
            textDecoration: `none`,
          }}
      >
        <h1 style={{ margin: 0 }}>
            {siteTitle}
        </h1>
      </Link>
    </div>
    <div style={{
      margin: `0`,
      padding: `1rem`,
      display: 'flex',
      alignItems: 'flex-end',
    }}>
      {children}
      
    </div>
  </div>
)

export const Header = ({ siteTitle, backgroundColor }) => (
  <Headroom>
    <PureHeader siteTitle={siteTitle} backgroundColor={backgroundColor}>
      <Button text="About" url="/about" use_border={false} theme="primary" link={true} new_tab={false} type="line" />
      <Button text="Add a Firm" url="/form" use_border={false} theme="primary" link={true} new_tab={false} type="line" />
    </PureHeader>
  </Headroom>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  backgroundColor: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  backgroundColor: ``
}

export default Header
