function showPic(whichpic) {
    var source = whichpic.getAttribute("href");
    var placehold = document.getElementById("placeholder");
    placehold.setAttribute("src",source);
    var text = whichpic.getAttribute("title");
    var description=document.getElementById("description");
    description.firstChild.nodeValue=text;
}