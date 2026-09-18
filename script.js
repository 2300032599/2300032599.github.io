const menu=document.querySelector('.menu-toggle');
const links=document.querySelector('.nav-links');

document.documentElement.classList.add('js');

if(menu && links){
  menu.addEventListener('click',()=>{
    const open=links.classList.toggle('open');
    menu.setAttribute('aria-expanded',String(open));
    menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');
  });

  document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{
    links.classList.remove('open');
    menu.setAttribute('aria-expanded','false');
    menu.setAttribute('aria-label','Open navigation');
  }));

  document.addEventListener('keydown',(event)=>{
    if(event.key==='Escape' && links.classList.contains('open')){
      links.classList.remove('open');
      menu.setAttribute('aria-expanded','false');
      menu.setAttribute('aria-label','Open navigation');
      menu.focus();
    }
  });
}

if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  }),{threshold:.08});

  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
}else{
  document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));
}
