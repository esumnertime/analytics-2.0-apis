"use strict";(self.webpackChunkanalytics_2_0_apis=self.webpackChunkanalytics_2_0_apis||[]).push([[9522],{30598:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return m},default:function(){return c}});var a=t(87462),r=t(63366),i=(t(15007),t(64983)),d=t(91515),l=["components"],m={},o=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",n)}},s=o("InlineAlert"),p=o("CodeBlock"),u={_frontmatter:m},x=d.Z;function c(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.mdx)(x,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"analytics-20-api-real-time-reports"},"Analytics 2.0 API real-time reports"),(0,i.mdx)("p",null,"The Analytics 2.0 real-time report API endpoint allows you to access real-time data programmatically through Adobe Developer. The real-time data reported is less than two minutes latent and auto-updates on a minute-by-minute basis. See the ",(0,i.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/en/docs/analytics/components/real-time-reporting/realtime"},"Real-time reporting overview")," for more information."),(0,i.mdx)("p",null,"The endpoint described in this guide is routed through analytics.adobe.io. To use it, you will need to first create a client with access to the Adobe Analytics Reporting API. For more information, refer to ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/analytics-apis/docs/2.0/guides/"},"Getting started with the Analytics API"),"."),(0,i.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"Adobe may add optional request and response members (name/value pairs) to existing API objects at any time and without notice or changes in versioning. Adobe recommends that you refer to the API documentation of any third-party tool you integrate with our APIs so that such additions are ignored in processing if not understood. If implemented properly, such additions are non-breaking changes for your implementation. Adobe will not remove parameters or add required parameters without first providing standard notification through release notes."),(0,i.mdx)("h2",{id:"post-real-time-report"},"POST real-time report"),(0,i.mdx)("p",null,"Use this endpoint to Generates a real-time report for the data requested in a POST body."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"POST"),"  ",(0,i.mdx)("inlineCode",{parentName:"p"},"https://analytics.adobe.io/api/{GLOBAL_COMPANY_ID}/reports/realtime")),(0,i.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"You can find your global company ID by using the ",(0,i.mdx)("a",{parentName:"p",href:"../discovery.md"},"Discovery API"),"."),(0,i.mdx)("h3",{id:"request-and-response-examples"},"Request and response examples"),(0,i.mdx)("p",null,"Click the ",(0,i.mdx)("strong",{parentName:"p"},"Request")," tab in the following example to see a cURL request for this endpoint. Click the ",(0,i.mdx)("strong",{parentName:"p"},"Response")," tab to see a successful JSON response for the request."),(0,i.mdx)(p,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,i.mdx)("h3",{id:"request"},"Request"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X POST "https://analytics.adobe.io/api/{GLOBAL_COMPANY-ID}/reports/realtime" \\\n  -H "accept: application/json" \\\n  -H "x-api-key: {CLIENT_ID}" \\\n  -H "Authorization: Bearer {ACCESS_TOKEN}"\\\n  -d \'{\n  "rsid": "examplersid",\n  "globalFilters": [\n    {\n      "type": "dateRange",\n      "dateRange": "YYYY-MM-24T09:00:00/YYYY-MM-24T09:30:00"\n    }\n  ],\n  "metricContainer": {\n    "metrics": [\n      {\n        "columnId": "0",\n    "id": "metrics/occurrences"\n      }\n    ]\n  },\n  "dimensions": [\n    {\n      "id": "variables/daterangeminute",\n      "dimensionColumnId": "0"\n    }\n  ],\n  "settings": {\n    "realTimeMinuteGranularity": 10,\n    "limit": 20\n  }\n}\'\n')),(0,i.mdx)("h3",{id:"response"},"Response"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "totalPages": 1,\n  "firstPage": true,\n  "lastPage": true,\n  "numberOfElements": 3,\n  "number": 0,\n  "totalElements": 3,\n  "rows": [\n    {\n      "itemIds": [\n        "12403260900"\n      ],\n      "values": [\n        "09:00 YYYY-MM-24"\n      ],\n      "data": [\n        2183\n      ],\n      "value": "09:00 YYYY-MM-24",\n      "itemId": "12403260900"\n    },\n    {\n      "itemIds": [\n        "12403260910"\n      ],\n      "values": [\n        "09:10 YYYY-MM-24"\n      ],\n      "data": [\n        2256\n      ],\n      "value": "09:10 YYYY-MM-24",\n      "itemId": "12403260910"\n    },\n    {\n      "itemIds": [\n        "12403260920"\n      ],\n      "values": [\n        "09:20 YYY-MM-24"\n      ],\n      "data": [\n        2034\n      ],\n      "value": "09:20 YYYY-MM-24",\n      "itemId": "12403260920"\n    }\n  ],\n  "summaryData": {\n    "totals": [\n      6473\n    ]\n  }\n}\n')),(0,i.mdx)("h3",{id:"request-example-details"},"Request example details"),(0,i.mdx)("p",null,"The above example creates a real-time report request for the following:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"To show data for the dimension ",(0,i.mdx)("inlineCode",{parentName:"li"},"daterangeminute")," and the metric ",(0,i.mdx)("inlineCode",{parentName:"li"},"occurrences")," for the rsid ",(0,i.mdx)("inlineCode",{parentName:"li"},"examplersid"),"."),(0,i.mdx)("li",{parentName:"ul"},"To show data over a 30-minute time period on from ",(0,i.mdx)("inlineCode",{parentName:"li"},"YYYY-MM-24T09:00:00")," to ",(0,i.mdx)("inlineCode",{parentName:"li"},"YYYY-MM-24T09:30:00"),", or on the same day--the 24th between the time from ",(0,i.mdx)("inlineCode",{parentName:"li"},"09:00")," to ",(0,i.mdx)("inlineCode",{parentName:"li"},"09:30"),". Note: the start date cannot be earlier than 20 hours from the time the request is made, according to the time zone specified for the report suite."),(0,i.mdx)("li",{parentName:"ul"},"To show data at a granularity of ",(0,i.mdx)("inlineCode",{parentName:"li"},"10")," minutes, as specified in the value of ",(0,i.mdx)("inlineCode",{parentName:"li"},"realTimeMinuteGranularity"),".")),(0,i.mdx)("h4",{id:"request-parameters"},"Request parameters"),(0,i.mdx)("p",null,"The POST real-time reports endpoint includes the following request parameters:"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,i.mdx)("th",{parentName:"tr",align:null},"Req/Opt"),(0,i.mdx)("th",{parentName:"tr",align:null},"Type"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"rsid")),(0,i.mdx)("td",{parentName:"tr",align:null},"required"),(0,i.mdx)("td",{parentName:"tr",align:null},"string"),(0,i.mdx)("td",{parentName:"tr",align:null},"report suite ID")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"locale")),(0,i.mdx)("td",{parentName:"tr",align:null},"optional"),(0,i.mdx)("td",{parentName:"tr",align:null},"string"),(0,i.mdx)("td",{parentName:"tr",align:null},"The specified language")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"globalFilters")),(0,i.mdx)("td",{parentName:"tr",align:null},"optional"),(0,i.mdx)("td",{parentName:"tr",align:null},"container"),(0,i.mdx)("td",{parentName:"tr",align:null},"Contains the ",(0,i.mdx)("inlineCode",{parentName:"td"},"type")," and ",(0,i.mdx)("inlineCode",{parentName:"td"},"dateRange")," parameters")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"type")),(0,i.mdx)("td",{parentName:"tr",align:null},"optional"),(0,i.mdx)("td",{parentName:"tr",align:null},"dateRange"),(0,i.mdx)("td",{parentName:"tr",align:null},"The type of filter to be applied")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"dateRange")),(0,i.mdx)("td",{parentName:"tr",align:null},"optional"),(0,i.mdx)("td",{parentName:"tr",align:null},"string"),(0,i.mdx)("td",{parentName:"tr",align:null},"The start and end dates for the report. The format is ",(0,i.mdx)("inlineCode",{parentName:"td"},"YYYY-DD-DDT00:00:00/YYYY-MM-DDT00:00:00"),"and is based on the timezone of the ",(0,i.mdx)("inlineCode",{parentName:"td"},"rsid"),".")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"metricContainer")),(0,i.mdx)("td",{parentName:"tr",align:null},"optional"),(0,i.mdx)("td",{parentName:"tr",align:null},"container"),(0,i.mdx)("td",{parentName:"tr",align:null},"Contains the ",(0,i.mdx)("inlineCode",{parentName:"td"},"metrics")," container")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"columnId")),(0,i.mdx)("td",{parentName:"tr",align:null},"optional"),(0,i.mdx)("td",{parentName:"tr",align:null},"string"),(0,i.mdx)("td",{parentName:"tr",align:null},"The column ID")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"id")),(0,i.mdx)("td",{parentName:"tr",align:null},"optional"),(0,i.mdx)("td",{parentName:"tr",align:null},"string"),(0,i.mdx)("td",{parentName:"tr",align:null},"The metric or dimension ID")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"dimensions")),(0,i.mdx)("td",{parentName:"tr",align:null},"required"),(0,i.mdx)("td",{parentName:"tr",align:null},"container"),(0,i.mdx)("td",{parentName:"tr",align:null},"Contains the ",(0,i.mdx)("inlineCode",{parentName:"td"},"id")," and ",(0,i.mdx)("inlineCode",{parentName:"td"},"dimensionColumnId")," of the dimensions to be included in the report. For real-time reports, the ",(0,i.mdx)("inlineCode",{parentName:"td"},"variables/daterangeminute")," is required.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"dimensionColumnId")),(0,i.mdx)("td",{parentName:"tr",align:null},"required"),(0,i.mdx)("td",{parentName:"tr",align:null},"string"),(0,i.mdx)("td",{parentName:"tr",align:null},"The dimension column ID")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"settings")),(0,i.mdx)("td",{parentName:"tr",align:null},"optional"),(0,i.mdx)("td",{parentName:"tr",align:null},"container"),(0,i.mdx)("td",{parentName:"tr",align:null},"Contains the ",(0,i.mdx)("inlineCode",{parentName:"td"},"settings")," object members for the specified real-time report, including ",(0,i.mdx)("inlineCode",{parentName:"td"},"realTimeMinuteGranularity"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"realtimeMinuteGranularity")),(0,i.mdx)("td",{parentName:"tr",align:null},"optional"),(0,i.mdx)("td",{parentName:"tr",align:null}),(0,i.mdx)("td",{parentName:"tr",align:null},"The number of minutes between the reporting of the specified data")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"limit")),(0,i.mdx)("td",{parentName:"tr",align:null},"optional"),(0,i.mdx)("td",{parentName:"tr",align:null},"$int32"),(0,i.mdx)("td",{parentName:"tr",align:null},"The maximum number of items to show per page")))),(0,i.mdx)("h3",{id:"response-example-details"},"Response example details"),(0,i.mdx)("p",null,"The above JSON response example shows the following details:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The number of ",(0,i.mdx)("inlineCode",{parentName:"li"},"occurrences")," from 9:00 to 9:10 on the 24th is ",(0,i.mdx)("inlineCode",{parentName:"li"},"2183"),"."),(0,i.mdx)("li",{parentName:"ul"},"The number of ",(0,i.mdx)("inlineCode",{parentName:"li"},"occurrences")," from 9:10 to 9:20 on the 24th is ",(0,i.mdx)("inlineCode",{parentName:"li"},"2256"),"."),(0,i.mdx)("li",{parentName:"ul"},"The number of ",(0,i.mdx)("inlineCode",{parentName:"li"},"occurrences")," from 9:20 to just before 9:30 on the 24th is ",(0,i.mdx)("inlineCode",{parentName:"li"},"2034"),"."),(0,i.mdx)("li",{parentName:"ul"},"The total number of ",(0,i.mdx)("inlineCode",{parentName:"li"},"occurrences")," from 9:00 to 9:30 on the 24th is ",(0,i.mdx)("inlineCode",{parentName:"li"},"6473"),".")),(0,i.mdx)("h4",{id:"response-parameters"},"Response parameters"),(0,i.mdx)("p",null,"The POST real-time reports endpoint includes the following response parameters:"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,i.mdx)("th",{parentName:"tr",align:null},"Type"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"totalPages")),(0,i.mdx)("td",{parentName:"tr",align:null},"$int32"),(0,i.mdx)("td",{parentName:"tr",align:null},"The total pages for the report")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"firstPage")),(0,i.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,i.mdx)("td",{parentName:"tr",align:null},"Whether the response includes the first page of report")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"lastPage")),(0,i.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,i.mdx)("td",{parentName:"tr",align:null},"Whether the response includes the last page of report")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"numberOfElements")),(0,i.mdx)("td",{parentName:"tr",align:null},"$int32"),(0,i.mdx)("td",{parentName:"tr",align:null},"The total number of elements included in the report")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"rows")),(0,i.mdx)("td",{parentName:"tr",align:null},"container"),(0,i.mdx)("td",{parentName:"tr",align:null},"Contains the ",(0,i.mdx)("inlineCode",{parentName:"td"},"row")," parameters ",(0,i.mdx)("inlineCode",{parentName:"td"},"itemIds"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"values"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"data"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"value"),", and ",(0,i.mdx)("inlineCode",{parentName:"td"},"itemId"),".")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"itemIds")),(0,i.mdx)("td",{parentName:"tr",align:null},"string"),(0,i.mdx)("td",{parentName:"tr",align:null},"Processing numbers used to associate time values")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"values")),(0,i.mdx)("td",{parentName:"tr",align:null},"string"),(0,i.mdx)("td",{parentName:"tr",align:null},"The ",(0,i.mdx)("inlineCode",{parentName:"td"},"values"),"--or in this case the tim--associated with the ",(0,i.mdx)("inlineCode",{parentName:"td"},"data"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"data")),(0,i.mdx)("td",{parentName:"tr",align:null},"$double"),(0,i.mdx)("td",{parentName:"tr",align:null},"The ",(0,i.mdx)("inlineCode",{parentName:"td"},"data"),"--or in this case the ",(0,i.mdx)("inlineCode",{parentName:"td"},"occurrences"),"--associated with the specified item and ",(0,i.mdx)("inlineCode",{parentName:"td"},"value"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"value")),(0,i.mdx)("td",{parentName:"tr",align:null},"string"),(0,i.mdx)("td",{parentName:"tr",align:null},"The ",(0,i.mdx)("inlineCode",{parentName:"td"},"values"),"--or in this case the tim--associated with the ",(0,i.mdx)("inlineCode",{parentName:"td"},"data"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"itemId")),(0,i.mdx)("td",{parentName:"tr",align:null},"string"),(0,i.mdx)("td",{parentName:"tr",align:null},"Processing number used to associate time values")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"summaryData")),(0,i.mdx)("td",{parentName:"tr",align:null},"container"),(0,i.mdx)("td",{parentName:"tr",align:null},"Contains objects providing summary for report")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"totals")),(0,i.mdx)("td",{parentName:"tr",align:null},"$int32"),(0,i.mdx)("td",{parentName:"tr",align:null},"The total for all ",(0,i.mdx)("inlineCode",{parentName:"td"},"data")," results in the report")))),(0,i.mdx)("h2",{id:"real-time-report-with-an-additional-dimension"},"Real-time report with an additional dimension"),(0,i.mdx)("p",null,"The following POST request example includes an additional dimension (",(0,i.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/en/docs/analytics/components/dimensions/compatibility"},(0,i.mdx)("inlineCode",{parentName:"a"},"clickmaplinkbyregion")),"), along with the ",(0,i.mdx)("inlineCode",{parentName:"p"},"daterangeminute")," dimension shown in the first example above. The result is additional data values for the added dimension and combined dimension ",(0,i.mdx)("inlineCode",{parentName:"p"},"occurrences"),"."),(0,i.mdx)("h3",{id:"request-and-response-examples-1"},"Request and response examples"),(0,i.mdx)("p",null,"Click the ",(0,i.mdx)("strong",{parentName:"p"},"Request")," tab in the following example to see a cURL request for this endpoint. Click the ",(0,i.mdx)("strong",{parentName:"p"},"Response")," tab to see a successful JSON response for the request."),(0,i.mdx)(p,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,i.mdx)("h3",{id:"request-1"},"Request"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X POST "https://analytics.adobe.io/api/{GLOBAL_COMPANY-ID}/reports/realtime" \\\n  -H "accept: application/json" \\\n  -H "x-api-key: {CLIENT_ID}" \\\n  -H "Authorization: Bearer {ACCESS_TOKEN}"\\\n  -d \'{\n  "rsid": "examplersid",\n  "globalFilters": [\n    {\n      "type": "dateRange",\n      "dateRange": "YYYY-MM-25T09:00:00/YYYY-MM-25T09:30:00"\n    }\n  ],\n  "metricContainer": {\n    "metrics": [\n      {\n        "columnId": "0",\n    "id": "metrics/occurrences"\n      }\n    ]\n  },\n  "dimensions": [\n    {\n      "id": "variables/daterangeminute",\n      "dimensionColumnId": "0"\n    },\n        {\n      "id": "variables/clickmaplinkbyregion",\n      "dimensionColumnId": "1"\n    }\n  ],\n  "settings": {\n    "realTimeMinuteGranularity": 10,\n    "limit": 20\n  }\n}\n')),(0,i.mdx)("h3",{id:"response-1"},"Response"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "totalPages": 1,\n  "firstPage": true,\n  "lastPage": true,\n  "numberOfElements": 5,\n  "number": 0,\n  "totalElements": 5,\n  "rows": [\n    {\n      "itemIds": [\n        "12404020900",\n        "1411878551"\n      ],\n      "values": [\n        "09:00 YYYY-MM-25",\n        "Save|BODY"\n      ],\n      "data": [\n        53\n      ]\n    },\n    {\n      "itemIds": [\n        "12404020900",\n        "4192888170"\n      ],\n      "values": [\n        "09:00 YYY-MM-25",\n        "Discard changes|BODY"\n      ],\n      "data": [\n        44\n      ]\n    },\n    {\n      "itemIds": [\n        "12404020910",\n        "1411878551"\n      ],\n      "values": [\n        "09:10 YYYY-MM-25",\n        "Save|BODY"\n      ],\n      "data": [\n        60\n      ]\n    },\n    {\n      "itemIds": [\n        "12404020910",\n        "4192888170"\n      ],\n      "values": [\n        "09:10 YYYY-MM-25",\n        "Discard changes|BODY"\n      ],\n      "data": [\n        45\n      ]\n    },\n    {\n      "itemIds": [\n        "12404020920",\n        "1146295927"\n      ],\n      "values": [\n        "09:20 YYYY-MM-25",\n        "Save|BODY"\n      ],\n      "data": [\n        214\n      ]\n    },\n    {\n      "itemIds": [\n        "12404020920",\n        "1146295956"\n      ],\n      "values": [\n        "09:20 YYYY-MM-25",\n        "Discard changes|BODY"\n      ],\n      "data": [\n        33\n      ]\n    }\n  ],\n  "summaryData": {\n    "totals": [\n      449\n    ],\n    "realTimeTotalsPerPeriod": [\n      97,\n      105,\n      247\n    ]\n  }\n}\n')),(0,i.mdx)("h3",{id:"request-example-details-1"},"Request example details"),(0,i.mdx)("p",null,"The above example creates a real-time report request for the following:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"To show data for the dimensions ",(0,i.mdx)("inlineCode",{parentName:"li"},"daterangeminute")," and ",(0,i.mdx)("inlineCode",{parentName:"li"},"clickmaplinkbyregion")," according to the metric ",(0,i.mdx)("inlineCode",{parentName:"li"},"occurences"),"for the rsid ",(0,i.mdx)("inlineCode",{parentName:"li"},"examplersid"),"."),(0,i.mdx)("li",{parentName:"ul"},"To show data over a 30-minute time period on from ",(0,i.mdx)("inlineCode",{parentName:"li"},"YYYY-MM-25T09:00:00")," to ",(0,i.mdx)("inlineCode",{parentName:"li"},"YYYY-MM-25T09:30:00"),", or on the same day--the 25th between the time from ",(0,i.mdx)("inlineCode",{parentName:"li"},"09:00")," to ",(0,i.mdx)("inlineCode",{parentName:"li"},"09:30"),". Note: the start date cannot be earlier than 20 hours from the time the request is made, according to the time zone specified for the report suite."),(0,i.mdx)("li",{parentName:"ul"},"To show data at a granularity of ",(0,i.mdx)("inlineCode",{parentName:"li"},"10")," minutes, as specified in the value of ",(0,i.mdx)("inlineCode",{parentName:"li"},"realTimeMinuteGranularity"),".")),(0,i.mdx)("p",null,"The request parameters shown in this example are described in the table above."),(0,i.mdx)("h3",{id:"response-example-details-1"},"Response example details"),(0,i.mdx)("p",null,"The above JSON response example shows the following details:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The number of clickmap ",(0,i.mdx)("inlineCode",{parentName:"li"},"occurrences")," for the ",(0,i.mdx)("inlineCode",{parentName:"li"},"Save|BODY")," region from 9:00 to 9:10 on the 25th is ",(0,i.mdx)("inlineCode",{parentName:"li"},"53"),"."),(0,i.mdx)("li",{parentName:"ul"},"The number of clickmap ",(0,i.mdx)("inlineCode",{parentName:"li"},"occurrences")," for the ",(0,i.mdx)("inlineCode",{parentName:"li"},"Discard|BODY")," region from 9:00 to 9:10 on the 25th is ",(0,i.mdx)("inlineCode",{parentName:"li"},"44"),"."),(0,i.mdx)("li",{parentName:"ul"},"The number of clickmap ",(0,i.mdx)("inlineCode",{parentName:"li"},"occurrences")," for the ",(0,i.mdx)("inlineCode",{parentName:"li"},"Save|BODY")," region from 9:10 to 9:20 on the 25th is ",(0,i.mdx)("inlineCode",{parentName:"li"},"60"),"."),(0,i.mdx)("li",{parentName:"ul"},"The number of clickmap ",(0,i.mdx)("inlineCode",{parentName:"li"},"occurrences")," for the ",(0,i.mdx)("inlineCode",{parentName:"li"},"Discard|BODY")," region from 9:10 to 9:20 on the 25th is ",(0,i.mdx)("inlineCode",{parentName:"li"},"45"),"."),(0,i.mdx)("li",{parentName:"ul"},"The number of clickmap ",(0,i.mdx)("inlineCode",{parentName:"li"},"occurrences")," for the ",(0,i.mdx)("inlineCode",{parentName:"li"},"Save|BODY")," region from 9:20 to 9:30 on the 25th is ",(0,i.mdx)("inlineCode",{parentName:"li"},"214"),"."),(0,i.mdx)("li",{parentName:"ul"},"The number of clickmap ",(0,i.mdx)("inlineCode",{parentName:"li"},"occurrences")," for the ",(0,i.mdx)("inlineCode",{parentName:"li"},"Discard|BODY")," region from 9:20 to 9:30 on the 25th is ",(0,i.mdx)("inlineCode",{parentName:"li"},"33"),"."),(0,i.mdx)("li",{parentName:"ul"},"The total number of clickmap ",(0,i.mdx)("inlineCode",{parentName:"li"},"occurrences")," from 9:00 to 9:30 on the 25th is ",(0,i.mdx)("inlineCode",{parentName:"li"},"449"),".")),(0,i.mdx)("h2",{id:"real-time-breakdown-reports"},"Real-time breakdown reports"),(0,i.mdx)("p",null,"Breakdown reports are useful when you want to see the cross-product of values from two different dimensions. When creating a real-time breakdown report, use the same endpoint as shown above. Within the payload of the request, use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"metricsFilters")," parameter to specify the filter to be applied. To see an example of a breakdown request that specifies an object within ",(0,i.mdx)("inlineCode",{parentName:"p"},"metricFilters"),", as well as general information on breakdown reports, see ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/analytics-apis/docs/2.0/guides/endpoints/reports/breakdowns/"},"Breakdown dimensions"),"."),(0,i.mdx)("h2",{id:"status-codes"},"Status codes"),(0,i.mdx)("p",null,"Each web API call returns an HTTP status code that reflects the result of a request:"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"HTTP code"),(0,i.mdx)("th",{parentName:"tr",align:null},"Meaning"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"200"),(0,i.mdx)("td",{parentName:"tr",align:null},"Success"),(0,i.mdx)("td",{parentName:"tr",align:null},"The request is successful.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"400"),(0,i.mdx)("td",{parentName:"tr",align:null},"Bad Request"),(0,i.mdx)("td",{parentName:"tr",align:null},"The request was improperly constructed, missing key information, and/or contained incorrect syntax. This error code could indicate a problem such as a missing required parameter or the supplied data did not pass validation.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"401"),(0,i.mdx)("td",{parentName:"tr",align:null},"Authentication failed"),(0,i.mdx)("td",{parentName:"tr",align:null},"The request did not pass an authentication check. Your access token may be missing or invalid. Similarly, you may have attempted to access an object that requires administrator permissions. See the OAuth token errors section below for more details.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"403"),(0,i.mdx)("td",{parentName:"tr",align:null},"Forbidden"),(0,i.mdx)("td",{parentName:"tr",align:null},"The resource was found, but you do not have the right credentials to view it. You might not have the required permissions to access or edit the resource for reasons not applicable to status code 401.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"404"),(0,i.mdx)("td",{parentName:"tr",align:null},"Not found"),(0,i.mdx)("td",{parentName:"tr",align:null},"The requested resource could not be found on the server. The resource may have been deleted, or the requested path was entered incorrectly.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"500"),(0,i.mdx)("td",{parentName:"tr",align:null},"Internal server errors"),(0,i.mdx)("td",{parentName:"tr",align:null},"This is a server-side error. If you are making many simultaneous calls, you may be reaching the API limit and need to filter your results. Wait for a moment before trying your request again, and contact your administrator if the problem persists.")))),(0,i.mdx)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.mdx)("p",null,"If you receive a 400 status code error response, make sure your requests comply with the following rules:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Provide only valid metrics or dimensions that are ",(0,i.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/en/docs/analytics/components/real-time-reporting/realtime-metrics"},"supported by real-time requests"),"."),(0,i.mdx)("li",{parentName:"ul"},"Pass only one metric per request. Currently, the service returns 400 if more than one is passed."),(0,i.mdx)("li",{parentName:"ul"},"Always specify your first dimension as ",(0,i.mdx)("inlineCode",{parentName:"li"},"variables/dateRangeMinute")," since real time reports are always time bound and reported over minute granularity."),(0,i.mdx)("li",{parentName:"ul"},'Provide combinations of metrics and dimensions that do not qualify as as "overtime", "trended" or "breakdown" types.'),(0,i.mdx)("li",{parentName:"ul"},"Supply search inputs only for trended reports."),(0,i.mdx)("li",{parentName:"ul"},"Specify ",(0,i.mdx)("inlineCode",{parentName:"li"},"realTimeMinuteGranularity")," in settings object of at least ",(0,i.mdx)("inlineCode",{parentName:"li"},"10"),"."),(0,i.mdx)("li",{parentName:"ul"},"Do not pass ",(0,i.mdx)("inlineCode",{parentName:"li"},"statistics"),", ",(0,i.mdx)("inlineCode",{parentName:"li"},"identityOverrides"),", or ",(0,i.mdx)("inlineCode",{parentName:"li"},"bulkExportSettings"),". These are valid for normal reports but not for realtime."),(0,i.mdx)("li",{parentName:"ul"},"When using global filters, provide only a ",(0,i.mdx)("inlineCode",{parentName:"li"},"dateRange")," type entry."),(0,i.mdx)("li",{parentName:"ul"},"Do not include calculated metrics for real-time report requests."),(0,i.mdx)("li",{parentName:"ul"},"Do not incluce segment filtering for real-time report request."),(0,i.mdx)("li",{parentName:"ul"},"Do not specify the start date of the report earlier than 20 hours ago (relative to report suite timezone)."),(0,i.mdx)("li",{parentName:"ul"},"Do not specify the start date in the future."),(0,i.mdx)("li",{parentName:"ul"},"Always include a global date range in format ",(0,i.mdx)("strong",{parentName:"li"},"StartDate/EndDate")," (YYYY-MM-DDT00:00:00/YY-MM-DDT00:00:00). The start date cannot be earlier than the end date."),(0,i.mdx)("li",{parentName:"ul"},"Do not specify negative numbers for ",(0,i.mdx)("inlineCode",{parentName:"li"},"page")," parameters.")),(0,i.mdx)("h2",{id:"more-information"},"More information"),(0,i.mdx)("p",null,"For more information on real-time reports, see the following:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://adobedocs.github.io/analytics-2.0-apis/#/Reports/runRealtimeReport"},"Adobe Analytics 2.0 API real-time report reference")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/analytics-apis/docs/2.0/guides/endpoints/reports/"},"Adobe Analytics 2.0 API reporting guide")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/analytics-apis/docs/2.0/guides/endpoints/reports/breakdowns/"},"Adobe Analytics API breakdown dimensions")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/en/docs/analytics/admin/admin-tools/manage-report-suites/edit-report-suite/real-time-reports/t-realtime-admin"},"Adobe Analytics real-time reports configuration")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/en/docs/analytics/components/real-time-reporting/realtime-metrics"},"Adobe Analytics supported real-time metrics and dimensions")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/en/docs/analytics/components/real-time-reporting/realtime"},"Adobe Analytics real-time reporting overview")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/en/docs/analytics/technotes/ga-to-aa/reports/realtime-reports"},"Adobe Analytics Tech Notes: Real-time reports"),"  ")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-endpoints-reports-real-time-md-4b8d89bab3b6f6af83b2.js.map