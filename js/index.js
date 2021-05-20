var nombre;
var apellidos;
var email;
var discapacidad;
var fecha;
var exposiciones;
var turno;
var precio;

$(function () {
  $('body').css('font-family',fonts.list[0]+',sans-serif');
  $('#nombre').on('input',function(e){
    nombre = $('#nombre').val();
    if(nombre==''){
      $('#nombreli').html('<b>Nombre completo: </b><span>Aún no ha rellenado su nombre. <b>(Obligatorio)*</b></span>');
    }
    else{
      $('#nombreli').html('<b>Nombre completo: </b><span>'+nombre+'. <b>(Correcto)</b></span>');
    }
  });
  $('#apellidos').on('input',function(e){
    apellidos = $('#apellidos').val();
    if(apellidos==''){
      $('#apellidosli').html('<b>Apellidos: </b><span>Aún no ha rellenado sus apellidos. <b>(Obligatorio)*</b></span>');
    }
    else{
      $('#apellidosli').html('<b>Apellidos: </b><span>'+apellidos+'. <b>(Correcto)</b></span>');
    }
  });
  $('#email').on('input',function(e){
    email = $('#email').val();
    if(!validateEmail(email)){
      $('#emailli').html('<b>Email: </b><span>Email incorrecto. Ejemplo: museo@gmail.com <b>(Obligatorio)*</b></span>');
    }
    else{
      $('#emailli').html('<b>Email: </b><span>'+email+'. <b>(Correcto)</b></span>');
    }
  });
  $('#fecha').on('input',function(e){
    fecha = $('#fecha').val();
    if(fecha==''){
      $('#fechali').html('<b>Fecha de asistencia: </b><span>Aún no ha rellenado la fecha. (Obligatorio)*</b></span>');
    }
    else{
      $('#fechali').html('<b>Fecha de asistencia: </b><span>'+fecha+'. <b>(Correcto)</b></span>');
    }
  });
  $('#discapacidad').on('input',function(e){
    discapacidad = $('#discapacidad').val();
    if(discapacidad==''){
      $('#discapacidadli').html('<b>Discapacidad: </b><span>No tengo discapacidades. <b>(Correcto)</b></span>');
    }
    else{
      $('#emailli').html('<b>Discapacidad: </b>'+discapacidad+'. <b>(Correcto)</b></span>');
    }
  });
  $('input[name=turno]').on('input',function(e){
    if($('#mañana').is(':checked')){
      turno = $('#mañana').val();
    }
    else{
      turno = $('#tarde').val();
    }
    
      $('#turnoli').html('<b>Escogiste turno de: </b><span>'+turno+'<b>.(Correcto)</b></span>');
    
  });
  $('input[type=checkbox]').on('input',function(e){
    comprobarExposiciones();
  });
  comprobarExposiciones();
  $('input[name=reset]').on('click',function(){
    for(let i=0;i<6;i++){
      $('#exp'+i).remove();
    }
    $('#precio').html('');
    $('#errorexposiciones').remove();
    $('#listali').append('<li id="errorexposiciones"><span>Aún no ha añadido ninguna exposición a su reserva. (Añadir al menos una es obligatorio)*</span></li>')
  })

});

function comprobarExposiciones(){
  let mitologia = '';
  let greco = '';
  let dioses = '';
  let reencuentro ='';
  let precio = 0;
  let exposiciones = new Array();

  if($('#mitologia').is(":checked")){
    mitologia = $('#mitologia').val();
    precio +=3;
    exposiciones.push(mitologia);
  }

  if($('#greco').is(":checked")){
    greco = $('#greco').val();
    precio +=5;
    exposiciones.push(greco);
  }

  if($('#dioses').is(":checked")){
    dioses = $('#dioses').val();
    precio +=7;
    exposiciones.push(dioses);
  }
  if($('#reencuentro').is(":checked")){
    reencuentro = $('#reencuentro').val();
    precio +=2;
    exposiciones.push(reencuentro);
  }
  if(exposiciones.length===0){
    for(let i=0;i<6;i++){
      $('#exp'+i).remove();
    }
    $('#precio').html('');
    $('#errorexposiciones').remove();
    $('#listali').append('<li id="errorexposiciones"><span>Aún no ha añadido ninguna exposición a su reserva. (Añadir al menos una es obligatorio)*</span></li>')
  }
  else{
    $('#errorexposiciones').remove();
    for(let i=0;i<6;i++){
      $('#exp'+i).remove();
    }
    for(let i=0;i<exposiciones.length;i++){
      let exp=exposiciones[i];
      $('#listali').append('<li id="exp'+i+'"><span>'+exp+'</span></li>');
    }
    $('#precio').html('<b>Su reserva tendrá un precio total de: </b>'+precio+' euros. <p>Si los datos son los correctos, <b>puede enviar el formulario</b>.</p>');
  }
}
// Define Accessibility Panel

var accessPanel = document.getElementById("accessPanel");
var toggleAccessPanel = document.getElementById("toggleAccessPanel");
var closeAccessPanel = document.getElementById("closeAccessPanel");

// Define Font Options

var fontSwap = document.getElementById("fontSwap");
var fontIncrease = document.getElementById("fontIncrease");
var fontDecrease = document.getElementById("fontDecrease");

// Define Light and Darken Options

var btnTextLighten = document.getElementById("contrastTextLighten");
var btnTextDarken = document.getElementById("contrastTextDarken");
var btnBgLighten = document.getElementById("contrastBgLighten");
var btnBgDarken = document.getElementById("contrastBgDarken");

// Define Highlight Links
var highlightLinks = document.getElementById("highlightLinks");

// Define Reset Button

var reset = document.getElementById("reset");
var remove = document.getElementById("remove");

// Define Color Sliders

var bgColorSliders = document.getElementsByClassName("rangeBg");
var textColorSliders = document.getElementsByClassName("rangeText");

var toggleBlur = document.getElementById("toggleBlur");
var checkBox = document.getElementsByName("toppings");

var fonts = {
  list: [
      'Arial',
      'Calibri',
      'Consolas',
      'Georgia',
      'Courier',
  ],
  index: 0
}
var exposiciones = {
  exp1: {
    nombre: "Pasiones Mitológicas",
    precio: 3
  },
  exp2: {
    nombre: "El Greco en Illescas",
    precio: 5
  },
  exp3: {
    nombre: "Los Dioses del Prado",
    precio: 8
  },
  exp4: {
    nombre: "El Reencuentro",
    precio: 2
  },
  list:new Array()
}
function fontReplace() {
  fonts.index++;
  let i = (fonts.index) % fonts.list.length;
  $('body').css('font-family',fonts.list[i]+',sans-serif');
  $('input').css('font-family',fonts.list[i]+',sans-serif');
}

var fontSize = 0;

function fontDec(inc) {
  var minInc = 0;
  inc--;
  if (inc <= minInc) {
    inc = minInc;
  }
  return inc;
};

function fontInc(inc) {
  inc++;
  return inc >= 4 ? 4 : inc; // shorthand version of fontDec
};

function fontRem(){
  for(var i =0; i<document.body.classList.length; i++) {
    var className = document.body.classList[i];
    if (className.indexOf("fontsize-") >= 0) {
      document.body.classList.remove(className);
    }
  }
}

var contrastBg = [155, 195, 253];
var contrastText = [0, 0, 0];

function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
};

function contrastChange(target, array){
    var valueInc = target * 51;
    for (var i = 0; i < array.length; i++){
      var newVal = clamp(parseInt(array[i]) + valueInc, 0, 255);
      array[i] = newVal;
      if (array == contrastBg){
        bgColorSliders[i].value = newVal;
      }
      if (array == contrastText){
        textColorSliders[i].value = newVal;
      }
    }
} 

document.addEventListener("click", function(event){
  var el = event.target;
  
  if(el == toggleAccessPanel){
      if(!accessPanel.classList.contains("visible") == true){
        $('body').css('margin-right','25%');
        accessPanel.classList.toggle("visible");
      } else{
        accessPanel.classList.toggle("visible");
      }
    }
  
  if(el == highlightLinks){
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) { 
        links[i].classList.toggle("highlight");
    }
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) { 
        buttons[i].classList.toggle("highlight");
    }
  }
  
  if(el == reset){
    document.styleSheets[0].disabled = false;
    document.body.removeAttribute("style");
    document.body.removeAttribute("class");
    contrastBg = [255,255,255];
    contrastText = [0,0,0];
    fontSize = 0;
      $('body').css('margin-right','25%');

    for (var i = 0; i < 3; i++){
      bgColorSliders[i].value = 255;
      textColorSliders[i].value = 0;
    }
    
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) { 
        links[i].classList.remove("highlight");
    }
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) { 
        buttons[i].classList.remove("highlight");
    }
  }
  
  if(el == remove){
    document.styleSheets[0].disabled = true;
  }
  
  if(el == closeAccessPanel){
      if(!accessPanel.classList.contains("visible") == true){
        accessPanel.classList.add("visible").focus();
      } else{
        $('body').css('margin-right','0%');
        accessPanel.classList.remove("visible");
      }
    }
 
    if(el == fontSwap){
      fontReplace();
    }
  
    if(el == fontIncrease || el == fontDecrease){
     fontRem();
    }
  
    if(el == fontDecrease){
      fontSize = fontDec(fontSize);
      $('#block').css("font-size",fontSize+'px');
       document.body.classList.add("fontsize-" + fontSize);
    }

    if(el == fontIncrease){
      fontSize = fontInc(fontSize);
      $('#block').css("font-size",fontSize+'px');
      document.body.classList.add("fontsize-" + fontSize);
    }
  
    if(el == contrastTextLighten){
      contrastChange(1, contrastText);
      $('body').css('color','rgb(' + contrastText + ')')
    }
  
    if(el == contrastTextDarken){
      contrastChange(-1, contrastText);
      $('body').css('color','rgb(' + contrastText + ')')
    }
  
    if(el == contrastBgLighten){
      contrastChange(1, contrastBg);
      document.body.style["background-color"] = 'rgb(' + contrastBg + ')';
    }
  
    if(el == contrastBgDarken){
      contrastChange(-1, contrastBg);
      document.body.style["background-color"] = 'rgb(' + contrastBg + ')';
    }
  
    if(el == toggleBlur){
      if(!document.body.classList.contains("blur") == true){
        document.body.classList.add("blur");
      } else{
        document.body.classList.remove("blur");
      }
    }

});

document.addEventListener("keydown", function(event){
  
    var key = event.keyCode;
  
  	if(key == "81" || key == "27"){
      if(!accessPanel.classList.contains("visible") == true){
        $('body').css('margin-right','25%');
        accessPanel.classList.add("visible").focus();
      } else{
        $('body').css('margin-right','');
        accessPanel.classList.remove("visible");
      }
    }
    if(accessPanel.classList.contains("visible") == true){
    // redo as switch cases
    if(key == "65"){
      fontReplace();
    }
  
    if(key == "68" || key == "70"){
     fontRem();
    }
  
    if(key == "68"){
      fontSize = fontDec(fontSize);
       document.body.classList.add("fontsize-" + fontSize);
    }

    if(key == "70"){
      fontSize = fontInc(fontSize);
      document.body.classList.add("fontsize-" + fontSize);
    }
  
    if(key == "90"){
      contrastChange(1, contrastText);
      document.body.style["color"] = 'rgb(' + contrastText + ')';
    }
  
    if(key == "88"){
      contrastChange(-1, contrastText);
      document.body.style["color"] = 'rgb(' + contrastText + ')';
    }
  
    if(key == "67"){
      contrastChange(1, contrastBg);
      document.body.style["background-color"] = 'rgb(' + contrastBg + ')';
    }
  
    if(key == "86"){
      contrastChange(-1, contrastBg);
      document.body.style["background-color"] = 'rgb(' + contrastBg + ')';
    }
    if(key == "66"){
      lightenArticle();
    }
    if(key == "78"){
      darkenArticle();
    }
  
    if(key == "82"){
     document.styleSheets[0].disabled = false; document.body.removeAttribute("style");
      document.body.removeAttribute("class");
      contrastBg = [255,255,255];
      contrastText = [0,0,0];
      fontSize = 0;
      for (var i = 0; i < 3; i++){
        bgColorSliders[i].value = 255;
        textColorSliders[i].value = 0;
      }
    }
  if(key == '69'){
    document.styleSheets[0].disabled = true;
  }
  
  if(key == '83'){
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) { 
        links[i].classList.toggle("highlight");
    }
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) { 
        buttons[i].classList.toggle("highlight");
    }
  }
}
});


function bgInputValues(i) {
    contrastBg[i] = bgColorSliders[i].value;
    document.body.style.backgroundColor = 'rgb(' + contrastBg.join(',') + ')';
}
function bgInputChange(){
  for (var i = 0; i < 3; i++){
    bgInputValues(i)
  }
}
document.addEventListener("input", bgInputChange); 

function textInputValues(i) {
    contrastText[i] = textColorSliders[i].value;
    document.body.style.color = 'rgb(' + contrastText.join(',') + ')';
}
function textInputChange(){
  for (var i = 0; i < 3; i++){
    textInputValues(i)
  }
}
function changeArticleBg(){
  let sliders=$('.rangeArticleBg');
  let colors=new Array();
  for(let i=0;i<sliders.length;i++){
    colors.push(sliders[i].value);
  }
    $('#content-wrapper').css('background-color','rgb('+colors[0]+','+colors[1]+','+colors[2]+')');
    $('.menu li').css('background','rgb('+colors[0]+','+colors[1]+','+colors[2]+')');
    $('.volver').css('background','rgb('+colors[0]+','+colors[1]+','+colors[2]+')');
    $('.center').css('background','rgb('+colors[0]+','+colors[1]+','+colors[2]+')');
}

$('input').on('change',textInputChange);

$('#rangeArticle1').on('change',changeArticleBg);
$('#rangeArticle2').on('change',changeArticleBg);
$('#rangeArticle3').on('change',changeArticleBg);

function lightenArticle(){
  let r=parseInt($('#rangeArticle1').val());
  let g=parseInt($('#rangeArticle2').val());
  let b=parseInt($('#rangeArticle3').val());

  r = (r+50);
  g = g+50;
  b = b+50;
  
  if(r>=255){
    r=255;
  }
  if(g>=255){
    g=255;
  }
  if(b>=255){
    b=255;
  }
  $('#rangeArticle1').val(r);
  $('#rangeArticle2').val(g);
  $('#rangeArticle3').val(b);
  changeArticleBg();
}

function darkenArticle(){
  let r=parseInt($('#rangeArticle1').val());
  let g=parseInt($('#rangeArticle2').val());
  let b=parseInt($('#rangeArticle3').val());
  r = (r-50);
  g = (g-50);
  b = (b-50);
  if(r<=0){
    r=0;
  }
  if(g<=0){
    g=0;
  }
  if(b<=0){
    b=0;
  }
  $('#rangeArticle1').val(r);
  $('#rangeArticle2').val(g);
  $('#rangeArticle3').val(b);
  changeArticleBg();
}

//Form validation
var formValid;

function validateForm() {
	//set initial value of formValid to true
	formValid = 1;
	resetErrors();

	//validate radio buttons
	if(validateGroup("turno")==false) {
		document.getElementById("turnoLegendError").style.padding = "0 5px";
		applyError("turno","Por favor, seleccione el turno.");
	}
	//validate checkboxes
	if(validateGroup('toppings')==false) {
		document.getElementById("toppingsLegendError").style.padding = "0 5px";
		applyError("toppingsLegend","Debes elegir al menos, una exposición en tu reserva.");
	}
	var y = document.forms["myForm"]["nombre"].value;
	if (y == "") {
		applyError("nombre","&nbsp;Debes ingresar tu nombre.");
	}
	var z = document.forms["myForm"]["apellidos"].value;
	if (z == "") {
		applyError("apellidos","&nbsp;Debes ingresar tus apellidos.");
	}
  var date = document.forms["myForm"]["fecha"].value;
  if (date == "") {
    applyError("fecha","&nbsp;Tienes que seleccionar una fecha.");
	}
  var email = document.forms["myForm"]["email"].value;
  if (email=="") {
    applyError("email","&nbsp;El correo que has introducido no es correcto. Ej: museo@gmail.com");
	}
	//if a form field is not valid, do not submit form
	if (formValid == 0){
    return false;
	} else{
    $('#success').html('<b>'+nombre+' '+apellidos+'</b> ha enviado <b>correctamente</b> el formulario. Revisa la bandeja de entrada del correo: <b>'+email+'</b> para continuar con su reserva.</p><p><b>Gracias por confiar en nosotros. Disfrute de la visita.</b>');
    for(let i=0;i<6;i++){
      $('#exp'+i).remove();
    }
    $('#precio').html('');
    $('#errorexposiciones').remove();
    
    return false;
  }
}

//Validates Instruments custom select menu


//Appends error message to label, puts focus on field with error message
function applyError(errorFieldId,errorMessage){
	var errorMessageId = errorFieldId + "Error";
	document.getElementById(errorMessageId).innerHTML = errorMessage; //puts error in span tag
	document.getElementById(errorFieldId).focus(); //puts focus on field with error
	formValid = 0; //sets global formValid variable to false
  
}

//validates grouped form fields like checkboxes or radio buttons. Accepts the name of the group to be validated.
function validateGroup(groupName){
	var group = document.getElementsByName(groupName);
	var groupCount = 0;
	for (var i = 0; i < group.length; i++) {
		if (group[i].checked) {
			groupCount++;
		}
	}
	if (groupCount < 1) {
		return false;
	}
	return true;
}

//resets error messages so they are turned off
function resetErrors(){
	document.getElementById("nombreError").innerHTML = "";
	document.getElementById("nombreErrorHidden").innerHTML = "";
	document.getElementById("toppingsLegendError").innerHTML = "";
	document.getElementById("turnoLegendError").innerHTML = "";
}

function cambiarFecha(){
  let fecha=$('#fecha').val();
  let array = fecha.split("-");
  $('.result').html("<p><b>Asistiré el día:</b> "+array[2]+'-'+array[1]+'-'+array[0]+'</p>')
}

function validateEmail(email) {
  if(email!=null){
    return email.includes('@') && email.includes('.');
  }
}

function transcribir(){
  let texto = $('#transcripcionboton').text();
  if(texto=='Mostrar Transcripción'){
    $('#transcripcion').html('<p>Ahora del Museo del Prado se ha escrito o dicho casi todo se podría afirmar que no quedan adjetivos que no se hayan utilizado para alabar sus extraordinarias colecciones que le valieron el premio princesa de asturias de comunicación y humanidades en 2019&nbsp</p>'+
      '<p>[M&uacute;sica]&nbsp;</p>'+
      '<p>Ese mismo a&ntilde;o recibi&oacute; el conocido como &oacute;scar de internet porque puede que el museo sea del siglo 19 pero desde luego no se ha quedado anclado en el pasado&nbsp;</p>'+
      '<p>[M&uacute;sica]</p>'+
      '<p>Tiene expuestas m&aacute;s de 1700 obras y otras 27.000 permanecen en los almacenes por falta de espacio y ello a pesar de las sucesivas ampliaciones que lo han convertido en un complejo con cuatro edificios y 45.000 metros cuadrados de superficie total</p>'+
      '<p>[M&uacute;sica]</p>'+
      '<p>Las colecciones del prado son el reflejo de los gustos de la monarqu&iacute;a espa&ntilde;ola que fue adquiriendo las piezas a lo largo de la historia como propietarios que eran alg&uacute;n que otro privilegio se permitieron por ejemplo entre 1827 y 1838 el museo cont&oacute; con una sala en la que se expon&iacute;an desnudos femeninos conocida como la sala reservada a la que s&oacute;lo pod&iacute;an acceder reyes y nobles pero no el p&uacute;blico en general se ve que la moral no era igual para todos como ya imaginar&aacute;n es imposible enumerar obras y artistas apuntamos aqu&iacute; el nombre de tres que han merecido una estatua en el exterior del museo</p>'+
      '<p>[M&uacute;sica]&nbsp;</p>'+
      '<p>Cubillo en un sur en el oeste Vel&aacute;zquez y Goya al norte el &uacute;nico que mira de frente al museo y el autor con m&aacute;s obra colgada en nuestra pinacoteca m&aacute;s universal este edificio aleda&ntilde;o es el cas&oacute;n del buen Retiro tambi&eacute;n pertenece al Prado y tuvo el privilegio de acoger el Guernica de Picasso cuando la emblem&aacute;tica obra del pintor malague&ntilde;o volvi&oacute; a Espa&ntilde;a en 1989 en 1992 fue trasladado a nuestro siguiente destino&nbsp;</p>'+
      '<p>[M&uacute;sica]</p>');
      $('#transcripcionboton').text('Ocultar Transcripción');
  }
  else{
    $('#transcripcion').html('');
    $('#transcripcionboton').text('Mostrar Transcripción');
  }
}