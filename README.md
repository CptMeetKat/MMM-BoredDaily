# MMM-BoredDaily
Magic Mirror module to display the free [Bored API](https://www.boredapi.com/).

## Dependencies
  * A [MagicMirror<sup>2</sup>](https://github.com/MichMich/MagicMirror) installation


## Examples
![name-of-you-image](https://github.com/CptMeetKat/BoredDaily/blob/main/screenshots/Recreational%20Idea%201.png)

![name-of-you-image](https://github.com/CptMeetKat/BoredDaily/blob/main/screenshots/Recreational%20Idea%202.png)



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
| `updateInterval` | Set to desired update interval (in seconds), default is `10` (10 seconds). |
