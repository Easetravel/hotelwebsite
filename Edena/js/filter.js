var fActive;

function filterColor(room){
  if(fActive != room){
    $('.idxpres-grids').filter('.'+room).slideDown();
    $('.idxpres-grids').filter(':not(.'+room+')').slideUp();
    fActive = room;
		// $('button').removeClass("is-active");
  }
}

// $('.f-urban').click(function(){ filterColor('edena-urban'); $(this).addClass("is-active"); });
// $('.f-park').click(function(){ filterColor('edena-park'); $(this).addClass("is-active"); });
// $('.f-collection').click(function(){ filterColor('edena-collection'); $(this).addClass("is-active"); });

// $('#myOptions').change(function(){
// 	var val = $("#myOptions option:selected").text();
// 	filterColor(val); $(this).addClass("is-active"); });

$('#options').change(function() {
    var val = $("#options option:selected").val();
    filterColor(val); 
    $(this).addClass("is-active");
});