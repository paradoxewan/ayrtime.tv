



// Super Wheel Script
jQuery(document).ready(function($){
	
	
	
	
	$('.wheel-standard').superWheel({
		slices: [
		{
			text: "Win",
			value: 1,
			message: "win value one",
			discount: "95Qm9tof",
			background: "#3698c2",
			
		},
		{
			text: "Loose",
			value: 0,
			message: "You have No luck today",
			discount: "no",
			background: "#Dfeef5",
			
		},
		{
			text: "Win",
			value: 2,
			message: "win value two",
			discount: "95Qm9tof",
			background: "#3698c2",
			
		},
		{
			text: "Spin To Win",
			value: 3,
			message: "win value three",
			discount: "95Qm9tof",
			background: "#Dfeef5",
			
		},
		{
			text: "Win",
			value: 4,
			message: "win value four",
			discount: "95Qm9tof",
			background: "#3698c2",
			
		},
			{
			text: "Loose",
			value: 0,
			message: "You have No luck today",
			discount: "no",
			background: "#Dfeef5",
			
		},
		{
			text: "Win",
			value: 5,
			message: "win value five",
			discount: "95Qm9tof",
			background: "#Dfeef5",
			
		},
				{
			text: "Loose",
			value: 0,
			message: "You have No luck today",
			discount: "no",
			background: "#Dfeef5",
			
		},
		{
			text: "Win",
			value: 6,
			message: "win value six",
			discount: "95Qm9tof",
			background: "#3698c2",
			
		},
		{
			text: "Spin To Win",
			value: 3,
			message: "win value three",
			discount: "95Qm9tof",
			background: "#Dfeef5",
			
		},
		{
			text: "Win",
			value: 7,
			message: "win value seven",
			discount: "95Qm9tof",
			background: "#3698c2",
			
		},
				{
			text: "Loose",
			value: 0,
			message: "You have No luck today",
			discount: "no",
			background: "#Dfeef5",
			
		}
		
	],
	
	width: 800,
	frame: 1,
	text: {
		color: "#ccc",
		size: 30,
		offset: 8,
		arc: false
	},
	line: {
		width: 1,
		color: "#FFFFFF"
	},
	outer: {
		width: 2,
		color: "#FFFFFF"
	},
	inner: {
		width: 4,
		color: "#FFFFFF"
	},
	marker: {
		background: "#00BCD4",
		animate: 1
	},
	
	center: {
		rotate: true,
				background:  "#3698c2",
		image: {
			url: "https://ayrtime.tv/wheel/middle.png",
			width: 20
		
		}
	},
	
	selector: "value",
	
	
	
	});
	
	
	
	var tick = new Audio('media/tick.mp3');
	
	$(document).on('click','.wheel-standard-spin-button',function(e){
		
		$('.wheel-standard').superWheel('start','value',Math.floor(Math.random() * 2));
		$(this).prop('disabled',true);
	});
	
	
	$('.wheel-standard').superWheel('onStart',function(results){
		
		
		$('.wheel-standard-spin-button').text('Spinning...');
		
	});
	$('.wheel-standard').superWheel('onStep',function(results){
		
		if (typeof tick.currentTime !== 'undefined')
			tick.currentTime = 0;
        
		tick.play();
		
	});
	
	
	$('.wheel-standard').superWheel('onComplete',function(results){
		//console.log(results.value);
		if(results.value === 1){
			
			swal({
				type: 'success',
				title: "Congratulations!", 
				html: results.message+' <br><br><b>Discount : [ '+ results.discount+ ' ]</b>'
			});
			
		}else{
			swal("Oops!", results.message, "error");
		}
		
		
		$('.wheel-standard-spin-button:disabled').prop('disabled',false).text('Spin');
		
	});
	
	
	
	
	
});