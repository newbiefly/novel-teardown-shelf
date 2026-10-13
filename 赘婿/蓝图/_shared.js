/* 《赘婿》浏览页 · 蓝图详情页 共享交互脚本 */
(function(){
  // 折叠卡片：点击有 .exp 子元素的 .card 切换
  document.addEventListener('click',function(e){
    var c=e.target.closest('.card');
    if(c&&c.querySelector('.exp')){c.classList.toggle('open');
      var ex=c.querySelector('.exp');
      if(c.classList.contains('open')){ex.style.maxHeight=(ex.scrollHeight+40)+'px';}
      else{ex.style.maxHeight='0';}
    }
    var t=e.target.closest('[data-exp]');
    if(t){var el=document.getElementById(t.getAttribute('data-exp'));
      if(el){el.classList.toggle('open');
        if(el.classList.contains('open'))el.style.maxHeight=(el.scrollHeight+60)+'px';
        else el.style.maxHeight='0';}}
  });
  // 通用 tooltip
  var tip=null;
  function ensureTip(){if(!tip){tip=document.createElement('div');tip.className='tip';document.body.appendChild(tip);}return tip;}
  document.addEventListener('mousemove',function(e){
    var el=e.target.closest('[data-tip]');
    var t=ensureTip();
    if(el){var html=el.getAttribute('data-tip')||'';
      if(html){t.innerHTML=html;t.classList.add('show');
        var x=e.clientX+16, y=e.clientY+16;
        var w=t.offsetWidth, h=t.offsetHeight;
        if(x+w>window.innerWidth-12)x=e.clientX-w-16;
        if(y+h>window.innerHeight-12)y=e.clientY-h-16;
        t.style.left=x+'px';t.style.top=y+'px';return;}
    }
    t.classList.remove('show');
  });
  document.addEventListener('mouseleave',function(){if(tip)tip.classList.remove('show');});
})();
