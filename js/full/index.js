i={
 init:function(){console.clear()
  if(typeof window.Worker=='function'){
   wk=new Worker('js/full/worker.js')
   wk.onmessage=function(e){var a=e.data
    //console.log('id:',a.id,', name:',a.n,', description:',a.d,'\n')//approval/checking verite/making me sure 'bout it
    $('<div title="'+a.d+'"><img src=img/'+(a.n==='0'?'none':a.id==113||a.id==142||a.id==146||a.id==355?'no':a.id)+'.jpg><label>'+(/_/.test(a.n)?a.n.replace('_',' '):a.n)+'</label><label>'+(1001+a.id)+'</label></div>').appendTo('.D')}}
  else B.innerHTML='fatal error:browser does not support webWorker (background work)'}}
B.onload=i.init
$('.D>div').mouseenter(
 function(){
  $(t).css({
   left:((this.offsetLeft+5)+'px'),
   top:((this.offsetTop+5)+'px')})})