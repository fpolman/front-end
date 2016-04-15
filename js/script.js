
jQuery(document).ready(function() {

	//active class toevoegen en verwijderen
    jQuery('.toggle-nav').click(function(e) {

    	//toggle nav wel of niet weergeven
        jQuery(this).toggleClass('active');

        //menu ul wel of niet weergeven
		jQuery('.menu ul').toggleClass('active');
 
 		// verwijdert het standaard gedrag van toggle nav
 		// omdat het een anker is zou de pagina normaal naar de top verspringen
        e.preventDefault();
    });


	$(".spot-auckland").click(function() {
		$(".auckland-info").toggle(200);
	});

});

