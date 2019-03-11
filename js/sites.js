var sites = {};
sites.crunchyroll = {
    "new": {
        "document.getElementById('showmedia_video').childNodes[1]": {
            "z-index": "100",
            "position": "fixed",
            "width": "100vw",
            "height": "100vh",
            "top": "0",
            "left": "0"
        }
    }
};
sites.general = {
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
};
sites.masteranime = {
    "new": {
        "document.querySelector('iframe')": {
            "position": "fixed",
            "z-index": "1000",
            "width": "calc(100vw + 8px)",
            "height": "calc(100vh + 8px)"
        }
    }
};
sites.streamable = {
    "new": {
        "document.getElementById('player-controls-footer')": {
            "position": "fixed",
            "z-index": "22",
            "width": "100vw"
        },
        "document.querySelector('video')": {
            "z-index": "22",
            "position": "fixed",
            "width": "100vw",
            "height": "100vh",
            "top": "0",
            "left": "0"
        }
    }
};
sites.vimeo = {
    "new": {
        "document.getElementsByClassName('_1JjTh')[0]": {
            "z-index": "401",
            "position": "fixed",
            "width": "100vw",
            "height": "100vh",
            "top": "0",
            "left": "0"
        },
        "document.getElementsByClassName('vp-player-layout')[0]": {
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
};
sites.youtube = {
    "new": {
        "document.getElementById('masthead-container')": {
            "z-index": "0"
        },
        "document.getElementById('player-container')": {
            "position": "fixed",
            "z-index": "100",
            "bottom": "0"
        },
        "document.getElementsByClassName('ytd-player')[0]": {
            "background": "black"
        },
        "document.querySelector('video')": {
            "z-index": "22",
            "position": "fixed",
            "width": "100vw",
            "height": "100vh",
            "top": "0",
            "left": "0"
        }
    }
};
export { sites };