(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[2870],{8263:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return i},default:function(){return x}});var a=n(2122),d=n(9756),r=(n(5007),n(4983)),l=n(9536),m=["components"],i={},p={_frontmatter:i},o=l.Z;function x(e){var t=e.components,n=(0,d.Z)(e,m);return(0,r.mdx)(o,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"usage-api"},"Usage API"),(0,r.mdx)("p",null,"The Usage API allows you to retrieve the usage and access log data provided within the Logs tool."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"GET https://analytics.adobe.io/api/{COMPANY_ID}/auditlogs/usage")),(0,r.mdx)("h2",{id:"supported-query-string-parameters"},"Supported query string parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"),(0,r.mdx)("th",{parentName:"tr",align:null},"Possible Value"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"startDate")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:null},"Start date for the maximum of a 3 month period."),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"2020-12-01T00:00:00-07"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"endDate")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:null},"End date for the maximum of a 3 month period."),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"2020-12-15T14:32:33-07"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"login")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:null},"The login value of the user you want to filter logs by. Filtered as an exact match."),(0,r.mdx)("td",{parentName:"tr",align:null},"User defined")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"ip")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:null},"The IP address you want to filter logs by. This filter supports a partial match."),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"10.0"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"rsid")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:null},"The report suite ID you want to filter logs by. Filtered as an exact match."),(0,r.mdx)("td",{parentName:"tr",align:null},"User defined")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"eventType")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:null},"The numeric id for the event type you want to filter logs by. Please reference the lookup table below."),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"3"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"event")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:null},"The event description you want to filter logs by. No wildcards are permitted, but this filter is case insensitive and supports partial matches."),(0,r.mdx)("td",{parentName:"tr",align:null},"User defined")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"limit")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"integer")),(0,r.mdx)("td",{parentName:"tr",align:null},"Number of results per page, with a maximum value of 1000."),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"10"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"page")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"integer")),(0,r.mdx)("td",{parentName:"tr",align:null},'Page number (base 0 - first page is "0")'),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"0"))))),(0,r.mdx)("h2",{id:"eventtype-lookup"},(0,r.mdx)("inlineCode",{parentName:"h2"},"eventType")," lookup"),(0,r.mdx)("p",null,"By default, all event types are included when you make a request to get usage logs. You can apply a filter for a specific event type using the ",(0,r.mdx)("inlineCode",{parentName:"p"},"eventType")," query string parameter. These event types are the same fields available in the ",(0,r.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/analytics/admin/admin-tools/logs.html?lang=en#section_8ADE8A7204A8401C968ABC20AECA381D"},"Usage and Access Log")," in the Analytics UI."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"ID"),(0,r.mdx)("th",{parentName:"tr",align:null},"Event Type"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"0")),(0,r.mdx)("td",{parentName:"tr",align:null},"No Category")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"1")),(0,r.mdx)("td",{parentName:"tr",align:null},"Login failed")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"2")),(0,r.mdx)("td",{parentName:"tr",align:null},"Login successful")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"3")),(0,r.mdx)("td",{parentName:"tr",align:null},"Admin Action")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"4")),(0,r.mdx)("td",{parentName:"tr",align:null},"Security setting change")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"5")),(0,r.mdx)("td",{parentName:"tr",align:null},"Report viewed")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"6")),(0,r.mdx)("td",{parentName:"tr",align:null},"Report downloaded")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"7")),(0,r.mdx)("td",{parentName:"tr",align:null},"Alert sent")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"8")),(0,r.mdx)("td",{parentName:"tr",align:null},"User Action")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"9")),(0,r.mdx)("td",{parentName:"tr",align:null},"Tool viewed")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"10")),(0,r.mdx)("td",{parentName:"tr",align:null},"Adobe Action")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"11")),(0,r.mdx)("td",{parentName:"tr",align:null},"Password Recovery")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"12")),(0,r.mdx)("td",{parentName:"tr",align:null},"Bookmarks")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"13")),(0,r.mdx)("td",{parentName:"tr",align:null},"Dashboards")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"14")),(0,r.mdx)("td",{parentName:"tr",align:null},"Alerts")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"15")),(0,r.mdx)("td",{parentName:"tr",align:null},"Calendar Events")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"16")),(0,r.mdx)("td",{parentName:"tr",align:null},"Targets")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"17")),(0,r.mdx)("td",{parentName:"tr",align:null},"Report Settings")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"18")),(0,r.mdx)("td",{parentName:"tr",align:null},"Scheduled Reports")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"19")),(0,r.mdx)("td",{parentName:"tr",align:null},"Exclude By IP")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"20")),(0,r.mdx)("td",{parentName:"tr",align:null},"Name Pages")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"21")),(0,r.mdx)("td",{parentName:"tr",align:null},"Classifications")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"22")),(0,r.mdx)("td",{parentName:"tr",align:null},"Data Sources")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"23")),(0,r.mdx)("td",{parentName:"tr",align:null},"Workspace Project")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"24")),(0,r.mdx)("td",{parentName:"tr",align:null},"Segment")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"25")),(0,r.mdx)("td",{parentName:"tr",align:null},"Calculated Metric")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"26")),(0,r.mdx)("td",{parentName:"tr",align:null},"Date Range")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"27")),(0,r.mdx)("td",{parentName:"tr",align:null},"Virtual Report Suite")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"28")),(0,r.mdx)("td",{parentName:"tr",align:null},"Contribution Analysis")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"29")),(0,r.mdx)("td",{parentName:"tr",align:null},"Excel Data Block Request")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"30")),(0,r.mdx)("td",{parentName:"tr",align:null},"Excel Login Failure")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"31")),(0,r.mdx)("td",{parentName:"tr",align:null},"Excel Login Success")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"32")),(0,r.mdx)("td",{parentName:"tr",align:null},"Mobile Login Failure")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"33")),(0,r.mdx)("td",{parentName:"tr",align:null},"Mobile Login Success")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"34")),(0,r.mdx)("td",{parentName:"tr",align:null},"Api Method")))),(0,r.mdx)("h2",{id:"curl-request-example"},"cURL Request Example"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X GET "https://analytics.adobe.io/api/{COMPANY_ID}/auditlogs/usage?startDate=2021-01-01T00%3A00%3A00-07&endDate=2021-01-15T14%3A32%3A33-07&limit=10" -H "x-api-key: {CLIENT_ID}" -H "x-proxy-global-company-id: {COMPANY_ID}" -H "Authorization: Bearer {ACCESS_TOKEN}" -H "Accept: application/json"\n')),(0,r.mdx)("p",null,"Example response:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "content": [\n    {\n      "eventType": null,\n      "eventDescription": "Created Successfully",\n      "ipAddress": "10.27.55.130",\n      "login": "user@adobe.com",\n      "rsid": null,\n      "dateCreated": "2021-01-13T23:20:41.000+00:00"\n    },\n    {\n      "eventType": "23",\n      "eventDescription": "Project Viewed: Name=AS PROJ 09 03 Project Id=5fd02d65b00cb97e4762a20f",\n      "ipAddress": "10.27.55.131",\n      "login": "user@adobe.com",\n      "rsid": "N/A",\n      "dateCreated": "2021-01-13T23:20:30.000+00:00"\n    },\n    {\n      "eventType": "2",\n      "eventDescription": "Successful Login - Experience Cloud",\n      "ipAddress": "10.178.33.74",\n      "login": "user@adobe.com",\n      "rsid": "N/A",\n      "dateCreated": "2021-01-13T23:20:10.000+00:00"\n    },\n    {\n      "eventType": "3",\n      "eventDescription": "Viewed Logs:Index in the Administration Console.",\n      "ipAddress": "10.179.134.242",\n      "login": "user@adobe.com",\n      "rsid": "N/A",\n      "dateCreated": "2021-01-13T18:45:42.000+00:00"\n    },\n    {\n      "eventType": "3",\n      "eventDescription": "Viewed Logs:GetUsageLogUI in the Administration Console.",\n      "ipAddress": "10.179.134.242",\n      "login": "user@adobe.com",\n      "rsid": "N/A",\n      "dateCreated": "2021-01-13T18:38:33.000+00:00"\n    },\n    {\n      "eventType": "3",\n      "eventDescription": "Viewed Logs:GetUsageLogUI in the Administration Console.",\n      "ipAddress": "10.179.134.242",\n      "login": "user@adobe.com",\n      "rsid": "N/A",\n      "dateCreated": "2021-01-13T18:09:16.000+00:00"\n    },\n    {\n      "eventType": "3",\n      "eventDescription": "Viewed Logs:GetUsageLogUI in the Administration Console.",\n      "ipAddress": "10.179.134.242",\n      "login": "user@adobe.com",\n      "rsid": "N/A",\n      "dateCreated": "2021-01-13T18:09:10.000+00:00"\n    },\n    {\n      "eventType": "3",\n      "eventDescription": "Viewed Logs:GetReportSuiteLog in the Administration Console.",\n      "ipAddress": "10.179.134.242",\n      "login": "user@adobe.com",\n      "rsid": "N/A",\n      "dateCreated": "2021-01-13T18:08:54.000+00:00"\n    },\n    {\n      "eventType": "3",\n      "eventDescription": "Viewed Logs:GetUsageLogUI in the Administration Console.",\n      "ipAddress": "10.179.134.242",\n      "login": "user@adobe.com",\n      "rsid": "N/A",\n      "dateCreated": "2021-01-13T18:08:26.000+00:00"\n    },\n    {\n      "eventType": "3",\n      "eventDescription": "Viewed Logs:Index in the Administration Console.",\n      "ipAddress": "10.179.134.242",\n      "login": "user@adobe.com",\n      "rsid": "N/A",\n      "dateCreated": "2021-01-13T18:06:09.000+00:00"\n    }\n  ],\n  "totalElements": 159,\n  "lastPage": false,\n  "numberOfElements": 10,\n  "totalPages": 16,\n  "firstPage": true,\n  "sort": null,\n  "size": 10,\n  "number": 0\n}\n')),(0,r.mdx)("h2",{id:"curl-example-request-with-filters-applied"},"cURL Example Request With Filters Applied"),(0,r.mdx)("p",null,"The following request contains query string parameters to filter the logs by eventType, IP and event."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X GET "https://analytics.adobe.io/api/{COMPANY_ID}/auditlogs/usage?startDate=2021-01-01T00%3A00%3A00-07&endDate=2021-01-15T14%3A32%3A33-07&ip=10&eventType=5&event=viewed&limit=10" -H "x-api-key: {CLIENT_ID}" -H "x-proxy-global-company-id: {COMPANY_ID}" -H "Authorization: Bearer {ACCESS_TOKEN}" -H "Accept: application/json"\n')),(0,r.mdx)("p",null,"Example response:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "content": [\n    {\n      "eventType": "5",\n      "eventDescription": "Pages Report viewed",\n      "ipAddress": "10.178.63.58",\n      "login": "user@adobe.com",\n      "rsid": "examplersid",\n      "dateCreated": "2021-01-11T19:30:46.000+00:00"\n    }\n  ],\n  "totalElements": 1,\n  "lastPage": true,\n  "numberOfElements": 1,\n  "totalPages": 1,\n  "firstPage": true,\n  "sort": null,\n  "size": 10,\n  "number": 0\n}\n')))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-endpoints-usage-md-5b7915598a3592424c12.js.map