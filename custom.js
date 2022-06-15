function openMenu(){
    jQuery('.hamburger').on('click', function(){
        jQuery('body').toggleClass('menu-open');
    });
}

$( document ).ready(function() {
    openMenu();
});