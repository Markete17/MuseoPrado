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
  var body = $('body');
  body.css('font-family',fonts.list[i]+',sans-serif');
}

function mitologia(){
  if(!exposiciones.list.includes(exposiciones.exp1)){
    exposiciones.list.push(exposiciones.exp1);
  }
  else{
    for(let i=0;i<exposiciones.list.length;i++){
      let exp = exposiciones.list[i];
      if(exp == exposiciones.exp1){
        exposiciones.list.slice(i,i);
      }
    }
  }
  console.log(exposiciones.list);
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
        accessPanel.classList.add("visible").focus();
      } else{
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


	//validate select menu
	var z = document.forms["myForm"]["favcity"].value;
	if (z == 0) {
		applyError("favcity","&nbsp;You must choose a favorite city."); 
	}
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
	//validate input fields
	var x = document.forms["myForm"]["sample"].value;
	if (x == "") {
		applyError("sample","&nbsp;You must enter some text here.");
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
		console.log("hola");
    return false;
	} else{
    console.log("adios");
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
	document.getElementById("sampleError").innerHTML = "";
	document.getElementById("toppingsLegendError").innerHTML = "";
	document.getElementById("turnoLegendError").innerHTML = "";
	document.getElementById("favcityError").innerHTML = "";
}

function cambiarFecha(){
  let fecha=$('#fecha').val();
  let array = fecha.split("-");
  $('.result').html("<p><b>Asistiré el día:</b> "+array[2]+'-'+array[1]+'-'+array[0]+'</p>')
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}