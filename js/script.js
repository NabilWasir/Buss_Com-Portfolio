const btn=document.querySelector('.menu-btn'),list=document.querySelector('.nav ul');
if(btn){btn.addEventListener('click',()=>{const o=list.classList.toggle('open');btn.setAttribute('aria-expanded',o)})}
const form=document.getElementById('contact-form');
if(form){form.addEventListener('submit',e=>{
 e.preventDefault();
 const n=form.name.value.trim(),m=form.email.value.trim(),t=form.message.value.trim(),s=document.getElementById('status');
 if(!n||!m||!t){s.textContent='Fill in your name, email and message.';return}
 const body=encodeURIComponent(t+'\n\nFrom: '+n+' ('+m+')');
 window.location.href='mailto:nabil.wasir@gmail.com?subject='+encodeURIComponent('Portfolio message from '+n)+'&body='+body;
 s.textContent='Your email app is opening. Send the message from there.';
 form.reset();
})}
