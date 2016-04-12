# You've Got Drumpfed: Chrome Extension to Make Donald Drumpf Again #

####ABOUT

**You've Got Drumpfed** is a Chrome extension that replaces instances of "Trump" with "Drumpf" -- my take on [Last Week Tonight](https://www.youtube.com/watch?v=DnpO_RTSNmQ) crew's [Drumpfinator](http://drumpfinator.com/), available for download [here](https://chrome.google.com/webstore/detail/drumpfinator/hcimhbfpiofdihhdnofbdlhjcmjopilp?hl=en).

####HOW IT WORKS

- [manifest.json](manifest.json) is a file that contains the meta data of the Chrome extension.

- [content_script.js](content_script.js) is a file that implements the logic of the Chrome extension. The idea is to walk the DOM tree of the html page and update the text node. For more, please see [here](http://stackoverflow.com/questions/5904914/javascript-regex-to-replace-text-not-in-html-attributes/5904945#5904945).

####RESOURCES

- [Getting Started: Building a Chrome Extension](https://developer.chrome.com/extensions/getstarted)
- [Regular Expression](http://regexone.com/)
- [Cloud-to-Butt](https://github.com/panicsteve/cloud-to-butt)