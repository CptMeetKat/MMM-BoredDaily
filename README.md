# BoredDaily
Plugin for MagicMirror2 to display the [Bored API](https://www.boredapi.com/).

## Dependencies
  * A [MagicMirror<sup>2</sup>](https://github.com/MichMich/MagicMirror) installation

## Installation
  1. Clone this repo into your `modules` directory.
  2. Create an entry in your `config.js` file to tell this module where to display on screen.
  
 **Example:**
```
{
     module: 'BoredDaily',
     position: 'bottom_bar',
     config: {
     updateInterval: "10"
     }
},
```

## Config
| **Option** | **Description** |
| --- | --- |
| `updateInterval` | Set to desired update interval (in ms), default is `3600000` (10 hours). |
