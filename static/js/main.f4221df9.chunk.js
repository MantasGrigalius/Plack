(this.webpackJsonpplack=this.webpackJsonpplack||[]).push([[0],{130:function(e,a,t){},275:function(e,a,t){e.exports=t(451)},451:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(46),c=t.n(r),o=t(71),s=t(39),i=t(17),u={user:null,isLoading:!0},m={channel:null},d=Object(o.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_USER":return Object(i.a)({},e,{user:a.user,isLoading:!1});default:return e}},channel:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_CHANNEL":return Object(i.a)({},e,{channel:a.channel});default:return e}}}),p=t(233),h=t(234),f=t.n(h),g=t(70),E=t(55),b=t(56),v=t(57),j=t(58),O=t(59),k=t(62),y=t(161),C=t.n(y);t(284),t(286),t(452);C.a.initializeApp({apiKey:"AIzaSyBa643TjTtPD0rnjdOfuFLpYyzDdsqr0Iw",authDomain:"plack-23141.firebaseapp.com",databaseURL:"https://plack-23141.firebaseio.com",projectId:"plack-23141",storageBucket:"plack-23141.appspot.com",messagingSenderId:"360318459062",appId:"1:360318459062:web:a7d366336084667dacda17",measurementId:"G-E16F9YZVBR"});var S=C.a,w=t(21),N=t(40),R=t(235),A=t.n(R),P=t(473),L=t(462),M=t(480),T=t(72),D=t(469),U=t(477),x=t(453),I=(t(130),function(){var e=Object(n.useState)({username:"",email:"",password:"",passwordConfirm:"",errors:"",loading:!1,usersRef:S.database().ref("users")}),a=Object(N.a)(e,2),t=a[0],r=a[1],c=function(e){r(Object(i.a)({},t,Object(w.a)({},e.target.name,e.target.value)))},o=function(e){var a=e.username,t=e.password,n=e.email;return a.length&&t.length&&n.length>0},s=function(e){var a=e.password;return a===e.passwordConfirm&&a.length>=6},u=function(e){return t.usersRef.child(e.user.uid).set({name:e.user.displayName,avatar:e.user.photoURL})},m=l.a.createElement(P.a,{color:"red"},t.errors);return l.a.createElement(L.a,{className:"u-heigth100vh",textAlign:"center",verticalAlign:"middle"},l.a.createElement(L.a.Column,{style:{maxWidth:450}},l.a.createElement(M.a,{as:"h2",color:"red",textAlign:"center"},l.a.createElement(T.a,{name:"code",color:"black"}),"Register for Plack"),l.a.createElement(D.a,{size:"large"},l.a.createElement(U.a,{stacked:!0},l.a.createElement(D.a.Input,{fluid:!0,name:"username",icon:"user",iconPosition:"left",placeholder:"Username",onChange:c,type:"text"}),l.a.createElement(D.a.Input,{fluid:!0,name:"email",icon:"mail",iconPosition:"left",placeholder:"Email-adress",onChange:c,type:"email"}),l.a.createElement(D.a.Input,{fluid:!0,name:"password",icon:"lock",iconPosition:"left",placeholder:"Password",onChange:c,type:"password"}),l.a.createElement(D.a.Input,{fluid:!0,name:"passwordConfirm",icon:"repeat",iconPosition:"left",placeholder:"Repeat password",onChange:c,type:"password"}),l.a.createElement(x.a,{disabled:t.loading,className:t.loading?"loading":null,onClick:function(e){(o(t)?s(t)||(r(Object(i.a)({},t,{errors:"Passwords do not match or password to short"})),0):(r(Object(i.a)({},t,{errors:"Fill all fields"})),0))&&(e.preventDefault(),r(Object(i.a)({},t,{loading:!0,errors:""})),S.auth().createUserWithEmailAndPassword(t.email,t.password).then((function(e){e.user.updateProfile({displayName:t.username,photoURL:"https://www.gravatar.com/avatar/".concat(A()(e.user.email),"?d=identicon")}).then((function(){u(e)})).catch((function(e){console.log(e),r(Object(i.a)({},t,{loading:!1,errors:e.message}))}))})).catch((function(e){r(Object(i.a)({},t,{loading:!1,errors:e.message})),console.log(e)})))},color:"red",fluid:!0,size:"large"},"Submit"))),t.errors.length>0?m:null,l.a.createElement(P.a,null,"Already a user? ",l.a.createElement(g.b,{to:"/login"},"Login"))))}),F=function(){var e=Object(n.useState)({email:null,password:null,errors:"",loading:!1}),a=Object(N.a)(e,2),t=a[0],r=a[1],c=function(e){r(Object(i.a)({},t,Object(w.a)({},e.target.name,e.target.value)))},o=function(e){var a=e.email,t=e.password;return!(!a||!t)||r((function(e){return Object(i.a)({},e,{errors:"Fill all fields"})}))},s=l.a.createElement(P.a,{color:"red"},t.errors);return l.a.createElement(L.a,{className:"u-heigth100vh",textAlign:"center",verticalAlign:"middle"},l.a.createElement(L.a.Column,{style:{maxWidth:450}},l.a.createElement(M.a,{as:"h2",color:"red",textAlign:"center"},l.a.createElement(T.a,{name:"code",color:"black"}),"Login to Plack"),l.a.createElement(D.a,{size:"large"},l.a.createElement(U.a,{stacked:!0},l.a.createElement(D.a.Input,{fluid:!0,name:"email",icon:"mail",iconPosition:"left",placeholder:"Email-adress",onChange:c,type:"email"}),l.a.createElement(D.a.Input,{fluid:!0,name:"password",icon:"lock",iconPosition:"left",placeholder:"Password",onChange:c,type:"password"}),l.a.createElement(x.a,{disabled:t.loading,className:t.loading?"loading":null,onClick:function(e){o(t)&&(e.preventDefault(),r((function(e){return Object(i.a)({},e,{loading:!0,errors:""})})),S.auth().signInWithEmailAndPassword(t.email,t.password).then((function(e){r((function(e){return Object(i.a)({},e,{loading:!1})}))})).catch((function(e){console.log(e),r((function(a){return Object(i.a)({},a,{loading:!1,errors:e.message})}))})))},color:"red",fluid:!0,size:"large"},"Login"))),t.errors.length>0?s:null,l.a.createElement(P.a,null,"Not a user? ",l.a.createElement(g.b,{to:"/register"},"Register"))))},z=t(238),_=t(476),B=t(474),G=t(466),H=function(){return l.a.createElement(_.a,{as:B.a,icon:"labeled",inverted:!0,vertical:!0,visible:!0,width:"very thin"},l.a.createElement(G.a,null),l.a.createElement(x.a,{icon:"add",size:"small",color:"blue"}))},W=t(239),J=t(163),q=t(472),V=t(263),Y=function(e){var a=e.userData,t=Object(s.c)(),n=[{key:"user",text:l.a.createElement("span",null,"Signed in as ",l.a.createElement("strong",null,a.displayName)),disabled:!0},{key:"avatar",text:l.a.createElement("span",null,"Change Avatar")},{key:"signout",text:l.a.createElement("span",{onClick:function(){S.auth().signOut(),t({type:"RESET_APP"})}},"Sign Out")}];return l.a.createElement(L.a,null,l.a.createElement(z.a,null,l.a.createElement(W.a,{style:{padding:"1.2em",margin:0}},l.a.createElement(M.a,{inverted:!0,floated:"left",as:"h2"},l.a.createElement(T.a,{name:"code"}),l.a.createElement(J.a,null,"Plack")),l.a.createElement(M.a,{style:{padding:"0.25em"},as:"h4",inverted:!0},l.a.createElement(q.a,{trigger:l.a.createElement("span",null,l.a.createElement(V.a,{src:a.photoURL,spaced:"right",avatar:!0}),a.displayName),options:n})))))},K=t(470),Z=t(463),Q=function(e){var a=e.userData,t=Object(n.useState)({modal:!1,channelName:"",channelDetails:"",channels:[],channelsRef:S.database().ref("channels"),activeChannel:null}),r=Object(N.a)(t,2),c=r[0],o=r[1],u=Object(s.c)();Object(n.useEffect)((function(){return function(){var e=[];c.channelsRef.on("child_added",(function(a){e.push(a.val()),o((function(a){return Object(i.a)({},a,{channels:e})}))}))}(),function(){return c.channelsRef.off()}}),[c.channelsRef]);var m=function(){return o((function(e){return Object(i.a)({},e,{modal:!1})}))},d=function(e){o(Object(i.a)({},c,Object(w.a)({},e.target.name,e.target.value)))},p=function(e){e.preventDefault(),f(c)&&h()},h=function(){var e=c.channelsRef.push().key,t={id:e,name:c.channelName,details:c.channelDetails,createdBy:{name:a.displayName,avatar:a.photoURL}};c.channelsRef.child(e).update(t).then((function(){o((function(e){return Object(i.a)({},e,{channelName:"",channelDetails:""})})),m(),console.log("added channel")})).catch((function(e){console.log(e)}))},f=function(e){var a=e.channelName,t=e.channelDetails;return a&&t};return l.a.createElement(l.a.Fragment,null,l.a.createElement(B.a.Menu,{style:{paddingBottom:"2em"}},l.a.createElement(B.a.Item,null,l.a.createElement("span",null,l.a.createElement(T.a,{name:"exchange"})," CHANNELS"),"(",c.channels.length,") ",l.a.createElement(T.a,{name:"add",onClick:function(){return o((function(e){return Object(i.a)({},e,{modal:!0})}))}})),c.channels.map((function(e){return l.a.createElement(B.a.Item,{key:e.id,onClick:function(){return function(e){u(function(e){return{type:"SET_CHANNEL",channel:e}}(e)),o((function(a){return Object(i.a)({},a,{activeChannel:e.id})}))}(e)},name:e.name,active:c.activeChannel===e.id},"#",e.name)}))),l.a.createElement(K.a,{basic:!0,open:c.modal,onClose:m},l.a.createElement(K.a.Header,null,"Add a Channel"),l.a.createElement(K.a.Content,null,l.a.createElement(D.a,{onSubmit:p},l.a.createElement(D.a.Field,null,l.a.createElement(Z.a,{fluid:!0,label:"Name of channel",name:"channelName",onChange:d})),l.a.createElement(D.a.Field,null,l.a.createElement(Z.a,{fluid:!0,label:"About the Channel",name:"channelDetails",onChange:d})))),l.a.createElement(K.a.Actions,null,l.a.createElement(x.a,{color:"green",inverted:!0,onClick:p},l.a.createElement(T.a,{name:"checkmark"})," Add"),l.a.createElement(x.a,{color:"red",inverted:!0,onClick:m},l.a.createElement(T.a,{name:"remove"})," Cancel"))))},X=function(e){var a=e.userData;return l.a.createElement(B.a,{style:{backgroundColor:"#40123e"},fixed:"left",vertical:!0,inverted:!0,size:"large"},l.a.createElement(Y,{userData:a}),l.a.createElement(Q,{userData:a}))},$=t(471),ee=function(){return l.a.createElement(U.a,{clearing:!0},l.a.createElement(M.a,{fluid:"true",as:"h2",floated:"left"},l.a.createElement("span",null,"Channel",l.a.createElement(T.a,{name:"star outline",color:"black"})),l.a.createElement(M.a.Subheader,null,"2 Users")),l.a.createElement(M.a,{floated:"right"},l.a.createElement(Z.a,{size:"mini",type:"text",icon:"search",name:"searchTerm",placeholder:"Search Messages"})))},ae=t(475),te=t(167),ne=t.n(te),le=function(e){var a=e.modal,t=e.closeModal,r=e.uploadFile,c=Object(n.useState)({file:null,authorized:["image/jpeg","image/png"]}),o=Object(N.a)(c,2),s=o[0],u=o[1],m=function(){u(Object(i.a)({},s,{file:null}))},d=function(e){return s.authorized.includes(ne.a.lookup(e))};return l.a.createElement(K.a,{basic:!0,open:a,onClose:t},l.a.createElement(K.a.Header,null,"Select an image file"),l.a.createElement(K.a.Content,null,l.a.createElement(Z.a,{onChange:function(e){var a=e.target.files[0];a&&u(Object(i.a)({},s,{file:a}))},fluid:!0,label:"File types: JPEG, PNG",name:"file",type:"file"})),l.a.createElement(K.a.Actions,null,l.a.createElement(x.a,{color:"green",onClick:function(){if(null!==s.file&&d(s.file.name)){var e={contentType:ne.a.lookup(s.file.name)};r(s.file,e),m(),t()}},inverted:!0},l.a.createElement(T.a,{name:"checkmark"})," Send"),l.a.createElement(x.a,{color:"red",inverted:!0,onClick:function(){t(),m()}},l.a.createElement(T.a,{name:"remove"})," Cancel")))},re=t(467),ce=function(e){var a=e.uploadState,t=e.percents;return"uploading"===a&&l.a.createElement(re.a,{className:"progress_bar",percent:t,progress:!0,indicating:!0,size:"medium",inverted:!0})},oe=function(e){function a(){var e;return Object(E.a)(this,a),(e=Object(v.a)(this,Object(j.a)(a).call(this))).handleChange=function(a){e.setState(Object(w.a)({},a.target.name,a.target.value))},e.createMessage=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t={timestamp:S.database.ServerValue.TIMESTAMP,user:{id:e.props.user.uid,name:e.props.user.displayName,avatar:e.props.user.photoURL}};return null!==a?t.image=a:t.content=e.state.message,t},e.uploadFile=function(a,t){var n="chat/public/".concat(Object(ae.a)(),".jpg"),l=e.props.channel.id,r=e.props.messageRef;e.setState({uploadState:"uploading",uploadTask:e.state.storageRef.child(n).put(a,t)},(function(){e.state.uploadTask.on("state_changed",(function(a){var t=Math.round(a.bytesTransferred/a.totalBytes*100);e.setState({percentUploaded:t})}),(function(a){console.log(a),e.setState({uploadState:"error",uploadTask:null})}),(function(){e.state.uploadTask.snapshot.ref.getDownloadURL().then((function(a){e.sendFileMessage(a,r,l)})).catch((function(a){console.log(a),e.setState({uploadState:"error",uploadTask:null})}))}))}))},e.sendFileMessage=function(a,t,n){t.child(n).push().set(e.createMessage(a)).then((function(){e.setState({uploadState:"done"})})).catch((function(a){console.log(a),e.setState({error:a.message})}))},e.sendMessage=function(){var a=e.props,t=a.messageRef,n=a.channel;e.state.message.length>0?(e.setState({loading:!0,error:""}),t.child(n.id).push().set(e.createMessage()).then((function(){e.setState({loading:!1,message:""})})).catch((function(a){console.log(a),e.setState({loading:!1,message:"",error:a.message})}))):e.setState({error:"No data filled"})},e.openModal=function(){return e.setState({modal:!0})},e.closeModal=function(){return e.setState({modal:!1})},e.state={message:"",loading:!1,error:"",modal:!1,uploadTask:null,uploadState:"",percentUploaded:0,storageRef:S.storage().ref()},e}return Object(O.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){return l.a.createElement(U.a,{className:"messageForm"},l.a.createElement(Z.a,{value:this.state.message,fluid:!0,name:"message",label:l.a.createElement(x.a,{icon:"add"}),labelPosition:"left",className:this.state.error.length>0?"error":null,placeholder:"Write your message",onChange:this.handleChange}),l.a.createElement(x.a.Group,{icon:!0,widths:"2",style:{marginTop:"10px"}},l.a.createElement(x.a,{color:"green",content:"Add Reply",labelPosition:"left",icon:"edit",onClick:this.sendMessage,disabled:this.state.loading,className:this.state.loading?"loading":null}),l.a.createElement(x.a,{color:"red",content:"Upload Media",labelPosition:"right",icon:"cloud upload",onClick:this.openModal})),l.a.createElement(le,{modal:this.state.modal,closeModal:this.closeModal,uploadFile:this.uploadFile}),l.a.createElement(ce,{uploadState:this.state.uploadState,percents:this.state.percentUploaded}))}}]),a}(l.a.Component),se=t(262),ie=t.n(se),ue=function(e,a){return e.user.id===a.uid?"message_self":null},me=function(e){var a,t=e.message,n=e.user;return l.a.createElement($.a,null,l.a.createElement($.a.Avatar,{src:t.user.avatar}),l.a.createElement($.a.Content,{className:ue(t,n)},l.a.createElement($.a.Author,{as:"a"},t.user.name),l.a.createElement($.a.Metadata,null,(a=t.timestamp,ie()(a).fromNow())),function(e){return e.hasOwnProperty("image")&&!e.hasOwnProperty("content")}(t)?l.a.createElement(V.a,{src:t.image,className:"message_image"}):l.a.createElement($.a.Text,null,t.content)))},de=function(e){var a=e.channel,t=e.user,r=Object(n.useState)({messages:[],messageLoading:!0,messageRef:S.database().ref("messages")}),c=Object(N.a)(r,2),o=c[0],s=c[1],u=Object(n.useCallback)((function(e){s((function(e){return Object(i.a)({},e,{messages:[]})}));var a=[];o.messageRef.child(e).on("child_added",(function(e){a.push(e.val()),s((function(e){return Object(i.a)({},e,{messages:a,messageLoading:!1})}))}))}),[o.messageRef]),m=Object(n.useCallback)((function(e){u(e)}),[u]);Object(n.useEffect)((function(){return a&&t&&m(a.id),function(){o.messageRef.off()}}),[a,t,m]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(ee,null),l.a.createElement(U.a,{className:"messages"},l.a.createElement($.a.Group,null,function(e){if(e.length>0)return e.map((function(e){return l.a.createElement(me,{key:e.timestamp,message:e,user:t})}))}(o.messages))),l.a.createElement(oe,{messageRef:o.messageRef,channel:a,user:t}))},pe=function(){return l.a.createElement("div",null,"MetaPanel")},he=function(){var e=Object(s.d)((function(e){return null!==e.user.user?{user:e.user.user,channel:e.channel.channel}:{user:""}}));return l.a.createElement(L.a,{columns:"equal",className:"u-heigth100vh"},l.a.createElement(H,null),l.a.createElement(X,{userData:e.user}),l.a.createElement(z.a,{style:{marginLeft:"320px"}},l.a.createElement(de,{channel:e.channel,user:e.user})),l.a.createElement(z.a,{width:4},l.a.createElement(pe,null)))},fe=t(479),ge=t(468),Ee=function(){return l.a.createElement(fe.a,{active:!0},l.a.createElement(ge.a,{size:"huge",content:"Loading"}))},be=function(e){function a(){return Object(E.a)(this,a),Object(v.a)(this,Object(j.a)(a).apply(this,arguments))}return Object(O.a)(a,e),Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this;S.auth().onAuthStateChanged((function(a){null!==a?(e.props.setUser(a),e.props.history.push("/plackApp")):(e.props.setUser(null),e.props.history.push("/login"))}))}},{key:"render",value:function(){return this.props.isLoading?l.a.createElement(Ee,null):l.a.createElement("div",{className:"App"},l.a.createElement(k.c,null,l.a.createElement(k.a,{exact:!0,path:"/plackApp",component:he}),l.a.createElement(k.a,{path:"/login",component:F}),l.a.createElement(k.a,{path:"/register",component:I})))}}]),a}(l.a.Component),ve=Object(k.f)(Object(s.b)((function(e){return{isLoading:e.user.isLoading}}),{setUser:function(e){return{type:"SET_USER",user:e}}})(be)),je=(t(450),Object(o.d)((function(e,a){return"RESET_APP"===a.type&&(e=void 0),d(e,a)}),Object(o.a)(p.a,f.a)));c.a.render(l.a.createElement(g.a,null,l.a.createElement(s.a,{store:je},l.a.createElement(ve,null))),document.getElementById("root"))}},[[275,1,2]]]);
//# sourceMappingURL=main.f4221df9.chunk.js.map