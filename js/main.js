    const circle= document.querySelector('#circle')
    const square= document.querySelector('#square')
    const triangle= document.querySelector('#triangle')
    const shapes= document.querySelectorAll('.btm')

    Array.from(shapes).forEach(element => element.addEventListener('click', pick)) 


    function pick(click){
 
       if(click.target.classList.contains('triangle1')){
        document.querySelector('#empty-triangle').classList.toggle('hidden')
        document.querySelector('#empty-square').classList.add('hidden')
        document.querySelector('#empty-circle').classList.add('hidden')
        document.querySelector('#triangle').classList.toggle('chosen')
        document.querySelector('#square').classList.remove('chosen')
        document.querySelector('#circle').classList.remove('chosen')
        console.log("Triangle Selected")
       }       

       if(click.target.classList.contains('square1')){
        document.querySelector('#empty-square').classList.toggle('hidden')        
        document.querySelector('#empty-triangle').classList.add('hidden')        
        document.querySelector('#empty-circle').classList.add('hidden')
        document.querySelector('#triangle').classList.remove('chosen')
        document.querySelector('#circle').classList.remove('chosen')
        document.querySelector('#square').classList.toggle('chosen')
        console.log('Square selected')
       }

       if(click.target.classList.contains('circle1')){
        document.querySelector('#empty-circle').classList.toggle('hidden')
        document.querySelector('#empty-square').classList.add('hidden')
        document.querySelector('#empty-triangle').classList.add('hidden')
        document.querySelector('#square').classList.remove('chosen')
        document.querySelector('#triangle').classList.remove('chosen')
        // document.querySelector('#circle').classList.add('chosen')
        document.querySelector('#circle').classList.toggle('chosen')
        console.log('Circle selected')
       }


    }

    const emptyCircle= document.querySelector('#emptyCircle')
    const emptySquare= document.querySelector('#emptySquare')
    const emptyTriangle= document.querySelector('#emptyTriangle')
    const emptyShapes= document.querySelectorAll('.top-shapes')

    Array.from(emptyShapes).forEach(element => element.addEventListener('click', match))


    function match(click){

      if (click.target.classList.contains('emptyTriangle') && document.querySelector('#triangle').classList.contains('chosen')){
         alert('Correct!')
      } else if (click.target.classList.contains('emptyTriangle') && document.querySelector('#square').classList.contains('chosen')){
         alert('Oops! Try Again!')
      } else if (click.target.classList.contains('emptyTriangle') && document.querySelector('#circle').classList.contains('chosen')){
         alert('Almost! Try again!')
      }

      if (click.target.classList.contains('emptySquare') && document.querySelector('#square').classList.contains('chosen')){
         alert('Correct!')
      } else if (click.target.classList.contains('emptySquare') && document.querySelector('#triangle').classList.contains('chosen')){
         alert('Oops! Try Again!')
      } else if (click.target.classList.contains('emptySquare') && document.querySelector('#circle').classList.contains('chosen')){
         alert('Almost! Try again!')
      }

      if (click.target.classList.contains('emptyCircle') && document.querySelector('#circle').classList.contains('chosen')){
         alert('Correct!');
         document.querySelector('#empty-circle').classList.toggle('solved')

      } else if (click.target.classList.contains('emptyCircle') && document.querySelector('#square').classList.contains('chosen')){
         alert('Oops! Try Again!')
      } else if (click.target.classList.contains('emptyCircle') && document.querySelector('#triangle').classList.contains('chosen')){
         alert('Almost! Try again!')
      }
    }







// Draggable code example 01
    // var dragItem = document.querySelector("#item");
    // var container = document.querySelector("#container");

    // var active = false;
    // var currentX;
    // var currentY;
    // var initialX;
    // var initialY;
    // var xOffset = 0;
    // var yOffset = 0;

    // container.addEventListener("touchstart", dragStart, false);
    // container.addEventListener("touchend", dragEnd, false);
    // container.addEventListener("touchmove", drag, false);

    // container.addEventListener("mousedown", dragStart, false);
    // container.addEventListener("mouseup", dragEnd, false);
    // container.addEventListener("mousemove", drag, false);

    // function dragStart(e) {
    //   if (e.type === "touchstart") {
    //     initialX = e.touches[0].clientX - xOffset;
    //     initialY = e.touches[0].clientY - yOffset;
    //   } else {
    //     initialX = e.clientX - xOffset;
    //     initialY = e.clientY - yOffset;
    //   }

    //   if (e.target === dragItem) {
    //     active = true;
    //   }
    // }

    // function dragEnd(e) {
    //   initialX = currentX;
    //   initialY = currentY;

    //   active = false;
    // }

    // function drag(e) {
    //   if (active) {
      
    //     e.preventDefault();
      
    //     if (e.type === "touchmove") {
    //       currentX = e.touches[0].clientX - initialX;
    //       currentY = e.touches[0].clientY - initialY;
    //     } else {
    //       currentX = e.clientX - initialX;
    //       currentY = e.clientY - initialY;
    //     }

    //     xOffset = currentX;
    //     yOffset = currentY;

    //     setTranslate(currentX, currentY, dragItem);
    //   }
    // }

    // function setTranslate(xPos, yPos, el) {
    //   el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    // }

       
