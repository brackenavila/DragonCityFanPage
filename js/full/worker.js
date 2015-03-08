importScripts('http://localhost/DC/js/full/dr.js')
fn={
  init:function(l){fn.Δ=Δ
    var n=l[0],d=l[1],i=0
    n=fn.dCode(n).split(' ')//ok, let's finish array; 'a b c' to ['a','b','c']
    d=fn.dCode(d,'+').split('+')//I'd tried to let splitter know with \n but that didn't work so, I've used + instead
    !n[n.length-1]&&(n.pop()) //retire last position cause that's empty
    !d[d.length-1]&&(d.pop())
    x=setInterval(
      function(){
        postMessage({id:Number(i),n:n[i],d:d[i]})
        !n[Number(++i)]&&(console.log('it\'s been finished very well: '+i),clearInterval(x))},0)},
  dCode:function(a,b){//array,fn.Δ=difference between two things
    /*'Xmas_Elf2'
    'Xmas_Elf | |'
    'Frankie Halloween6Quartz Dark_Elf2Xmas_Elf2'
    'Frankie Halloween | | | | | | Quartz Dark_Elf | | Xmas_Elf | | '*/
    for(I in fn.Δ)a=a.replace(new RegExp(fn.Δ[I],'g'),fn.l(fn.Δ[I],b))
    return a},
  l:function(x,b){//times,σ=string,ι=iteration,l=length
    b=b||' '
    for(ι=σ='';ι<x;ι++)σ+=b+'0'
    return σ+b}}
fn.init(list)
/*
example decoding string
  ①⑨④②⑦⑥
  music.rdx.fm/album.php?id=4259
  frurap.ru/18756-niro-reeducation.html*/
