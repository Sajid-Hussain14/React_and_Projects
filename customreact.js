//STEP::::::::::::::::::::::::::::::::4444444444444444444444444::::::::::::::::::::::::::::::
function customRender(reactElement, container){
    //create an DOM element  as learned
   /* const domElement = document.createElement(reactElement.type)
    //use innerHTML to put text there
    domElement.innerHTML = reactElement.children
    //set attributes href--linking and target
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    //APPEND IT TO MAINCONTAINER
    // mainContainer.appendChild(domElement)
    container.appendChild(domElement)
>>>>THIS CODE ABOVE IS NOT A GOOD APPROACH LETS LOOP THROUGH EACH PROP
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML= reactElement.children
    for (const prop in reactElement.props) {
        // if statement used to be there it depends
      if (prop === 'children') continue;
      domElement.setAttribute(prop, reactElement.props[prop]) 
    }
    container.appendChild(domElement)

}

//STEP:::::::::::::::::::::::::2222222222222222222222222222222222222222::::::::::::::::::::::
//NEED to render this like any tag for example ;A' tag 
const reactElement = {
    //react tries to make tree of this main ELEMENT by following the below process
    type: 'a' ,//or 'div','h','p'
    props: {     //Props==properties : it is an object it can can have as many as properties we want
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click me to Visit Google'
}

//STEP:::::::::::::::::::::::::::111111111111111111111111111111111111111:::::::::::::::::
const mainContainer = document.querySelector('#root')
// now we created the element and its time to rander that inside the root which is the actual holder


//STEP::::::::::::::::::::::::::::::::::::::::33333333333333333333333333333:::::::::::::::::::::::::
customRender(reactElement, mainContainer) //it expects two agrs:1 ---> what is to be injected: the element that needs to be rendered, 
                //: 2-------> where to be injected: ofcourse in the main which is root
//BUt we do not know how this custom render will work to do this we need to design and create this method, 
//check on top function cutomRender is created.


