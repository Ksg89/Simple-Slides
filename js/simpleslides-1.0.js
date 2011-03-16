//Simple Slides 1.0


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
   	
   //
   	 
   	$('a.nextimg').click(function() {
   	
   	   	$("div.gallery").html("");
   	   	
   	   	$("div.gallery").append('<div class="thisframe">');
   	 	$("div.thisframe").append(images[currimage]);
   	 	$("div.gallery").append('</div>');

   	 	if (currimage == (images.length -1 )){
   	 		currimage = 0;
   	 	}else{
   	 		currimage = currimage +1;
   	 	}
   	 
   	 	$("div.gallery").append('<div class="nextframe">');
   	 	$("div.nextframe").append(images[currimage]);
   	 	$("div.gallery").append('</div>');
   	 	
   	 	$("div.thisframe").fadeOut(200);

	});

    $('a.backimg').click(function() {

   	 	$("div.gallery").html("");
		
   	 	$("div.gallery").append('<div class="thisframe">');
   	 	$("div.thisframe").append(images[currimage]);
   	 	$("div.gallery").append('</div>');

  		if (currimage == 0){
   	 		currimage = (images.length-1);
   	 	}else{
   	 		currimage = currimage -1;
   	 	}

		$("div.gallery").append('<div class="nextframe">');
		$("div.nextframe").append(images[currimage]);
   	 	$("div.gallery").append('</div>');
		
   	 	$("div.thisframe").fadeOut(200);
		
	});
});


