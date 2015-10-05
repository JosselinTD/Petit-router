$(function(){
	function makeAMove(){
		var current = window.location.hash.substr(1) || "home";
		
		$("body").removeClass();
		$("body").addClass(current);
	}
	
	$("[data-go]").click(function(){
		var destination = $(this).data("go");
		if(window.location.hash.indexOf(destination) !== -1){
			return;
		}
		history.pushState({}, "", "#"+destination);
		
		makeAMove();
	});
	
	window.onpopstate = makeAMove;
	
	makeAMove();
});