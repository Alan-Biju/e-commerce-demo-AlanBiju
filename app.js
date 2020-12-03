const menu = document.querySelector('.menu');
const sidebar = document.querySelector('.side-bar');
const closebtn=document.querySelector('.close');
const blurs=document.querySelector('.blur');
const div = document.querySelector('div');
const sidebar_rigth=document.querySelector('.side-bar_right');
const left_menu=document.querySelector('.left');
const close_right=document.querySelector('.close1');
const home=document.querySelector('.item1');
const shop=document.querySelector('.item2');
const page=document.querySelector('.item3');

const body = document.querySelector('body');
const home_list=document.querySelector('.home_list');
const shop_list=document.querySelector('.shop_list');
const page_list=document.querySelector('.pages');




/*-------------------------------------------------*/


menu.addEventListener('click',()=>{
 
    sidebar.style.transform='translateX(0vw)';
    blurs.style.filter = 'blur(5px)'

});

closebtn.addEventListener('click',()=>{
   
        sidebar.style.transform='translateX(-290px)';
    blurs.style.filter = 'blur(0px)';
   
 
    
});


left_menu.addEventListener('click',()=>{
    sidebar_rigth.style.transform='translateY(0vw)';
    blurs.style.filter = 'blur(5px)';
  

});

close_right.addEventListener('click',()=>{
   
    sidebar_rigth.style.transform='translateY(-210vh)';
    
blurs.style.filter = 'blur(0px)';



});
/*-----------------------------------------------*/
home.addEventListener('mousemove',()=>{
    shop_list.style.zIndex='0';    
home_list.style.opacity = '1';
home_list.style.zIndex='5';
page_list.style.zIndex='0';
shop_list.style.opacity = '0';
page_list.style.opacity = '0';
});

home_list.addEventListener('mouseup',()=>{
    home_list.style.opacity = '0';
 });

home_list.addEventListener('mouseleave',()=>{
        home_list.style.opacity = '0';
});
home.addEventListener('click',()=>{
    home_list.style.opacity = '0';
   
    });

body.addEventListener('mouseenter',(e)=>{
   if(e.target.className!='item1'){
    home_list.style.opacity = '0';

   }
});
    
/*------------------------------------------------------------*/



shop.addEventListener('mouseenter',()=>{
    shop_list.style.opacity = '1';
    shop_list.style.zIndex='5';
    home_list.style.zIndex='0';
    page_list.style.zIndex='0';
    home_list.style.opacity = '0';
    page_list.style.opacity = '0';
    });
    
    shop_list.addEventListener('mouseup',()=>{
        shop_list.style.opacity = '0';
       
     });
    
    shop_list.addEventListener('mouseleave',()=>{
            shop_list.style.opacity = '0';
           
    });
    shop.addEventListener('click',()=>{
        shop_list.style.opacity = '0';
       
        });
        body.addEventListener('mouseenter',(e)=>{
            if(e.target.className!='item2'){
             shop_list.style.opacity = '0';
          }
         });

/*--------------------------------------------------------------------*/
page.addEventListener('mousemove',()=>{
    page_list.style.opacity = '1';
    home_list.style.zIndex='0';
    shop_list.style.zIndex='0';
    page_list.style.zIndex='5';
    shop_list.style.opacity = '0';
    home_list.style.opacity = '0';

    
    
    });
    
    page_list.addEventListener('mouseup',()=>{
        page_list.style.opacity = '0';
       
     });
    
    page_list.addEventListener('mouseleave',()=>{
            page_list.style.opacity = '0';
           
    });
    page.addEventListener('click',()=>{
        page_list.style.opacity = '0';
       
        });
        page.addEventListener('mouseenter',(e)=>{
            if(e.target.className!='item3'){
             page_list.style.opacity = '0';
          }
         });


 /*------------------------------------------------------------*/        