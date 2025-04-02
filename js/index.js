const showSidebarBtn = document.getElementById('see-mobile-menu')
const hideSidebarBtn = document.getElementById('close-mobile-menu')
showSidebarBtn.addEventListener("click",showMobileMenu)
hideSidebarBtn.addEventListener("click",hideMobileMenu)

function showMobileMenu(){
    document.getElementById('mobile-menu').style.width = '50%'
}

function hideMobileMenu(){
    document.getElementById('mobile-menu').style.width = '0%'
}