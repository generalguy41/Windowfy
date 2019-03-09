/* eslint-disable no-undef */
function setStyles(property, value){
    for (let elements of property){
        let docElement = eval(elements);
        let styleAttribute = "";
        for (let key of Object.keys(value.new[elements])){
            let newValue = Object.values(value.new[elements])[Object.keys(value.new[elements]).indexOf(key)];
            styleAttribute += key + ": " +  newValue + "; ";
        }
        docElement.setAttribute("style", styleAttribute);
    }
}

/**
 * .
 * @param {}  - .
 * @param {}  - .
 */
function setOriginalValues(property, value){
    let originalValues = {};
    let origProperty = {};
    for (let element of property){
        let docCall = Object.keys(value.new)[Object.keys(value.new).indexOf(element)];
        for (let key of Object.keys(value.new[element])){
            let value = window.getComputedStyle(eval(element)).getPropertyValue(key);
            originalValues[key] = value;
        }
        origProperty[docCall] = JSON.parse(JSON.stringify(originalValues));
    }
    value.original = origProperty;
}

function resetValues(){
    if (document.URL.match("youtube")){
        resetStyles(eval(Object.keys(SITES.youtube.original)), SITES.youtube);
    } else if (document.URL.match("crunchyroll")){
        resetStyles(eval(Object.keys(SITES.crunchyroll.original)), SITES.crunchyroll);
    } else if (document.URL.match("masterani")){
        resetStyles(eval(Object.keys(SITES.masteranime.original)), SITES.masteranime);
    } else if (document.URL.match("vimeo")){
        resetStyles(eval(Object.keys(SITES.vimeo.original)), SITES.vimeo);
    }
    resetStyles(eval(Object.keys(SITES.general.original)), SITES.general);
    // document.body.removeChild(bg);
    // document.body.style.overflow = "auto";
}

function resetStyles(property, value){
    for (let elements of property){
        let docElement = eval(elements);
        let styleAttribute = "";
        for (let key of Object.keys(value.original[elements])){
            let newValue = Object.values(value.original[elements])[Object.keys(value.original[elements]).indexOf(key)];
            styleAttribute += key + ": " +  newValue + "; ";
        }
        docElement.setAttribute("style", styleAttribute);
    }
}

function checkState(property, value){
    for (let element of property){
        let wValue, hValue;
        for (let key of Object.keys(value.new[element])){
            if (key === "width"){
                wValue = window.getComputedStyle(eval(element)).getPropertyValue(key);
                wValue = wValue.slice(0, wValue.length - 2);
            }
            if (key === "height"){
                hValue = window.getComputedStyle(eval(element)).getPropertyValue(key);
                hValue = hValue.slice(0, hValue.length - 2);
            }
        }
        if (Math.round(wValue) == window.innerWidth && Math.round(hValue) == window.innerHeight){
            return true;
        } else {
            return false;
        }
    }
}

if (document.URL.match("moz-extension") == null){
    if (!checkState(eval(Object.keys(SITES.general.new)), SITES.general)){
        Object.keys(SITES).forEach((site, index) => {
            if (document.URL.match(site)){
                setOriginalValues(eval(Object.keys(Object.values(SITES)[index].new)), Object.values(SITES)[index]);
                setStyles(eval(Object.keys(Object.values(SITES)[index].new)), Object.values(SITES)[index]);
            }
        });
    } else {
        resetValues();
    }
}

document.onkeydown = (e) => {
    e = e || window.event;
    if (e.key == "Escape"){
        resetValues();

        //   var state = {
        //     expanded: false
        //   }
        //   browser.storage.local.set({state});
    }
}


// var bg = document.createElement("div");
//     bg.setAttribute("id", "windowfy-overlay");

//     bg.style.position = "fixed";
//     bg.style.width = "100vw";
//     bg.style.height = "100vh";
//     bg.style.zIndex = "9";
//     bg.style.backgroundColor = "#000";

// document.body.appendChild(bg);
// document.body.style.overflow = "hidden";

// function setStyles(element, zIndex){
//     element.style.position = "fixed";
//     element.style.width = "100vw";
//     element.style.height = "100vh";
//     element.style.zIndex = zIndex;
//     element.style.top = "0";
//     element.style.left = "0";
// }

undefined;