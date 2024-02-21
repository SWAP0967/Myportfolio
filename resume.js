let page1=document.querySelector("#mainpage")
if (page1) {
let subtitle = document.querySelector(".subtitle");
        const text = "FRONT-END-DEVELOPER";
        let index = 0;

        const typeWriter = () => {
            subtitle.innerText = text.slice(0, index);
            index++;
            if (index > text.length) {
                index = 0; 
            }
            setTimeout(typeWriter, 150);
        };

        typeWriter();
      
const maincard = document.querySelector('.maincard');
    maincard.style.transition = 'transform 1s ease';
    maincard.style.transform = 'translateX(-100%) translateY(0)';
      setTimeout(function () {
        maincard.classList.add('show');
        maincard.style.transform = 'translateX(0) translateY(0)';
    }, 500);
  };
    function shareToInstagram(){
      {
        var url = "https://www.example.com";
    window.open("https://www.instagram.com/share?url=" + encodeURIComponent(url), "_blank"); 
    }
  }

    function shareToFacebook() {
      var url = "https://www.example.com";
      window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url), "_blank");
    }
  
let page2=document.querySelector("#skillpage")

if (page2) {
const progressBars = document.querySelectorAll(".progressbar");

progressBars.forEach((progressBar, index) => {
  const width = progressBar.querySelector("span").getAttribute("data-width");

  setTimeout(() => {
    progressBar.style.width = width;
  }, 100 * index);
});
}

let page3=document.querySelector("#contactpage")
if(page3){
  const contactcard = document.querySelector(".contactcard");

  setTimeout(function() {
         contactcard.style.top = "50%"; 
    }, 500);

const fname = document.getElementById("fname");
const email = document.getElementById("email");
const tel = document.getElementById("tel");
const textarea = document.querySelector(".textarea");
const btn = document.querySelector(".btn");
const fnameerr = document.querySelector("#fnameerr");
const emailerr = document.querySelector("#emailerr");
const telerr = document.querySelector("#telerr");
const textareaerr = document.getElementById("textareaerr");
const numerr = document.querySelector("#numerr");
const emailevalid = document.querySelector("#emailevalid");
const fnamevalid = document.querySelector("#fnamevalid");
const generalerr=document.querySelector("#generalerr");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegex = /[a-zA-Z]/;

const validation = function (e) {
  e.preventDefault();

  let hasErrors = false;

  if (fname.value === "") {
    fnameerr.style.display = "block";
    fnamevalid.style.display = "none";
    fname.style.borderColor = "red";
    hasErrors = true;
  } else if (!nameRegex.test(fname.value)) {
    fnamevalid.style.display = "block";
    fnameerr.style.display = "none";
    fname.style.borderColor = "";
    hasErrors = true;
  } else {
    fnameerr.style.display = "none";
    fnamevalid.style.display = "none";
    fname.style.borderColor = "";
   }

  if (email.value === "") {
    emailerr.style.display = "block";
    emailevalid.style.display = "none";
    email.style.borderColor = "red";
    hasErrors = true;
  } else if (!emailRegex.test(email.value)) {
    emailevalid.style.display = "block";
    emailerr.style.display = "none";
    email.style.borderColor = "";
    hasErrors = true;
  } else {
    emailerr.style.display = "none";
    emailevalid.style.display = "none";
    email.style.borderColor = "";
  }

  if (tel.value === "") {
    telerr.style.display = "block";
    numerr.style.display = "none";
    tel.style.borderColor = "red";
    hasErrors = true;
  } else if (tel.value.length !== 10) {
    numerr.style.display = "block";
    telerr.style.display = "none";
    tel.style.borderColor = "";
    hasErrors = true;
  } else {
    telerr.style.display = "none";
    numerr.style.display = "none";
    tel.style.borderColor = "";
  }

  if (textarea.value === "") {
    textareaerr.style.display = "block";
    textarea.style.borderColor = "red";
    hasErrors = true;
  } else {
    textareaerr.style.display = "none";
    textarea.style.borderColor = "";
  }
  if (hasErrors) {
    generalerr.style.display = "block";
    return false;
  }else{
  generalerr.style.display = "none";

  storeData();
  e.target.reset();

  const message=document.querySelector("#Message")
  message.style.display = "block";

  return false; 

  }

};
const storeData = function () {
  var name = fname.value;
  var userEmail = email.value;
  var phone = tel.value;
  var message = textarea.value;

  var formData = {
    name: name,
    email: userEmail,
    phone: phone,
    message: message
  };

  var jsonData = JSON.stringify(formData);

  localStorage.setItem('formData', jsonData);

  var retrievedData = localStorage.getItem('formData');
  console.log('Retrieved Data:', JSON.parse(retrievedData));
  console.log('Stored Data:', formData);
};

const handleEnterKey = function (e) {
  if (e.key === "Enter") {
    validation(e);
  }
};
const form = document.querySelector('form');

form.onsubmit = function (e) {
  return validation(e);
};

fname.addEventListener("input", validation);
email.addEventListener("input", validation);
tel.addEventListener("input", validation);
textarea.addEventListener("input", validation);
btn.addEventListener("input", validation);

fname.addEventListener("keypress", handleEnterKey);
email.addEventListener("keypress", handleEnterKey);
tel.addEventListener("keypress", handleEnterKey);
textarea.addEventListener("keypress", handleEnterKey);
}
    function sharePortfolio() {
      if (navigator.share) {
          navigator.share({
              title: 'My Portfolio',
              text: 'Check out my portfolio!',
              url: 'https://swapnaportfolio.netlify.app'
          })
              .then(() => console.log('Successfully shared'))
              .catch((error) => console.error('Error sharing:', error));
      } else {
          alert('Sharing is not supported in this browser. You can manually share the link.');
      }
  }
  function downloadResume() {
    const resumeUrl = "../asserts/swapnapotakari.pdf";
    
    const downloadLink = document.createElement("a");
    downloadLink.href = resumeUrl;
    downloadLink.download = "swapnapotakari.pdf"; 
    
    document.body.appendChild(downloadLink);
    
    downloadLink.click();
    
    document.body.removeChild(downloadLink);
  }
  function gmail(){
    window.location.href = "mailto:swapnamanikanta24@gmail.com";
  }