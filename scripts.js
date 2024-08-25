document.addEventListener('DOMContentLoaded', function () {
  const modalWrapper = document.getElementById('formWrapper');
  const modalContent = document.querySelector('.modal-content');
  const btn = document.getElementById('downloadBtn');
  const span = document.getElementsByClassName('close')[0];
  const form = document.getElementById('contactForm');
  const downloadLink = document.getElementById('downloadLink');
  
  // When the user clicks the button, open the modal
  document.getElementById('downloadBtn').onclick = function () {
    modalWrapper.classList.add('show');
    modalContent.classList.add('show');
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modalWrapper.classList.remove('show');
    modalContent.classList.remove('show');
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target === modalWrapper) {
      modalWrapper.classList.remove('show');
      modalContent.classList.remove('show');
    }
  };

  // Form validation and submission
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const city = document.getElementById('city').value.trim();
    const country = document.getElementById('country').value.trim();
    const contactNumber = document.getElementById('contactNumber').value.trim();
    const companyName = document.getElementById('companyName').value.trim();

    if (firstName && lastName && city && country && contactNumber && companyName) {
      // Create the content for the text file
      const fileContent = `First Name: ${firstName}\nLast Name: ${lastName}\nCity: ${city}\nCountry: ${country}\nContact Number: ${contactNumber}\nCompany Name: ${companyName}`;

      // Create a Blob from the content
      const blob = new Blob([fileContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);

      // Set the href of the download link to the Blob URL
      downloadLink.href = url;
      downloadLink.style.display = 'block';

      // Hide the form and show the download button
      modalWrapper.classList.remove('show');
      modalContent.classList.remove('show');
      btn.style.display = 'block';

      // Reset the form
      form.reset();
      alert('Thank you for your submission! Click the link below to download your file.');
    } else {
      alert('Please fill in all fields correctly.');
    }
  });
});
