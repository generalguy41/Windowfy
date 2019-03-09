# Windowfy
![Main](assets/docs/screenshots/screenshot_1.png)

This extension is designed to allow you to view videos at full window size if you want more video real estate but don't want to go full screen. Videos will scale to the size of the window regardless of resolution/aspect ratio.

## How-to

1. Play a video on one of the confirmed sites.
2. Right-click somewhere on the page and press Windowfy from the dropdown menu.
3. That's it! To get back to the original video size, press Esc.


![Main](assets/docs/screenshots/screenshot_2.png) ![Main](assets/docs/screenshots/screenshot_3.png)
## Works with

### Browsers:
- Firefox
- Chrome/Chromium

### Sites:
- Crunchyroll
- Masterani.me
- Funimation
- Vimeo*
- YouTube

## Known Issues

- Activating the extension via the browser toolbar button while the video is already Windowfied may not allow you to return to the original video size without a page refresh.
- If viewing a video that is Windowfied, and the aspect ratio of the browser window does not match the aspect ratio of the video, you may see the page content behind the video.
- [Crunchyroll] Occasional z-indexing issues where a popup from a video preview may show up above the video. Fix is to press Esc, hover over the offending video link until the popup goes away, and Windowfy again.
- [Vimeo] If you scroll the page while the video is playing, the video will revert to it's previous size. Fix is to press Esc, and Windowfy again.
- [Vimeo] If you exit from a Windowfied video then attempt to fullscreen the video, it will stay in its small size. Refresh the page to fix.
- [Vimeo] If you Windowfy, fullscreen, then exit the fullscreen video, the controls will be smaller than the video. Fix is to press Esc and Windowfy again.
- [YouTube] Timeline doesn't stretch to full width of video when not in theater mode.
- [YouTube] Video timeline thumbnail is located in the middle of the video when not in theater mode.  

_* Vimeo went premium, so needs further testing._

## Goals

- Add more sites
- Migrate to Safari, other browsers eventually
