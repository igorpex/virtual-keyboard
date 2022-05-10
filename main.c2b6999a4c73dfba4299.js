(()=>{"use strict";const e=["Backquote","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","Backspace","Tab","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Backslash","Delete","CapsLock","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Enter","ShiftLeft","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash","ArrowUp","ShiftRight","ControlLeft","OS","AltLeft","Space","AltRight","ArrowLeft","ArrowDown","ArrowRight","ControlRight"],t={Backquote:!1,Digit1:!1,Digit2:!1,Digit3:!1,Digit4:!1,Digit5:!1,Digit6:!1,Digit7:!1,Digit8:!1,Digit9:!1,Digit0:!1,Minus:!1,Equal:!1,KeyQ:!1,KeyW:!1,KeyE:!1,KeyR:!1,KeyT:!1,KeyY:!1,KeyU:!1,KeyI:!1,KeyO:!1,KeyP:!1,BracketLeft:!1,BracketRight:!1,Backslash:!1,KeyA:!1,KeyS:!1,KeyD:!1,KeyF:!1,KeyG:!1,KeyH:!1,KeyJ:!1,KeyK:!1,KeyL:!1,Semicolon:!1,Quote:!1,KeyZ:!1,KeyX:!1,KeyC:!1,KeyV:!1,KeyB:!1,KeyN:!1,KeyM:!1,Comma:!1,Period:!1,Slash:!1,Space:!1,CapsLock:!0,ArrowUp:!0,ArrowLeft:!0,ArrowDown:!0,ArrowRight:!0,ShiftRight:!0,ControlLeft:!0,ControlRight:!0,OS:!0,AltLeft:!0,AltRight:!0,Enter:!0,ShiftLeft:!0,Backspace:!0,Delete:!0,Tab:!0},i={Backquote:"short",Digit1:"short",Digit2:"short",Digit3:"short",Digit4:"short",Digit5:"short",Digit6:"short",Digit7:"short",Digit8:"short",Digit9:"short",Digit0:"short",Minus:"short",Equal:"short",Backspace:"very-long",Delete:"long",Tab:"long",KeyQ:"short",KeyW:"short",KeyE:"short",KeyR:"short",KeyT:"short",KeyY:"short",KeyU:"short",KeyI:"short",KeyO:"short",KeyP:"short",BracketLeft:"short",BracketRight:"short",Backslash:"short",CapsLock:"very-long",KeyA:"short",KeyS:"short",KeyD:"short",KeyF:"short",KeyG:"short",KeyH:"short",KeyJ:"short",KeyK:"short",KeyL:"short",Semicolon:"short",Quote:"short",Enter:"very-long",ShiftLeft:"very-long",KeyZ:"short",KeyX:"short",KeyC:"short",KeyV:"short",KeyB:"short",KeyN:"short",KeyM:"short",Comma:"short",Period:"short",Slash:"short",ArrowUp:"short",ShiftRight:"very-long",ControlLeft:"long",OS:"long",AltLeft:"long",Space:"space-long",AltRight:"long",ArrowLeft:"short",ArrowDown:"short",ArrowRight:"short",ControlRight:"long"},o={Backquote:"`",Digit1:"1",Digit2:"2",Digit3:"3",Digit4:"4",Digit5:"5",Digit6:"6",Digit7:"7",Digit8:"8",Digit9:"9",Digit0:"0",Minus:"-",Equal:"=",Backspace:"⌫ Back",Delete:"Del ⌦",Tab:"↹ Tab",KeyQ:"q",KeyW:"w",KeyE:"e",KeyR:"r",KeyT:"t",KeyY:"y",KeyU:"u",KeyI:"i",KeyO:"o",KeyP:"p",BracketLeft:"[",BracketRight:"]",Backslash:"\\",CapsLock:"Caps",KeyA:"a",KeyS:"s",KeyD:"d",KeyF:"f",KeyG:"g",KeyH:"h",KeyJ:"j",KeyK:"k",KeyL:"l",Semicolon:";",Quote:"'",Enter:"↩ Enter",ShiftLeft:"⇧ Shift",KeyZ:"z",KeyX:"x",KeyC:"c",KeyV:"v",KeyB:"b",KeyN:"n",KeyM:"m",Comma:",",Period:".",Slash:"/",ArrowUp:"⯅",ShiftRight:"⇧ Shift",ControlLeft:"Ctrl",OS:"Win",AltLeft:"Alt",Space:" ",AltRight:"Alt",ControlRight:"Ctrl",ArrowLeft:"⯇",ArrowDown:"⯆",ArrowRight:"⯈"},a={KeyQ:"Q",KeyW:"W",KeyE:"E",KeyR:"R",KeyT:"T",KeyY:"Y",KeyU:"U",KeyI:"I",KeyO:"O",KeyP:"P",KeyA:"A",KeyS:"S",KeyD:"D",KeyF:"f",KeyG:"G",KeyH:"H",KeyJ:"J",KeyK:"K",KeyL:"L",KeyZ:"Z",KeyX:"X",KeyC:"C",KeyV:"V",KeyB:"B",KeyN:"N",KeyM:"M",Space:" "},r={Backquote:"`",Digit1:"!",Digit2:"@",Digit3:"#",Digit4:"$",Digit5:"%",Digit6:"^",Digit7:"&",Digit8:"*",Digit9:"(",Digit0:")",Minus:"_",Equal:"+",BracketLeft:"{",BracketRight:"}",Backslash:"/",Semicolon:":",Quote:'"',Comma:"<",Period:">",Slash:"?"},n={Backquote:"ё",Digit1:"1",Digit2:"2",Digit3:"3",Digit4:"4",Digit5:"5",Digit6:"6",Digit7:"7",Digit8:"8",Digit9:"9",Digit0:"0",Minus:"-",Equal:"=",Backspace:"⌫ Back",Delete:"Del ⌦",Tab:"↹ Tab",KeyQ:"й",KeyW:"ц",KeyE:"у",KeyR:"к",KeyT:"е",KeyY:"н",KeyU:"г",KeyI:"ш",KeyO:"щ",KeyP:"з",BracketLeft:"х",BracketRight:"ъ",Backslash:"\\",CapsLock:"Caps",KeyA:"ф",KeyS:"ы",KeyD:"в",KeyF:"а",KeyG:"п",KeyH:"р",KeyJ:"о",KeyK:"л",KeyL:"д",Semicolon:"ж",Quote:"э",Enter:"↩ Enter",ShiftLeft:"⇧ Shift",KeyZ:"я",KeyX:"ч",KeyC:"с",KeyV:"м",KeyB:"и",KeyN:"т",KeyM:"ь",Comma:"б",Period:"ю",Slash:".",ArrowUp:"⯅",ShiftRight:"⇧ Shift",ControlLeft:"Ctrl",OS:"Win",AltLeft:"Alt",Space:" ",AltRight:"Alt",ControlRight:"Ctrl",ArrowLeft:"⯇",ArrowDown:"⯆",ArrowRight:"⯈"},s={Backquote:"ё",KeyQ:"Й",KeyW:"Ц",KeyE:"У",KeyR:"К",KeyT:"Е",KeyY:"Н",KeyU:"Г",KeyI:"Ш",KeyO:"Щ",KeyP:"З",BracketLeft:"Х",BracketRight:"Ъ",KeyA:"Ф",KeyS:"Ы",KeyD:"В",KeyF:"А",KeyG:"П",KeyH:"Р",KeyJ:"О",KeyK:"Л",KeyL:"Д",Semicolon:"Ж",Quote:"Э",KeyZ:"Я",KeyX:"Ч",KeyC:"С",KeyV:"М",KeyB:"И",KeyN:"Т",KeyM:"Ь",Comma:"Б",Period:"Ю",Space:" "},y={Digit1:"!",Digit2:'"',Digit3:"№",Digit4:";",Digit5:"%",Digit6:":",Digit7:"?",Digit8:"*",Digit9:"(",Digit0:")",Minus:"_",Equal:"+",Backslash:"/",Slash:","},c=new Set;let K,l,g,h=!1,u=!1,d=localStorage.getItem("lang");function D(){"en"===d?(K=o,l=r,g=a):(K=n,l=y,g=s)}function f(e){let i;return i=t[e]?K[e]:l[e]?h?l[e]:K[e]:u&&!h||!u&&h?g[e]:K[e],i}function S(){let o=0;const a=document.createElement("div");return a.classList.add("keyboard"),[14,15,13,13,9].forEach((r=>{const n=document.createElement("div");n.classList.add("keyboard__row");for(let a=o;a<o+r;a++){const o=e[a],r=t[o],s=i[o],y=f(o),K=document.createElement("div");K.classList.add(o),K.dataset.keycode=o,K.classList.add("keyboard__key"),c.has(o)&&K.classList.add("active"),r&&K.classList.add("function-key"),K.classList.add(s),K.innerHTML=y,n.append(K)}o+=r,a.append(n)})),a}function p(e){if(!e.target.dataset.keycode)return;const t=document.querySelector(".input-area");t.focus();const i=new KeyboardEvent("keydown",{bubbles:!0,cancelable:!0,code:e.target.dataset.keycode,key:K[e.target.dataset.keycode],view:window});t.dispatchEvent(i);const o=new KeyboardEvent("keyup",{bubbles:!0,cancelable:!0,code:e.target.dataset.keycode,key:K[e.target.dataset.keycode],view:window});t.dispatchEvent(o)}function L(){const e=document.querySelector(".keyboard"),t=S();t.addEventListener("click",p),e.replaceWith(t)}function k(){(c.has("ShiftLeft")||c.has("ShiftRight"))&&(c.has("ControlLeft")||c.has("ControlRight"))&&(d="en"===d?"ru":"en",localStorage.setItem("lang",d),D()),h=!(!c.has("ShiftLeft")&&!c.has("ShiftRight")),c.has("CapsLock")&&(u=!u)}d||(d="en",localStorage.setItem("lang",d)),D(),window.addEventListener("DOMContentLoaded",function(){const e=document.createElement("link");e.rel="icon",document.getElementsByTagName("head")[0].append(e),e.href="./favicon.ico",document.createElement("div").classList.add("container");const t=document.createElement("h1");t.innerHTML="Virtual Keyboard",t.classList.add("heading");const i=document.createElement("textarea");i.classList.add("input-area"),i.name="input-area",i.cols="50",i.rows="10";const o=document.createElement("p");o.classList.add("comment"),o.innerHTML="Ctrl + Shift to switch language",document.body.append(t),document.body.append(i),document.body.append(o),document.querySelector(".input-area").focus();const a=S();document.body.append(a)}()),window.addEventListener("keydown",(function(e){const t=e.code;if(e.repeat||(c.add(t),k(),L()),"Tab"===t){e.preventDefault();const t=document.querySelector(".input-area");t.focus();const i=t.selectionStart,o=t.selectionEnd;t.value=`${t.value.substring(0,i)}\t${t.value.substring(o)}`,t.selectionStart=i+1,t.selectionEnd=i+1}else if("Enter"===t){e.preventDefault();const t=document.querySelector(".input-area");t.focus();const i=t.selectionStart,o=t.selectionEnd;t.value=`${t.value.substring(0,i)}\n${t.value.substring(o)}`,t.selectionStart=i+1,t.selectionEnd=i+1}else if("Delete"===t){e.preventDefault();const t=document.querySelector(".input-area");t.focus();const i=t.selectionStart,o=t.selectionEnd;t.value=`${t.value.substring(0,i)}${t.value.substring(o+1)}`,t.selectionStart=i,t.selectionEnd=i}else if("Backspace"===t){e.preventDefault();const t=document.querySelector(".input-area");t.focus();const i=t.selectionStart,o=t.selectionEnd;t.value=`${t.value.substring(0,i-1)}${t.value.substring(o)}`,t.selectionStart=i-1,t.selectionEnd=i-1}else if("Caps"===t||"AltLeft"===t||"AltRight"===t||"ShiftLeft"===t||"ShiftRight"===t||"OS"===t)e.preventDefault(),document.querySelector(".input-area").focus();else{e.preventDefault();const i=document.querySelector(".input-area");i.focus();const o=f(t),a=i.selectionStart,r=i.selectionEnd;i.value=`${i.value.substring(0,a)}${o}${i.value.substring(r)}`,i.selectionStart=a+1,i.selectionEnd=a+1}})),window.addEventListener("keyup",(function(e){const t=e.code;c.delete(t),k(),L()})),document.querySelector(".keyboard").addEventListener("click",p)})();