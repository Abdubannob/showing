// var elmnt = document.getElementById("sidenav");
// document.getElementById("main").style.paddingLeft = elmnt.offsetWidth + "px";

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

$(document).ready(function() {
    $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
    $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
    $('#list').click(function(event){event.preventDefault();$('#view-sort .inline').addClass('active');$('#view-sort .grid').removeClass('active');});
    $('#grid').click(function(event){event.preventDefault();$('#view-sort .inline').removeClass('active');$('#view-sort .grid').addClass('active');});
});

/*****sidebar menu list*****/
function openSidebar() {
  document.getElementById("mySidebar").style.height = "100%";
}

function closeSidebar() {
  document.getElementById("mySidebar").style.height = "0%";
}
/*********************/

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

/***********************/
