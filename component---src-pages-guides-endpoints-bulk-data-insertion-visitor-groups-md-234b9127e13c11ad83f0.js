(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[3441],{2787:function(e,i,t){"use strict";t.r(i),t.d(i,{_frontmatter:function(){return l},default:function(){return d}});var o=t(2122),s=t(9756),r=(t(5007),t(4983)),a=t(9536),n=["components"],l={},p={_frontmatter:l},u=a.Z;function d(e){var i=e.components,t=(0,s.Z)(e,n);return(0,r.mdx)(u,(0,o.Z)({},p,t,{components:i,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"visitor-groups"},"Visitor groups"),(0,r.mdx)("p",null,"Visitor groups allow customers to upload files that can be processed in parallel, thus increasing the overall ingestion throughput. Each file uploaded must be tagged with a visitor group via an HTTP header. There are important rules that must be followed when categorizing batch files into visitor groups."),(0,r.mdx)("p",null,"A visitor group is a set of visitor IDs that are disjoint from any other visitor group set. This affects which server calls can be batched into which files. Because each file belongs to a single visitor group, two files that belong to different visitor groups must always have separate visitor IDs in them--there can be no overlap between visitor IDs across groups."),(0,r.mdx)("p",null,"For example, if a customer has decided to divide their integer visitor IDs into two visitor groups, group A might contain all odd visitor IDs and group B might contain all even visitor IDs. The method of categorizing them isn’t important as long as a visitor ID in group A will not appear in any of the files uploaded with a group B visitor group tag."),(0,r.mdx)("p",null,"Customers can split up their visitor IDs and therefore files into any number of visitor groups to increase parallelism and throughput (up to their set throttle limit). The same batch file requirements regarding size, ordering of the timestamps in the files, and the order in which files are uploaded, still apply for each visitor group."),(0,r.mdx)("p",null,"Another way to think of visitor groups is to view them as separate processing pipelines. Each visitor group creates a separate processing pipeline for files associated with that visitor group. Each pipeline processes files concurrently with other processing pipelines."),(0,r.mdx)("h2",{id:"additional-visitor-group-example"},"Additional Visitor Group Example"),(0,r.mdx)("p",null,"Suppose a set of server calls has integer visitor IDs, 1-100, and we want to create three disjoint visitor group sets. We can use the mathematical MOD operation to organize these visitors into 3 groups. Server calls where ",(0,r.mdx)("inlineCode",{parentName:"p"},"visitor ID MOD 3 = 0")," go into visitor group ",(0,r.mdx)("inlineCode",{parentName:"p"},"0"),". Server calls where ",(0,r.mdx)("inlineCode",{parentName:"p"},"visitor ID MOD 3 = 1")," go into visitor group ",(0,r.mdx)("inlineCode",{parentName:"p"},"1"),", and so forth. Server calls are batched into files and ordered by timestamp, per their visitor group, and are then uploaded with that visitor group specified in the header of the API request. Since the visitors in these files are all disjoint, the BDIA system can process them in parallel without risking any calls for a visit being processed out of order."),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/analytics-2.0-apis/static/042bb009715043faf6335496b18bc5b7/cb523/bia-visitor_groups.webp 320w","/analytics-2.0-apis/static/042bb009715043faf6335496b18bc5b7/797b9/bia-visitor_groups.webp 640w","/analytics-2.0-apis/static/042bb009715043faf6335496b18bc5b7/4b075/bia-visitor_groups.webp 1280w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/analytics-2.0-apis/static/042bb009715043faf6335496b18bc5b7/cb69c/bia-visitor_groups.jpg 320w","/analytics-2.0-apis/static/042bb009715043faf6335496b18bc5b7/c08c5/bia-visitor_groups.jpg 640w","/analytics-2.0-apis/static/042bb009715043faf6335496b18bc5b7/eea4a/bia-visitor_groups.jpg 1280w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/jpeg"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/analytics-2.0-apis/static/042bb009715043faf6335496b18bc5b7/eea4a/bia-visitor_groups.jpg",alt:"note visitor group diagram",title:"note visitor group diagram",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,r.mdx)("h2",{id:"changing-visitor-groups"},"Changing Visitor Groups"),(0,r.mdx)("p",null,"Customers may wish to change how they divide their visitor IDs into groups over time. This is possible as long as all files using previously named visitor groups completely finish ingestion before files with new visitor group assignments are uploaded. This ensures that there is no visitor ID overlap between the new groups and old groups."),(0,r.mdx)("h2",{id:"uploading-files-in-order"},"Uploading Files in Order"),(0,r.mdx)("p",null,"Internally, files have a requirement for timestamp order. Multiple files have the same restriction. For example, if server calls for Visitor A exist over a long period of time, they can be present in multiple batch files. This workflow is supported but the files must be uploaded in chronological order so that server calls for Visitor A are uploaded, even across files, in order. In other words, the server calls for a visitor in a file must not only be sorted chronologically, but files must also be uploaded chronologically as well."),(0,r.mdx)("p",null,"When uploading a file via the REST API, it is important to understand that the files are processed in the order they are received (per visitor group). If you try to upload two files at once for the same visitor group, whichever REST call receives a “200 OK” first are processed by the system first. Because of possible race conditions, it is important to upload files within a visitor group one at a time, waiting for a “200 OK” from the server that a file has been successfully uploaded before uploading another."),(0,r.mdx)("h2",{id:"number-of-visitor-groups-file-size-and-send-frequency-recommendations"},"Number of Visitor Groups, File Size and Send Frequency Recommendations"),(0,r.mdx)("p",null,"BDIA is designed to run optimally with larger file sizes. Adobe recommends a pattern of larger files uploaded less frequently rather than small files uploaded more frequently."),(0,r.mdx)("p",null,"For an implementation guideline, Adobe offers the following recommendations:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Ingestion of 2000 rows per second per visitor group"),(0,r.mdx)("li",{parentName:"ul"},"No more than 1 API call per 20 seconds per visitor group")),(0,r.mdx)("p",null,"Using these guidelines, you can anticipate how many visitor groups to utilize.  For example, suppose your company anticipates submitting 1 billion hits per day.  At a rate of 2000 rows per second, a single visitor group could support about 173 million rows per 24 hours.  Dividing 1 billion (anticipated rows) by 173 million yields 5.7.  So an implementation of at least 6 visitor groups would be appropriate.  To account for visitor groups of unequal size, it is safer to bump the estimate up. There would be no harm in using 8-10 visitor groups in this example."),(0,r.mdx)("p",null,"If you used 10 visitor groups, that would result in about 100 million rows per day/per group, or 1160 rows per second.  As far as send frequency, you could choose to send a file of about 23,000 rows every 20 seconds, 35,000 rows every 30 seconds, and so forth."),(0,r.mdx)("p",null,"File size varies according to the average size of each row.  While Adobe recommends larger files to reduce latency, it can only handle compressed files of up to 100 MB.  However, files of this size should usually be reserved for historical ingest scenarios, as it increases latency when hits are allowed to build up for an extended period. Current BDIA customers typically send files with rows between 3,000 and 50,000 rows, and sizes of 500k up to 20 MB."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-endpoints-bulk-data-insertion-visitor-groups-md-234b9127e13c11ad83f0.js.map