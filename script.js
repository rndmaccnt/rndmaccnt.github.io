document.addEventListener('DOMContentLoaded', function () {
    const submitBtn = document.getElementById('submit-btn');
  
    submitBtn.addEventListener('click', () => {
      const herResponse = document.getElementById('her-response').value.trim().toLowerCase();
  
      if (herResponse === 'yes') {
        alert("Yay! I'm overjoyed that you said yes! Happy Valentine's Day, my love ❤️");
      } else {
        alert("Hmm... I think you misunderstood. Let me rephrase: Will you be my Valentine? (Please say 'yes' 😊)");
      }
    });
  });
  
  
  