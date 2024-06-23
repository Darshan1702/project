function openModal(imageSrc) {
  var modal = document.getElementById('myModal');
  var enlargedImg = document.getElementById('enlargedImg');
  
  enlargedImg.src = imageSrc;
  modal.style.display = 'block';
}

function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}
