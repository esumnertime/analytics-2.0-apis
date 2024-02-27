"use strict";(self.webpackChunkanalytics_2_0_apis=self.webpackChunkanalytics_2_0_apis||[]).push([[7617],{22858:function(e,t,i){i.r(t),i.d(t,{_frontmatter:function(){return s},default:function(){return c}});var o,a=i(87462),n=i(63366),r=(i(15007),i(64983)),d=i(91515),l=["components"],s={},m=(o="InlineAlert",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),u={_frontmatter:s},p=d.Z;function c(e){var t=e.components,i=(0,n.Z)(e,l);return(0,r.mdx)(p,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"use-customer-id-to-identify-visitors"},"Use customer ID to identify visitors"),(0,r.mdx)("p",null,"Adobe offers a way to simplify the process of generating an identifier used by the Adobe Experience Cloud Identity Service. Adobe can use one of the customer IDs in the ",(0,r.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/id-service/using/id-service-api/methods/setcustomerids.html"},(0,r.mdx)("inlineCode",{parentName:"a"},"setCustomerIDs"))," method as a seed for generating an Adobe Experience Cloud visitor ID for you."),(0,r.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.mdx)("p",null,"Before using this method to identify visitors, make sure that all of the following are met:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Communicate your intent to use this feature to the team responsible for the ",(0,r.mdx)("a",{parentName:"p",href:"./file-format.md"},"Bulk Data Insertion API and associated format"),". It requires coordination between this team and the Adobe Audience Manager team to provision the desired integration on the backend.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Only one ",(0,r.mdx)("inlineCode",{parentName:"p"},"customerIDType")," can be used as a seed per IMS organization. If you attempt to set ",(0,r.mdx)("inlineCode",{parentName:"p"},"isMCSeed")," to ",(0,r.mdx)("inlineCode",{parentName:"p"},"true")," on a ",(0,r.mdx)("inlineCode",{parentName:"p"},"customerIDType")," other than the one provisioned by Adobe, it is ignored."),(0,r.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}))),(0,r.mdx)("p",null,"Adobe may add optional request and response members (name/value pairs) to existing API objects at any time and without notice or changes in versioning. Adobe recommends that you refer to the API documentation of any third-party tool you integrate with our APIs so that such additions are ignored in processing if not understood. If implemented properly, such additions are non-breaking changes for your implementation. Adobe will not remove parameters or add required parameters without first providing standard notification through release notes."),(0,r.mdx)("h2",{id:"file-requirements"},"File requirements"),(0,r.mdx)("p",null,"When uploading files to the BDIA API and the customer ID is the desired visitor identifier for the row, make sure that all the following are met:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The case-sensitive ",(0,r.mdx)("inlineCode",{parentName:"li"},"customerID.[customerIDType].id")," is specified in the file's column header row. The ","[customerIDType]"," will be Audience Manager's integration code (DO NOT include brackets). "),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"customerID.[customerIDType].id")," contains a value for each row"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"customerID.[customerIDType].isMCSeed")," is set to ",(0,r.mdx)("inlineCode",{parentName:"li"},"1")," (true) for each row")),(0,r.mdx)("p",null,"If either of these variables are blank, Adobe falls back to other visitor identification columns. If there are no other visitor identifiers present in the row, the row is skipped. Rows that fall back to other visitor identification columns are treated as separate visitors."),(0,r.mdx)("h2",{id:"example-integration-workflow"},"Example Integration Workflow"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Select a field that you wish to use as a seed to generate an MCID. For example, you could choose the customer's email address."),(0,r.mdx)("li",{parentName:"ol"},'Setup an integration with Audience Manager. The seed field will be your "integration code". You will also give them a preferred unique salt value. We recommend using your report suite name.'),(0,r.mdx)("li",{parentName:"ol"},"Audience Manager will give back to you the following fields:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Partner ID (pid)"),(0,r.mdx)("li",{parentName:"ul"},"Data Provider ID (dpid)"))),(0,r.mdx)("li",{parentName:"ol"},"Give the following values to your consultant to pass on to the BDIA team:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"IMS Org Id"),(0,r.mdx)("li",{parentName:"ul"},"Integration Code (ex. email)"),(0,r.mdx)("li",{parentName:"ul"},"AAM Partner ID (pid)"),(0,r.mdx)("li",{parentName:"ul"},"AAM Data Provider ID (dpid)"),(0,r.mdx)("li",{parentName:"ul"},"Salt value (ex. mycompanyreportsuite)"))),(0,r.mdx)("li",{parentName:"ol"},"Once you are notified of successful configuration, you would include the following fields in your BDIA file:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"customerID.email.id.  (value will be a unique email address for each user)"),(0,r.mdx)("li",{parentName:"ul"},"customerID.email.isMCSeed (value will be 1 for all rows)")))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-endpoints-bulk-data-insertion-mcseed-md-303191dd9ecc045194d8.js.map