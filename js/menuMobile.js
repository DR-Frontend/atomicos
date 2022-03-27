function menuMobile(panelBtn, panel, menuLink){
   const d = document
   d.addEventListener('click',(e)=>{
     if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
       d.querySelector(panel).classList.toggle('isActive')
     }
 
     if(e.target.matches(menuLink)){
       d.querySelector(panel).classList.remove('isActive')
     }
   })
 }

 menuMobile('.aside-btn','.aside','.aside-list li a')