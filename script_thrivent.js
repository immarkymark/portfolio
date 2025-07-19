// Make dropdown proper size
var dropdown_content = document.getElementById("dropdown_content");
var dropdownLabel_width = document.getElementById("dropdownLabel").offsetWidth;

function equateDropdown() {
    dropdownLabel_width = document.getElementById("dropdownLabel").offsetWidth;
    dropdown_content.style.transition = "none";
    dropdown_content.style.width = dropdownLabel_width + "px";
}

document.getElementById('dropdownLabel').addEventListener('mouseover', equateDropdown);

// Moving before and after images
document.getElementById('after1').addEventListener('mouseover', growAfter.bind(null, "1"));
document.getElementById('after2').addEventListener('mouseover', growAfter.bind(null, "2"));
document.getElementById('after3').addEventListener('mouseover', growAfter.bind(null, "3"));
document.getElementById('after4').addEventListener('mouseover', growAfter.bind(null, "4"));
// document.getElementById('after5').addEventListener('mouseover', growAfter.bind(null, "5"));

function growAfter(num) {

    if (window.innerWidth > 537) {

        // Grow after section
        document.getElementById('after' + num).style.transition = "all .5s ease";
        document.getElementById('after' + num).style.top = "48px";
        document.getElementById('after' + num).style.rotate = "0deg";
        document.getElementById('after' + num).style.right = "0%";
        document.getElementById('after' + num).style.scale = "100%";
        document.getElementById('after' + num).style.zIndex = "2";

        setTimeout(`document.getElementById('example_set${num}').style.paddingBottom = '120px'`, 250);

        // document.getElementById('example_set1').style.paddingBottom = "120px";
        

        // Shrink before section
        document.getElementById("before" + num).style.transition = "all .5s ease";
        document.getElementById('before' + num).style.rotate = "-17deg";
        document.getElementById('before' + num).style.scale = "40%";
        document.getElementById('before' + num).style.right = "20%";
        // document.getElementById('before' + num).style.top = "0px";


        document.getElementById("text_before" + num).style.transition = "opacity .25s ease";
        document.getElementById("text_before" + num).style.opacity = "0";
        setTimeout("document.getElementById('text_before" + num + "').style.display = 'none';", 250);
        // document.getElementById('text_before1').style.display = "none";

        setTimeout("document.getElementById('text_after" + num + "').style.display = 'block';", 250);
        // document.getElementById('text_after1').style.display = "block";
        document.getElementById("text_after" + num).style.transition = "opacity .25s ease";
        setTimeout("document.getElementById('text_after" + num + "').style.opacity = '1';", 300);
        // document.getElementById("text_after1").style.opacity = "1";
    }
}

document.getElementById('before1').addEventListener('mouseover', growBefore.bind(null, "1"));
document.getElementById('before2').addEventListener('mouseover', growBefore.bind(null, "2"));
document.getElementById('before3').addEventListener('mouseover', growBefore.bind(null, "3"));
document.getElementById('before4').addEventListener('mouseover', growBefore.bind(null, "4"));
// document.getElementById('before5').addEventListener('mouseover', growBefore.bind(null, "5"));


function growBefore(num) {
    if (window.innerWidth > 537) {

        // Grows before section 
        document.getElementById('before' + num).style.rotate = "0deg";
        document.getElementById('before' + num).style.scale = "100%";
        document.getElementById('before' + num).style.right = "0%";
        // document.getElementById('before' + num).style.top = "0px";

        // Fix spacing at bottom
        setTimeout("document.getElementById('example_set" + num + "').style.paddingBottom = '0px'", 250);

        // Shrinks after section
        document.getElementById('after' + num).style.bottom = "0%";
        document.getElementById('after' + num).style.top = "0";
        document.getElementById('after' + num).style.rotate = "17deg";
        document.getElementById('after' + num).style.right = "-20%";
        document.getElementById('after' + num).style.scale = "40%";
        document.getElementById('after' + num).style.zIndex = "0";

        document.getElementById("text_after" + num).style.transition = "opacity .25s ease";
        document.getElementById("text_after" + num).style.opacity = "0";
        setTimeout("document.getElementById('text_after" + num + "').style.display = 'none';", 250);

        setTimeout("document.getElementById('text_before" + num + "').style.display = 'block';", 250);
        document.getElementById("text_before" + num).style.transition = "opacity .25s ease";
        setTimeout("document.getElementById('text_before" + num + "').style.opacity = '1';", 300);
        }
}


document.addEventListener('scroll', addShadow);

function addShadow() {
    if (window.scrollY > 0) {
        document.getElementById("nav_header").style.transition = "all .3s ease";
        document.getElementById("nav_header").style.boxShadow = "10px 0px 10px 0px rgba(0, 0, 0, .2)";
    }
    else {
        document.getElementById("nav_header").style.transition = "all .3s ease";
        document.getElementById("nav_header").style.boxShadow = "";
    }
}