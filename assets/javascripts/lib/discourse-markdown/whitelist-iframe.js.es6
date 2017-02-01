import {whiteListIframe} from 'pretty-text/sanitizer';

whiteListIframe(/^(https?:)?\/\/www\.freesound\.org\/embed\/sound\/iframe\/.+/i);
whiteListIframe(/^(https?:)?\/\/w\.soundcloud\.com\/player\/.+/i);
whiteListIframe(/^(https?:)?\/\/graphics8\.nytimes\.com\/.+/i);
whiteListIframe(/^(https?:)?\/\/www\.youtube\.com\/embed\/.+/i);
whiteListIframe(/^(https?:)?\/\/discordapp\.com\/.+/i);
whiteListIframe(/^(https?:)?\/\/www\.strava\.com\/.+/i);
whiteListIframe(/^(https?:)?\/\/twitframe\.com\/.+/i);
whiteListIframe(/^(https?:)?\/\/veloviewer\.com\/.+/i);
whiteListIframe(/^(https?:)?\/\/www\.facebook\.com\/plugins\/.+/i);
whiteListIframe(/^(https?:)?\/\/((\www\b)|(\player\b))\.twitch\.tv\/.+/i);
whiteListIframe(/^(https?:)?\/\/beam\.pro\/embed\/.+/i);