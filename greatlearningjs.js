emailjs.init('_p7SxLW0CeDQhHUwi')
const btn = document.getElementById('button');

document.getElementById('form')
.addEventListener('submit', function(event) {
event.preventDefault();

btn.value = 'Sending...';

const serviceID = 'service_p4uith7';
const templateID = 'template_lcb67ko';

emailjs.sendForm(serviceID, templateID, this)
.then(() => {
btn.value = 'Send Email';
alert('Sent!');
}, (err) => {
btn.value = 'Send Email';
alert(JSON.stringify(err));
});
});


    document.getElementById('idaboutus').addEventListener('click',function(e){
      e.preventDefault();
      document.getElementById('aboutus-content').scrollIntoView({ behavior:'smooth'});
  });
  
  
  document.getElementById('idcontactus').addEventListener('click',function(e){
      e.preventDefault();
      document.getElementById('contact-detail').scrollIntoView({ behavior:'smooth'});
  });

 
  document.getElementById('idclients').addEventListener('click',function(e){
    e.preventDefault();
    document.getElementById('client-detail').scrollIntoView({ behavior:'smooth'});
});

document.getElementById('idgallery').addEventListener('click',function(e){
  e.preventDefault();
  document.getElementById('galleryheadid').scrollIntoView({ behavior:'smooth'});
});





const botn = document.getElementById('button1');

document.getElementById('form1')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_9fqdrgf';
   const templateID = 'template_eprqz43';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});