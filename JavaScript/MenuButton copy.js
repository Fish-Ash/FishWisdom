

/* ---菜单按钮--- */
const menu = document.querySelector(".menu");
const menuButton = document.querySelector(".menu-button");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button")

/* 菜单按钮参数 - 半径 右距离 左距离*/
const initMenuPosRight = 100;
const initMenuPosBottom = 100;
const menuRadius = 70;

/* 子按钮参数 - 半径 */
const subRadius = 50;
const interval = 10;

/*
加载页面：
保证 subButton 相对于 menuButton 的位置
*/
document.addEventListener("DOMContentLoaded", function(){
    menuButton.style.width = `${menuRadius}px`;
    menuButton.style.height = `${menuRadius}px`;
    menuButton.style.right = `${initMenuPosRight}px`;
    menuButton.style.bottom = `${initMenuPosBottom}px`

    upButton.style.right = `${initMenuPosRight + (menuRadius - subRadius)/2}px`;
    upButton.style.bottom = `${initMenuPosBottom + menuRadius + interval}px`;

    downButton.style.right = `${initMenuPosRight + (menuRadius - subRadius)/2}px`;
    downButton.style.bottom = `${initMenuPosBottom - interval - subRadius}px`;
})

let offsetX = 0, offsetY = 0;
let isDragging = false;

menuButton.addEventListener("mousedown", function(event){
    if(event.button !== 0) return;

    isDragging = true;

    const rect = menuButton.getBoundingClientRect();
    offsetX = event.clientX - rect.left;
    offsetY = event.clientY - rect.top;
})

document.addEventListener("mousemove", function(event){
    if(!isDragging) return;

    menuButton.style.left = `${event.clientX - offsetX}px`;
    menuButton.style.top = `${event.clientY - offsetY}px`;

    const rect = menuButton.getBoundingClientRect();
    upButton.style.left = `${rect.left + (menuRadius - subRadius)/2}px`;
    upButton.style.top = `${rect.top - subRadius - interval}px`;

    downButton.style.left = `${rect.left + (menuRadius - subRadius)/2}px`;
    downButton.style.top = `${rect.top + menuRadius + interval}px`
})

document.addEventListener("mouseup", function(event){
    isDragging = false;
})

/* 隐藏菜单按钮 */
let showMenu = 1;
document.addEventListener("keydown", function(event){
    if(event.altKey && event.key === "m"){
        if(showMenu === 1){
            showMenu = 0;
            menuButton.style.display = "none";
            upButton.style.display = "none";
            downButton.style.display = "none";
        }
        else{
            showMenu = 1;
            menuButton.style.display = "block";
            upButton.style.display = "block";
            downButton.style.display = "block";
        }
    }
})

/* 显示子按钮 */
menuButton.addEventListener("mouseenter", function(){
    upButton.style.opacity = 1;
    downButton.style.opacity = 1;
})

upButton.addEventListener("mouseenter", function(){
    upButton.style.opacity = 1;
    downButton.style.opacity = 1;
})

downButton.addEventListener("mouseenter", function(){
    upButton.style.opacity = 1;
    downButton.style.opacity = 1;
})

/* 隐藏子按钮 */
menuButton.addEventListener("mouseleave", function(){
    upButton.style.opacity = 0;
    downButton.style.opacity = 0;
})

upButton.addEventListener("mouseleave", function(){
    upButton.style.opacity = 0;
    downButton.style.opacity = 0;
})    

downButton.addEventListener("mouseleave", function(){
    upButton.style.opacity = 0;
    downButton.style.opacity = 0;
})

/* 双击：回到小目录 */
menuButton.addEventListener("dblclick", function(){
    location.assign("Catalog.html")
})

