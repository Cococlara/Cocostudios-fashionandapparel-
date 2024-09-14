document.addEventListener("DOMContentLoaded", function() {
    // Select all words and initialize indices
    let words = document.querySelectorAll(".word");
    if (words.length === 0) {
        console.error("No elements with class 'word' found.");
    }
    let currentWordIndex = 0;
    let maxWordIndex = words.length - 1;

    // Split each word into letters
    words.forEach((word) => {
        let letters = word.textContent.split("");
        word.textContent = "";
        letters.forEach((letter) => {
            let span = document.createElement("span");
            span.textContent = letter;
            span.className = "letter";
            word.append(span);
        });
    });

    // Function to handle text change animation
    function changeText() {
        if (words.length === 0) return; // Exit if no words

        let currentWord = words[currentWordIndex];
        let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

        // Animate current word letters out
        Array.from(currentWord.children).forEach((letter, i) => {
            setTimeout(() => {
                letter.className = "letter out";
            }, i * 80);
        });

        // Ensure next word is visible and animate letters in
        nextWord.style.opacity = "1";
        Array.from(nextWord.children).forEach((letter, i) => {
            letter.className = "letter behind";
            setTimeout(() => {
                letter.className = "letter in";
            }, 340 + i * 80);
        });

        // Update index for next word
        currentWordIndex = (currentWordIndex + 1) % words.length;
    }

    // Start animation and set interval
    changeText();
    setInterval(changeText, 3000);

    // Add event listeners to control animation
    const textElement = document.querySelector('.animated-text');
    if (textElement) {
        textElement.addEventListener('mouseover', () => {
            textElement.style.animationPlayState = 'paused';
        });
        textElement.addEventListener('mouseout', () => {
            textElement.style.animationPlayState = 'running';
        });
    }

    // Function to show content based on section clicked
    function showContent(section) {
        var contents = document.getElementsByClassName('content');
        for (var i = 0; i < contents.length; i++) {
            contents[i].style.display = 'none';
        }
        document.getElementById(section).style.display = 'block';
    }

    // Add image click event listeners
    const images = document.querySelectorAll('.gallery img');
    images.forEach(image => {
        image.addEventListener('click', () => {
            alert('Image clicked: ' + image.alt);
        });
    });
});
const links = document.querySelectorAll('.social-links a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                alert('You are being redirected to ' + link.textContent);
            });
        });

let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  // Hide all slides
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }  // Loop back to the first slide
  slides[slideIndex - 1].style.display = "block";  // Show the current slide
  setTimeout(showSlides, 3000);  // Change image every 3 seconds
}

document.getElementById("search-btn").addEventListener("click", function() {
  let slideshow = document.getElementById("slideshow-container");
  slideshow.style.display = "block";  // Show the slideshow
  startSlideshow();  // Start the slideshow
});
document.getElementById("shop-now-btn").addEventListener("click", function() {
  window.location.href = "https://yourshopurl.com";  // Replace with the actual shop URL
});

document.getElementById("back-btn").addEventListener("click", function() {
  window.location.href = "https://yourwebsiteurl.com";  // Replace with your website's homepage URL
});

function startSlideshow() {
  showSlides();  // Call showSlides to start cycling through the slides
}
document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Message sent! Thank you for contacting us.');
        this.reset();
    });