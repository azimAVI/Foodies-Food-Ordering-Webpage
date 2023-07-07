//active navbar
    let nav  = document.querySelector(".navigation-wrap"); 
    //This element is typically a navigation bar or a container that needs to change its appearance when the user scrolls.
    window.onscroll = function(){ //It will be executed whenever the user scrolls on the page.
        if(document.documentElement.scrollTop > 20){
            nav.classList.add("scroll-on"); //This property gives the vertical scroll position of the page relative to the top. If the scroll position is greater than 20 pixels (indicating that the user has scrolled beyond the initial portion of the page), the code adds the CSS class "scroll-on" to the nav element using the classList.add() method. This class likely contains styles that modify the appearance of the navigation bar to indicate that the user has scrolled.
        }else{
            nav.classList.remove("scroll-on");
            //If the scroll position is less than or equal to 20 pixels (indicating that the user has scrolled back to the top of the page or hasn't scrolled much), the code removes the "scroll-on" class from the nav element using the classList.remove() method. This restores the default appearance of the navigation bar.
        }
    }
//nav side
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click", function(){ 
        //Inside the forEach loop, an event listener is added to each element in the navBar collection using the addEventListener() method. The event being listened for is a "click" event.
        navCollapse.classList.remove("show");
    })
})
//counter design
    document.addEventListener("DOMContentLoaded", () => {
        function counter(id, start, end, duration){
            let object = document.getElementById(id),
            current = start, 
            //it represents the current value of the counter and is initialized with the start value.
            range = end-start, 
            //it represents the range between the start and end values.
            increment =end > start ? 1 : -1,
            //it determines whether the counter should increase or decrease based on a comparison between end and start.
            step = Math.abs(Math.floor(duration/range)),
            //it is calculated as the absolute value of the integer division of duration by range. It determines the interval between each update of the counter.
            timer = setInterval(() =>{
                current += increment;
                object.textContent = current;
                if(current == end){ //If the current value is equal to end, the interval is cleared using clearInterval().
                    clearInterval(timer);
                }
            }, step);
        }
        counter("count1", 0, 750, 3000);
        counter("count2", 0, 950, 2500);
        counter("count3", 0, 1000, 3000);
        counter("count4", 0, 1300, 3000);
    });
