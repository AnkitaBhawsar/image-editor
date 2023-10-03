const fileInput = document.querySelector(".file-input"),
previewImg = document.querySelector(".preview-img img"),
chooseImgBtn = document.querySelector(".choose-img"),
controlsBtn = document.querySelector(".controls"),
textOptions = document.querySelectorAll(".text input");
const topRadio = document.getElementById('topRadio');
const bottomRadio = document.getElementById('bottomRadio');
const text = document.getElementById('output');

const loadImage = () => {
    let file = fileInput.files[0]; // getting user selected file
    if(!file) return; // return if user hasn't selected file
    previewImg.src = URL.createObjectURL(file); // passing file url as preview img src
}

topRadio.addEventListener('change', () => {
  if (topRadio.checked) {
    text.classList.remove('bottom');
    text.classList.add('top');
  }  
});
bottomRadio.addEventListener('change', () => {
  if (bottomRadio.checked) {
      text.classList.remove('top');
      text.classList.add('bottom');
  }
});

const saveImage = () => {
    console.log("save image btn clicked");
}


fileInput.addEventListener("change", loadImage);
controlsBtn.addEventListener("click", saveImage);

chooseImgBtn.addEventListener("click", () => fileInput.click());

const contentTextarea = document.getElementById('content');
const outputDiv = document.getElementById('output');

contentTextarea.addEventListener('input', updateOutput);

function updateOutput() {
  const content = contentTextarea.value;
  outputDiv.innerHTML = content;
}




