$(document).ready(function(){

// use enter or spacebar key to add list items
$('.txt-add').keypress(function(e){
	if(e.keyCode == 13) {
		$('.btn-add').click();
	};
});	

$('.btn-add').on('click', function(){
 //get item name using val
 var theItemValue = $('.txt-add').val();

 var res = theItemValue.split(":",2);

//http://webdesign.about.com/od/beginningtutorials/f/blfaqwhitespace.html
 var comboNameNumber = res[0] + "&nbsp;&nbsp;&nbsp;" + res[1];

 if(theItemValue!='' && res.length==2 && $.isNumeric(res[1])){
	 //prepend() method inserts new HTML into the beginning of the selected HTML element.
	 $('.padList').prepend('<li>'+
	 	'<input type="image" class="cross-out" src="img/pencil.png" alt="cross out '+theItemValue+'">'+ 
	 	'<span>'+comboNameNumber+'</span>'+
	 	'<input type="image" class="trash-can" src="img/trash.png" alt="delete '+theItemValue+'">'+
	 	'</li>');
	  
 }
 if(theItemValue!='' && res.length<2){
 	$('.padList').prepend('<li>'+
	 	'<input type="image" class="cross-out" src="img/pencil.png" alt="cross out '+theItemValue+'">'+ 
	 	'<span>'+theItemValue+'</span>'+
	 	'<input type="image" class="trash-can" src="img/trash.png" alt="delete '+theItemValue+'">'+
	 	'</li>');
 }

  //sets the textbox's text empty
  $('.txt-add').val("");
});

//Toggle cross out line on the item name
$(document).on('click', "input.cross-out", function (e) {
    e.preventDefault();
    var pencil = $(this).siblings();
    $(pencil).toggleClass('show-line');
    if($(pencil).hasClass( "show-line")){
    	$(this).attr("alt","uncross "+pencil.text());
	}else{
		$(this).attr("alt","cross out "+pencil.text());
	}
 });

//remove item name
//http://www.tutorialrepublic.com/faq/how-to-bind-onclick-event-to-dynamically-added-elements-in-jquery.php
$(document).on("click", "input.trash-can", function (e) {
    e.preventDefault();
    $(this).parent().remove();
});

$(document).on("mouseenter", "input.trash-can", function (e) {
    e.preventDefault();
	$(this).attr("src","img/trash-hover.png");
});

$(document).on("mouseleave", "input.trash-can", function (e) {
    e.preventDefault();
	$(this).attr("src","img/trash.png");
});

$(document).on("focusin", "input.trash-can", function (e) {
    e.preventDefault();
	$(this).attr("src","img/trash-hover.png");
});

$(document).on("focusout", "input.trash-can", function (e) {
    e.preventDefault();
	$(this).attr("src","img/trash.png");
});

});//end document