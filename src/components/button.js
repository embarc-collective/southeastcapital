import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby'
import { css } from "@emotion/core"
//import './button.css';
import { Link } from 'gatsby';

const make_style = (primary, secondary, type, use_border) => {
  var styles = ``
  const base = `
    border: ${use_border ? '1px solid' : '0'};
    margin: 1rem;
    text-align: center;
    text-decoration: none;
    min-width: 100px;
    max-width: 300px;
    display: inline-block;

  `
  if(type === 'fill') {
    styles = `
      background: linear-gradient(to right, ${primary} 50%, ${secondary} 50%);
      transition:all 0.5s ease;
      background-size: 205% 100%;
      background-position:right bottom;
      color: ${primary};
      padding: 1rem 1.5rem;
      &:hover {
        background-position:left bottom;
        transition:all 0.5s ease;
        color: ${secondary};
      }
    `
  }
  else {
    styles = `
      position: relative;
      padding: 0.5rem;
      color: ${primary};
      &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;
        bottom: 0;
        left: 0;
        background-color: ${primary};
        visibility: hidden;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transition: all 0.3s ease-in-out 0s;
        transition: all 0.3s ease-in-out 0s;
      }
      &:hover:before {
        visibility: visible;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
      }
    `
  }
  return css`${base};${styles};`
}

export const PureButton = ({text, url, use_border, link, new_tab, type, primary, secondary}) => {
  const custom_style = make_style(primary, secondary, type, use_border)
  if(link === true) {
    return (     
      <Link to={url} css={custom_style}>
        {text}
      </Link>
    )
  }
  else if(new_tab) {
    return (     
      <a href={url} css={custom_style} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    )
  }
  else {
    return (     
      <a href={url} css={custom_style}>
        {text}
      </a>
    )
  }
}

export const Button = ({text, url, use_border, theme, link, new_tab, type}) => (
  <StaticQuery
    query={graphql`
      query ButtonColorQuery {
        site {
          siteMetadata {
            primary_background_color
            primary_text_color
          }
        }
      }
    `}
    render={data => {
      const primary = theme === 'primary' ? data.site.siteMetadata.primary_text_color : data.site.siteMetadata.primary_background_color;
      const secondary = theme === 'secondary' ? data.site.siteMetadata.primary_text_color : data.site.siteMetadata.primary_background_color;
      return(
        <PureButton
          text={text}
          url={url}
          use_border={use_border}
          link={link}
          new_tab={new_tab}
          type={type}
          primary={primary}
          secondary={secondary}
        />
      )
    }}
  />
)

Button.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  use_border: PropTypes.bool,
  theme: PropTypes.oneOf(['primary', 'secondary']),
  link: PropTypes.bool, // true if this is an internal link
  new_tab: PropTypes.bool, // true if this is an external link that opens in a new tab
  type: PropTypes.oneOf(['fill', 'line'])
}

Button.defaultProps = {
  link: true,
  theme: 'primary',
  type: 'fill',
  use_border: false
}

export default Button;