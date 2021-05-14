var gooIndex = $('#goo-index');
function hoverEnter(index){
  $("#goo-index").css("top",(100*index)+"px");
  let allScreens = document.querySelectorAll('.screen');
  allScreens.forEach(e=>{
    e.classList.remove('visible')
  })
  let nowVisible = document.getElementById('screen_'+index);
  nowVisible.classList.add('visible');
}