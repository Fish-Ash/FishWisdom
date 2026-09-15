let sideBarPinned = false; 

// 固定
function addSideBarPin(){
    const sideBarPin = document.createElement("input");
    sideBarPin.type = "checkbox";
    sideBarPin.checked = sideBarPinned;

    sideBarPin.addEventListener("change", function(){
        sideBarPinned = sideBarPin.checked;
        console.log(sideBarPinned);
    });

    sideBar.appendChild(sideBarPin);
}

listTab.addEventListener("click", function(){
    // 初始化
    sideBar.innerHTML = "";
    sideBar.hidden = false;
    addSideBarPin();

    // 内容
    const sideBarTitle = document.createElement("h2");
    sideBarTitle.textContent = "作者列表";

    sideBar.appendChild(sideBarTitle);
    authors.forEach(function(author){
        const authorName = document.createElement("p");
        authorName.textContent = author;
        authorName.addEventListener("contextmenu", function(event){
            event.preventDefault();
            event.stopPropagation();
            contextMenu.hidden = true;
            authorContextMenu.hidden = false;

            authorContextMenu.style.position = "absolute";
            authorContextMenu.style.left = event.pageX + "px";
            authorContextMenu.style.top = event.pageY + "px";
        });


        const arrow = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg"
        );
        arrow.classList.add("authorArrow");
        arrow.setAttribute("viewBox", "0 0 24 24");
        const arrowLine = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "polyline"
        );
        arrowLine.setAttribute("points", "6 9 12 15 18 9");
        arrowLine.setAttribute("fill", "none");
        arrowLine.setAttribute("stroke", "black");
        arrowLine.setAttribute("stroke-width", "2");
        arrowLine.setAttribute("stroke-linecap", "round");
        arrowLine.setAttribute("stroke-linejoin", "round");
        arrow.appendChild(arrowLine);

        authorName.prepend(arrow);
        sideBar.appendChild(authorName);
    })

})

network.addEventListener("click", function(event){
    if(event.target === network && sideBarPinned === false){
        sideBar.hidden = true;
    }
});