// Close submenu from anywhere in the page
function closeSubmenu (e) {
    let isClickInside = menu.contains (e.target);
    if (!isClickInside && menu.querySelector('.submenu-active')) {
        menu.querySelector('.submenu-active').classList;

    }

}
document.addEventListener ('click, closeSubmenu, false');