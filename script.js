function openMenu() {
    document.getElementById("menu").style.width = "250px"; 
    document.getElementById("main").style.marginLeft = "250px"; 
    document.getElementById("main").classList.add("low-opacity"); 
  }
  
  function closeMenu() {
    document.getElementById("menu").style.width = "0"; 
    document.getElementById("main").style.marginLeft = "0"; 
    document.getElementById("main").classList.remove("low-opacity"); 
  }
  
  
  
 function openModal(spot) {
  var modal = document.getElementById("modal");
  var modalImg = document.getElementById("modal-image");
  var img = spot.querySelector("img");
  
  
  modalImg.src = img.src;
  
  
  modal.style.display = "block";
}


function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); 
  
  
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  
  
  var mailtoLink = 'mailto:lykaofalsa91@gmail.com?subject=Inquiry from ' + encodeURIComponent(name) + '&body=' + encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);
  
  
  window.location.href = mailtoLink;
});