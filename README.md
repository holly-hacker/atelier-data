# Atelier Data

This repo contains information extracted from the Atelier series by Gust.

## Erroneous data

While some data in this repo is extracted automatically using [specialized tooling](https://github.com/holly-hacker/atelier-data-extractor), some of it is extracted by hand. If you spot any errors, please create an issue or open a pull request.

Some games may have typos or incorrect data in their game files. These errors will not be corrected. Examples include:

- Typos in tags (e.g. `ITEM_MAT_LIQUID_CURIOS` for "Curious Aqua" in Atelier Ryza 3)
- Incorrect tags (e.g. `ITEM_EFF_WITH_TIME_LIMIT_10` for "Bonus Display Level 1" in Atelier Sophie)
- Unused entries. End-users will either have to use heuristics to filter these entries out, or manually extracted data should be added which lists unused entries.

Any data that is clearly incorrectly extracted should be fixed.

## Sources

All data outside folders called `manually_extracted` is extracted using [`atelier-data-extractor`](https://github.com/holly-hacker/atelier-data-extractor).

`a.whim` on Discord provided information on Atelier Sophie's items through their [spreadsheet](https://docs.google.com/spreadsheets/d/19w4KtLtsaPf095B1VqSq8qyZFykNVD444FQfWGCC2VA). Much of this data is not found in the game's XML files and would have to be extracted from the game executable through significant reverse engineering effort.

## License

All files in this repo are released in the public domain, meaning you are free to do with them as you wish. Crediting this repository or the person who originally extracted the data is not required, but appreciated.
