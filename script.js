function toggleMenu (){
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    // add or remove the open class
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}