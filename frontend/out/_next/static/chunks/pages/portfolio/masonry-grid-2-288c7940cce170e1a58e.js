_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[80],{"61uB":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o,n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(){function e(e,a){for(var t=0;t<a.length;t++){var o=a[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(a,t,o){return t&&e(a.prototype,t),o&&e(a,o),a}}(),s=t("q1tI"),l=(o=s)&&o.__esModule?o:{default:o};var u={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0},c=function(e){function a(e){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));t.reCalculateColumnCount=t.reCalculateColumnCount.bind(t),t.reCalculateColumnCountDebounce=t.reCalculateColumnCountDebounce.bind(t);var o=void 0;return o=t.props.breakpointCols&&t.props.breakpointCols.default?t.props.breakpointCols.default:parseInt(t.props.breakpointCols)||2,t.state={columnCount:o},t}return function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,e),r(a,[{key:"componentDidMount",value:function(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"componentDidUpdate",value:function(){this.reCalculateColumnCount()}},{key:"componentWillUnmount",value:function(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"reCalculateColumnCountDebounce",value:function(){var e=this;window&&window.requestAnimationFrame?(window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame((function(){e.reCalculateColumnCount()}))):this.reCalculateColumnCount()}},{key:"reCalculateColumnCount",value:function(){var e=window&&window.innerWidth||1/0,a=this.props.breakpointCols;"object"!==("undefined"===typeof a?"undefined":i(a))&&(a={default:parseInt(a)||2});var t=1/0,o=a.default||2;for(var n in a){var r=parseInt(n);r>0&&e<=r&&r<t&&(t=r,o=a[n])}o=Math.max(1,parseInt(o)||1),this.state.columnCount!==o&&this.setState({columnCount:o})}},{key:"itemsInColumns",value:function(){for(var e=this.state.columnCount,a=new Array(e),t=[].concat(this.props.children||[]),o=0;o<t.length;o++){var n=o%e;a[n]||(a[n]=[]),a[n].push(t[o])}return a}},{key:"renderColumns",value:function(){var e=this.props,a=e.column,t=e.columnAttrs,o=void 0===t?{}:t,i=e.columnClassName,r=this.itemsInColumns(),s=100/r.length+"%",u=i;"string"!==typeof u&&(this.logDeprecated('The property "columnClassName" requires a string'),"undefined"===typeof u&&(u="my-masonry-grid_column"));var c=n({},a,o,{style:n({},o.style,{width:s}),className:u});return r.map((function(e,a){return l.default.createElement("div",n({},c,{key:a}),e)}))}},{key:"logDeprecated",value:function(e){console.error("[Masonry]",e)}},{key:"render",value:function(){var e=this.props,a=(e.children,e.breakpointCols,e.columnClassName,e.columnAttrs,e.column,e.className),t=function(e,a){var t={};for(var o in e)a.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}(e,["children","breakpointCols","columnClassName","columnAttrs","column","className"]),o=a;return"string"!==typeof a&&(this.logDeprecated('The property "className" requires a string'),"undefined"===typeof a&&(o="my-masonry-grid")),l.default.createElement("div",n({},t,{className:o}),this.renderColumns())}}]),a}(l.default.Component);c.defaultProps=u,a.default=c},BGCp:function(e,a,t){"use strict";t.r(a);var o=t("q1tI"),n=t.n(o),i=t("ncOK"),r=t("hDgm"),s=t("gy5E"),l=n.a.createElement;a.default=Object(s.a)((function(){return l(i.a,{parent:"home",title:"Portfolio"},l(r.default,{grid:2,colClass:"col-lg-6"}))}))},"g+mO":function(e,a){e.exports={allData:[{img:"/assets/images/portfolio/1.jpg"},{img:"/assets/images/portfolio/2.jpg"},{img:"/assets/images/portfolio/3.jpg"},{img:"/assets/images/portfolio/4.jpg"},{img:"/assets/images/portfolio/5.jpg"},{img:"/assets/images/portfolio/6.jpg"},{img:"/assets/images/portfolio/7.jpg"},{img:"/assets/images/portfolio/8.jpg"},{img:"/assets/images/portfolio/9.jpg"},{img:"/assets/images/portfolio/10.jpg"},{img:"/assets/images/portfolio/11.jpg"},{img:"/assets/images/portfolio/12.jpg"},{img:"/assets/images/portfolio/13.jpg"},{img:"/assets/images/portfolio/14.jpg"},{img:"/assets/images/portfolio/15.jpg"},{img:"/assets/images/portfolio/16.jpg"}],fashionData:[{img:"/assets/images/portfolio/2.jpg"},{img:"/assets/images/portfolio/4.jpg"},{img:"/assets/images/portfolio/7.jpg"}],bagsData:[{img:"/assets/images/portfolio/24.jpg"}],shoesData:[{img:"/assets/images/portfolio/24.jpg"},{img:"/assets/images/portfolio/3.jpg"}],watchData:[{img:"/assets/images/portfolio/5.jpg"},{img:"/assets/images/portfolio/14.jpg"},{img:"/assets/images/portfolio/6.jpg"},{img:"/assets/images/portfolio/17.jpg"},{img:"/assets/images/portfolio/18.jpg"}]}},hDgm:function(e,a,t){"use strict";t.r(a);var o=t("q1tI"),n=t.n(o),i=t("1Yj4"),r=t("UU0N"),s=t("61uB"),l=t.n(s),u=t("g+mO"),c=t("GTV5"),m=n.a.createElement;a.default=function(e){var a=e.colClass,t=e.grid,s=e.fluid,p=Object(o.useState)("portfolio"),f=p[0],g=p[1];return m(n.a.Fragment,null,m("section",{className:"portfolio-section grid-portfolio ratio2_3 portfolio-padding"},m(i.a,{fluid:s},m(c.d,null,m(c.b,{align:"center",id:"form1"},m(c.a,{className:"filter-button project_button ".concat("all"==f?"active":""),onClick:function(){return g("all")},"data-filter":"all"},"All"),m(c.a,{className:"filter-button project_button ".concat("fashion"==f?"active":""),onClick:function(){return g("fashion")},"data-filter":"fashion"},"Fashion"),m(c.a,{className:"filter-button project_button ".concat("bags"==f?"active":""),onClick:function(){return g("bags")},"data-filter":"bags"},"Bags"),m(c.a,{className:"filter-button project_button ".concat("shoes"==f?"active":""),onClick:function(){return g("shoes")},"data-filter":"shoes"},"Shoes"),m(c.a,{className:"filter-button project_button ".concat("watch"==f?"active":""),onClick:function(){return g("watch")},"data-filter":"watch"},"Watch")),m(i.a,{fluid:s},m(c.c,null,m(l.a,{breakpointCols:t,className:"isotopeContainer row",columnClassName:"isotopeSelector ".concat(a)},u.allData.length>0?u.allData.map((function(e,a){return m("div",{className:"overlay",key:a},m("div",{className:"border-portfolio"},m("div",null,m(r.a,{src:e.img,className:"img-fluid blur-up lazyload"}))))})):"!! No Blogs Found")),m(c.c,null,m(l.a,{breakpointCols:t,className:"isotopeContainer row",columnClassName:"isotopeSelector ".concat(a)},u.fashionData.length>0?u.fashionData.map((function(e,a){return m("div",{className:"overlay",key:a},m("div",{className:"border-portfolio"},m("a",{href:e.img},m("div",{className:"overlay-background"},m("i",{className:"fa fa-plus","aria-hidden":"true"})),m(r.a,{src:e.img,className:"img-fluid blur-up lazyload"}))))})):"!! No Blogs Found")),m(c.c,null,m(l.a,{breakpointCols:t,className:"isotopeContainer row",columnClassName:"isotopeSelector ".concat(a)},u.bagsData.length>0?u.bagsData.map((function(e,a){return m("div",{className:"overlay",key:a},m("div",{className:"border-portfolio"},m("a",{href:e.img},m("div",{className:"overlay-background"},m("i",{className:"fa fa-plus","aria-hidden":"true"})),m(r.a,{src:e.img,className:"img-fluid blur-up lazyload"}))))})):"!! No Blogs Found")),m(c.c,null,m(l.a,{breakpointCols:t,className:"isotopeContainer row",columnClassName:"isotopeSelector ".concat(a)},u.shoesData.length>0?u.shoesData.map((function(e,a){return m("div",{className:"overlay",key:a},m("div",{className:"border-portfolio"},m("a",{href:e.img},m("div",{className:"overlay-background"},m("i",{className:"fa fa-plus","aria-hidden":"true"})),m(r.a,{src:e.img,className:"img-fluid blur-up lazyload"}))))})):"!! No Blogs Found")),m(c.c,null,m(l.a,{breakpointCols:t,className:"isotopeContainer row",columnClassName:"isotopeSelector ".concat(a)},u.watchData.length>0?u.watchData.map((function(e,a){return m("div",{className:"overlay",key:a},m("div",{className:"border-portfolio"},m("a",{href:e.img},m("div",{className:"overlay-background"},m("i",{className:"fa fa-plus","aria-hidden":"true"})),m(r.a,{src:e.img,className:"img-fluid blur-up lazyload"}))))})):"!! No Blogs Found")))))))}},iuhU:function(e,a,t){"use strict";function o(e){var a,t,n="";if("string"===typeof e||"number"===typeof e)n+=e;else if("object"===typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=o(e[a]))&&(n&&(n+=" "),n+=t);else for(a in e)e[a]&&(n&&(n+=" "),n+=a);return n}a.a=function(){for(var e,a,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(a=o(e))&&(n&&(n+=" "),n+=a);return n}},ncOK:function(e,a,t){"use strict";var o=t("q1tI"),n=t.n(o),i=t("Mryu"),r=t("t9Gf"),s=t("1Yj4"),l=t("ok1R"),u=t("rhny"),c=n.a.createElement,m=function(e){var a=e.title,t=e.parent,o=e.subTitle;return c("div",{className:"breadcrumb-section"},c(s.a,null,c(l.a,null,c(u.a,{sm:"6"},c("div",{className:"page-title"},c("h2",null,a))),c(u.a,{sm:"6"},c("nav",{"aria-label":"breadcrumb",className:"theme-breadcrumb"},c("ol",{className:"breadcrumb"},c("li",{className:"breadcrumb-item"},c("a",{href:"#"},t)),c("li",{className:"breadcrumb-item","aria-current":"page"},a),void 0===o?"":c("li",{className:"breadcrumb-item active","aria-current":"page"},o)))))))},p=t("qhky"),f=t("jIMG"),g=t.n(f),d=n.a.createElement;a.a=function(e){var a=e.children,t=e.title,o=e.parent,s=e.subTitle;return d(n.a.Fragment,null,d(p.a,null,d("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),d("link",{rel:"icon",type:"image/x-icon",href:g.a?g.a:""})),d(i.a,{topClass:"top-header",logoName:"logo.png"}),d(m,{title:t,parent:o,subTitle:s}),d(n.a.Fragment,null,a),d(r.a,null))}},uLQv:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio/masonry-grid-2",function(){return t("BGCp")}])}},[["uLQv",1,0,7,9,8,2,3,4,5,6,10,15]]]);