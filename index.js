const display=document.querySelector('#display');
const buttons=document.querySelectorAll('button');

buttons .forEach((item) => {
item.onclick=()=>{
  if(item.id=='clear' || item.id=='mrc' || item.id=='off'){
    display.innerText='';
  }
 else if(item.id=='squar' ){
 
display.innerHTML=Math.sqrt(display.innerHTML,2);
 }
 else if(item.id=='fact' ){
  var i,num,f;
  f=1;
  num=display.innerHTML;
  for(i=1; i<=num ; i++){
     f=f*i;
  }
  i=i-1;
  display.innerHTML=f;
   }
  else if(item.id=='pi'){
 display.innerHTML=' 3.14159265'

  }
  else if(item.id=='equal' && display.innerHTML !=''){

    display.innerHTML=eval(display.innerHTML);


  }
  else if(item.id=='equal' && display.innerText==''){

    display.innerText='Empty!';
    setTimeout(()=>
      (display.innerText=''),2000);
    


  }
  else{
    display.innerText+=item.id;
  }
 
}
});


