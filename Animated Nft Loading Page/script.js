// Circle text
const text = document.querySelector(".para");
let textContent = text.textContent;
let clutter = "";
let hello = textContent.split("");
hello.forEach((ch, i) => {
    clutter += `<span style="transform:rotate(${i * 10}deg)")>${ch}</span>`
    console.log(ch);
});
text.innerHTML = clutter;






    // Function to start the counter
    function startCounter(element, limit, duration) {
        let counter = 0;
        // Calculate increment step and interval based on duration
        const step = Math.ceil(limit / (duration / 50)); // Smaller steps for smoother animation
        const intervalTime = 50; // Interval time in milliseconds
    
        // Function to update the counter
        function updateCounter() {
            if (counter < limit) {
                counter += step;
                if (counter > limit) counter = limit; // Ensure the counter does not exceed the limit
                element.textContent = `${Math.floor(counter / 1000)}K`; // Display the value with 'K' and no decimals
            } else {
                clearInterval(intervalId); // Stop the interval when the limit is reached
            }
        }
    
        // Start updating the counter
        const intervalId = setInterval(updateCounter, intervalTime); // Update every 50 milliseconds
    }
    
    // Function to parse text content and extract the numeric limit
    function parseLimit(text) {
        const numberPart = text.replace(/[^\d]/g, ''); 
        return parseInt(numberPart, 10) * 1000; // Convert to integer and multiply by 1000
    }
    
    // Function to calculate the duration based on the limit
    function calculateDuration(limit) {
        const maxLimit = 500000; // Set a maximum limit for duration calculation
        const maxDuration = 12000; // Set maximum duration in milliseconds *** ye line duration control kr rhi hai***
        return Math.min(maxDuration, (limit / maxLimit) * maxDuration); // Calculate duration
    }
    
    // Wait for 1 second before starting the counters
    setTimeout(() => {
        // Select elements by their classes
        const num1 = document.querySelector('.num1');
        const num2 = document.querySelector('.num2');
        const num3 = document.querySelector('.num3');
    
        // Start counters for each element
        if (num1) {
            const limit1 = parseLimit(num1.textContent);
            const duration1 = calculateDuration(limit1);
            startCounter(num1, limit1, duration1);
        }
        if (num2) {
            const limit2 = parseLimit(num2.textContent);
            const duration2 = calculateDuration(limit2);
            startCounter(num2, limit2, duration2);
        }
        if (num3) {
            const limit3 = parseLimit(num3.textContent);
            const duration3 = calculateDuration(limit3);
            startCounter(num3, limit3, duration3);
        }
    }, 3100); // 3.1 seconds k bad







// Navbar Children Ani,ation using Gsap
var tl = gsap.timeline();
tl.from(".navbar ul , #logo , .contactBtn" , {
    duration:1,
    opacity:0,
    y:50,
    stagger:0.4,
},"tl1");


tl.from('.left h1' , {
    x:-200,
    skewX:65,
    opacity:0,
    duration:1,
    stagger:0.4,
});

tl.from('.btn' ,{
    duration:1,
    opacity:0,
    y:50,
    stagger:0.4,
},"tl1")



// Widget Animation
tl.from('.widget' , {
    // autoAlpha:0,
    opacity : 0,
    stagger : 0.1,
});


// Circle text animation
// tl.fromTo('.circleText' ,{
//     opacity:0,
//     scale:0,
//     rotation:400
// }, {
//     duration:1,
//     opacity:1,
//     scale:1, rotation:0
// });
// Same thing but for beginners


tl.from(".circleText" , {
    scale:0,
    opacity:0,
    rotation:400,
    duration:1,
});



