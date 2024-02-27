"use strict";(self.webpackChunkanalytics_2_0_apis=self.webpackChunkanalytics_2_0_apis||[]).push([[9762],{90438:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return c}});var o,i=a(87462),n=a(63366),r=(a(15007),a(64983)),s=a(91515),l=["components"],d={},m=(o="InlineAlert",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),u={_frontmatter:d},p=s.Z;function c(e){var t=e.components,a=(0,n.Z)(e,l);return(0,r.mdx)(p,(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"bulk-data-insertion-api"},"Bulk Data Insertion API"),(0,r.mdx)("p",null,"The Bulk Data Insertion API (BDIA) is an Adobe Analytics capability that lets you upload server call data in batches of files instead of using client-side libraries such as AppMeasurement. The server calls in these batch files can be either current (live) data or historical data. It is a more scalable successor to the Data Insertion API in previous versions of the Adobe Analytics API."),(0,r.mdx)("p",null,"Bulk Data Insertion solves several problems for a variety of use cases. Some use case examples include:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Ingesting historical data from a previous analytics system"),(0,r.mdx)("li",{parentName:"ul"},"An internal analytics collection system that makes it unfeasible to use AppMeasurement. You can use Extract-Transform-Load (ETL) processes to put data into batch files then use BDIA to upload them to Adobe Analytics."),(0,r.mdx)("li",{parentName:"ul"},"Data collection from devices that have only intermittent connectivity to the internet. These devices store up the interactions until they receive a connection. The device can then upload the data all at once via BDIA.")),(0,r.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"Adobe may add optional request and response members (name/value pairs) to existing API objects at any time and without notice or changes in versioning. Adobe recommends that you refer to the API documentation of any third-party tool you integrate with our APIs so that such additions are ignored in processing if not understood. If implemented properly, such additions are non-breaking changes for your implementation. Adobe will not remove parameters or add required parameters without first providing standard notification through release notes."),(0,r.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.mdx)("p",null,"Before using this API, make sure that all of the following are met:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"You can successfully authenticate with the API using JWT. OAuth is not supported. See ",(0,r.mdx)("a",{parentName:"li",href:"../../index.md"},"Getting started")," to make sure that you have the correct permissions and have created an API client on Adobe Developer."),(0,r.mdx)("li",{parentName:"ul"},"The desired report suite is timestamp-enabled or timestamp optional. See ",(0,r.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/docs/analytics/technotes/timestamps-optional.html"},"Timestamps optional")," in the Adobe Analytics documentation. All newly created report suites are set to timestamp optional by default."),(0,r.mdx)("li",{parentName:"ul"},"Communicate to Adobe the expected volume of ingestion per day. Based on this information, Adobe provisions the appropriate hardware to handle that volume and creates a per-second throttle limit. If enough files are uploaded in a short amount of time to exceed the throttle limit, Adobe ingests uploaded files more slowly. These limits help ensure timely processing and availability of data for reporting. They also help protect the system from becoming overwhelmed before proper capacity is provisioned for a sharp increase in file uploads."),(0,r.mdx)("li",{parentName:"ul"},"Follow the established ",(0,r.mdx)("a",{parentName:"li",href:"file-format.md"},"File formatting requirements")," for each upload."),(0,r.mdx)("li",{parentName:"ul"},"If using a Customer Attribute as a seed to automatically generate Experience Cloud Visitor IDs (ECID), provisioning by Adobe is required first. See ",(0,r.mdx)("a",{parentName:"li",href:"mcseed.md"},"Use customer ID to identify visitors"),"."),(0,r.mdx)("li",{parentName:"ul"},"You are using the correct number of ",(0,r.mdx)("a",{parentName:"li",href:"visitor-groups.md"},"Visitor Groups")," for your anticipated load. Follow the guidelines on file send frequency limits to avoid having your requests throttled or data processing out of order."),(0,r.mdx)("li",{parentName:"ul"},"You do not plan to upload more than 1 file per second. If rates above this level are needed, consider using the ",(0,r.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/analytics-apis/docs/1.4/guides/data-insertion/"},"Data Insertion API")," instead.")),(0,r.mdx)("p",null,"Once you meet all prerequisites, see ",(0,r.mdx)("a",{parentName:"p",href:"file-format.md"},"File format")," to prepare your data in a format usable by the API."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-endpoints-bulk-data-insertion-index-md-d8a56f8f5cbc3f641542.js.map