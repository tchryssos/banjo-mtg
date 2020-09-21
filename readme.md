# BANJO MTG

## Description
In this outstanding app, type the name or ID of a Magic the Gathering card into the search bar to have Banjo from Banjo Kazooie read _either_ the rules text or the flavor text back to you. Banjo prioritizes rules text, and will only read flavor text if rules text doesn't exist. See 'Todo' section for more on this.

## Known Issues
* Super sketchy mobile support for audio. See [this reddit comment](https://www.reddit.com/r/magicTCG/comments/anenl1/i_made_a_website_where_banjo_from_banjo_kazooie/efssyzc_) for a list of devices and browsers users had issues with.
* Syllable detection is spotty for text printing and playback.
* Searching by name doesn't always return the most relevant card. It appears that the [API](https://magicthegathering.io/) only supports querying by name, and the list of returned cards is either in alphabetical or release year order. Right now, I'm just returning the first card from the list, but there's a better solution.
* Searching by name is also surprisingly strict in some cases. Need to try and figure out a 'fuzzy search' option.

## To Do
1. Fix API search related issues. [This python script](https://github.com/TastyBanelingz/MTG-Database) should let me download the MTG database, which will allow me to set my own search criteria, but will require I build my own BE.
1. Implement a better (or really any) syllable matching function. There's an npm plugin that does this, but right now I'm not using node. 
1. Implement other voices, and allow switching between them. Grunty, Kazooie, and Mumbo should be easy, I just need to find and process those files.
1. Fix mobile as best I can.

## Lol press
I don't have a better place to save this stuff, so it'll go here. Some people actually wrote this thing up.

[Kotaku](https://kotaku.com/listen-to-banjo-read-magic-the-gathering-cards-1832444207)

[Destructoid](https://www.destructoid.com/someone-made-a-site-where-banjo-reads-magic-card-text-to-you-and-it-s-amazingly-wholesome-541957.phtml?utm_source=dlvr.it&utm_medium=twitter)
