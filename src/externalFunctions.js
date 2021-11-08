// xpath calculator
function getXPathOfElement(elt)
{
     var path = "";
     for (; elt && elt.nodeType == 1; elt = elt.parentNode)
     {
    idx = getElementIdx(elt);
    xname = elt.tagName;
    if (idx > 1) xname += "[" + idx + "]";
    path = "/" + xname + path;
     }

     return path;   
}

function getElementIdx(elt)
{
    var count = 1;
    for (var sib = elt.previousSibling; sib ; sib = sib.previousSibling)
    {
        if(sib.nodeType == 1 && sib.tagName == elt.tagName) count++
    }

    return count;
}

// inspector element 

window.addEventListener('mouseover', function (e) {
    updateMask(e.target);
});

function updateMask(target) {
    let elements = document.getElementsByClassName("highlight-wrap")
    let hObj
    if (elements.length !== 0) {
        hObj = elements[0]
    } else {
        hObj = document.createElement("div");
        hObj.className = 'highlight-wrap';
        hObj.style.position = 'absolute';
        hObj.style.backgroundColor = '#205081';
        hObj.style.opacity = '0.5';
        hObj.style.cursor = 'default';
        hObj.style.pointerEvents = 'none';
        document.body.appendChild(hObj);
    }
    let rect = target.getBoundingClientRect();
    hObj.style.left = (rect.left + window.scrollX) + "px";
    hObj.style.top = (rect.top + window.scrollY) + "px";
    hObj.style.width = rect.width + "px";
    hObj.style.height = rect.height + "px";

}