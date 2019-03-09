/* eslint-disable no-undef */
var iframe;
var resetFocus = setInterval(() => {
    // console.log(document.activeElement);
    if (document.activeElement == iframe){
        document.activeElement.blur();
    }
}, 500);

/**
 * Apply styling to videos on sites to maximize video to window size.
 * @param {object} domElements - Array of DOM queries to be evaluated and applied for each specific
 *  site/video.
 * @param {object} site - Full site object.
 */
function setStyles(domElements, site){
    for (let element of domElements){
        let docElement = eval(element);
        let styleAttribute = "";
        
        for (let key of Object.keys(site.new[element])){
            let newValue = Object.values(site.new[element])[Object.keys(site.new[element]).indexOf(key)];

            styleAttribute += key + ": " +  newValue + "; ";
        }
        docElement.setAttribute("style", styleAttribute);
    }
}

/**
 * Save the original sizes of each video.
 * @param {object} domElements - Array of DOM queries to be evaluated and applied for each specific
 *  site/video.
 * @param {object} site - Full site object.
 */
function setOriginalValues(domElements, site){
    let origSiteValues = {};
    let origDomElements = {};

    for (let element of domElements){
        let docCall = Object.keys(site.new)[Object.keys(site.new).indexOf(element)];

        for (let key of Object.keys(site.new[element])){
            let site = window.getComputedStyle(eval(element)).getPropertyValue(key);

            origSiteValues[key] = site;
        }
        origDomElements[docCall] = JSON.parse(JSON.stringify(origSiteValues));
    }
    site.original = origDomElements;
}

/**
 * Reset video to original size.
 */
function resetValues(){
    Object.keys(SITES).forEach((site, index) => {
        if (document.URL.match(site)){
            resetStyles(eval(Object.keys(Object.values(SITES)[index].original)), Object.values(SITES)[index]);
        }
    });
    resetStyles(eval(Object.keys(SITES.general.original)), SITES.general);
}

/**
 * Revert video sizing on sites to original size.
 * @param {object} domElements - Array of DOM queries to be evaluated and applied for each specific
 *  site/video.
 * @param {object} site - Full site object.
 */
function resetStyles(domElements, site){
    for (let element of domElements){
        let docElement = eval(element);
        let styleAttribute = "";

        for (let key of Object.keys(site.original[element])){
            let newValue = Object.values(site.original[element])[Object.keys(site.original[element]).indexOf(key)];
            
            styleAttribute += key + ": " +  newValue + "; ";
        }
        docElement.setAttribute("style", styleAttribute);
    }
}

/**
 * Check whether the video is already maximized or not. If so, reset to original size.
 * @param {object} domElements - Array of DOM queries to be evaluated and applied for each specific
 *  site/video.
 * @param {object} site - Full site object.
 */
function checkState(domElements, site){
    for (let element of domElements){
        let wValue, hValue;

        for (let key of Object.keys(site.new[element])){
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

undefined;