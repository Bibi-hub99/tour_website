const showSidebarBtn = document.getElementById('see-mobile-menu')
const hideSidebarBtn = document.getElementById('close-mobile-menu')
const signInBtn = document.getElementById('sign-in-btn')

showSidebarBtn.addEventListener("click",showMobileMenu)
hideSidebarBtn.addEventListener("click",hideMobileMenu)
signInBtn.addEventListener("click",navigate)

function showMobileMenu(){
    document.getElementById('mobile-menu').style.width = '50%'
}

function hideMobileMenu(){
    document.getElementById('mobile-menu').style.width = '0%'
}

function navigate(){
    window.location.href = 'visit-south-africa/sign-in.html'
}