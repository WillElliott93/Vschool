const colors = ["red", "blue", "green"]
const addItem = document.getElementById("add")

addItem.addEventListener("click", function(e){
    const subItem = createSubItem(e);
    document.getElementById("list").appendChild(subItem);
})

function createDropDown(){ 
    const dropDown = document.createElement("select");
    for (let i = 0; i < colors.length; i++){
        const option = document.createElement("option");
        option.innerHTML = colors[i];
        option.value = colors[i];
        dropDown.append(option);
        dropDown.addEventListener("change", function(e){
            console.dir(e.target)
            e.target.parentElement.style.backgroundColor = e.target.value;
            return dropDown;
        })
    }
    return dropDown;
}

function createSubItem(e){
    const subItem = document.createElement("div");
    const subItemValue = document.getElementById("input").value;
    subItem.textContent = subItemValue;
    const dropDown = createDropDown();
    subItem.appendChild(dropDown);
    subItem.setAttribute("class", "subItem");
    return subItem;
}


