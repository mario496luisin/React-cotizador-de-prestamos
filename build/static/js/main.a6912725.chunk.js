(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports=t(19)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),c=t.n(r),o=t(1),i=t(2),s=t(4),u=t(3),m=t(5),d=(t(15),t(16),t(8)),p=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={cantidad:"",plazo:""},t.calcularPrestamo=function(e){e.preventDefault();var a=t.state,n=a.cantidad,l=a.plazo;t.props.datosPrestamo(n,l)},t.actualizarState=function(e){var a=e.target,n=a.name,l=a.value;t.setState(Object(d.a)({},n,Number(l)))},t.habilitarSubmit=function(){var e=t.state,a=e.cantidad,n=e.plazo;return!a||!n},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.calcularPrestamo},l.a.createElement("div",null,l.a.createElement("label",null,"Cantidad Prestamo: "),l.a.createElement("input",{onChange:this.actualizarState,type:"number",name:"cantidad",className:"u-full-width",placeholder:"Ejemplo: 3000"})),l.a.createElement("div",null,l.a.createElement("label",null,"Plazo para pagar:"),l.a.createElement("select",{onChange:this.actualizarState,name:"plazo",className:"u-full-width"},l.a.createElement("option",{value:""},"Seleccionar"),l.a.createElement("option",{value:"3"},"3 meses"),l.a.createElement("option",{value:"6"},"6 meses"),l.a.createElement("option",{value:"12"},"12 meses"),l.a.createElement("option",{value:"24"},"24 meses"))),l.a.createElement("div",null,l.a.createElement("input",{disabled:this.habilitarSubmit(),type:"submit",value:"Calcular",className:"u-full-width button-primary"})))}}]),a}(n.Component);var v=function(e){return l.a.createElement("div",{className:"u-full-width resultado"},l.a.createElement("h2",null,"Resultados"),l.a.createElement("p",null,"La cantidad Solicitada fue: $ ",e.cantidad),l.a.createElement("p",null,"A pagar en ",e.plazo," Meses"),l.a.createElement("p",null,"Total a pagar: $ ",e.total),l.a.createElement("p",null,"Su pago mensual es de : $  ",(e.total/e.plazo).toFixed(2)," Meses"))},E=function(){return l.a.createElement("p",null,"Agrega una cantidad y un plazo para pagar")},h=(t(17),function(){return l.a.createElement("div",{className:"spinner"},l.a.createElement("div",{className:"rect1"}),l.a.createElement("div",{className:"rect2"}),l.a.createElement("div",{className:"rect3"}),l.a.createElement("div",{className:"rect4"}))}),f=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={total:"",cantidad:"",plazo:"",cargando:!1},t.datosPrestamo=function(e,a){var n=function(e,a){var t,n;switch(t=e<=1e3?.25*e:e>1e3&&e<=5e3?.2*e:e>5e3&&e<=1e4?.15*e:.1*e,a){case 3:n=.05*e;break;case 6:n=.1*e;break;case 12:n=.15*e;break;case 24:n=.2*e}return e+n+t}(e,a);t.setState({cargando:!0},function(){setTimeout(function(){t.setState({total:n,cantidad:e,plazo:a,cargando:!1})},3e3)})},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e,a=this.state,t=a.total,r=a.plazo,c=a.cantidad,o=a.cargando;return e=""!==t||o?o?l.a.createElement(h,null):l.a.createElement(v,{total:t,plazo:r,cantidad:c}):l.a.createElement(E,null),l.a.createElement(n.Fragment,null,l.a.createElement("h1",null,"Cotizador de Prestamos"),l.a.createElement("div",{className:"container"},l.a.createElement(p,{datosPrestamo:this.datosPrestamo}),l.a.createElement("div",{className:"mensajes"},e)))}}]),a}(n.Component);t(18),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.a6912725.chunk.js.map