"use strict";(self.webpackChunkgoit_react_hw_08_phonebook_r=self.webpackChunkgoit_react_hw_08_phonebook_r||[]).push([[596],{8596:function(t,e,n){n.r(e),n.d(e,{default:function(){return _}});var c=n(1267),r=n(184),a=function(){return(0,r.jsx)("div",{className:c.Z.cont__container,children:(0,r.jsxs)("form",{className:c.Z.form__container,children:[(0,r.jsx)("input",{type:"text",name:"name",placeholder:"Name"}),(0,r.jsx)("input",{type:"number",name:"number",placeholder:"phone number"}),(0,r.jsx)("button",{type:"submit ",className:c.Z.form__btn,children:"Add contact"})]})})},s=n(9434),i=n(529),o=n(2118),u=function(){var t=(0,s.I0)();return{filter:(0,s.v9)((function(t){return t.contacts.filter})),contacts:(0,s.v9)((function(t){return t.contacts.items})),isLoaging:(0,s.v9)((function(t){return t.contacts.loader})),error:(0,s.v9)((function(t){return t.contacts.error})),setFilter:function(e){t((0,i.M)(e))},getContacts:function(){t(o.m.getContacts())},addContact:function(e){t(o.m.addContact(e))},deleteContact:function(e){t(o.m.deleteContact(e))}}},l=function(){var t=u(),e=t.filter,n=t.setFilter;return(0,r.jsxs)("div",{className:c.Z.cont__container,children:[(0,r.jsx)("h2",{className:c.Z.home__title,children:"Filter"}),(0,r.jsx)("input",{type:"text",name:"filter",value:e,placeholder:"Find contact by name",onChange:function(t){return n(t.target.value)}})]})},m=function(t){var e=t.contacts;return(0,r.jsx)("div",{children:(0,r.jsx)("ul",{className:c.Z.items__container,children:e&&e.map((function(t){var e=t.id,n=t.name,a=t.number;return(0,r.jsxs)("li",{className:c.Z.item,children:[(0,r.jsxs)("h3",{className:c.Z.item__name,children:[n,":"]}),(0,r.jsx)("p",{className:c.Z.item__name,children:a}),(0,r.jsx)("button",{className:c.Z.user__btn,type:"button",children:"Delete"})]},e)}))})})},f=n(8809),d=n(2791),_=function(){var t=(0,s.I0)(),e=u(),n=e.contacts,i=e.isLoaging,_=e.filter;(0,d.useEffect)((function(){t(o.m.getContacts())}),[t]);var h=function(){var t=_.toLowerCase();if(n)return n.filter((function(e){return e.name.toLowerCase().includes(t)}))}();return(0,r.jsxs)("div",{className:c.Z.view__container,children:[(0,r.jsx)("h2",{className:c.Z.home__title,children:"Contacts"}),(0,r.jsx)(a,{}),(0,r.jsx)(l,{}),i?(0,r.jsx)(f.a,{}):(0,r.jsx)(m,{contacts:h})]})}}}]);
//# sourceMappingURL=596.c3ceea3f.chunk.js.map