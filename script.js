document.getElementById('previewBtn').addEventListener('click', function(){
  const input = document.getElementById('imgUpload');
  const img = document.getElementById('posterImg');

  if(!input.files || !input.files[0]){
    alert('No image selected — using placeholder.');
    return;
  }

  const url = URL.createObjectURL(input.files[0]);
  img.src = url;

  document.querySelectorAll('.posters-grid img').forEach(el => el.src = url);
});
