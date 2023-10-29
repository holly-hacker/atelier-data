# Manually extracted data for Atelier Sophie

## `categories.json`

This file contains a map with all categories, including their English name. The order of this map matches the internal order of the game.

```json
    "ITEM_CATEGORY_ACCESSORY": {
        "name": "(Accessory)"
    },
```

## `ingredients.json`

This file lists the ingredients for each crafting recipe. Each ingredient can either be a category (recognized by the `ITEM_CATEGORY_` prefix) or an item (recognized by an `ITEM_` prefix that is not followed by `CATEGORY_`).

```json
  "ITEM_ACC_AMBROSIA_COROLLA": [
    {
      "ingredient": "ITEM_MIX_CRIMSON_STONE",
      "count": 1
    },
    {
      "ingredient": "ITEM_MAT_DUNKELHEIT",
      "count": 1
    },
    {
      "ingredient": "ITEM_MAT_VINES_TWINE",
      "count": 2
    },
    {
      "ingredient": "ITEM_CATEGORY_METAL",
      "count": 2
    }
  ],
```

Thanks to `a.whim` on Discord for cataloging this information.

## `item_boards.json`

This file contains cauldron layout information for in-game items that can be made with alchemy.

The file contains a map indexed by item tags as seen in the game's XML files, with object values that have the following properties:

- `colors`: a 6x6 character map representing the color of each tile, assuming a 6x6 cauldron. The characters `R`, `G`, `B`, `Y` and `W` represent the 5 elements while a space indicates a vacant tile.
- `bonus_levels`: an array with 3 elements, where each element is a 6x6 character map representing the bonus tiles for cauldrons with the trait Bonus Display 1, Bonus Display 2 and Bonus Display 3.

Example data:

```json
  "ITEM_MIX_PUNIPUNI_MISSILE": {
    "colors": [
      "YY RBB",
      "YRRRBW",
      " B BBW",
      "WBB B ",
      "WBRRRG",
      "BBR GG"
    ],
    "bonus_levels": [
      [
        "      ",
        "  1 2 ",
        "      ",
        "      ",
        " 2    ",
        "      "
      ],
      [
        " 1    ",
        "  1 2 ",
        "      ",
        "2     ",
        " 2  2 ",
        "      "
      ],
      [
        " 1 1  ",
        "  1 2 ",
        "     1",
        "2     ",
        " 21 2 ",
        "2     "
      ]
    ]
  },
```

Thanks to `a.whim` on Discord for cataloging this information.

## `shapes.json`

This file contains concrete shape information for shape tags assigned to in-game materials.

This file contains a map indexed by shape tags as seen in the `shapeType` attribute of `itemData` elements in the game's `\Saves\item\itemData.xml` file. The values of this map are arrays of 9 indices, describing which tiles in a 3x3 grid are filled in for a given item size.

For example, take the following shape definition:

```json
  "ITEM_SHAPE_TYPE_1_1": [
    0,
    1,
    3,
    4,
    5,
    2,
    6,
    7,
    8
  ],
```

Each number in this array is an index in a 3x3 grid which is indexed like so:

```
012
345
678
```

For a given size `n`, take `n` indices from this array and fill these places in the 3x3 grid. An item with shape `ITEM_SHAPE_TYPE_1_1` with size 3 would take the first 3 indices (i.e. `0`, `1` and `3`) and result in the following shape:

```
xx.
x..
...
```

The same item with a size of 5 would result in the following shape:

```
xx.
xxx
...
```

Thanks to `a.whim` on Discord for cataloging this information.
