(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{UJ0D:function(t,e,o){"use strict";o.r(e),o.d(e,"ProtectedModule",function(){return F});var r=o("ofXK"),n=o("tyNb"),c=o("fXoL"),i=o("N/25");let b=(()=>{class t{constructor(t,e){this.router=t,this.authService=e}get user(){return this.authService.user}logout(){this.router.navigateByUrl("/auth"),this.authService.logout()}}return t.\u0275fac=function(e){return new(e||t)(c.Ib(n.b),c.Ib(i.a))},t.\u0275cmp=c.Cb({type:t,selectors:[["app-navbar"]],decls:20,vars:1,consts:[[1,"navbar","navbar-expand","navbar-light","bg-light"],[1,"container"],[1,"container-fluid"],[1,"navbar-brand"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"navbar-nav","ml-auto"],[1,"nav-item"],["routerLink","/home/portfolio",1,"nav-link"],["routerLink","/home/product/add",1,"nav-link"],["routerLink","/home/rendimientos",1,"nav-link"],[1,"nav-link",3,"click"]],template:function(t,e){1&t&&(c.Lb(0,"nav",0),c.Lb(1,"div",1),c.Lb(2,"div",2),c.Lb(3,"a",3),c.ec(4),c.Kb(),c.Lb(5,"div",4),c.Lb(6,"ul",5),c.Lb(7,"li",6),c.Lb(8,"a",7),c.ec(9,"Portfolio"),c.Kb(),c.Kb(),c.Lb(10,"li",6),c.Lb(11,"a",8),c.ec(12,"Add Product"),c.Kb(),c.Kb(),c.Lb(13,"li",6),c.Lb(14,"a",9),c.ec(15,"Rendimientos"),c.Kb(),c.Kb(),c.Lb(16,"li",6),c.Lb(17,"a",10),c.Sb("click",function(){return e.logout()}),c.ec(18," Log Out"),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Jb(19,"router-outlet")),2&t&&(c.yb(4),c.fc(e.user.name))},directives:[n.d,n.f],encapsulation:2}),t})();var a=o("PSD3"),s=o.n(a),u=o("tk/3"),d=o("AytR"),l=o("lJxs"),p=o("JIr8"),m=o("LRne");let h=(()=>{class t{constructor(t){this.http=t,this.baseUrl=d.a.baseUrl}listProducts(){const t=`${this.baseUrl}/api/products`,e=(new u.c).set("x-token",localStorage.getItem("token")||"");return this.http.get(t,{headers:e}).pipe(Object(l.a)(t=>t.products))}create(t){const e=`${this.baseUrl}/api/products/`;console.log(e);const o=(new u.c).set("x-token",localStorage.getItem("token")||"");return console.log(t),this.http.post(e,t,{headers:o}).pipe(Object(l.a)(t=>(console.log(t),t.ok)),Object(p.a)(t=>Object(m.a)(t.error.msg)))}delete(t){const e=`${this.baseUrl}/api/products/${t}`;console.log(e);const o=(new u.c).set("x-token",localStorage.getItem("token")||"");return this.http.delete(e,{headers:o}).pipe(Object(l.a)(t=>(console.log(t),t.ok)),Object(p.a)(t=>Object(m.a)(t.error.msg)))}getProduct(t){const e=(new u.c).set("x-token",localStorage.getItem("token")||"");return this.http.get(`${this.baseUrl}/api/products/${t}`,{headers:e}).pipe(Object(l.a)(t=>t),Object(p.a)(t=>Object(m.a)(t.error.msg)))}editProduct(t,e){const o=`${this.baseUrl}/api/products/${t}`;console.log(o);const r=(new u.c).set("x-token",localStorage.getItem("token")||"");return this.http.put(o,e,{headers:r}).pipe(Object(l.a)(t=>(console.log(t),t.ok)),Object(p.a)(t=>Object(m.a)(t.error.msg)))}}return t.\u0275fac=function(e){return new(e||t)(c.Pb(u.a))},t.\u0275prov=c.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const f=function(t){return["/home/product/edit",t]};function g(t,e){if(1&t){const t=c.Mb();c.Lb(0,"div",2),c.Lb(1,"div",3),c.ec(2),c.Kb(),c.Lb(3,"div",4),c.Lb(4,"table",5),c.Lb(5,"tbody"),c.Lb(6,"tr"),c.Lb(7,"th",6),c.ec(8,"Inversion minima"),c.Kb(),c.Lb(9,"td"),c.ec(10),c.Vb(11,"number"),c.Kb(),c.Kb(),c.Lb(12,"tr"),c.Lb(13,"th",6),c.ec(14,"Inversion maxima"),c.Kb(),c.Lb(15,"td"),c.ec(16),c.Vb(17,"number"),c.Kb(),c.Kb(),c.Lb(18,"tr"),c.Lb(19,"th",6),c.ec(20,"Tasa mensual"),c.Kb(),c.Lb(21,"td",7),c.ec(22),c.Vb(23,"number"),c.Kb(),c.Kb(),c.Lb(24,"tr"),c.Lb(25,"th",6),c.ec(26,"Tiempo"),c.Kb(),c.Lb(27,"td",7),c.ec(28),c.Vb(29,"number"),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Lb(30,"div",8),c.Lb(31,"a",9),c.Jb(32,"img",10),c.Kb(),c.Lb(33,"button",11),c.Sb("click",function(){c.ac(t);const o=e.$implicit;return c.Ub().deleteProduct(o.id)}),c.Jb(34,"img",12),c.Kb(),c.Kb(),c.Kb()}if(2&t){const t=e.$implicit;c.yb(2),c.fc(t.product_name),c.yb(8),c.gc("$ ",c.Wb(11,6,t.product_minInvestment),""),c.yb(6),c.gc("$ ",c.Wb(17,8,t.product_maxInvestment),""),c.yb(6),c.gc("",c.Wb(23,10,t.product_monthlyRate)," %"),c.yb(6),c.gc("",c.Wb(29,12,t.product_planTime)," Meses"),c.yb(3),c.Xb("routerLink",c.Yb(14,f,t.id))}}let v=(()=>{class t{constructor(t){this.productService=t,this.products=[],this.list()}list(){this.productService.listProducts().subscribe(t=>{this.products=t})}deleteProduct(t){this.productService.delete(t).subscribe(t=>{!0===t?(s.a.fire("Success","Usuario eliminado","success"),this.list()):s.a.fire("Error",t,"error")})}}return t.\u0275fac=function(e){return new(e||t)(c.Ib(h))},t.\u0275cmp=c.Cb({type:t,selectors:[["app-portfolio"]],decls:2,vars:1,consts:[[1,"d-flex","flex-wrap","justify-content-between","mt-5"],["class","container p-2 plan-card ",4,"ngFor","ngForOf"],[1,"container","p-2","plan-card"],[1,"card-header","text-center"],[1,"card-body"],[1,"table-sm","table-bordered"],["scope","row"],[1,"text-center"],[1,"d-flex","justify-content-around"],["routerLink","/home/portfolio/add",2,"cursor","pointer",3,"routerLink"],["src","../../../assets/editar.svg","alt","",1,"icons"],[1,"btnDelete",3,"click"],["src","../../../assets/trash.svg","alt","",1,"icons"]],template:function(t,e){1&t&&(c.Lb(0,"div",0),c.dc(1,g,35,16,"div",1),c.Kb()),2&t&&(c.yb(1),c.Xb("ngForOf",e.products))},directives:[r.i,n.d],pipes:[r.d],encapsulation:2}),t})();var L=o("3Pt+"),K=o("tsX3");let y=(()=>{class t{constructor(t,e,o,r){this.formBuilder=t,this.router=e,this.productService=o,this.activedRoute=r,this.title="",this.btnTitle="",this.edit=!1,this.newProductForm=this.formBuilder.group({product_name:["Plan Active",[L.k.required]],product_minInvestment:[,[L.k.required]],product_maxInvestment:[,[L.k.required]],product_monthlyRate:[,[L.k.required]],product_planTime:[,[L.k.required,L.k.maxLength(2)]]})}ngOnInit(){const t=this.activedRoute.snapshot.params;t.id?this.productService.getProduct(t.id).subscribe(t=>{this.newProductForm.patchValue({product_name:t.product.product_name,product_minInvestment:t.product.product_minInvestment,product_maxInvestment:t.product.product_maxInvestment,product_monthlyRate:t.product.product_monthlyRate,product_planTime:t.product.product_planTime}),this.title="Editar producto",this.btnTitle="Editar producto",this.edit=!0},t=>console.log("Contacte con el administrador.",t)):(this.title="Nuevo producto",this.btnTitle="Agregar producto",this.edit=!1)}createProduct(){console.log(this.newProductForm.value),this.productService.create(this.newProductForm.value).subscribe(t=>{!0===t?(s.a.fire("Success","Plan creado!","success"),K.a.waitUnTill(),this.router.navigate(["/home/portfolio"])):s.a.fire("Error",t,"error")})}editProduct(){this.productService.editProduct(this.activedRoute.snapshot.params.id,this.newProductForm.value).subscribe(t=>{!0===t?(s.a.fire("Success","Plan editado!","success"),this.router.navigate(["/home/portfolio"])):s.a.fire("Error",t,"error")})}}return t.\u0275fac=function(e){return new(e||t)(c.Ib(L.b),c.Ib(n.b),c.Ib(h),c.Ib(n.a))},t.\u0275cmp=c.Cb({type:t,selectors:[["app-productform"]],decls:29,vars:4,consts:[[1,"container","form-container"],["autocomplete","off",1,"container","p-1",3,"formGroup","ngSubmit"],[1,"text-center","mb-3"],[1,"form-group","mt-1"],[1,"form-label","ml-1","mb-1"],["type","text","formControlName","product_name",1,"form-control","p-1"],["type","number","min","1","placeholder"," $","formControlName","product_minInvestment","step","any",1,"form-control","p-1"],[1,"form-group"],["type","number","placeholder"," $","formControlName","product_maxInvestment","min","2","step","any",1,"form-control","p-1"],["type","number","formControlName","product_monthlyRate","step","any","placeholder"," %",1,"form-control","p-1"],["type","number","formControlName","product_planTime","min","1","max","12","step","any","placeholder"," Meses",1,"form-control","p-1"],[1,"d-flex","justify-content-center","pb-2"],["type","submit",1,"btn","btn-outline-primary","mr-2",3,"disabled"]],template:function(t,e){1&t&&(c.Lb(0,"div",0),c.Lb(1,"form",1),c.Sb("ngSubmit",function(){return e.edit?e.editProduct():e.createProduct()}),c.Lb(2,"fieldset"),c.Lb(3,"div"),c.Lb(4,"legend",2),c.ec(5),c.Kb(),c.Kb(),c.Lb(6,"div",3),c.Lb(7,"label",4),c.ec(8,"Nombre "),c.Kb(),c.Jb(9,"input",5),c.Kb(),c.Lb(10,"div",3),c.Lb(11,"label",4),c.ec(12,"Inversion minima"),c.Kb(),c.Jb(13,"input",6),c.Kb(),c.Lb(14,"div",7),c.Lb(15,"label",4),c.ec(16,"Inversion maxima "),c.Kb(),c.Jb(17,"input",8),c.Kb(),c.Lb(18,"div",7),c.Lb(19,"label",4),c.ec(20,"Tasa mensual "),c.Kb(),c.Jb(21,"input",9),c.Kb(),c.Lb(22,"div",7),c.Lb(23,"label",4),c.ec(24,"Duracion del plan "),c.Kb(),c.Jb(25,"input",10),c.Kb(),c.Lb(26,"div",11),c.Lb(27,"button",12),c.ec(28),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Kb()),2&t&&(c.yb(1),c.Xb("formGroup",e.newProductForm),c.yb(4),c.fc(e.title),c.yb(22),c.Xb("disabled",e.newProductForm.invalid),c.yb(1),c.gc(" ",e.btnTitle,""))},directives:[L.m,L.f,L.d,L.a,L.e,L.c,L.h],encapsulation:2}),t})();function _(t,e){if(1&t&&(c.Lb(0,"option",14),c.ec(1),c.Kb()),2&t){const t=e.$implicit;c.Xb("ngValue",t.product_name),c.yb(1),c.fc(t.product_name)}}function S(t,e){if(1&t&&(c.Lb(0,"strong"),c.ec(1),c.Kb()),2&t){const t=c.Ub(3);c.yb(1),c.gc(" ",t.product_toSimulate.plan,"")}}function k(t,e){if(1&t&&(c.Lb(0,"tr"),c.Lb(1,"th",16),c.dc(2,S,2,1,"strong",13),c.Kb(),c.Lb(3,"td"),c.ec(4),c.Kb(),c.Lb(5,"td"),c.ec(6),c.Kb(),c.Lb(7,"td"),c.ec(8),c.Vb(9,"number"),c.Kb(),c.Lb(10,"td",17),c.ec(11),c.Kb(),c.Lb(12,"td",17),c.ec(13),c.Kb(),c.Kb()),2&t){const t=e.index,o=c.Ub(2);c.yb(2),c.Xb("ngIf",0===t),c.yb(2),c.fc(o.product_toSimulate.simulacion[t].date),c.yb(2),c.gc("",o.product_toSimulate.monthlyRate," %"),c.yb(2),c.gc("$ ",c.Wb(9,6,o.product_toSimulate.monto),""),c.yb(3),c.gc("$ ",o.product_toSimulate.simulacion[t].rend,""),c.yb(2),c.fc(t+1)}}function w(t,e){if(1&t&&(c.Lb(0,"tbody"),c.dc(1,k,14,8,"tr",15),c.Lb(2,"tr"),c.Lb(3,"th",16),c.Lb(4,"strong"),c.ec(5,"TOTAL FINAL "),c.Kb(),c.Kb(),c.Jb(6,"td"),c.Jb(7,"td"),c.Lb(8,"td"),c.ec(9),c.Vb(10,"number"),c.Kb(),c.Lb(11,"td",17),c.ec(12),c.Vb(13,"number"),c.Kb(),c.Lb(14,"td",17),c.ec(15),c.Vb(16,"number"),c.Kb(),c.Kb(),c.Kb()),2&t){const t=c.Ub();c.yb(1),c.Xb("ngForOf",t.product_toSimulate.simulacion),c.yb(8),c.gc("$ ",c.Wb(10,4,t.product_toSimulate.monto),""),c.yb(3),c.gc("$ ",c.Wb(13,6,t.count),""),c.yb(3),c.gc("$ ",c.Wb(16,8,t.totalFinal),"")}}const I=[{path:"",component:b,children:[{path:"",component:v},{path:"portfolio",component:v},{path:"rendimientos",component:(()=>{class t{constructor(t,e){this.productService=t,this.formBuilder=e,this.products=[],this.state=!1,this.product_toSimulate={},this.count=0,this.totalFinal=0,this.logForm=this.formBuilder.group({plan:[,L.k.required],monto:[1e4,L.k.required],date:["2020-05-06",L.k.required]}),this.getProducts()}getProducts(){this.productService.listProducts().subscribe(t=>{this.products=t})}run(){this.product_toSimulate={},this.count=0,this.totalFinal=0,this.product_toSimulate={plan:this.logForm.value.plan,monto:this.logForm.value.monto,date:this.logForm.value.date,simulacion:[]},console.log(this.product_toSimulate),this.products.find(t=>{if(t.product_name===this.logForm.value.plan){this.product_toSimulate.monthlyRate=t.product_monthlyRate,this.product_toSimulate.planTime=t.product_planTime;let e=0,o=K.a.formatDate(this.logForm.value.date);for(let t=0;t<this.product_toSimulate.planTime;t++){this.product_toSimulate.simulacion.push({rend:e,date:o});let t=new Date(o),r=new Date(new Date(t).setMonth(t.getMonth()+1));o=K.a.formatDate(r),this.count+=e,e=this.product_toSimulate.monto*(this.product_toSimulate.monthlyRate/100)}return this.totalFinal=this.product_toSimulate.monto+this.count,console.log(this.product_toSimulate),t}}),this.state=!0}}return t.\u0275fac=function(e){return new(e||t)(c.Ib(h),c.Ib(L.b))},t.\u0275cmp=c.Cb({type:t,selectors:[["app-rendimientos"]],decls:32,vars:4,consts:[["autocomplete","off",3,"formGroup","ngSubmit"],[1,"container-fluid",2,"padding","55px"],[1,"container","rend-container","p-5"],[1,"row"],[1,"col"],["formControlName","plan",1,"form-control"],[3,"ngValue",4,"ngFor","ngForOf"],["type","number","min","1","max","99999","step","any","placeholder","Ingrese monto","formControlName","monto",1,"form-control"],["name","fechaNacimiento","type","date","formControlName","date",1,"form-control"],["type","submit",1,"btn","btn-outline-danger","p-0","w-100","h-100",3,"disabled"],[1,"row","mt-5"],[1,"table","table-striped"],["scope","col"],[4,"ngIf"],[3,"ngValue"],[4,"ngFor","ngForOf"],["scope","row"],[1,"text-center"]],template:function(t,e){1&t&&(c.Lb(0,"form",0),c.Sb("ngSubmit",function(){return e.run()}),c.Lb(1,"div",1),c.Lb(2,"div",2),c.Lb(3,"div",3),c.Lb(4,"div",4),c.Lb(5,"select",5),c.dc(6,_,2,2,"option",6),c.Kb(),c.Kb(),c.Lb(7,"div",4),c.Jb(8,"input",7),c.Kb(),c.Lb(9,"div",4),c.Jb(10,"input",8),c.Kb(),c.Lb(11,"div",4),c.Lb(12,"button",9),c.ec(13," Ver tabla"),c.Kb(),c.Kb(),c.Kb(),c.Lb(14,"div",10),c.Lb(15,"table",11),c.Lb(16,"thead"),c.Lb(17,"tr"),c.Lb(18,"th",12),c.ec(19,"Plan"),c.Kb(),c.Lb(20,"th",12),c.ec(21,"Fecha"),c.Kb(),c.Lb(22,"th",12),c.ec(23,"Tasa % "),c.Kb(),c.Lb(24,"th",12),c.ec(25,"Monto inicial"),c.Kb(),c.Lb(26,"th",12),c.ec(27,"Rendimiento generado"),c.Kb(),c.Lb(28,"th",12),c.ec(29,"Plazo"),c.Kb(),c.Kb(),c.Kb(),c.dc(30,w,17,10,"tbody",13),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Jb(31,"form"),c.Kb()),2&t&&(c.Xb("formGroup",e.logForm),c.yb(6),c.Xb("ngForOf",e.products),c.yb(6),c.Xb("disabled",e.logForm.invalid),c.yb(18),c.Xb("ngIf",e.state))},directives:[L.m,L.f,L.d,L.j,L.e,L.c,r.i,L.h,L.a,r.j,L.g,L.l],pipes:[r.d],encapsulation:2}),t})()},{path:"product/add",component:y},{path:"product/edit/:id",component:y},{path:"**",redirectTo:""}]}];let P=(()=>{class t{}return t.\u0275mod=c.Gb({type:t}),t.\u0275inj=c.Fb({factory:function(e){return new(e||t)},imports:[[n.e.forChild(I)],n.e]}),t})(),F=(()=>{class t{}return t.\u0275mod=c.Gb({type:t}),t.\u0275inj=c.Fb({factory:function(e){return new(e||t)},imports:[[r.b,P,L.i,u.b]]}),t})()}}]);