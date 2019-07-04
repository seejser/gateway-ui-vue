(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-91687312"],{"4ec3":function(t,e,a){"use strict";a.d(e,"b",function(){return n}),a.d(e,"c",function(){return o}),a.d(e,"d",function(){return c}),a.d(e,"a",function(){return m});var s=a("b775"),l=a("2435"),r="/apis";function i(t){return Object(s["a"])({url:r,method:"GET",params:t})}function n(){return new Promise(function(t,e){var a=[],s="",r=l["c"];function n(l){i(l).then(function(e){e=e||[];var l=e.length;if(l>0){if(a=a.concat(e),s=e[l-1]||{},s.id){var i={after:s.id,limit:r};n(i)}}else t(a)}).catch(function(){e()})}var o={after:"",limit:r};n(o)})}function o(t){return Object(s["a"])({url:r+"/"+t,method:"GET"})}function c(t){return Object(s["a"])({url:r,method:"PUT",data:t})}function m(t){return Object(s["a"])({url:r+"/"+t,method:"DELETE"})}},"7ea2":function(t,e,a){"use strict";a.d(e,"b",function(){return n}),a.d(e,"d",function(){return o}),a.d(e,"e",function(){return c}),a.d(e,"a",function(){return m}),a.d(e,"c",function(){return p});var s=a("b775"),l=a("2435"),r="/clusters";function i(t){return Object(s["a"])({url:r,method:"GET",params:t})}function n(){return new Promise(function(t,e){var a=[],s="",r=l["c"];function n(l){i(l).then(function(e){e=e||[];var l=e.length;if(l>0){if(a=a.concat(e),s=e[l-1]||{},s.id){var i={after:s.id,limit:r};n(i)}}else t(a)}).catch(function(){e()})}var o={after:"",limit:r};n(o)})}function o(t){return Object(s["a"])({url:r+"/"+t,method:"GET"})}function c(t){return Object(s["a"])({url:r,method:"PUT",data:t})}function m(t){return Object(s["a"])({url:r+"/"+t,method:"DELETE"})}function p(t){return Object(s["a"])({url:r+"/"+t+"/binds",method:"GET"})}},a58e:function(t,e,a){"use strict";var s=a("de61"),l=a.n(s);l.a},b775:function(t,e,a){"use strict";var s=a("bc3a"),l=a.n(s),r=a("5c96"),i="",n="",o=n+"/v1",c=l.a.create({baseURL:i+o,timeout:6e4});c.interceptors.request.use(function(t){return t},function(t){console.error(t),Promise.reject(t)}),c.interceptors.response.use(function(t){var e=t.data||{};t.headers;return 0===e.code?e.data:(Object(r["Message"])({message:e.data,type:"error",duration:5e3}),Promise.reject("error"))},function(t){return Object(r["Message"])({message:t.data||"网络异常",type:"error",duration:5e3}),Promise.reject(t)}),e["a"]=c},de61:function(t,e,a){},fb2c:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"grid-content el-margin-bottom"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("基础信息")])]),t._v(" "),a("el-form",{attrs:{"label-width":"150px"}},[a("el-form-item",{attrs:{label:"名称"}},[a("span",[t._v(t._s(t.tempItem.name))])]),t._v(" "),a("el-form-item",{attrs:{label:"接口URL匹配模式"}},[a("span",[t._v(t._s(t.tempItem.urlPattern))]),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",placement:"top-start"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("Gateway使用该字段来匹配原始请求的URL。"),a("br"),t._v("该字段必须和Method配合使用，同时满足才算这个请求匹配了这个API。")]),t._v(" "),a("i",{staticClass:"el-icon-info",staticStyle:{"margin-left":"10px",color:"#909399"}})])],1),t._v(" "),a("el-form-item",{attrs:{label:"接口请求类型"}},[a("span",[t._v(t._s(t.tempItem.method))]),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",placement:"top-start"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("* 匹配所有的HTTP Method（GET,PUT,POST,DELETE）。"),a("br"),t._v("该字段必须和URLPattern配合使用，同时满足才算这个请求匹配了这个API。\n            ")]),t._v(" "),a("i",{staticClass:"el-icon-info",staticStyle:{"margin-left":"10px",color:"#909399"}})])],1),t._v(" "),a("el-form-item",{attrs:{label:"匹配优先级"}},[t.tempItem.position?a("span",[t._v(t._s(t.tempItem.position))]):t._e(),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",placement:"top-start"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("API匹配时按该值的升序匹配，即值越小优先级越高。默认值为0。")]),t._v(" "),a("i",{staticClass:"el-icon-info",staticStyle:{"margin-left":"10px",color:"#909399"}})])],1),t._v(" "),a("el-form-item",{attrs:{label:"匹配规则"}},[a("span",[t._v(t._s(t._f("matchRuleFilter")(t.tempItem.matchRule)))]),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",placement:"top-start"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("\n              matchDefault 匹配规则 Domain || (URLPattern && Method) "),a("br"),t._v("\n              matchAll 匹配规则 Domain && URLPattern && Method "),a("br"),t._v("\n              matchAny 匹配规则 Domain || URLPattern || Method\n            ")]),t._v(" "),a("i",{staticClass:"el-icon-info",staticStyle:{"margin-left":"10px",color:"#909399"}})])],1),t._v(" "),a("el-form-item",{attrs:{label:"是否生效"}},[a("el-switch",{attrs:{disabled:!0,"active-color":"#13ce66","inactive-color":"#f1f1f1"},model:{value:t.tempItem.status,callback:function(e){t.$set(t.tempItem,"status",e)},expression:"tempItem.status"}}),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",placement:"top-start"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("只有开关开着，API 才能生效。")]),t._v(" "),a("i",{staticClass:"el-icon-info",staticStyle:{"margin-left":"10px",color:"#909399"}})])],1),t._v(" "),a("el-form-item",{attrs:{label:"接口请求域名"}},[a("span",[t._v(t._s(t.tempItem.domain))]),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",placement:"top-start"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("当原始请求的host等于该值，则认为匹配了当前的API，同时忽略URLPattern和Method。")]),t._v(" "),a("i",{staticClass:"el-icon-info",staticStyle:{"margin-left":"10px",color:"#909399"}})])],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"grid-content el-margin-bottom"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("接口信息")])]),t._v(" "),t._l(t.tempItem.nodes,function(e,s){return a("div",[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("接口"+t._s(s+1))])]),t._v(" "),a("el-form",{attrs:{"label-width":"150px"}},[a("el-form-item",{staticClass:"inline-item",attrs:{label:"集群:"}},[a("span",[t._v(t._s(e.clusterName))])]),t._v(" "),a("el-form-item",{staticClass:"inline-item",attrs:{label:"节点标示名:"}},[a("span",[t._v(t._s(e.attrName||" "))])]),t._v(" "),a("el-form-item",{staticClass:"inline-item",attrs:{label:"url重写规则:"}},[a("span",[t._v(t._s(e.urlRewrite||" "))])]),t._v(" "),a("el-form-item",{staticClass:"inline-item",attrs:{label:"写超时:"}},[a("span",[t._v(t._s(t._f("toSecondFilter")(e.writeTimeout)))])]),t._v(" "),a("el-form-item",{staticClass:"inline-item",attrs:{label:"读超时:"}},[a("span",[t._v(t._s(t._f("toSecondFilter")(e.readTimeout)))])]),t._v(" "),a("el-form-item",{staticClass:"inline-item",attrs:{label:"匹配优先级:"}},[a("span",[t._v(t._s(e.batchIndex))])]),t._v(" "),a("el-form-item",{staticClass:"form-item-block",attrs:{label:"http默认值:"}},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:6}},[a("label",{attrs:{for:""}},[t._v("强制启用默认值：\n                    "),a("el-switch",{attrs:{disabled:!0,"active-color":"#13ce66","inactive-color":"#f1f1f1"},model:{value:e.useDefault,callback:function(a){t.$set(e,"useDefault",a)},expression:"item.useDefault"}})],1),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",placement:"top-start"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("当该值为True且默认值存在时，直接使用默认值存作为返回值。")]),t._v(" "),a("i",{staticClass:"el-icon-info",staticStyle:{"margin-left":"10px",color:"#909399"}})])],1),t._v(" "),a("el-col",{attrs:{span:4}},[a("label",{attrs:{for:""}},[t._v("状态码："),a("span",[t._v(t._s(e.defaultValue&&e.defaultValue.code))])])]),t._v(" "),a("el-col",{attrs:{span:10}},[a("label",{attrs:{for:""}},[t._v("body\n                    内容："),a("span",[t._v(t._s(t._f("decodeBase64")(e.defaultValue&&e.defaultValue.body)))])])])],1),t._v(" "),e.defaultValue&&e.defaultValue.headers?a("el-row",{staticClass:"el-margin-bottom"},[a("el-col",{staticStyle:{"padding-right":"8px","text-align":"right"},attrs:{span:3}},[a("label",{attrs:{for:""}},[t._v("head头部:")])]),t._v(" "),a("el-col",{attrs:{span:20}},[t._l(e.defaultValue.headers,function(e,s){return[e.name&&e.value?a("span",[t._v(t._s(e.name)+" : "+t._s(e.value))]):t._e()]})],2)],1):t._e(),t._v(" "),e.defaultValue&&e.defaultValue.cookies?a("el-row",{staticClass:"el-margin-bottom"},[a("el-col",{staticStyle:{"padding-right":"8px","text-align":"right"},attrs:{span:3}},[a("label",{attrs:{for:""}},[t._v("cookie内容:")])]),t._v(" "),a("el-col",{attrs:{span:20}},[t._l(e.defaultValue.cookies,function(e,s){return[e.name&&e.value?a("span",[t._v(t._s(e.name)+" : "+t._s(e.value))]):t._e()]})],2)],1):t._e()],1),t._v(" "),e.retryStrategy?a("el-form-item",{staticClass:"form-item-block",attrs:{label:"重试策略:"}},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:6}},[a("label",{attrs:{for:""}},[t._v("重试间隔时间："),a("span",[t._v(t._s(e.retryStrategy.interval)+"ms")])])]),t._v(" "),a("el-col",{attrs:{span:8}},[a("label",{attrs:{for:""}},[t._v("最多重试次数："),a("span",[t._v(t._s(e.retryStrategy.maxTimes))])])]),t._v(" "),a("el-col",{attrs:{span:8}},[a("label",{attrs:{for:""}},[t._v("处理的错误码：\n                    "),t._l(e.retryStrategy.codes,function(e,s){return a("span",[t._v(t._s(e)+",")])})],2)])],1)],1):t._e(),t._v(" "),e.cache?a("el-form-item",{staticClass:"form-item-block",attrs:{label:"数据缓存:"}},[a("el-row",{attrs:{gutter:10}},[a("el-col",{staticStyle:{"text-align":"right"},attrs:{span:3}},[a("label",{attrs:{for:""}},[t._v("过期时间:")])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("span",[t._v(t._s(t._f("toSecondFilter")(e.cache.deadline)))])])],1),t._v(" "),a("el-row",{staticStyle:{"margin-top":"10px"},attrs:{gutter:10}},[a("el-col",{staticStyle:{"text-align":"right"},attrs:{span:3}},[a("label",{attrs:{for:""}},[t._v("关键词:")])]),t._v(" "),a("el-col",{attrs:{span:21}},[t._l(e.cache.keys,function(e,s){return[a("el-row",{staticClass:"el-margin-bottom",attrs:{gutter:10}},[a("el-col",{attrs:{span:6}},[a("span",[t._v("数据源："+t._s(t._f("sourceFilter")(e.source)))])]),t._v(" "),5!=e.source?a("el-col",{attrs:{span:6}},[a("span",[t._v("关键词: "+t._s(e.name))])]):a("el-col",{attrs:{span:6}},[a("span",[t._v("路径index："+t._s(e.index))])])],1)]})],2)],1),t._v(" "),a("el-row",{staticStyle:{"margin-top":"10px"},attrs:{gutter:10}},[a("el-col",{staticStyle:{"text-align":"right"},attrs:{span:3}},[a("label",{attrs:{for:""}},[t._v("匹配条件:")])]),t._v(" "),a("el-col",{attrs:{span:21}},[t._l(e.cache.conditions,function(e,s){return[a("el-row",{staticClass:"el-margin-bottom",attrs:{gutter:10}},[a("el-col",{attrs:{span:4}},[a("span",[t._v("数据源: "+t._s(t._f("sourceFilter")(e.parameter.source)))])]),t._v(" "),5!=e.parameter.source?a("el-col",{attrs:{span:4}},[a("span",[t._v("关键词: "+t._s(e.parameter.name))])]):a("el-col",{attrs:{span:4}},[a("span",[t._v("路径index: "+t._s(e.parameter.index))])]),t._v(" "),a("el-col",{attrs:{span:4}},[a("span",[t._v("操作符: "+t._s(t._f("cmpFilter")(e.cmp)))])]),t._v(" "),a("el-col",{attrs:{span:4}},[a("span",[t._v("表达式: "+t._s(e.expect))])])],1)]})],2)],1)],1):t._e(),t._v(" "),e.validations?a("el-form-item",{staticClass:"form-item-block",attrs:{label:"校验规则:"}},[a("div",[t._l(e.validations,function(e,s){return[a("div",{staticStyle:{overflow:"hidden"}},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:4}},[a("span",[t._v("数据源: "+t._s(t._f("sourceFilter")(e.parameter.source)))])]),t._v(" "),5!=e.parameter.source?a("el-col",{attrs:{span:4}},[a("span",[t._v("关键词: "+t._s(e.parameter.name))])]):a("el-col",{attrs:{span:4}},[a("span",[t._v("路径index: "+t._s(e.parameter.index))])]),t._v(" "),a("el-col",{attrs:{span:4}},[a("span",[t._v("表达式: "+t._s(e.rules[0].expression))])]),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-checkbox-group",{staticStyle:{color:"#666666",float:"left"},attrs:{disabled:!0},model:{value:e.required,callback:function(a){t.$set(e,"required",a)},expression:"validation.required"}},[a("el-checkbox",{attrs:{label:"是否必须",name:"type"}})],1)],1)],1)],1)]})],2)]):t._e()],1)],1)],1)})],2)],1),t._v(" "),a("div",{staticClass:"grid-content el-margin-bottom"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("服务保护")])]),t._v(" "),a("el-form",{attrs:{"label-width":"150px"}},[a("el-form-item",{attrs:{label:"支持的最大QPS"}},[t.tempItem.maxQPS?a("span",[t._v(t._s(t.tempItem.maxQPS))]):t._e()]),t._v(" "),a("el-form-item",{staticStyle:{width:"800px"},attrs:{label:"熔断规则"}},[t.tempItem.circuitBreaker&&t.tempItem.circuitBreaker.closeTimeout?a("el-card",{staticClass:"box-card"},[a("el-row",[a("el-col",{staticStyle:{"text-align":"right","padding-right":"8px"},attrs:{span:8}},[t._v("关闭检查间隔时间:\n              ")]),t._v(" "),a("el-col",{attrs:{span:10}},[a("span",[t._v(t._s(t._f("toSecondFilter")(t.tempItem.circuitBreaker.closeTimeout)))])])],1),t._v(" "),a("el-row",{staticClass:"el-margin-top"},[a("el-col",{staticStyle:{"text-align":"right","padding-right":"8px"},attrs:{span:8}},[t._v("熔断器检查周期:\n              ")]),t._v(" "),a("el-col",{attrs:{span:10}},[a("span",[t._v(t._s(t._f("toSecondFilter")(t.tempItem.circuitBreaker.rateCheckPeriod)))])])],1),t._v(" "),a("el-row",{staticClass:"el-margin-top"},[a("el-col",{staticStyle:{"text-align":"right","padding-right":"8px"},attrs:{span:8}},[t._v("Half限流百分比:\n              ")]),t._v(" "),a("el-col",{attrs:{span:10}},[a("span",[t._v(t._s(t.tempItem.circuitBreaker.halfTrafficRate))])])],1),t._v(" "),a("el-row",{staticClass:"el-margin-top"},[a("el-col",{staticStyle:{"text-align":"right","padding-right":"8px"},attrs:{span:8}},[t._v("Open -> Close的错误百分比:\n              ")]),t._v(" "),a("el-col",{attrs:{span:10}},[a("span",[t._v(t._s(t.tempItem.circuitBreaker.failureRateToClose))])])],1),t._v(" "),a("el-row",{staticClass:"el-margin-top"},[a("el-col",{staticStyle:{"text-align":"right","padding-right":"8px"},attrs:{span:8}},[t._v("Half -> Open的成功百分比:\n              ")]),t._v(" "),a("el-col",{attrs:{span:10}},[a("span",[t._v(t._s(t.tempItem.circuitBreaker.succeedRateToOpen))])])],1)],1):t._e()],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"grid-content"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("其他信息")])]),t._v(" "),a("el-form",{attrs:{"label-width":"150px"}},[a("el-form-item",{staticStyle:{width:"800px"},attrs:{label:"默认返回值"}},[t.tempItem.defaultValue&&t.tempItem.defaultValue.code?a("el-row",[a("el-col",[a("el-card",{staticClass:"box-card"},[a("el-row",[a("el-col",{staticStyle:{"text-align":"right","padding-right":"8px"},attrs:{span:4}},[t._v("是否启动:")]),t._v(" "),a("el-col",{attrs:{span:10}},[a("el-switch",{attrs:{disabled:!0,"active-color":"#13ce66","inactive-color":"#f1f1f1"},model:{value:t.tempItem.useDefault,callback:function(e){t.$set(t.tempItem,"useDefault",e)},expression:"tempItem.useDefault"}}),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",placement:"top-start"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("当该值为True且DefaultValue存在时，直接使用DefaultValue作为返回值。\n                      ")]),t._v(" "),a("i",{staticClass:"el-icon-info",staticStyle:{"margin-left":"10px",color:"#909399"}})])],1)],1),t._v(" "),a("el-row",[a("el-col",{staticStyle:{"text-align":"right","padding-right":"8px"},attrs:{span:4}},[t._v("状态码:")]),t._v(" "),a("el-col",{attrs:{span:10}},[a("span",[t._v(t._s(t.tempItem.defaultValue&&t.tempItem.defaultValue.code))])])],1),t._v(" "),a("el-row",{staticClass:"el-margin-bottom"},[a("el-col",{staticStyle:{"text-align":"right","padding-right":"8px"},attrs:{span:4}},[t._v("body 内容:\n                  ")]),t._v(" "),a("el-col",{attrs:{span:14}},[a("span",[t._v(t._s(t._f("decodeBase64")(t.tempItem.defaultValue&&t.tempItem.defaultValue.body)))])])],1),t._v(" "),t.tempItem.defaultValue&&t.tempItem.defaultValue.headers?a("el-row",{staticClass:"el-margin-bottom"},[a("el-col",{staticStyle:{"text-align":"right","padding-right":"8px"},attrs:{span:4}},[t._v("head 头部:\n                  ")]),t._v(" "),a("el-col",{attrs:{span:20}},[t._l(t.tempItem.defaultValue.headers,function(e,s){return[e.name&&e.value?a("span",[t._v(t._s(e.name)+" : "+t._s(e.value))]):t._e()]})],2)],1):t._e(),t._v(" "),t.tempItem.defaultValue&&t.tempItem.defaultValue.cookies?a("el-row",{staticClass:"el-margin-bottom"},[a("el-col",{staticStyle:{"text-align":"right","padding-right":"8px"},attrs:{span:4}},[t._v("set Cookie:\n                  ")]),t._v(" "),a("el-col",{attrs:{span:20}},[t._l(t.tempItem.defaultValue.cookies,function(e,s){return[e.name&&e.value?a("span",[t._v(t._s(e.name)+" : "+t._s(e.value))]):t._e()]})],2)],1):t._e()],1)],1)],1):t._e()],1),t._v(" "),a("el-form-item",{attrs:{label:"Auth插件"}},[a("span",[t._v(t._s(t.tempItem.authFilter))]),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",placement:"top-start"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("指定该API所使用的Auth插件名称。Auth插件的实现可以借鉴JWT插件")]),t._v(" "),a("i",{staticClass:"el-icon-info",staticStyle:{"margin-left":"10px",color:"#909399"}})])],1),t._v(" "),a("el-form-item",{attrs:{label:"websocket参数"}},[a("span",[t._v(t._s(t.tempItem.webSocketOptions&&t.tempItem.webSocketOptions.origin))])]),t._v(" "),a("el-form-item",{attrs:{label:"标签"}},t._l(t.tempItem.tags,function(e,s){return a("el-tag",{key:s,staticStyle:{"margin-right":"8px"},attrs:{type:"success"}},[t._v(t._s(e.name)+"("+t._s(e.value)+")\n          ")])}),1),t._v(" "),a("el-form-item",{staticStyle:{width:"800px"},attrs:{label:"接口IP的访问控制"}},[t.tempItem.ipAccessControl&&t.tempItem.ipAccessControl.whitelist?a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:11}},[a("el-card",{staticClass:"box-card"},t._l(t.tempItem.ipAccessControl.whitelist,function(e,s){return a("div",{key:s,staticClass:"text item"},[t._v(t._s(e)+"\n                ")])}),0)],1),t._v(" "),t.tempItem.ipAccessControl&&t.tempItem.ipAccessControl.blacklist?a("el-col",{attrs:{span:11}},[a("el-card",{staticClass:"box-card"},t._l(t.tempItem.ipAccessControl.blacklist,function(e,s){return a("div",{key:s,staticClass:"text item"},[t._v(t._s(e)+"\n                ")])}),0)],1):t._e()],1):t._e()],1),t._v(" "),a("el-form-item",{attrs:{label:"重定义接口返回"}},[t.tempItem.renderTemplate&&t.tempItem.renderTemplate.objects&&t.tempItem.renderTemplate.objects.length>0?a("el-row",[a("el-col",t._l(t.tempItem.renderTemplate.objects,function(e,s){return a("div",{key:s,staticClass:"grid-content"},[a("el-card",{staticClass:"box-card el-margin-bottom"},[a("div",{staticClass:"title_t"},[t._v("数据集 "+t._s(s+1)+"\n                  ")]),t._v(" "),a("el-row",[a("el-col",{staticStyle:{"text-align":"right","padding-right":"8px"},attrs:{span:4}},[t._v("字段名称:\n                    ")]),t._v(" "),a("el-col",{attrs:{span:10}},[a("span",[t._v(t._s(e.name))])])],1),t._v(" "),a("el-row",[a("el-col",{staticStyle:{"text-align":"right","padding-right":"8px"},attrs:{span:4}},[t._v("flagAttrs:\n                    ")]),t._v(" "),a("el-col",{attrs:{span:10}},[a("el-switch",{attrs:{disabled:!0,"active-color":"#13ce66","inactive-color":"#f1f1f1"},model:{value:e.flatAttrs,callback:function(a){t.$set(e,"flatAttrs",a)},expression:"templateItem.flatAttrs"}})],1)],1),t._v(" "),a("el-row",[a("el-col",{staticStyle:{"text-align":"right","padding-right":"8px"},attrs:{span:4}},[t._v("属性:")]),t._v(" "),a("el-col",{attrs:{span:20}},[t._l(e.attrs,function(e,s){return[a("el-row",{staticClass:"el-margin-bottom",attrs:{gutter:10}},[a("el-col",{attrs:{span:8}},[a("span",[t._v("name: "+t._s(e.name))])]),t._v(" "),a("el-col",{attrs:{span:8}},[a("span",[t._v("value: "+t._s(e.extractExp))])])],1)]})],2)],1)],1)],1)}),0)],1):t._e()],1)],1)],1)],1),t._v(" "),a("div",{staticStyle:{"margin-left":"70px","margin-top":"20px"}},[a("el-button",{on:{click:t.goList}},[t._v("返回")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.goEdit()}}},[t._v("编辑")])],1)])},l=[],r=(a("a481"),a("ac6a"),a("7f7f"),a("4ec3")),i=a("7ea2"),n="apiShow",o={name:n,data:function(){return{tempItem:{tlsEmbedCert:{}},loading:!0}},watch:{$route:function(t,e){t.name!=n&&this.$destroy()}},created:function(){this.init()},methods:{init:function(){var t=this;this.id=this.$route.query.id;var e=this.id;e&&r["c"](e).then(function(e){e=e||{},e.status=1==e.status,t.tempItem=e,t.updateCluster()})},updateCluster:function(){var t=this;"undefined"!==typeof this.tempItem.nodes&&this.tempItem.nodes.forEach(function(e,a){e.clusterID&&i["d"](e.clusterID).then(function(e){t.$set(t.tempItem.nodes[a],"clusterName",e.name)})})},goList:function(){this.$router.replace({path:"/api"}),this.$destroy()},goEdit:function(){this.$router.push({path:"/api/edit",query:{id:this.tempItem.id}})}}},c=o,m=(a("a58e"),a("2877")),p=Object(m["a"])(c,s,l,!1,null,"6497196e",null);e["default"]=p.exports}}]);