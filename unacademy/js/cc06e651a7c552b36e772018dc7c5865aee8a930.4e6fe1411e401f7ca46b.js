(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[22],{boGN:function(e,t,n){"use strict";var r=n("KQm4"),o=n("rePB");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a={mergeTwoSortedArray:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=[],o=0,i=0,u=e.length,c=t.length,s=e.map((function(e,t){return a(a({},e),{},{index:t})})),d=t.map((function(e,t){return a(a({},e),{},{index:t})}));o<=u-1||i<=c-1;)s.length===o||d.length===i?s.length===o?(n.push.apply(n,Object(r.a)(d.slice(i))),i=c):(n.push.apply(n,Object(r.a)(s.slice(o))),o=u):s[o].rank<=d[i].rank?(n.push(s[o]),o+=1):(n.push(d[i]),i+=1);return n}}},njvk:function(e,t,n){"use strict";var r=n("rePB"),o=n("MUNq"),i=n("Krw4"),a=n("WlAH");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=function(e,t,n){var r=e.title,i=e.description,a=e.selectedLanguages,u=e.selectedGoal,c=e.selectedEducators,s=e.courseType,d=t.isModerator,l=t.username;return{title:r,description:i,for_subscription:!0,language:a[0].id,goal_uid:u[0].uid,collection_uid:n,course_type:s,author_usernames:d?o.a.getCommaSeparatedUIDs(c,"username"):l}},d=function(e,t){var n=e.title,r=e.description,i=e.selectedLanguages,a=e.selectedGoal,u=e.selectedEducators,c=e.isFreeTest,s=e.courseUID,d=t.isModerator,l=t.username;return{programme_type:2,title:n,description:r,collection_uid:s,for_subscription:!c,language:o.a.getCommaSeparatedUIDs(i,"id"),goal_uid:a[0].uid,author_usernames:d?o.a.getCommaSeparatedUIDs(u,"username"):l}},l=function(e){var t=new Date;e&&(t=new Date(e));var n=t.getFullYear(),r=t.getMonth()+1;r="0".concat(r).slice(-2);var o=t.getDate();o="0".concat(o).slice(-2);var i=t.getHours();i="0".concat(i).slice(-2);var a=t.getMinutes();return a="0".concat(a).slice(-2),"".concat(n,"-").concat(r,"-").concat(o,"T").concat(i,":").concat(a)},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(0===e.length&&0===t.length)return 0;if(0===e.length||0===t.length)return e.length?e[e.length-1].rank:t[t.length-1].rank;var n=e[e.length-1],r=t[t.length-1];return n.rank>r.rank?n.rank:r.rank};t.a={isUserUnauthorised:function(e,t){var n=e.isModerator,r=e.canAddSpecialClass,o=e.canAddPlusCourse;return!n&&(("plus-courses"!==t||!o)&&(("special-classes"!==t||!o&&!r)&&(("test-series"!==t||!o)&&"template"!==t)))},modifyStep1CourseData:s,modifyStep2CourseData:function(e,t){var n=e.selectedTopics,r=e.preview,i=e.selectedExams,a=e.courseUID,u=e.courseType;return c(c({},s(e,t)),{},{topic_uids:o.a.getCommaSeparatedUIDs(n,"uid"),promo_video:r,exam_uids:o.a.getCommaSeparatedUIDs(i,"uid"),collection_uid:a,course_type:u})},checkValidURL:function(e){return!!/(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-/]))?/.test(e)},getCurrentDateTime:l,modifystep3CourseData:function(e,t,n){var r=e.newSession,i=e.courseUID,u=e.selectedEducators,c=e.programmeType,s=t.isModerator,d=t.username,l=r.duration,p=r.liveAt,_=r.title,m=r.selectedConcepts,f=r.selectedEducator,E=new Date(p).getTime(),v=d;s&&u.length>1&&(v=f.username),s&&1===u.length&&(v=u[0].username);var g=a.j.UNDEFINED;return c===a.i.TESTSERIES?g=a.j.TEST:c===a.i.COURSE&&(g=a.j.QUIZ),{author_username:v,collection_uid:i,duration:l,live_at:E,start_time:E,title:_,topology_uids:o.a.getCommaSeparatedUIDs(m,"uid"),type:n?"quiz":"post",quiz_secondary_type:g}},modifyStep1TestSeriesCreationData:d,modifyStep2TestSeriesEditData:function(e,t){var n=e.preview,r=e.selectedTopics,a=e.registrationClosesOn,u=e.visibleFrom;return a=i.a.getDateInToEpoch(a),u=i.a.getDateInToEpoch(u),c(c({},d(e,t)),{},{promo_video:n,visible_at:u,applications_close_at:a,topic_uids:o.a.getCommaSeparatedUIDs(r,"uid")})},modifystep3TestSeriesData:function(e,t,n){var r=e.newSession,i=e.courseUID,a=e.selectedEducators,u=t.isModerator,c=t.username,s=r.duration,d=r.liveAt,l=r.title,p=r.selectedConcepts,_=r.selectedEducator,m=c;u&&a.length>1&&(m=_.username),u&&1===a.length&&(m=a[0].username);var f=new Date(d).getTime();return{author_username:m,collection_uid:i,duration:s,live_at:f,start_time:f,title:l,topology_uids:o.a.getCommaSeparatedUIDs(p,"uid"),type:0===n?"quiz":"post"}},createApiDataForSpecialClass:function(e,t,n){var r=n.isModerator,i=n.username,a=t.specialClassscheduledDateTime,u=t.speciaClassDuration,c=t.visibleFrom;a=l(a),c=l(c);var s=t.selectedEducators,d=t.selectedGoal,p=t.description,_=t.selectedLanguages,m=t.title,f=t.spclClassUID,E=t.selectedExams,v=t.courseUID,g=t.selectedTopics,h=function(e){if(e)return new Date(e).getTime()},T=h(a),y=h(c);u||(u=60);var S=o.a.getCommaSeparatedUIDs(s,"username"),O={title:m,goal_uid:d[0].uid,language:_[0].id,author_usernames:r?S:i,description:p,duration:u,author_username:r?s[0].username:i,live_at:T,type:"post",for_subscription:!1,visible_at:y};if("edit"===e){var D=o.a.getCommaSeparatedUIDs(E,"uid");O.collection_uid=v,O.item_uid=f,O.exam_uids=D,O.topic_uids=o.a.getCommaSeparatedUIDs(g,"uid")}return O},modifystep2TemplateSessionData:function(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i=e.newSession,a=i.duration,u=i.title,s=i.selectedConcepts,d=i.rank,l=i.type,_=i.index,m=p(e.liveClasses,e.quizzes)+1,f={title:u,duration:a,type:0===n?"post":"quiz",rank:m};r&&(f.type=l,f.rank=d),0===n&&(f.concepts=s);var E=c({},e);if(r){if(o){var v=e.liveClasses,g=e.quizzes;return 0===n?v[_]=f:g[_]=f,{liveClasses:v,quizzes:g}}o||(0===n?E.liveClasses[_]=f:E.quizzes[_]=f)}else if(!r){if(o){var h=e.liveClasses,T=e.quizzes;return 0===n?h.push(f):T.push(f),{liveClasses:h,quizzes:T}}0===n?E.liveClasses.push(f):E.quizzes.push(f)}return E},createTemplateData:function(e){var t=e.uid,n=e.title,r=e.description,o=e.selectedGoal,i=e.selectedTopics,a=e.selectedTopicGroups,u=e.selectedExams,c=e.courseType,s=e.sessionDuration,d=e.liveClasses,l=e.quizzes,p=e.completeTemplate,_=e.state,m={};return m.title=n,m.description=r,t&&(m.id=t),m.topic_groups=a,m.topics=i,m.exams=u,m.live_classes=d.map((function(e){return{duration:parseInt(e.duration,10),title:e.title,rank:e.rank,type:e.type,concepts:e.concepts.map((function(e){return{name:e.name,uid:e.uid}}))}})),m.quizzes=l.map((function(e){return{duration:parseInt(e.duration,10),title:e.title,rank:e.rank,type:e.type}})),m.session_duration=s,m.goal={goal_name:o[0].name,goal_uid:o[0].uid},m.course_type=c,m.state=1===_||p?1:0,m},modifyStep2TemplateCourseData:function(e){var t=e.selectedExams,n=e.selectedTopics,r=e.preview,i=e.templateUID,a=e.courseUID,u=e.courseType;return{topic_uids:o.a.getCommaSeparatedUIDs(n,"uid"),promo_video:r,exam_uids:o.a.getCommaSeparatedUIDs(t,"uid"),collection_uid:a,course_type:u,template_id:i}},modifyStep3TemplateScheduleData:function(e){var t=e.courseUID,n=e.schedule,r=e.liveClasses,o=e.quizzes,i=n.startsFrom,a=n.daysOfWeek,u=n.duration,c=n.time;return{collection_uid:t,classes_schedule:{start_at:new Date("".concat(i,"T").concat(c)).getTime(),days:a,duration:u},live_classes:r,quizzes:o}},modifyStep1TemplateCourseData:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=e.title,i=e.description,a=e.selectedLanguages,u=e.selectedGoal,c=e.selectedEducators,s=e.uid,d=e.schedule,l=e.courseUID,p=d.startsFrom,_=d.daysOfWeek,m=d.duration,f=d.time,E=t.isModerator,v=t.username;if(!E&&n)return{language:a[0].id,template_id:s,classes_schedule:{start_at:new Date("".concat(p,"T").concat(f)).getTime(),days:_,duration:m}};var g={title:r,description:i,template_id:s,language:a[0].id,goal_uid:u[0].uid,course_type:2,author_usernames:E?o.a.getCommaSeparatedUIDs(c,"username"):v};return g.collection_uid=l,g}}},vgmG:function(e,t,n){"use strict";n.d(t,"H",(function(){return h})),n.d(t,"V",(function(){return T})),n.d(t,"W",(function(){return y})),n.d(t,"U",(function(){return O})),n.d(t,"D",(function(){return b})),n.d(t,"J",(function(){return A})),n.d(t,"Hb",(function(){return U})),n.d(t,"N",(function(){return I})),n.d(t,"R",(function(){return L})),n.d(t,"O",(function(){return w})),n.d(t,"Q",(function(){return P})),n.d(t,"T",(function(){return F})),n.d(t,"E",(function(){return k})),n.d(t,"Z",(function(){return H})),n.d(t,"P",(function(){return M})),n.d(t,"L",(function(){return G})),n.d(t,"Ub",(function(){return x})),n.d(t,"wb",(function(){return q})),n.d(t,"G",(function(){return B})),n.d(t,"K",(function(){return V})),n.d(t,"x",(function(){return Y})),n.d(t,"Lb",(function(){return J})),n.d(t,"Ib",(function(){return Q})),n.d(t,"Kb",(function(){return X})),n.d(t,"ib",(function(){return Z})),n.d(t,"kb",(function(){return $})),n.d(t,"Jb",(function(){return ee})),n.d(t,"pb",(function(){return te})),n.d(t,"qb",(function(){return ne})),n.d(t,"ob",(function(){return re})),n.d(t,"nb",(function(){return oe})),n.d(t,"c",(function(){return ie})),n.d(t,"s",(function(){return ae})),n.d(t,"g",(function(){return ue})),n.d(t,"w",(function(){return ce})),n.d(t,"m",(function(){return se})),n.d(t,"t",(function(){return de})),n.d(t,"Tb",(function(){return le})),n.d(t,"C",(function(){return pe})),n.d(t,"sb",(function(){return _e})),n.d(t,"z",(function(){return me})),n.d(t,"Rb",(function(){return fe})),n.d(t,"a",(function(){return Ee})),n.d(t,"y",(function(){return ve})),n.d(t,"b",(function(){return ge})),n.d(t,"o",(function(){return he})),n.d(t,"xb",(function(){return Te})),n.d(t,"Bb",(function(){return ye})),n.d(t,"r",(function(){return Se})),n.d(t,"Eb",(function(){return Oe})),n.d(t,"eb",(function(){return De})),n.d(t,"bb",(function(){return be})),n.d(t,"F",(function(){return Ce})),n.d(t,"tb",(function(){return Ae})),n.d(t,"h",(function(){return Ue})),n.d(t,"i",(function(){return Re})),n.d(t,"I",(function(){return Ie})),n.d(t,"A",(function(){return Le})),n.d(t,"db",(function(){return je})),n.d(t,"cb",(function(){return we})),n.d(t,"hb",(function(){return Pe})),n.d(t,"S",(function(){return ke})),n.d(t,"Pb",(function(){return He})),n.d(t,"Ob",(function(){return Ne})),n.d(t,"lb",(function(){return Me})),n.d(t,"Nb",(function(){return ze})),n.d(t,"Mb",(function(){return Ge})),n.d(t,"ub",(function(){return xe})),n.d(t,"M",(function(){return qe})),n.d(t,"Y",(function(){return Be})),n.d(t,"X",(function(){return Ke})),n.d(t,"f",(function(){return Ve})),n.d(t,"v",(function(){return Ye})),n.d(t,"e",(function(){return Je})),n.d(t,"Db",(function(){return Qe})),n.d(t,"mb",(function(){return Xe})),n.d(t,"p",(function(){return Ze})),n.d(t,"B",(function(){return $e})),n.d(t,"Cb",(function(){return et})),n.d(t,"d",(function(){return tt})),n.d(t,"u",(function(){return nt})),n.d(t,"Sb",(function(){return rt})),n.d(t,"Qb",(function(){return ot})),n.d(t,"vb",(function(){return it})),n.d(t,"ab",(function(){return at})),n.d(t,"n",(function(){return ut})),n.d(t,"l",(function(){return ct})),n.d(t,"yb",(function(){return st})),n.d(t,"k",(function(){return dt})),n.d(t,"q",(function(){return lt})),n.d(t,"fb",(function(){return pt})),n.d(t,"Fb",(function(){return _t})),n.d(t,"rb",(function(){return mt})),n.d(t,"zb",(function(){return ft})),n.d(t,"gb",(function(){return Et})),n.d(t,"Gb",(function(){return vt})),n.d(t,"j",(function(){return gt})),n.d(t,"jb",(function(){return ht})),n.d(t,"Ab",(function(){return Tt}));var r=n("KQm4"),o=n("o0o1"),i=n.n(o),a=n("HaE+"),u=n("Ff2n"),c=n("rePB"),s=n("XiPH"),d=n("Nm6r"),l=n("njvk"),p=n("DE82"),_=n("boGN"),m=n("FkkM"),f=n("q+gv");function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=function(e,t){return function(n){return{type:m.i.FETCH_EDUCATOR_LEADERBOARD,endpoint:n,method:"get",key:e,resetWithoutEmpty:t,schema:f.h}}},h=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Object(d.a)("v1/gamification/educator/leaderboard/?goal_uid=".concat(e,"&limit=25"),g(e,n),"educatorLeaderboard",e,n)(t)},T=function(e){return function(t){return t({type:m.i.FETCH_PROFILE_INFO,endpoint:"v1/user/".concat(e,"/info/"),method:"get",username:e,schema:new s.b.Object({user:f.l}),entityType:"user"})}},y=function(e){return function(t){return t({type:m.i.FETCH_PROFILE_STATS,endpoint:"v1/user/".concat(e,"/stats/"),method:"get",username:e,schema:new s.b.Object({})})}},S=function(e,t){return function(n){return{type:m.i.FETCH_PROFILE_FEED,endpoint:n,method:"get",key:e,resetWithoutEmpty:t,schema:f.h,directPaginatedEntity:!0,entityType:"feedrow",processData:function(t){var n=t;return n.results=n.results.map((function(t){return v(v({},t),{},{key:e,data:t.data.map((function(e){return v(v({},e),e.programme)}))})})),n}}}},O=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Object(d.a)("v1/search_v3/educators/".concat(e,"/plus/extended/v2/"),S(e,n),"profileFeed",e,n)(t)},D=function(e,t,n,r,o){return function(e){return{type:m.i.FETCH_FILTERED_COURSES,endpoint:e,method:"get",key:n,filterKey:r,resetWithoutEmpty:t,schema:f.h,directPaginatedEntity:!0,entityType:o,processData:function(e){var t=e;return t.results=e.results.map((function(e){return v(v({},e),e.programme)})),t}}}},b=function(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i=arguments.length>5?arguments[5]:void 0,a=i;"batch"!==a&&"course"!==a&&(a="course");var u="v1/search_v3/educators/".concat(e,"/courses/v2/?limit=12&filters_applied=").concat(encodeURIComponent(JSON.stringify(t)));n&&(u+="&sorts_applied=".concat(encodeURIComponent(JSON.stringify(n))));var c="".concat(e,"_").concat(t.goal.id,"_").concat(t.filter_by.id,"_").concat(t.show_only.id,"_").concat(t.language.id,"_").concat(t.topic.id,"_").concat((null===n||void 0===n?void 0:n.free.id)||"relevance"),s="".concat(e,"_").concat(t.goal.id,"_").concat(t.filter_by.id,"_").concat(t.show_only.id,"_").concat(t.language.id,"_").concat(t.topic.id);return Object(d.a)(u,D(0,o,c,s,a),"filteredCourses",c,o)(r)},C=function(e,t){return function(n){return{type:m.i.FETCH_EDUCATOR_TESTIMONIALS,endpoint:n,method:"get",key:e,resetWithoutEmpty:t,schema:f.h,processData:function(e){var t=e;return t.results=t.results.map((function(e){var t=e.commenter;return v(v({},Object(u.a)(e,["commenter"])),{},{user:t})})),t}}}},A=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o="".concat(e,"_").concat(t);return Object(d.a)("v1/gamification/educator/hat/testimonial/?username=".concat(e,"&milestone_registry_id=").concat(t),C(o,r),"educatorTestimonials",o,r)(n)},U=function(e,t){return function(n){return n({type:m.i.TOGGLE_FOLLOWING_STATUS,endpoint:"v1/user/".concat(e,"/").concat(t?"follow":"unfollow","/"),method:"post",username:e,follow:t,schema:new s.b.Object({})})}},R=function(e,t){return function(n){return{type:m.i.FETCH_LEARNER_COURSES,endpoint:n,method:"get",key:e,resetWithoutEmpty:t,schema:f.h,entityType:"course",directPaginatedEntity:!0}}},I=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Object(d.a)("v1/user/".concat(e,"/completed_courses_v2/"),R(e,n),"learnerCourses",e,n)(t)},L=function(e){return function(t){return t({type:m.i.FETCH_LEARNER_MILESTONES,endpoint:"v1/gamification/learner/milestones/details/?username=".concat(e),method:"get",username:e,schema:new s.b.Object({})})}},j=function(e,t){return function(n){return{type:m.i.FETCH_LEARNER_FOLLOWING_LIST,endpoint:n,method:"get",key:e,resetWithoutEmpty:t,schema:f.h,entityType:"user",directPaginatedEntity:!0}}},w=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Object(d.a)("v1/user/".concat(e,"/follows/?limit=5"),j(e,n),"learnerFollowing",e,n)(t)},P=function(){return function(e){return e({type:m.i.FETCH_LEARNER_LEADERBOARD_GOALS,endpoint:"v1/gamification/user/leaderboard/goals/",method:"get"})}},F=function(e){return function(t){return t({type:m.i.FETCH_MY_RANKS,endpoint:"v1/gamification/user/".concat(e,"/my_ranks/"),goalUid:e,method:"get",schema:new s.b.Object({user:f.l})})}},k=function(){return function(e){return e({type:m.i.FETCH_DAILY_TASK_HISTORY,endpoint:"v2/gamification/daily_task/history/",method:"get"})}},H=function(){return function(e){return e({type:m.i.FETCH_USER_STATS,endpoint:"v2/gamification/user/stats/",method:"get"})}},N=function(e,t){return function(n){return{type:m.i.FETCH_LEARNER_LEADERBOARD,endpoint:n,method:"get",key:e,resetWithoutEmpty:t,schema:f.h}}},M=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o="".concat(e,"_").concat(t);return Object(d.a)("v1/gamification/user/leaderboard/?goal_uid=".concat(e,"&time_period=").concat(t,"&limit=10"),N(o,r),"learnerLeaderboard",o,r)(n)},z=function(e,t){return function(n){return{type:m.i.FETCH_FAVOURITE_EDUCATORS,endpoint:n,method:"get",key:e,resetWithoutEmpty:t,schema:f.h}}},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="favouriteEducators";return Object(d.a)("v1/user/me/fav_educators/",z(n,t),n,n,t)(e)},x=function(e,t,n){return function(r){return r({type:m.i.WRITE_DEDICATION,endpoint:"v1/gamification/user/milestones/dedicate/",method:"post",data:{learner_milestone_registry_id:n,text:e,educator_username:t}})}},q=function(e){return{type:m.i.SELECTED_NAV_EDU,selectedNav:e}},W=function(e,t){return function(n){return{type:m.i.FETCH_EDUCATOR_DASHBOARD_COURSES,endpoint:n,method:"get",key:e,resetWithoutEmpty:t,schema:f.h,directPaginatedEntity:!0,entityType:"course"}}},B=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o="".concat(e).concat(t?"-".concat(t):""),i="";return i="free-courses"===e?"v1/collections/mine/?limit=12":"v1/uplus/mine/programmes/?limit=12&prog_type=".concat("special-classes"===e?2:1),t&&"free-courses"!==e&&(i+="&state=".concat(t)),Object(d.a)(i,W(o,r),"educatorDashboardCourses",o,r)(n)},K=function(e,t){return function(n){return{type:m.i.FETCH_EDUCATOR_SCHEDULED_CLASSES,endpoint:n,method:"get",key:e,resetWithoutEmpty:t,schema:f.h,directPaginatedEntity:!0,entityType:"item",processData:function(e){var t=e;return t.results=t.results.map((function(e){var t="post"===e.type?e.value.live_class:e.value,n=e.collection,r=n.programme,o=n.uid;return delete e.collection,v(v(v({},e),t),{},{collection2:v(v({},r),{},{uid:o})})})),t}}}},V=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r="v1/users/educator/schedule/?start=".concat(e/1e3),o="scheduledClasses";return Object(d.a)(r,K(o,n),"eduScheduledClasses",o,n)(t)},Y=function(){return{type:m.i.FETCH_ALL_LANGUAGES,endpoint:"v1/constants/all_languages/",method:"get",schema:new s.b.Array,processData:function(e){return e.filter((function(e){return 0!==e.language_code})).map((function(e){return v(v({},e),{},{id:e.language_code,code:e.language_code})}))}}},J=function(e,t){return{type:m.i.UPDATE_COURSE_DETAILS,value:e,id:t}},Q=function(e,t){return{type:m.i.UPDATE_CHECK_BOX,value:t,id:e}},X=function(e,t){return{type:m.i.UPDATE_COURSE_DROPDOWN_FIELDS,value:e,id:t}},Z=function(e,t,n){return{type:m.i.REMOVE_TAG,value:e,id:t,key:n}},$=function(e){return{type:m.i.REMOVE_CONCEPT,value:e}},ee=function(e,t,n){return{type:m.i.UPDATE_COURSE_AUTOCOMPLETE_FIELDS,value:e,id:t,isSingleValue:n}},te=function(e){return{type:m.i.SEARCH_GOAL,endpoint:"v1/topology/goal/search_goals/?q=".concat(encodeURIComponent(e)),method:"get"}},ne=function(e,t,n){return{type:m.i.SEARCH_TOPIC,endpoint:"v1/topology/moderators/search_topology/?level=".concat(t,"&q=").concat(e,"&max_parent_level=10&parent_uid=").concat(n),method:"get"}},re=function(e,t){return{type:m.i.SEARCH_EXAM,endpoint:"v1/exams/search?name=".concat(e,"&goal_uid=").concat(t),method:"get"}},oe=function(e){return{type:m.i.SEARCH_EDUCATOR,endpoint:"v1/search_v3/search/educators/?should_get_systemusers_also=true&limit=30&q=".concat(e),method:"get",schema:new s.b.Array,processData:function(e){return e.results.map((function(e){var t=e.value;return{username:t.username,id:t.username,name:"".concat(t.first_name," ").concat(t.last_name),avatar:t.avatar}}))}}},ie=function(e){return{type:m.i.CREATE_PLUS_COURSE,endpoint:"v1/uplus/moderator/add/programme/",method:"post",data:e}},ae=function(e){return{type:m.i.EDIT_PLUS_COURSE,endpoint:"v1/uplus/moderator/edit/programme/",method:"post",data:e}},ue=function(e){return{type:m.i.CREATE_TEST_SERIES_COURSE,endpoint:"v1/uplus/moderator/add/programme/",method:"post",data:e}},ce=function(e){return{type:m.i.EDIT_TEST_SERIES_COURSE,endpoint:"v1/uplus/moderator/edit/programme/",method:"post",data:e}},se=function(e){return{type:m.i.CREATE_SPECIAL_CLASS,endpoint:"v1/uplus/moderator/create_special_class/programme/",data:e,method:"post",schema:new s.b.Object({}),processData:function(e){var t=e.collection,n=t.thumbnail,r=t.languages,o=t.programme,i=t.uid,a=t.description,u=e.session.value,c=u.uid,s=u.title,d=u.live_class,p=u.for_plus,_=d.duration,m=d.live_at,f=o.for_subscription,E=o.programme_type,g=o.visible_at;return g=l.a.getCurrentDateTime(g),m=l.a.getCurrentDateTime(m),{title:s,description:a,thumbnail:n,courseState:o.state,forPlus:p,spclClassSlug:o.slug,selectedGoal:[o.goal],selectedLanguages:r,courseUID:i,visibleFrom:g,speciaClassDuration:_,isSpecialClass:p&&!f,spclClassUID:c,specialClassscheduledDateTime:m,programmeType:E,selectedEducators:o.authors.map((function(e){return v(v({},e.author_details),{},{name:"".concat(e.author_details.first_name," ").concat(e.author_details.last_name)})}))}}}},de=function(e){return{type:m.i.EDIT_SPECIAL_CLASS,endpoint:"v1/uplus/moderator/update_special_class/programme/",data:e,method:"post",schema:new s.b.Object({}),processData:function(e){var t=e.collection,n=t.thumbnail,r=t.languages,o=t.programme,i=t.uid,a=t.description,u=t.topics,c=e.session.value,s=c.uid,d=c.title,p=c.live_class,_=c.for_plus,m=o.intro_video,f=o.slug,E=o.for_subscription,g=o.visible_at,h=p.duration,T=p.live_at;return T=l.a.getCurrentDateTime(T),{title:d,description:a,selectedTopics:u,thumbnail:n,isSpecialClass:_&&!E,preview:m,forPlus:_,spclClassSlug:f,visibleFrom:g=l.a.getCurrentDateTime(g),courseState:o.state,selectedGoal:[o.goal],selectedLanguages:r,courseUID:i,speciaClassDuration:h,spclClassUID:s,specialClassscheduledDateTime:T,selectedEducators:o.authors.map((function(e){return v(v({},e.author_details),{},{name:"".concat(e.author_details.first_name," ").concat(e.author_details.last_name)})}))}}}},le=function(e,t){return{type:m.i.UPLOAD_THUMBNAIL,endpoint:"v1/collections/thumbnail/".concat(t,"/"),method:"put",data:{thumbnail_image:e}}},pe=function(){return{type:m.i.FETCH_COURSE_TYPES,endpoint:"v1/collections/course-types/",method:"get",schema:new s.b.Array,processData:function(e){return Object.keys(e).filter((function(e){return"0"!==e})).map((function(t){return{value:parseInt(t,10),label:e[t]}}))}}},_e=function(e){return{type:m.i.SET_COURSE_TYPE,value:e}},me=function(e){return{type:m.i.FETCH_COURSE_DETAILS,endpoint:"v1/uplus/moderator/programme/".concat(e,"/"),method:"get"}},fe=function(e,t){return{type:m.i.UPDATE_SESSION_VALUE,value:e,id:t}},Ee=function(e){return{type:m.i.UPDATE_SESSION_CONCEPTS,value:e}},ve=function(e){return{type:m.i.FETCH_CO_AUTHOR,endpoint:"v1/uplus/programmes/".concat(e,"/co_authors/"),method:"get",schema:new s.b.Array,processData:function(e){return e.map((function(e){return v(v({},e),{},{name:"".concat(e.first_name," ").concat(e.last_name)})}))}}},ge=function(e){return{type:m.i.ADD_ITEM,endpoint:"v1/uplus/moderator/item/add/",method:"post",data:e}},he=function(e,t){return{type:m.i.DELETE_ITEM,endpoint:"v1/uplus/moderator/item/delete/",method:"post",session:e,data:{item_type:e.type,item_uid:e.uid,rank:e.rank,collection_uid:t}}},Te=function(e,t){return{type:m.i.SET_SESSION_EDUCATOR,value:e,id:t}},ye=function(e){return{type:m.i.SETUP_EDIT_SESSION,value:e}},Se=function(e,t){var n;return{type:m.i.EDIT_SESSION,endpoint:"v1/uplus/moderator/item/edit/",method:"post",data:{author_username:e.selectedEducator.username,co_author_username:null===e||void 0===e?void 0:null===(n=e.selectedCoAuthor)||void 0===n?void 0:n.username,collection_uid:t,duration:e.duration,item_uid:e.uid,live_at:new Date(e.liveAt).getTime(),start_time:new Date(e.liveAt).getTime(),title:e.title,type:e.type,topology_uids:e.selectedConceptUIDs}}},Oe=function(e,t){return{type:m.i.STATE_CHANGE,endpoint:"v1/uplus/moderator/state_change/programme/",method:"post",data:{collection_uid:e,state:t,show_all_clashes:!0}}},De=function(e){return{type:m.i.FETCH_EDUCATOR_STATISTICS,endpoint:"v1/users/educator/statistics/?time_period=".concat(e),method:"get",schema:new s.b.Object({}),processData:function(e){return Object.keys(e).forEach((function(t){var n=e[t];delete n.course_wise,delete n.graph_data})),e}}},be=function(e){return{type:m.i.FETCH_ACTIVATED_LEARNER_STATS,endpoint:"v1/users/educator/statistics/?time_period=".concat(e),method:"get"}},Ce=function(){return function(){var e=Object(a.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all[(t({type:m.i.FETCH_EDUCATOR_ALERTS,endpoint:"v1/users/educator/alerts/?time_period=this_month",method:"get"}),t({type:m.i.FETCH_EDUCATOR_REFERRALS,endpoint:"v1/subscriptions/stats/referrals/",method:"get"}),t((function(e){e({type:m.i.FETCH_EDUCATOR_DEDICATIONS,endpoint:"v1/gamification/educator/hat/summary/",method:"get"})})),t({type:m.i.FETCH_EDUCATOR_LIVE_HOURS,endpoint:"v1/users/educator/live_hours/",method:"get",schema:new s.b.Object({}),processData:function(e){return{committedTime:e.committed_time,taughtTime:e.taught_time,hoursBreakdown:e.hours_breakdown}}}))];case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ae=function(e){return{type:m.i.SET_CREATE_EDIT_SESSION_ERROR_FLAG,value:e}},Ue=function(){return{type:m.i.CLEAR_ADD_ITEM_FORM}},Re=function(e){return{type:m.i.CLEAR_COURSE_FIELDS,value:e}},Ie=function(e){return{type:m.i.FETCH_EDU_LIVE_CLASS_URL,method:"get",endpoint:"v1/uplus/educator_next_class/".concat(e?"?uid=".concat(e):"")}},Le=function(e){return{type:m.i.FETCH_COURSE_STATS,endpoint:"v1/uplus/programmes/".concat(e,"/course_statistics/"),method:"get",schema:new s.b.Object({}),processData:function(e){return{todayHours:e.today_taught_hours/3600,totalHours:e.total_classes_duration/3600,currentHours:e.total_hours_taught/3600,totalWatchMins:e.watch_minutes,courseRating:e.rating.avg,noOfIndividuals:e.rating.count,liveLearners:e.live_learners,referrals:e.referrals,newEnrollments:e.today_enrollments,newWatchMinutes:e.today_watch_minutes,enrollments:e.total_enrollments}}}},je=function(e,t){var n="plus_course";return e&&(n="test_series"),{type:m.i.FETCH_COURSE_RATINGS,endpoint:"v1/feedback/metrics/".concat(n,"/").concat(t,"/"),method:"get"}},we=function(e,t){var n="plus_course";return e&&(n="test_series"),{type:m.i.FETCH_COURSE_FEEDBACK,endpoint:"v1/feedback/".concat(n,"/").concat(t,"/"),method:"get"}},Pe=function(e,t){var n="v1/uplus/classes/".concat(e,"/feedback/");return"quiz"===t&&(n="v1/feedback/metrics/test/".concat(e,"/")),{type:m.i.FETCH_LESSON_METRICS,endpoint:n,method:"get",lessonUID:e,schema:new s.b.Object({}),processData:function(e){var n={};return"post"===t?(delete(n=v(v({},e),{},{teachingMethod:e.teaching_style,courseRelevance:e.topic_relevance,classInteraction:e.topic_completeness,visualPresentation:e.visual_presentation,lessonLikePercent:e.likes_percent,questionsAsked:e.questions_asked,pollParticipation:e.poll_participation,mostUsedEmojis:e.most_used_emojis})).teaching_style,delete n.topic_relevance,delete n.topic_completeness,delete n.visual_presentation,delete n.likes_percent,delete n.poll_participation,delete n.questions_asked,delete n.most_used_emojis):n=v({},e),n}}},Fe=function(e,t){return function(n){return{type:m.i.FETCH_EDU_LESSON_FEEDBACK,endpoint:n,method:"get",key:e,resetWithoutEmpty:t,schema:new s.b.Object({}),processData:function(e){return v(v({},e),{},{results:e.results.map((function(e){return v(v({},e),{},{text:e.review_text||e.text,created_at:e.updated_on||e.created_at})}))})}}}},ke=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o="v2/uplus/live-class-review/?live_class_uid=".concat(e);return"quiz"===t&&(o="v1/feedback/test/".concat(e,"/")),Object(d.a)(o,Fe(e,r),"eduLessonFeedback",e,r)(n)},He=function(e,t){return{type:m.i.UPDATE_RESCHEDULE_TEXT_FIELD,value:e,id:t}},Ne=function(e,t,n){return{type:m.i.UPDATE_RESCHEDULE_DROPDOWN_FIELDS,value:e,id:t,multipleValues:n}},Me=function(e){return{type:m.i.RESCHEDULE_CLASS,method:"post",endpoint:"v1/uplus/moderator/item/reschedule/",data:e,schema:new s.b.Object({})}},ze=function(e,t){return{type:m.i.UPDATE_DISCUSSION_FORUM_TEXT,value:e,id:t}},Ge=function(e,t){return{type:m.i.UPDATE_DISCUSSION_FORUM_STORY,method:"post",endpoint:"v1/channel/".concat(t,"/add_story/?response_required=1"),data:e}},xe=function(e){return{type:m.i.SET_FILTER,data:e}},qe=function(e){return{type:m.i.FETCH_GOLIVE_DETAILS,method:"get",endpoint:"v1/uplus/golive/?token=".concat(e)}},We=function(e,t){return function(n){return{type:m.i.FETCH_TEMPLATES_OF_A_COURSE,endpoint:n,method:"get",key:e,resetWithoutEmpty:t,schema:f.h,directPaginatedEntity:!0,entityType:"template",processData:function(e){return e}}}},Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,a=arguments.length>6?arguments[6]:void 0,u=arguments.length>7?arguments[7]:void 0,c=arguments.length>8&&void 0!==arguments[8]&&arguments[8],s="";"&"===(s+="".concat(e?"goal_uid=".concat(e):"").concat(t?"&topic_group_uid=".concat(t):"").concat(n?"&course_type=".concat(n):"").concat(0===r||1===r||2===r?"&state=".concat(r):"").concat(o?"&name=".concat(o):"").concat(i?"&id=".concat(i):""))[0]&&(s=s.slice(1));var l="v1/uplus/course_template/list_course_template".concat(s?"?limit=5&".concat(s):"");return Object(d.a)(l,We(a,c),"courseTemplates",a,c)(u)},Ke=function(e){return{type:m.i.FETCH_TEMPLATE_DETAILS,endpoint:"v1/uplus/course_template/get_course_template?id=".concat(e),method:"get",schema:new s.b.Object({}),processData:function(e){var t=e.live_classes.map((function(e,t){return v(v({},e),{},{index:t})})),n=e.quizzes.map((function(e,t){return v(v({},e),{},{index:t})}));return e.quizzes=n,e.live_classes=t,p.a.getEntityData(e)}}},Ve=function(e){return{type:m.i.ADD_TEMPLATE_LESSON,data:e}},Ye=function(e){var t=e.liveClasses,n=e.quizzes,r=_.a.mergeTwoSortedArray(t,n);return e.sessions=r,{type:m.i.EDIT_TEMPLATE_COURSE_LESSON_WITHOUT_UID,data:e}},Je=function(e){var t=e.liveClasses,n=e.quizzes,r=_.a.mergeTwoSortedArray(t,n);return e.sessions=r,{type:m.i.ADD_TEMPLATE_COURSE_LESSON_WITHOUT_UID,data:e}},Qe=function(e){return{type:m.i.SETUP_TEMPLATE_EDIT_SESSION,value:e}},Xe=function(e){return{type:m.i.SAVE_TEMPLATE,endpoint:"v1/uplus/course_template/create_update_course_template/",method:"post",data:e,schema:new s.b.Object({}),processData:function(e){var t=e.live_classes.map((function(e){return v({},e)})),n=e.quizzes.map((function(e){return v({},e)}));return e.quizzes=n,e.live_classes=t,p.a.getEntityData(e)}}},Ze=function(e){return{type:m.i.DELETE_TEMPLATE_LESSONS,data:e}},$e=function(){return{type:m.i.FETCH_COURSE_TEMPLATE_FILTERS,endpoint:"v1/uplus/course_template/get_course_template_filter",method:"get",schema:new s.b.Object({}),processData:function(e){var t=[],n={};return e.forEach((function(e){t.push({name:e.goal_name,uid:e.goal_uid}),n[e.goal_uid]=e.topic_groups})),{filterGoalList:t,filterTopicGroups:n}}}},et=function(e,t){var n={selectedTopics:(null===t||void 0===t?void 0:t.selectedTopics)||[],selectedExams:(null===t||void 0===t?void 0:t.selectedExams)||[],selectedTopicGroups:(null===t||void 0===t?void 0:t.selectedTopicGroups)||[]};0===n.selectedTopics.length&&(n.selectedTopics=e.topics,n.selectedExams=e.selectedExams,n.selectedTopicGroups=e.selectedTopicGroups);var r=e.liveClasses,o=void 0===r?[]:r,i=e.quizzes,a=void 0===i?[]:i,u=(t||{}).sessions,c={selectedGoal:[e.goal],selectedTopics:n.selectedTopics,selectedExams:n.selectedExams,selectedTopicGroups:n.selectedTopicGroups,templateUID:e.uid,schedule:{startsFrom:"",time:"",daysOfWeek:[0,0,0,0,0,0,0],duration:""}},s=v(v({},e),c);return u&&0!==u.length||(u=_.a.mergeTwoSortedArray(o,a),s.sessions=u),{type:m.i.SETUP_TEMPLATE_DATA_IN_EDU_COURSE,data:s}},tt=function(e){return{type:m.i.ADD_TEMPLATE_COURSE,endpoint:"v1/uplus/template/programme/add/",method:"post",data:e,schema:new s.b.Object({}),processData:function(e){var t=e.collection,n=e.template,o=e.classes,i=t.name,a=t.uid,u=t.description,c=t.programme,s=t.languages,d=t.course_type;o||(o=[]);var l=t.topic_groups,p=t.topics,_=t.exams,m=c.authors,f=c.programme_type,E=c.goal,g=n||{},h=g.topics,T=void 0===h?[]:h,y=g.topic_groups,S=void 0===y?[]:y,O=g.exams,D=void 0===O?[]:O;return E.goal_name=E.name,E.goal_uid=E.uid,l||(l=[]),p||(p=[]),_||(_=[]),l&&0!==l.length||(p=[].concat(Object(r.a)(p),Object(r.a)(T)),l=[].concat(Object(r.a)(l),Object(r.a)(S)),_=[].concat(Object(r.a)(_),Object(r.a)(D))),{title:i,description:u,selectedLanguages:s,selectedGoal:[E],selectedEducators:m.map((function(e){return v(v({},e.author_details),{},{name:"".concat(e.author_details.first_name," ").concat(e.author_details.last_name)})})),selectedTopics:p,selectedTopicGroups:l,selectedExams:_,courseUID:a,courseType:d,programmeType:f,sessions:o.map((function(e){return{name:e.value.title,uid:e.value.uid,author:e.value.author,rank:e.rank,type:e.type,state:e.value.state||e.value.live_class.state,duration:e.value.duration||e.value.live_class.duration,liveAt:"post"===e.type?e.value.live_class.live_at:e.value.start_time,selectedConcepts:e.value.topologies}}))||[]}}}},nt=function(e){return{type:m.i.EDIT_TEMPLATE_COURSE,endpoint:"v1/uplus/template/programme/edit/",method:"post",data:e,schema:new s.b.Object({}),processData:function(e){var t=e.collection,n=e.template,o=t.name,i=t.uid,a=t.description,u=t.programme,c=t.languages,s=t.course_type,d=t.topic_groups,l=t.topics,p=t.exams,_=u.authors,m=u.goal,f=n||{},E=f.topics,g=void 0===E?[]:E,h=f.topic_groups,T=void 0===h?[]:h,y=f.exams,S=void 0===y?[]:y;return m.goal_name=m.name,m.goal_uid=m.uid,d||(d=[]),l||(l=[]),p||(p=[]),d&&0!==d.length||(l=[].concat(Object(r.a)(l),Object(r.a)(g)),d=[].concat(Object(r.a)(d),Object(r.a)(T)),p=[].concat(Object(r.a)(p),Object(r.a)(S))),{title:o,description:a,selectedLanguages:c,selectedGoal:[m],selectedEducators:_.map((function(e){return v(v({},e.author_details),{},{name:"".concat(e.author_details.first_name," ").concat(e.author_details.last_name)})})),selectedTopics:l,selectedTopicGroups:d,selectedExams:p,courseUID:i,courseType:s}}}},rt=function(e,t){return{type:m.i.UPDATE_TEMPLATE_COURSE_FIELDS,value:e,id:t}},ot=function(e,t){return{type:m.i.UPDATE_SCHEDULE_WEEK_DAY,index:e,value:t}},it=function(e){return{type:m.i.SET_SCHEDULE_OF_TEMPLATE_COURSE,endpoint:"v1/uplus/template/programme/add_schedule/",method:"post",schema:new s.b.Object({}),data:e,processData:function(e){return e}}},at=function(){return{type:m.i.FILL_DURATION_IN_SCHEDULE}},ut=function(e){return{type:m.i.DELETE_COURSE_TEMPLATE,endpoint:"v1/uplus/course_template/delete_course_template/",method:"post",schema:new s.b.Object({}),data:{id:e}}},ct=function(){return{type:m.i.CLEAR_TEMPLATE_SESSION}},st=function(e){return{type:m.i.SET_TEMPLATE_LESSON_DURATION,lessonDuration:e}},dt=function(){return{type:m.i.CLEAR_TEMPLATE_DATA}},lt=function(e,t,n){return{type:m.i.DELETE_TEMPLATE_LESSONS_FROM_COURSE,sessions:e,liveClasses:t,quizzes:n}},pt=function(e){return{type:m.i.GET_FEEDBACK_FOR_COURSE_TEMPLATE,endpoint:"v1/feedback/course_template/?object_uid=".concat(e),method:"get",schema:new s.b.Object({}),processData:function(e){return e}}},_t=function(e,t){return{type:m.i.SUBMIT_FEEDBACK_FOR_COURSE_TEMPLATE,endpoint:"v1/feedback/".concat(t,"/response/"),method:"post",data:e,schema:new s.b.Object({}),processData:function(e){return e}}},mt=function(e){return{type:m.i.SET_CLASH_SESSIONS_OF_A_COURSE,data:e}},ft=function(e){return{type:m.i.SET_TEMPLATE_REORDERED_QUIZ_LESSONS,data:e}},Et=function(e){return{type:m.i.GET_FEEDBACK_FOR_EDUCATOR_DASHBOARD,endpoint:"v1/feedback/nps/?object_uid=".concat(e),method:"get",schema:new s.b.Object({}),processData:function(e){return e}}},vt=function(e,t){return{type:m.i.SUBMIT_FEEDBACK_FOR_EDUCATOR_DASHBOARD,endpoint:"v1/feedback/".concat(t,"/response/"),method:"post",data:e,schema:new s.b.Object({}),processData:function(e){return e}}},gt=function(){return{type:m.i.CLEAR_COURSE_UID}},ht=function(){return{type:m.i.REMOVE_CLASH_SESSIONS}},Tt=function(e){return{method:"post",endpoint:"v1/uplus/moderator/item/add_thumbnail/",data:e}}}}]);