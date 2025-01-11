document.getElementById('idaboutus').addEventListener('click',function(e){
    e.preventDefault();
    document.getElementById('aboutus-content').scrollIntoView({ behavior:'smooth'});
});


document.getElementById('idcontactus').addEventListener('click',function(e){
    e.preventDefault();
    document.getElementById('contact-detail').scrollIntoView({ behavior:'smooth'});
});