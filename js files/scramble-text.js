// function scrambleText(element, originalText){
//     const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     let iteration = 0;
//     const interval = setInterval(()=>{
//         element.innerText = originalText.split("").map((char, index)=>{
//             if(index < iteration) return originalText[index];
//             return letters[Math.floor(Math.random()*letters.length)];
//         }).join("");
//         if(iteration >= originalText.length) clearInterval(interval);
//         iteration += 1/3;
//     }, 50 );
// }

const textElement = document.querySelector(".home-tittle");
const originalText = textElement.getAttribute("data-text");

  // Wrap each character in a <span>
textElement.innerHTML = [...originalText].map(char => `<span>${char}</span>`).join("");

const spans = textElement.querySelectorAll("span");

spans.forEach((span, index) => {
    span.addEventListener("mouseenter", () => {
      gsap.fromTo(span, 
        { y: 0, rotationX: 0, opacity: 1 },
        { 
          y: -20,
          rotationX: 360,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out"
        }
      );
    });
  });

