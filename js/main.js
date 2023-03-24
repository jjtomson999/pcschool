// const load = document.querySelector('#load');

document.addEventListener('DOMContentLoaded',()=>{


  class TextAnimation {
    constructor(el){
      this.el =document.querySelector('#load')
      this.chars =this.el.innerHTML.trim().split("");
      this.el.innerHTML=this._splitText();
      
    }
    _splitText(){
      return this.chars.reduce((acc,curr)=>{
        curr = curr.replace('','&nbsp;');
        return `${acc}<span class="char">${curr}</span>`;
      },"");
    }
  
    log(){
      console.log(this.el.innerHTML);
      console.log(this.chars)
    }

   
  }
  const ta = new TextAnimation('#load');
 
})




const courseimg = document.querySelectorAll('.main-content img');


// 
const showimage=(entries,observer)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.animate(
       {
        opacity:[0,1],
        translate:['0 200px','0px']
       },
       {
        duration:2000,
        easing:'ease',
        fill:'both'
       }
      );
      observer.unobserver(entry,target);
    }
  });
  // const keyframes ={
  //   opacity:[0,1],
  //   translate:['0 200px','0px']
  // }
  // console.log(entries[0].target);
 
}
const target = document.querySelector('#target');
const io = new IntersectionObserver(showimage);

io.observe(target);


// hoverの際に拡大アニメをまとめ
for(let i=0; i<courseimg.length; i++){
  courseimg[i].addEventListener('mouseover',function(){
    this.animate({scale:[1,1.1]},
    
    {
      duration:1000,
      delay:300,
      easing:'ease',
      fill:'backwards'
    }
    
    );
    
  })
}
