
let headerNavItems=document.getElementsByClassName('header__nav-items')
headerNavItems=Object.values(headerNavItems)
let headerNavLinks=document.getElementsByClassName('header__nav-link')
headerNavLinks=Object.values(headerNavLinks)
console.log(headerNavLinks)

headerNavLinks.forEach(function (headerNavLink){
    headerNavLink.addEventListener('mouseover',function (){
        headerNavLinks.forEach(function (item){
            item.classList.remove('active')
        })
        this.classList.add('active')
    })
})
