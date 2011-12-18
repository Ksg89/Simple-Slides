//Simple Slides 1.2

//Project Page: https://github.com/Ksg89/Simple-Slides

//Created by the Co Snap team (CoSnap.co.uk). 

//Craig Rood (CraigRood.com) & Sam Stefan (SamStefan.co.uk)

$(document).ready(function() {
	
	var currimage = 0;
	var images=new Array();
    
    $('li.galleryitem').each(function(index, value) {
        
		var text = $(this).html();;
    
    	images[index]=text;
		
    });
   	 
   	 
   	$("div.gallery").html(images[currimage]);


	$('.gallery').click(function() {
		
		nextimg();
		
	});	
   	 
   	$('.nextimg').click(function() {
   	
		nextimg();

	});

    $('.backimg').click(function() {

		backimg();
		
	});
	
	function backimg() {
	 	
		$newhtml = '<div class="thisframe">';
		$newhtml = $newhtml + images[currimage];
		$newhtml = $newhtml + '</div>';

  		if (currimage == 0){
   	 		currimage = (images.length-1);
   	 	}else{
   	 		currimage = currimage -1;
   	 	}

		$newhtml = $newhtml + '<div class="nextframe">';
		$newhtml = $newhtml + images[currimage];
		$newhtml = $newhtml + '</div>';
		
		$("div.gallery").html($newhtml);
		
   	 	$("div.thisframe").fadeOut(200);
	}
	
	function nextimg() {
		
		$newhtml = '<div class="thisframe">';
		$newhtml = $newhtml + images[currimage];
		$newhtml = $newhtml + '</div>';

   	 	if (currimage == (images.length -1 )){
   	 		currimage = 0;
   	 	}else{
   	 		currimage = currimage +1;
   	 	}
   	 
		$newhtml = $newhtml + '<div class="nextframe">';
		$newhtml = $newhtml + images[currimage];
		$newhtml = $newhtml + '</div>';
		
		$("div.gallery").html($newhtml);
		
   	 	$("div.thisframe").fadeOut(200);
	}
});


