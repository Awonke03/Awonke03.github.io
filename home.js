// themeToggle.js

var icon = document.getElementById("icon");

if(localStorage.getItem("theme") == null){
  localStorage.setItem("theme", "light");
}

let localData = localStorage.getItem("theme");

if(localData == "light"){
  icon.src = "Photos/moon.png";
  document.body.classList.remove("dark-theme");
}
else if(localData == "dark"){
  icon.src = "Photos/sun.png";
  document.body.classList.add("dark-theme");
}

icon.onclick = function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    icon.src = "Photos/sun.png";
    localStorage.setItem("theme", "dark");
  }else{
    icon.src = "Photos/moon.png";
    localStorage.setItem("theme", "light");
  }
}
function openResume() {
  // Create a modal container
  var modalContainer = document.createElement("div");
  modalContainer.className = "resume-modal";

  // Create an iframe to display the PDF
  var pdfIframe = document.createElement("iframe");
  pdfIframe.src = "C:/Users/Admin/Downloads/Dark Mode Website/Resume.pdf"; // Replace with the actual path to your PDF file
  pdfIframe.width = "100%";
  pdfIframe.height = "100%";

  // Append the iframe to the modal container
  modalContainer.appendChild(pdfIframe);

  // Append the modal container to the body
  document.body.appendChild(modalContainer);

  // Function to close the modal
  function closeResume() {
    document.body.removeChild(modalContainer);
  }

  // Close the modal when clicking outside the iframe
  modalContainer.onclick = closeResume;
  
  // Prevent clicks inside the modal from closing it
  pdfIframe.onclick = function(event) {
    event.stopPropagation();
  };
}
