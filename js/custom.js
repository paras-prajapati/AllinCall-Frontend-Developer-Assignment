$(document).ready(function() {
	$('.chat_icon').click(function() {
		$('.chat_box').toggleClass('active');
		var items = document.getElementsByClassName("fade-item");
for (let i = 0; i < items.length; ++i) {
fadeIn(items[i], i * 1000)
}
function fadeIn (item, delay) {
setTimeout(() => {
item.classList.add('fadein')
}, delay)
}
	});
   
	$('.my-conv-form-wrapper').convform({selectInputStyle: 'disable'})
});







