(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[4403],{611:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return c}});var n=a(2122),i=a(9756),r=(a(5007),a(4983)),d=a(9536),o=["components"],s={},m={_frontmatter:s},l=d.Z;function c(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.mdx)(l,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"date-ranges-api-faq"},"Date ranges API FAQ"),(0,r.mdx)("p",null,"Frequently asked questions around the date ranges endpoint."),(0,r.mdx)("h2",{id:"what-are-some-best-practices-that-i-can-follow-around-the-date-ranges-endpoint"},"What are some best practices that I can follow around the date ranges endpoint?"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Make multiple requests, each one limited to 1000 date ranges or fewer when retrieving them. Avoid making a large, single request for all possible date ranges."),(0,r.mdx)("li",{parentName:"ul"},"Request data once and cache it."),(0,r.mdx)("li",{parentName:"ul"},"Avoid creating duplicate date ranges with the same definition. Creating too many date ranges can affect API performance for your company."),(0,r.mdx)("li",{parentName:"ul"},"Creating a date range from scratch can be difficult without familiarity of the definition specifications. Use the ",(0,r.mdx)("a",{parentName:"li",href:"../reports/debugger.md"},"debugger")," inside Analysis Workspace to learn how Adobe formats API calls. You can then retrieve the date range definition using the API, modify it, then send a ",(0,r.mdx)("inlineCode",{parentName:"li"},"POST")," call with the modified definition.")),(0,r.mdx)("h2",{id:"what-is-the-difference-between-a-predefined-date-range-and-a-date-range-that-i-create"},"What is the difference between a predefined date range and a date range that I create?"),(0,r.mdx)("p",null,"Adobe provides predefined date range templates. Although original templates cannot be modified or deleted, you can create copies of them to modify. Predefined templates have the attribute ",(0,r.mdx)("inlineCode",{parentName:"p"},"template: true"),". You can use these date range templates in Workspace projects like any other type of date range."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-endpoints-date-ranges-faq-md-a63b259701a3243fd716.js.map