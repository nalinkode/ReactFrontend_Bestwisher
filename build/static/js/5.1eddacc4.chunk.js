(this.webpackJsonpbestwisher=this.webpackJsonpbestwisher||[]).push([[5],{128:function(e,s,t){},131:function(e,s,t){"use strict";t.r(s),t.d(s,"default",(function(){return d}));var c=t(0),n=(t(128),t(9)),i=t(6),r=t(34),l=t(13),a=t(1);function d(){var e=Object(i.b)(),s=Object(i.c)((function(e){return e.UserFriendReducer})).pendingRequest,t=Object(i.c)((function(e){return e.AuthenticationReducer})).currentUser;Object(c.useEffect)((function(){e(Object(r.f)(t.id))}),[e]);return Object(a.jsxs)("div",{className:"pending_request",children:[Object(a.jsx)("span",{className:"span-text-center",children:"Request Pending "}),Object(a.jsxs)("div",{className:"container-fluid mt-3 friend-suggestion",children:[s.length>0&&s.map((function(s){return Object(a.jsxs)("div",{className:"row align-items-center px-2 py-2 mt-2 suggestion-row ",children:[Object(a.jsx)("div",{className:"col-md-2 col-sm-2",children:Object(a.jsx)("img",{src:s.profileImage,alt:"user",className:"profile-photo rounded-circle img-fluid img-thumbnail"})}),Object(a.jsxs)("div",{className:"col-md-5 col-sm-5",children:[Object(a.jsx)("h5",{children:Object(a.jsx)(n.b,{to:"/home/profile/view/"+s.requestToUser+"/timeline",children:s.userName})}),Object(a.jsx)("p",{className:"text-muted",children:s.currentDesignation})]}),Object(a.jsxs)("div",{className:"col-md-4 col-sm-4",children:[Object(a.jsx)("button",{className:"btn btn-success pull-right btn-sm me-2",disabled:!0,children:"Pending Request"}),Object(a.jsx)("button",{className:"btn btn-primary pull-right btn-sm",onClick:function(){return c=s,void e(Object(r.c)(c.friendshipId)).then((function(){e(Object(r.f)(t.id)),l.b.success("Friend request is cancel for "+c.userName)}));var c},children:"Cancel"})]})]},s.requestToUser)})),0===s.length&&Object(a.jsx)("div",{className:"row align-items-center px-2 py-2 mt-2 suggestion-row ",children:Object(a.jsx)("div",{className:"col-md-12 col-sm-12",children:Object(a.jsx)("h5",{className:"text-center",children:"No Pending Request"})})},"No-data")]})]})}}}]);
//# sourceMappingURL=5.1eddacc4.chunk.js.map