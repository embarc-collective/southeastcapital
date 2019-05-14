(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{191:function(t,e,r){"use strict";r.r(e);var a=r(9),n=(r(0),r(200)),i=r(198),o=r(193);e.default=function(){return Object(a.d)(n.a,null,Object(a.d)(i.a,{title:"Home"}),Object(a.d)("div",{style:{maxWidth:900}},Object(a.d)("h1",null,"A directory of startup funders in the Southeast United States"),Object(a.d)("p",null,"We believe conveners and community partners can help provide transparency and education to the process of starting and scaling a startup. Our hope with this list is that startups can more easily find local capital resources and that funding opportunities will be better distributed throughout the Southeast—no matter where you are located."),Object(a.d)("p",null,"Note: This is a list of capital providers of venture-backed startups in the Southeast US region; currently active as a firm or investor. To include any firm or investor we did not already surface, please ",Object(a.d)(o.a,{to:"/form"},"add your firm"),".")),Object(a.d)("iframe",{title:"airtable-embed",src:"https://airtable.com/embed/shr3rDt8NXRAhT8dO?backgroundColor=transparent",frameborder:"0",onmousewheel:"",width:"100%",height:"900px",style:{background:"#ffc730",border:"1px solid #ccc"}}))}},193:function(t,e,r){"use strict";r.d(e,"b",function(){return u});var a=r(9),n=r(0),i=r.n(n),o=r(4),s=r.n(o),c=r(36),d=r.n(c);r.d(e,"a",function(){return d.a});r(194);var l=i.a.createContext({}),u=function(t){return Object(a.d)(l.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):Object(a.d)("div",null,"Loading (StaticQuery)")})};u.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},194:function(t,e,r){var a;t.exports=(a=r(196))&&a.default||a},195:function(t){t.exports={data:{site:{siteMetadata:{title:"Southeast Capital Landscape",primary_background_color:"white",primary_text_color:"#3b3836",overscroll_background_color:"#ffc730"}}}}},196:function(t,e,r){"use strict";r.r(e);r(62);var a=r(0),n=r.n(a),i=r(4),o=r.n(i),s=r(63),c=r(2),d=function(t){var e=t.location,r=c.default.getResourcesForPathnameSync(e.pathname);return n.a.createElement(s.a,Object.assign({location:e,pageResources:r},r.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=d},197:function(t){t.exports={data:{site:{siteMetadata:{primary_background_color:"white",primary_text_color:"#3b3836"}}}}},198:function(t,e,r){"use strict";var a=r(9),n=r(199),i=(r(0),r(4)),o=r.n(i),s=r(203),c=r.n(s),d=r(193);function l(t){var e=t.description,r=t.lang,i=t.meta,o=t.keywords,s=t.title;return Object(a.d)(d.b,{query:u,render:function(t){var n=e||t.site.siteMetadata.description;return Object(a.d)(c.a,{htmlAttributes:{lang:r},title:s,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:s},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})},data:n})}l.defaultProps={lang:"en",meta:[],keywords:[]},l.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},e.a=l;var u="1025518380"},199:function(t){t.exports={data:{site:{siteMetadata:{title:"Southeast Capital Landscape",description:"A directory of Venture Capital Firms in the Southeast",author:""}}}}},200:function(t,e,r){"use strict";var a=r(204),n=r(9),i=r(195),o=r(0),s=r.n(o),c=r(4),d=r.n(c),l=r(193),u=r(201),b=r.n(u),p=(r(202),r(197)),m=function(t){var e=t.text,r=t.url,a=t.use_border,i=t.link,o=t.new_tab,s=t.type,c=function(t,e,r,a){var i="",o="\n    border: "+(a?"1px solid":"0")+";\n    margin: 1rem;\n    text-align: center;\n    text-decoration: none;\n    min-width: 100px;\n    max-width: 300px;\n    display: inline-block;\n\n  ";return i="fill"===r?"\n      background: linear-gradient(to right, "+t+" 50%, "+e+" 50%);\n      transition:all 0.5s ease;\n      background-size: 205% 100%;\n      background-position:right bottom;\n      color: "+t+";\n      padding: 1rem 1.5rem;\n      &:hover {\n        background-position:left bottom;\n        transition:all 0.5s ease;\n        color: "+e+";\n      }\n    ":"\n      position: relative;\n      padding: 0.5rem;\n      color: "+t+';\n      &:before {\n        content: "";\n        position: absolute;\n        width: 100%;\n        height: 3px;\n        bottom: 0;\n        left: 0;\n        background-color: '+t+";\n        visibility: hidden;\n        -webkit-transform: scaleX(0);\n        transform: scaleX(0);\n        -webkit-transition: all 0.3s ease-in-out 0s;\n        transition: all 0.3s ease-in-out 0s;\n      }\n      &:hover:before {\n        visibility: visible;\n        -webkit-transform: scaleX(1);\n        transform: scaleX(1);\n      }\n    ",Object(n.c)(o,";",i,";")}(t.primary,t.secondary,s,a);return!0===i?Object(n.d)(l.a,{to:r,css:c},e):o?Object(n.d)("a",{href:r,css:c,target:"_blank",rel:"noopener noreferrer"},e):Object(n.d)("a",{href:r,css:c},e)},h=function(t){var e=t.text,r=t.url,a=t.use_border,i=t.theme,o=t.link,s=t.new_tab,c=t.type;return Object(n.d)(l.b,{query:"1492660998",render:function(t){var d="primary"===i?t.site.siteMetadata.primary_text_color:t.site.siteMetadata.primary_background_color,l="secondary"===i?t.site.siteMetadata.primary_text_color:t.site.siteMetadata.primary_background_color;return Object(n.d)(m,{text:e,url:r,use_border:a,link:o,new_tab:s,type:c,primary:d,secondary:l})},data:p})};h.propTypes={text:d.a.string.isRequired,url:d.a.string.isRequired,use_border:d.a.bool,theme:d.a.oneOf(["primary","secondary"]),link:d.a.bool,new_tab:d.a.bool,type:d.a.oneOf(["fill","line"])},h.defaultProps={link:!0,theme:"primary",type:"fill",use_border:!1};var g=h,f=function(t){var e=t.siteTitle,r=t.backgroundColor,a=t.children;return Object(n.d)("div",{style:{backgroundColor:r,marginBottom:"4rem",alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap",display:"flex"}},Object(n.d)("div",{style:{margin:"0",padding:"1.45rem 1.0875rem"}},Object(n.d)(l.a,{to:"/",style:{color:"#3b383f",textDecoration:"none"}},Object(n.d)("h1",{style:{margin:0}},e))),Object(n.d)("div",{style:{margin:"0",padding:"1rem",display:"flex",alignItems:"flex-end"}},a))},y=function(t){var e=t.siteTitle,r=t.backgroundColor;return Object(n.d)(b.a,null,Object(n.d)(f,{siteTitle:e,backgroundColor:r},Object(n.d)(g,{text:"About",url:"/about",use_border:!1,theme:"primary",link:!0,new_tab:!1,type:"line"}),Object(n.d)(g,{text:"Add a Firm",url:"/form",use_border:!1,theme:"primary",link:!0,new_tab:!1,type:"line"})))};y.propTypes={siteTitle:d.a.string,backgroundColor:d.a.string},y.defaultProps={siteTitle:"",backgroundColor:""};var w=y,v=Object(a.a)("div",{target:"e1czhmnq0"})({name:"gc6sau",styles:"margin-left:auto;margin-right:auto;padding-top:4rem;display:flex;flex-direction:column;align-items:center;flex-grow:1;min-height:90vh;"}),j=Object(a.a)("div",{target:"e1czhmnq1"})({name:"iq7xrw",styles:"width:100vw;min-width:350px;max-width:90vw;margin-bottom:2rem;"}),O=Object(a.a)("footer",{target:"e1czhmnq2"})({name:"1hwq4r0",styles:"width:50vw;max-width:960px;margin-left:auto;margin-right:auto;background-color:inherit;"}),k=function(t){var e=t.children;return Object(n.d)(l.b,{query:"2949815984",render:function(t){return Object(n.d)(s.a.Fragment,null,Object(n.d)(n.a,{styles:Object(n.c)("html{background-color:",t.site.siteMetadata.overscroll_background_color,";color:",t.site.siteMetadata.primary_text_color,";}body{margin:0;background-color:",t.site.siteMetadata.primary_background_color,";color:",t.site.siteMetadata.primary_text_color,";}template{display:none;}h1,h2,h3,h4,h5,h6{text-transform:none;}")}),Object(n.d)(w,{siteTitle:t.site.siteMetadata.title,backgroundColor:t.site.siteMetadata.overscroll_background_color}),Object(n.d)(v,null,Object(n.d)(j,null,e),Object(n.d)("div",{css:Object(n.c)("margin-top:auto;padding:2rem;width:100vw;background-color:",t.site.siteMetadata.overscroll_background_color,";")},Object(n.d)(O,null,"Built with ",Object(n.d)("a",{href:"https://www.gatsbyjs.org"},"Gatsby")," | Hosted on ",Object(n.d)("a",{href:"https://github.com/embarc-collective/southeastcapital"},"Github")))))},data:i})};k.propTypes={children:d.a.node.isRequired};e.a=k}}]);
//# sourceMappingURL=component---src-pages-index-js-14242ddd074acfcdd477.js.map