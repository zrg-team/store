(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{120:function(e,t,r){e.exports=r(237)},236:function(e,t,r){__NEXT_REGISTER_PAGE("/test",function(){return e.exports=r(247),{page:e.exports.default}})},237:function(e,t,r){"use strict";var n=r(21),o=r(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(238)),f=o(r(49)),l=o(r(8)),i=o(r(9)),u=o(r(18)),s=o(r(19)),p=o(r(20)),c=o(r(51)),h=o(r(15)),d=r(112),v=n(r(0)),y=(o(r(3)),n(r(48))),E=r(26);var _=function(e){function t(){var e,r,n,o,a,i;(0,l.default)(this,t);for(var p=arguments.length,v=new Array(p),_=0;_<p;_++)v[_]=arguments[_];return r=(0,u.default)(this,(e=(0,s.default)(t)).call.apply(e,[this].concat(v))),(0,h.default)((0,c.default)((0,c.default)(r)),"formatUrls",(n=function(e,t){return{href:e&&"object"===(0,f.default)(e)?(0,d.format)(e):e,as:t&&"object"===(0,f.default)(t)?(0,d.format)(t):t}},o=null,a=null,i=null,function(e,t){if(e===o&&t===a)return i;var r=n(e,t);return o=e,a=t,i=r,r})),(0,h.default)((0,c.default)((0,c.default)(r)),"linkClicked",function(e){var t=e.currentTarget,n=t.nodeName,o=t.target;if("A"!==n||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=r.formatUrls(r.props.href,r.props.as),f=a.href,l=a.as;if(function(e){var t=(0,d.parse)(e,!1,!0),r=(0,d.parse)((0,E.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(f)){var i=window.location.pathname;f=(0,d.resolve)(i,f),l=l?(0,d.resolve)(i,l):f,e.preventDefault();var u=r.props.scroll;null==u&&(u=l.indexOf("#")<0);var s=r.props.replace?"replace":"push";y.default[s](f,l,{shallow:r.props.shallow}).then(function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}).catch(function(e){r.props.onError&&r.props.onError(e)})}}}),r}return(0,p.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,a.default)(this.props.href)!==(0,a.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,r=(0,d.resolve)(e,t);y.default.prefetch(r)}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,o=r.as;"string"==typeof t&&(t=v.default.createElement("a",null,t));var a=v.Children.only(t),f={onClick:function(t){a.props&&"function"==typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(f.href=o||n),f.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(f.href=(0,y._rewriteUrlForNextExport)(f.href)),v.default.cloneElement(a,f)}}]),t}(v.Component);t.default=_},238:function(e,t,r){e.exports=r(239)},239:function(e,t,r){var n=r(1),o=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},240:function(e,t,r){e.exports={SERVER_PATH:"/store"}},247:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(120),f=r.n(a),l=r(240).SERVER_PATH;t.default=function(){return o.a.createElement("div",null,"Hello World. ",o.a.createElement(f.a,{href:(e="/about","".concat(l).concat(e))},o.a.createElement("a",null,"About")));var e}}},[[236,1,0]]]);