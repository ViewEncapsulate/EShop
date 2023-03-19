"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[776],{6776:(Y,P,a)=>{a.r(P),a.d(P,{ShopModule:()=>h});var _=a(9838);class S{constructor(){this.brandId=0,this.typeId=0,this.sort="name",this.pageNumber=1,this.pageSize=6}}var t=a(1571),Z=a(2340),x=a(529),b=a(4004),v=a(9646);class p{constructor(n){this.http=n,this.baseUrl=Z.N.apiUrl,this.products=[],this.brands=[],this.types=[],this.shopParams=new S,this.productCache=new Map}getProducts(n=!0){if(n||(this.productCache=new Map),this.productCache.size>0&&n&&this.productCache.has(Object.values(this.shopParams).join("-"))&&(this.pagination=this.productCache.get(Object.values(this.shopParams).join("-")),this.pagination))return(0,v.of)(this.pagination);let e=new x.LE;return 0!==this.shopParams.brandId&&(e=e.append("brandId",this.shopParams.brandId.toString())),0!==this.shopParams.typeId&&(e=e.append("typeId",this.shopParams.typeId.toString())),this.shopParams.search&&(e=e.append("search",this.shopParams.search)),e=e.append("sort",this.shopParams.sort),e=e.append("pageIndex",this.shopParams.pageNumber.toString()),e=e.append("pageSize",this.shopParams.pageSize.toString()),this.http.get(this.baseUrl+"products",{params:e}).pipe((0,b.U)(i=>(this.productCache.set(Object.values(this.shopParams).join("-"),i),this.pagination=i,i)))}setShopParams(n){this.shopParams=n}getShopParams(){return this.shopParams}getProduct(n){const e=[...this.productCache.values()].reduce((i,s)=>({...i,...s.data.find(r=>r.id===n)}),{});return 0!==Object.keys(e).length?(0,v.of)(e):this.http.get(this.baseUrl+"products/"+n)}getBrands(){return this.brands.length>0?(0,v.of)(this.brands):this.http.get(this.baseUrl+"products/brands").pipe((0,b.U)(n=>this.brands=n))}getTypes(){return this.types.length>0?(0,v.of)(this.types):this.http.get(this.baseUrl+"products/types").pipe((0,b.U)(n=>this.types=n))}}p.\u0275fac=function(n){return new(n||p)(t.LFG(x.eN))},p.\u0275prov=t.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"});var c=a(6895);function k(o,n){if(1&o&&(t.TgZ(0,"span"),t._uU(1,"Showing "),t.TgZ(2,"strong"),t._uU(3),t.qZA(),t._uU(4," of "),t.TgZ(5,"strong"),t._uU(6),t.qZA(),t._uU(7," Results"),t.qZA()),2&o){const e=t.oxw();t.xp6(3),t.AsE(" ",(e.pageNumber-1)*e.pageSize+1," - ",e.pageNumber*e.pageSize>e.totalCount?e.totalCount:e.pageNumber*e.pageSize," "),t.xp6(3),t.Oqu(e.totalCount)}}function q(o,n){1&o&&(t.TgZ(0,"span"),t._uU(1," There are "),t.TgZ(2,"strong"),t._uU(3,"0"),t.qZA(),t._uU(4," results for this filter "),t.qZA())}class d{constructor(){}ngOnInit(){}}d.\u0275fac=function(n){return new(n||d)},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-paging-header"]],inputs:{pageNumber:"pageNumber",pageSize:"pageSize",totalCount:"totalCount"},decls:3,vars:2,consts:[[4,"ngIf"]],template:function(n,e){1&n&&(t.TgZ(0,"header"),t.YNc(1,k,8,3,"span",0),t.YNc(2,q,5,0,"span",0),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngIf",e.totalCount&&e.totalCount>0),t.xp6(1),t.Q6J("ngIf",0===e.totalCount))},dependencies:[c.O5]});var I=a(6939),C=a(433);class l{constructor(){this.pageChanged=new t.vpe}ngOnInit(){}onPagerChange(n){this.pageChanged.emit(n.page)}}l.\u0275fac=function(n){return new(n||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-pager"]],inputs:{totalCount:"totalCount",pageSize:"pageSize",pageNumber:"pageNumber"},outputs:{pageChanged:"pageChanged"},decls:1,vars:4,consts:[["previousText","\u2039","nextText","\u203a","firstText","\xab","lastText","\xbb",3,"boundaryLinks","totalItems","ngModel","itemsPerPage","pageChanged"]],template:function(n,e){1&n&&(t.TgZ(0,"pagination",0),t.NdJ("pageChanged",function(s){return e.onPagerChange(s)}),t.qZA()),2&n&&t.Q6J("boundaryLinks",!0)("totalItems",e.totalCount)("ngModel",e.pageNumber)("itemsPerPage",e.pageSize)},dependencies:[I.Qt,C.JJ,C.On]});var T=a(5866);class m{constructor(n){this.basketService=n}ngOnInit(){}addItemToBasket(){this.product&&this.basketService.addItemToBasket(this.product)}}m.\u0275fac=function(n){return new(n||m)(t.Y36(T.v))},m.\u0275cmp=t.Xpm({type:m,selectors:[["app-product-item"]],inputs:{product:"product"},decls:14,vars:9,consts:[[1,"card","h-100","shadow-sm"],[1,"image","position-relative",2,"cursor","pointer"],[1,"img-fluid","bg-info",3,"src","alt"],[1,"d-flex","align-items-center","justify-content-center","hover-overlay"],["type","button",1,"btn","btn-primary","fa","fa-shopping-cart","mr-2",3,"click"],["type","button",1,"btn","btn-primary",3,"routerLink"],[1,"card-body"],[3,"routerLink"],[1,"test-uppercase"],[1,"mb-2"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"img",2),t.TgZ(3,"div",3)(4,"button",4),t.NdJ("click",function(){return e.addItemToBasket()}),t.qZA(),t.TgZ(5,"button",5),t._uU(6,"View"),t.qZA()()(),t.TgZ(7,"div",6)(8,"a",7)(9,"h6",8),t._uU(10),t.qZA()(),t.TgZ(11,"span",9),t._uU(12),t.ALo(13,"currency"),t.qZA()()()),2&n&&(t.xp6(2),t.s9C("src",e.product.pictureUrl,t.LSH),t.s9C("alt",e.product.name),t.xp6(3),t.MGl("routerLink","/shop/",e.product.id,""),t.xp6(3),t.MGl("routerLink","/shop/",e.product.id,""),t.xp6(2),t.Oqu(e.product.name),t.xp6(2),t.Oqu(t.xi3(13,6,e.product.price,"INR")))},dependencies:[_.rH,c.H9],styles:[".btn-group[_ngcontent-%COMP%]{width:100%}.btn[_ngcontent-%COMP%]{width:30%;height:40px}.image[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{opacity:1}.image[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%]{transform:none;opacity:1}.hover-overlay[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;top:0;left:0;background-color:#ffffff80;opacity:0;transition:all .5s}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{z-index:1000;transition:all .5s}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type{transform:translate(-20px)}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-of-type{transform:translate(20px)}"]});const A=["search"];function N(o,n){if(1&o&&(t.TgZ(0,"option",20),t._uU(1),t.qZA()),2&o){const e=n.$implicit,i=t.oxw(2);t.Q6J("selected",i.shopParams.sort===e.value)("value",e.value),t.xp6(1),t.hij(" ",e.name," ")}}function O(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"li",21),t.NdJ("click",function(){const r=t.CHM(e).$implicit,y=t.oxw(2);return t.KtG(y.onBrandSelected(r.id))}),t._uU(1),t.qZA()}if(2&o){const e=n.$implicit,i=t.oxw(2);t.ekj("active",e.id==i.shopParams.brandId),t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.name," ")}}function w(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"li",21),t.NdJ("click",function(){const r=t.CHM(e).$implicit,y=t.oxw(2);return t.KtG(y.onTypeSelected(r.id))}),t._uU(1),t.qZA()}if(2&o){const e=n.$implicit,i=t.oxw(2);t.ekj("active",e.id==i.shopParams.typeId),t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.name," ")}}function U(o,n){if(1&o&&(t.TgZ(0,"div",22),t._UZ(1,"app-product-item",23),t.qZA()),2&o){const e=n.$implicit;t.xp6(1),t.Q6J("product",e)}}function M(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"div",24)(1,"app-pager",25),t.NdJ("pageChanged",function(s){t.CHM(e);const r=t.oxw(2);return t.KtG(r.onPageChanged(s))}),t.qZA()()}if(2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("pageSize",e.shopParams.pageSize)("pageNumber",e.shopParams.pageNumber)("totalCount",e.totalCount)}}function B(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"div",2)(1,"section",3)(2,"h5",4),t._uU(3,"Sort"),t.qZA(),t.TgZ(4,"select",5),t.NdJ("change",function(s){t.CHM(e);const r=t.oxw();return t.KtG(r.onSortSelected(s.target.value))}),t.YNc(5,N,2,3,"option",6),t.qZA(),t.TgZ(6,"h5",4),t._uU(7,"Brands"),t.qZA(),t.TgZ(8,"ul",7),t.YNc(9,O,2,4,"li",8),t.qZA(),t.TgZ(10,"h5",4),t._uU(11,"Types"),t.qZA(),t.TgZ(12,"ul",7),t.YNc(13,w,2,4,"li",8),t.qZA()(),t.TgZ(14,"section",9)(15,"div",10),t._UZ(16,"app-paging-header",11),t.TgZ(17,"div",12)(18,"input",13,14),t.NdJ("keyup.enter",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.onSearch())}),t.qZA(),t.TgZ(20,"button",15),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.onSearch())}),t._uU(21,"Search"),t.qZA(),t.TgZ(22,"button",16),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.onReset())}),t._uU(23,"Reset"),t.qZA()()(),t.TgZ(24,"div",17),t.YNc(25,U,2,1,"div",18),t.qZA(),t.YNc(26,M,2,3,"div",19),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(5),t.Q6J("ngForOf",e.sortOptions),t.xp6(4),t.Q6J("ngForOf",e.brands),t.xp6(4),t.Q6J("ngForOf",e.types),t.xp6(3),t.Q6J("totalCount",e.totalCount)("pageSize",e.shopParams.pageSize)("pageNumber",e.shopParams.pageNumber),t.xp6(9),t.Q6J("ngForOf",e.products),t.xp6(1),t.Q6J("ngIf",e.totalCount&&e.totalCount>0)}}class g{constructor(n){this.shopService=n,this.sortOptions=[{name:"Alphabetical",value:"name"},{name:"Price: Low to High",value:"priceAsc"},{name:"Price: High to Low",value:"priceDesc"}],this.shopParams=n.getShopParams()}ngOnInit(){this.getProducts(),this.getBrands(),this.getTypes()}getProducts(){this.shopService.getProducts().subscribe(n=>{this.products=n.data,this.totalCount=n.count},n=>{console.log(n)})}getBrands(){this.shopService.getBrands().subscribe(n=>{this.brands=[{id:0,name:"All"},...n]},n=>{console.log(n)})}getTypes(){this.shopService.getTypes().subscribe(n=>{this.types=[{id:0,name:"All"},...n]},n=>{console.log(n)})}onBrandSelected(n){const e=this.shopService.getShopParams();e.brandId=n,e.pageNumber=1,this.shopService.setShopParams(e),this.shopParams=e,this.getProducts()}onTypeSelected(n){const e=this.shopService.getShopParams();e.typeId=n,e.pageNumber=1,this.shopService.setShopParams(e),this.shopParams=e,this.getProducts()}onSortSelected(n){const e=this.shopService.getShopParams();e.sort=n,this.shopService.setShopParams(e),this.shopParams=e,this.getProducts()}onPageChanged(n){const e=this.shopService.getShopParams();e.pageNumber!==n&&(e.pageNumber=n,this.shopService.setShopParams(e),this.shopParams=e,this.getProducts())}onSearch(){const n=this.shopService.getShopParams();n.search=this.searchTerm.nativeElement.value,n.pageNumber=1,this.shopService.setShopParams(n),this.shopParams=n,this.getProducts()}onReset(){this.searchTerm.nativeElement.value="",this.shopParams=new S,this.shopService.setShopParams(this.shopParams),this.getProducts()}}g.\u0275fac=function(n){return new(n||g)(t.Y36(p))},g.\u0275cmp=t.Xpm({type:g,selectors:[["app-shop"]],viewQuery:function(n,e){if(1&n&&t.Gf(A,5),2&n){let i;t.iGM(i=t.CRH())&&(e.searchTerm=i.first)}},decls:2,vars:1,consts:[[1,"container","mt-2"],["class","row",4,"ngIf"],[1,"row"],[1,"col-3"],[1,"text-warning","ml-3"],[1,"custom-select","mb-3",3,"change"],[3,"selected","value",4,"ngFor","ngForOf"],[1,"list-group","my-3"],["class","list-group-item",3,"active","value","click",4,"ngFor","ngForOf"],[1,"col-9"],[1,"d-flex","justify-content-between","align-items-center","pb-2"],[3,"totalCount","pageSize","pageNumber"],[1,"form-inline","mt-2"],["type","text","placeholder","Search",1,"form-control","mr-2",2,"width","300px",3,"keyup.enter"],["search",""],[1,"btn","btn-outline-primary","my-2",3,"click"],[1,"btn","btn-outline-success","ml-2","my-2",3,"click"],[1,"row","row-cols-1","row-cols-sm-2","row-cols-md-3","g-3"],["class","col-4 mb-4",4,"ngFor","ngForOf"],["class","d-flex justify-content-center",4,"ngIf"],[3,"selected","value"],[1,"list-group-item",3,"value","click"],[1,"col-4","mb-4"],[3,"product"],[1,"d-flex","justify-content-center"],[3,"pageSize","pageNumber","totalCount","pageChanged"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0),t.YNc(1,B,27,8,"div",1),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngIf",e.types&&e.brands&&e.types.length&&e.brands.length))},dependencies:[c.sg,c.O5,d,l,C.YN,C.Kr,m],styles:[".list-group-item[_ngcontent-%COMP%]{cursor:pointer;padding:10px 20px;font-size:1.1em}.list-group-item.active[_ngcontent-%COMP%]{border-radius:10px}.list-group-item[_ngcontent-%COMP%]:not(.active):hover{color:#fff;background-color:#e95420b3;border-radius:10px}"]});var J=a(5698),z=a(8909);function F(o,n){if(1&o&&(t.TgZ(0,"h5",13),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij(" You have ",e.quantityInBasket," of this item in your basket")}}function Q(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"div",2)(1,"div",3),t._UZ(2,"img",4),t.qZA(),t.TgZ(3,"div",3)(4,"h3"),t._uU(5),t.qZA(),t.TgZ(6,"p",5),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.YNc(9,F,2,1,"h5",6),t.TgZ(10,"div",7)(11,"i",8),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.decrementQuantity())}),t.qZA(),t.TgZ(12,"span",9),t._uU(13),t.qZA(),t.TgZ(14,"i",10),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.incrementQuantity())}),t.qZA(),t.TgZ(15,"button",11),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.updateBasket())}),t._uU(16),t.qZA()(),t.TgZ(17,"div",2)(18,"div",12)(19,"h4"),t._uU(20,"Description"),t.qZA(),t.TgZ(21,"p"),t._uU(22),t.qZA()()()()()}if(2&o){const e=t.oxw();t.xp6(2),t.s9C("src",e.product.pictureUrl,t.LSH),t.s9C("alt",e.product.name),t.xp6(3),t.Oqu(e.product.name),t.xp6(2),t.Oqu(t.xi3(8,9,e.product.price,"INR")),t.xp6(2),t.Q6J("ngIf",e.quantityInBasket>0),t.xp6(4),t.Oqu(e.quantity),t.xp6(2),t.Q6J("disabled",e.quantity===e.quantityInBasket),t.xp6(1),t.Oqu(e.buttonText),t.xp6(6),t.Oqu(e.product.description)}}class f{constructor(n,e,i,s){this.shopService=n,this.activatedRoute=e,this.bcService=i,this.basketService=s,this.quantity=1,this.quantityInBasket=0,this.bcService.set("@productDetails"," ")}ngOnInit(){this.loadProduct()}loadProduct(){const n=this.activatedRoute.snapshot.paramMap.get("id");n&&this.shopService.getProduct(+n).subscribe({next:e=>{this.product=e,this.bcService.set("@productDetails",e.name),this.basketService.basketSource$.pipe((0,J.q)(1)).subscribe({next:i=>{const s=i?.items.find(r=>r.id===+n);s&&(this.quantity=s.quantity,this.quantityInBasket=s.quantity)}})},error:e=>{console.log(e)}})}incrementQuantity(){this.quantity++}decrementQuantity(){this.quantity&&this.quantity--}updateBasket(){if(this.product)if(this.quantity>this.quantityInBasket){const n=this.quantity-this.quantityInBasket;this.quantityInBasket+=n,this.basketService.addItemToBasket(this.product,n)}else{const n=this.quantityInBasket-this.quantity;this.quantityInBasket-=n,this.basketService.removeItemFromBasket(this.product.id,n)}}get buttonText(){return 0===this.quantityInBasket?"Add to Basket":"Update to Basket"}}f.\u0275fac=function(n){return new(n||f)(t.Y36(p),t.Y36(_.gz),t.Y36(z.pm),t.Y36(T.v))},f.\u0275cmp=t.Xpm({type:f,selectors:[["app-product-details"]],decls:2,vars:1,consts:[[1,"container"],["class","row",4,"ngIf"],[1,"row"],[1,"col-6"],[1,"img-fluid","w-100",3,"src","alt"],[2,"font-size","2em"],["class","text-primary mb-3",4,"ngIf"],[1,"d-flex","justify-content-start","align-items-center"],[1,"fa","fa-minus-circle","text-warning","mr-2",2,"cursor","pointer","font-size","2em",3,"click"],[1,"font-weight-bold",2,"font-size","1.5em"],[1,"fa","fa-plus-circle","text-warning","mx-2",2,"cursor","pointer","font-size","2em",3,"click"],[1,"btn","btn-outline-primary","btn-lg","ml-4",3,"disabled","click"],[1,"col-6","mt-5"],[1,"text-primary","mb-3"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0),t.YNc(1,Q,23,12,"div",1),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngIf",e.product))},dependencies:[c.O5,c.H9]});const H=[{path:"",component:g},{path:":id",component:f,data:{breadcrumb:{alias:"productDetails"}}}];class u{}u.\u0275fac=function(n){return new(n||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[_.Bz.forChild(H),_.Bz]});var j=a(4466);class h{}h.\u0275fac=function(n){return new(n||h)},h.\u0275mod=t.oAB({type:h}),h.\u0275inj=t.cJS({imports:[c.ez,j.m,u]})}}]);