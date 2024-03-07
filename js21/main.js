/**
 * DOM - Document Object Model
 */

/**
 * Example 1 - Methods: getElementByID, getElementByClassName, 
 *                      getElementByTagName, querySelector, querySelectorAll
 */

//Using getElementById - view1
const view1 = document.getElementById("view1");
console.log(view1);

//Using querySelector - view2
const view2 = document.querySelector("#view2");

//CSS
view2.style.backgroundColor = "blue";
console.log(view2);
view1.style.display = "flex";
view2.style.display = "none"

//Get Elements By Class Name - view
const views = document.getElementsByClassName("view");
console.log(views);
//Query Selector All - view
const sameViews = document.querySelectorAll(".view");
console.log(sameViews);

//Query Selector All - Divs
const divs = view1.querySelectorAll("div");
console.log(divs);

//Get Elements By Tag Name - Divs
const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

//Using Query Selector All on the nth of type of even elements
const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

//Changing the background color and dimensions of all even divs.
for (let i = 0; i < evenDivs.length; i++){
    evenDivs[i].style.backgroundColor = "green";
    // evenDivs[i].style.width = "200px";
    // evenDivs[i].style.height = "200px";
};

//Change the text of a tag elements child `nav` `h1`
const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent = "Change Text";

const navBar = document.querySelector("nav");
navBar.innerHTML = '<h1>Over written</h1> <p>This should align right.</p> <p>Third P</p>';
console.log(navBar);
navBar.style.justifyContent = "space-evenly";

/**
 * Navigating the DOM Tree - Using [i] to select one of the elements
 *                           parentElement, children, childNodes, hasChildNodes
 *                           lastChild, lastElementChild, firstChild, firstChildElement
 *                           nextSibling, nextElementSibling, previousSibling, previousElementSibling
 */

console.log(evenDivs[0]); //First index of the even divs
console.log(evenDivs[0].parentElement);//Full section list
console.log(evenDivs[0].parentElement.children);//Full children list of parent
console.log(evenDivs[0].parentElement.childNodes);//Full node list of children and the nodes of each
console.log(evenDivs[0].parentElement.hasChildNodes());//Returns true, parent does have child noes.
console.log(evenDivs[0].parentElement.lastChild);//Shows last text node within the parent element
console.log(evenDivs[0].parentElement.lastElementChild);//Shows last element child within the parent element
console.log(evenDivs[0].parentElement.firstChild);//Shows first text node within the parent element
console.log(evenDivs[0].parentElement.firstElementChild);//Shows first element child within the parent element
console.log(evenDivs[0].nextSibling);//Shows the next div node
console.log(evenDivs[0].nextElementSibling);//Shows the next dev element
console.log(evenDivs[0].previousSibling);//Shows the previous div node
console.log(evenDivs[0].previousElementSibling);//shows the previous div element

view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";

while (view2.lastChild) {
    view2.lastChild.remove();
}

const createDivs = (parent, iter) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = iter;
    newDiv.style.backgroundColor = "black";
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.margin = "10px";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    parent.append(newDiv);

} 
// createDivs(view2, 10);

for(let i = 1; i <= 12; i++) {
    createDivs(view2, i);
}


