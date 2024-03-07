/**
 * JavaScript - Event Listeners
 */

// const view = document.querySelector("#view2");
// const div = view.querySelector("div");
// const h2 = div.querySelector("h2");

/**
 * Syntax: addEventListener(event, function, useCapture)
 */

//Create a function that provides and alert
// const doSomething = () => {
//     alert("Doing Something");
// }

// //Create an event listener for click, use the function, 
// h2.addEventListener("click", doSomething, false);
// //Using remove Event Listener to disable the previous statement
// h2.removeEventListener("click", doSomething, false);

// //Anonymous function with an Event Listener
// h2.addEventListener("click", (event) => {
//     //.target: To test this we can click on the element and show what the target is in the console.
//     console.log(event.target);
//     //Demonstrate that you can change text with a click.
//     event.target.textContent = "Clicked";
// });

/**
 * Ready State Change Event
 */

// //Check to see if the page is loaded completely
// document.addEventListener("readystatechange", (event) => {
//     if(event.target.readyState === "complete") {
//         console.log("readyState: complete");
//         initApp();
//     }
// });

//Becareful when you click on an element inside a div being changed. The click will cause "event bubbling" and all of the items will be changed at once.
// const initApp = () => {
//     const view = document.querySelector("#view2");
//     const div = view.querySelector("div");
//     const h2 = div.querySelector("h2");

//     view.addEventListener(
//         "click", 
//         (event) => {
//             // event.stopPropagation();//Stops Event Bubbling
//             // view.style.backgroundColor = "purple";

//             // view.classList.add("purple");//Add a class
//             // view.classList.remove("darkblue");//Remove a class

//             view.classList.toggle("purple");//Toggle classes - this will allow for changing between classes that are already declared
//             view.classList.toggle("darkblue");//Toggle classes - this will allow for changing between classees that are already declared

//     },
//     false);//Use capture - true or false

//     div.addEventListener(
//         "click",
//         (event) => {
//             // event.stopPropagation();//Stops Event Bubbling
//             // div.style.backgroundColor = "red";

//             view.classList.toggle("blue");
//             view.classList.toggle("black");
//     },
//     false);//Use capture - true or false

//     h2.addEventListener(
//         "click",
//         (event) => {
//             const myText = event.target.textContent;
//             myText === "My 2nd View"
//             ? (event.target.textContent = "Clicked")
//             : (event.target.textContent = "My 2nd view")
//             // event.stopPropagation();//Stops Event Bubbling
//             // event.target.textContent = "Clicked"; // Target the div's text content
//     },
//     false);//Use capture - true or false

//     const nav = document.querySelector("nav");
//     nav.addEventListener("mouseover", (event) => {
//         event.target.classList.add("height100");


//     });
//     nav.addEventListener("mouseout", (event) => {
//         event.target.classList.remove("height100");
//     });
// };

/**
 * Ready State Change Event
 */

//Check to see if the page is loaded completely
document.addEventListener("readystatechange", (event) => {
    if(event.target.readyState === "complete") {
        console.log("readyState: complete");
        initApp();
    }
});


const initApp = () => {
    const view3 = document.querySelector("#view3");
    const myForm = view3.querySelector("#myForm");

    myForm.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("submit event");
        
        const newDiv = document.createElement("div"); // Create a new div
        const myInput = myForm.querySelector("#myTextInput");

        newDiv.textContent = myInput.value;

        console.log(myInput.value);
        newDiv.style.backgroundColor = "grey";
        // newDiv.style.width = "100px";
        // newDiv.style.height = "100px";
        newDiv.style.margin = "10px";
        newDiv.style.display = "flex";
        newDiv.style.justifyContent = "center";
        newDiv.style.alignItems = "center";
        myForm.append(newDiv);
        
    });
};