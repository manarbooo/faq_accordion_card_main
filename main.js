document.addEventListener("DOMContentLoaded", () => {
    const arrowBtns = document.querySelectorAll('.arrowIcon');
    const answers = document.querySelectorAll('.answer');
    const questions = document.querySelectorAll('.question');
    const defaultIndex = 1; 
  
    
    const showDefaultAnswer = (index) => {
      answers[index].style.display = "block";
      questions[index].style.fontWeight = "bold";
      arrowBtns[index].style.transform = "rotate(180deg)"; 
    };
  
    showDefaultAnswer(defaultIndex); 
  
    arrowBtns.forEach((arrowBtn, index) => {
      arrowBtn.addEventListener("click", () => {
        
        answers.forEach((answer, ansIndex) => {
          if (ansIndex !== index) {
            answer.style.display = "none";
            questions[ansIndex].style.fontWeight = "normal";
            arrowBtns[ansIndex].style.transform = "rotate(0deg)"; // Reset arrow icon
          }
        });
  
        if (answers[index].style.display === "block") {
          answers[index].style.display = "none";
          questions[index].style.fontWeight = "normal";
          arrowBtn.style.transform = "rotate(0deg)"; 
        } else {
          answers[index].style.display = "block";
          questions[index].style.fontWeight = "bold";
          arrowBtn.style.transform = "rotate(180deg)"; 
        }
      });
    });
  });
  

