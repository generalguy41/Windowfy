/* eslint-disable no-undef */
var iframe;
var resetFocus = setInterval(() => {
    // console.log(document.activeElement);
    if (document.activeElement == iframe){
        document.activeElement.blur();
    }
}, 500);

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

                iframe = document.querySelectorAll('iframe')[0];
                resetFocus;
            }
        });
    } else {
        resetValues();
    }
}

document.onkeydown = (e) => {
    e = e || window.event;
    if (e.key == "Escape"){
        localStorage.setItem("windowfied", "false");
        clearInterval(resetFocus);
        resetValues();
    }
}

// iframe.onfocus = () => {
//     console.log(iframe);
//     document.activeElement.blur();
// }

// document.onblur = () => {
//     console.log(iframe);
//     document.activeElement.blur();
// }

undefined;