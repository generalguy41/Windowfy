var sites = {
    "animepahe": {
        "new": {
            "document.querySelector('iframe')": {
                "z-index": "100",
                "position": "fixed",
                "width": "100vw",
                "height": "100vh",
                "top": "0",
                "left": "0"
            },
            "document.getElementsByClassName('theatre-settings')[0]": {
                "z-index": "0"
            },
            "document.getElementsByClassName('main-header')[0]": {
                "z-index": "0"
            }
        }
    },
    "crunchyroll": {
        "new": {
            "document.querySelector('iframe')": {
                "z-index": "100",
                "position": "fixed",
                "width": "100vw",
                "height": "100vh",
                "top": "0",
                "left": "0"
            }
        }
    },
    "funimation": {
        "new": {
            "document.querySelector('iframe')": {
                "z-index": "99999",
                "position": "fixed",
                "width": "100vw",
                "height": "100vh",
                "top": "0",
                "left": "0"
            }
        }
    },
    "general": {
        "new": {
            "document.querySelector('video, iframe')": {
                "z-index": "22",
                "position": "fixed",
                "width": "100vw",
                "height": "100vh",
                "top": "0",
                "left": "0"
            }
        }
    },
    "globaltv": {
        "new": {
            "document.getElementById('corusVideo_PlayerContainer')": {
                "z-index": "10000000",
                "position": "fixed",
                "width": "100vw !important",
                "height": "100vh !important",
                "top": "0",
                "left": "0"
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
    },
    "kickstarter": {
        "new": {
            "document.querySelector('video')": {
                "z-index": "9",
                "position": "fixed",
                "width": "100vw",
                "height": "100vh",
                "top": "0",
                "left": "0"
            },
            "document.getElementsByClassName('player_controls')[0]": {
                "z-index": "10",
                "position": "fixed",
                "width": "100%",
            }
        }
    },
    "mtv.com": {
        "new": {
            "document.getElementsByClassName('player_holder')[0]": {
                "z-index": "1000",
                "position": "absolute",
                "width": "100vw",
                "height": "100vh",
                "top": "0",
                "left": "0"
            }
        }
    },
    "streamable": {
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
    },
    "vimeo": {
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
    },
    "youtube": {
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
    }
}
export { sites };