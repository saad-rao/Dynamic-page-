function popup(){
    let popup = document.getElementById('btn1');
     let click =alert("your order is placed")
popup.innerHTML=click

}



document.addEventListener('DOMContentLoaded', function() {

    // all our images in an array

    const images = [
        './images/fgf.png',
        './images/second-image.png',
        './images/third-image.png'
    ];

   
    const buttons = document.querySelectorAll('button[data-index]');
    const imageElement = document.getElementById('sliderImage');

    let currentIndex = 0;


    function updateImage(newIndex) {


        // Update the image source
        imageElement.src = images[newIndex];

        
        buttons.forEach(btn => {
            btn.classList.remove('bg-yellow-400');
            btn.classList.add('bg-gray-300');
        });

        // Add yellow background to the active button
        buttons[newIndex].classList.remove('bg-gray-300');
        buttons[newIndex].classList.add('bg-yellow-400');

        // Update the current index
        currentIndex = newIndex;
    }

    // Add click event listeners to all buttons
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            updateImage(index);
        });
    });
});