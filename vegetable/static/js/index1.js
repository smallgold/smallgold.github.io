document.addEventListener("DOMContentLoaded",c=>{var e;const a=(wpcf7_recaptcha={...null!=(e=wpcf7_recaptcha)?e:{}}).sitekey,{homepage:t,contactform:n}=wpcf7_recaptcha.actions,o=e=>{const{action:t,func:c,params:n}=e;grecaptcha.execute(a,{action:t}).then(e=>{e=new CustomEvent("wpcf7grecaptchaexecuted",{detail:{action:t,token:e}});document.dispatchEvent(e)}).then(()=>{"function"==typeof c&&c(...n)}).catch(e=>console.error(e))};if(grecaptcha.ready(()=>{o({action:t})}),document.addEventListener("change",e=>{o({action:n})}),"undefined"!=typeof wpcf7&&"function"==typeof wpcf7.submit){const c=wpcf7.submit;wpcf7.submit=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};o({action:n,func:c,params:[e,t]})}}document.addEventListener("wpcf7grecaptchaexecuted",t=>{var c=document.querySelectorAll('form.wpcf7-form input[name="_wpcf7_recaptcha_response"]');for(let e=0;e<c.length;e++)c[e].setAttribute("value",t.detail.token)})});