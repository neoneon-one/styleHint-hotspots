let timeLine = gsap.timeline({ repeat: -1 });

timeLine.to(".dotOuter", {
	duration: 2,
	scale: 3,
	transformOrigin: "50% 50%",
	opacity: 0,
	ease: "power1.out"
});

$(function () {

	$(".splash").click(function () {
		$(".splash").hide()
	});

	$(".dotInner").click(function() {
		$(".hotInfo").removeClass("hotVisi");
		$(this)
			.siblings(".hotInfo")
			.addClass("hotVisi");
	});

	$(".hotSpotter").click(function() {
		$(".hotInfo").removeClass("hotVisi");
	});

	$(".hotClose").click(function() {
		$(".hotInfo").removeClass("hotVisi");
	});
});
