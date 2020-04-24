const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');


function selectItem(e) {
	
	removeBorder();
	removeShow();
	
	this.classList.add('tab-border');
	
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	
	tabContentItem.classList.add('show');
}


function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
	});
}


function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}


tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});


var acc = document.getElementsByClassName("accordion1");
var i;

for (i = 0; i < acc.length; i++) {

  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });

}

var acc = document.getElementsByClassName("accordion2");
var i;

for (i = 0; i < acc.length; i++) {

  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
var acc = document.getElementsByClassName("accordion3");
var i;

for (i = 0; i < acc.length; i++) {

  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}