// require.config({ baseUrl: "./" })

// var test = require(['test.js'], function(test){ console.log(test)});
// console.log(test);
var video = {
    "new": {
        "document.querySelector('video')": {
            "z-index": "22",
            "position": "fixed",
            "width": "100vw",
            "height": "100vh",
            "top": "0",
            "left": "0"
        }
    }
}
var youtube = {
    "new": {
        "document.getElementById('masthead-container')": {
            "z-index": "0"
        },
        "document.getElementById('player-container')": {
            "position": "fixed",
            "z-index": "100",
            "bottom": "0"
        }
    }
}
var crunchyroll = {
    "new": {
        "document.getElementById('showmedia_video').childNodes[1]":{
            "z-index": "100",
            "position": "fixed",
            "width": "100vw",
            "height": "100vh",
            "top": "0",
            "left": "0"
        }
    }
}
var masteranime = {
    "new": {
        "document.querySelector('iframe')":{
            "position": "fixed",
            "z-index": "1000",
            "width": "calc(100vw + 8px)",
            "height": "calc(100vh + 8px)"
        }
    }
}
var vimeo = {
    "new": {
        "document.getElementsByClassName('_1JjTh')[0]":{
            "z-index": "401",
            "position": "fixed",
            "width": "100vw",
            "height": "100vh",
            "top": "0",
            "left": "0"
        },
        "document.getElementsByClassName('vp-player-layout')[0]":{
            "z-index": "1",
            "position": "fixed",
            "width": "100vw",
            "height": "100vh",
            "top": "0",
            "left": "0"
        },
        "document.querySelector('video')": {
            "z-index": "1",
            "position": "fixed",
            "width": "100vw",
            "height": "100vh",
            "top": "0",
            "left": "0"
        }
    }
}
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

function setOriginalValues(property, value){
    let originalValues = {};
    let origProperty = {};
    for (let element of property){
        let docCall = Object.keys(value.new)[Object.keys(value.new).indexOf(element)];
        // console.log(docCall);
        for (let key of Object.keys(value.new[element])){
            let value = window.getComputedStyle(eval(element)).getPropertyValue(key);
            // console.log(value)
            originalValues[key] = value;
        }
        // console.log(originalValues);
        origProperty[docCall] = JSON.parse(JSON.stringify(originalValues));
    }
    // console.log(origProperty)
    value.original = origProperty;
}

function resetValues(){
    if (document.URL.match("youtube")){
        this.resetStyles(eval(Object.keys(youtube.original)), youtube);
    } else if (document.URL.match("crunchyroll")){
        this.resetStyles(eval(Object.keys(crunchyroll.original)), crunchyroll);
    } else if (document.URL.match("masterani")){
        this.resetStyles(eval(Object.keys(masteranime.original)), masteranime);
    } else if (document.URL.match("vimeo")){
        this.resetStyles(eval(Object.keys(vimeo.original)), vimeo);
    }
    this.resetStyles(eval(Object.keys(video.original)), video);
    document.body.removeChild(bg);
    document.body.style.overflow = "auto";
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
        if (wValue == window.innerWidth && hValue == window.innerHeight){
            return true;
        } else {
            return false;
        }
    }
}

if (!!document.URL.match("youtube")){
    if (!checkState(eval(Object.keys(video.new)), video)){
        this.setOriginalValues(eval(Object.keys(video.new)), video);
        this.setStyles(eval(Object.keys(video.new)), video);
        this.setOriginalValues(eval(Object.keys(youtube.new)), youtube);
        this.setStyles(eval(Object.keys(youtube.new)), youtube);
    } else {
        resetValues();
    }
} else if (!!document.URL.match("crunchyroll")){
    this.setOriginalValues(eval(Object.keys(crunchyroll.new)), crunchyroll);
    this.setStyles(eval(Object.keys(crunchyroll.new)), crunchyroll);

} else if (!!document.URL.match("masterani")){
    this.setOriginalValues(eval(Object.keys(masteranime.new)), masteranime);
    this.setStyles(eval(Object.keys(masteranime.new)), masteranime);

} else if (!!document.URL.match("vimeo")){
    this.setOriginalValues(eval(Object.keys(vimeo.new)), vimeo);
    this.setStyles(eval(Object.keys(vimeo.new)), vimeo);

} else {
    this.setOriginalValues(eval(Object.keys(video.new)), video);
    this.setStyles(eval(Object.keys(video.new)), video);
}

document.onkeypress = function (e) {
    e = e || window.event;
    console.log(e);
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