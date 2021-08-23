# Microscope Simulator

## How to run
In the "microscope" directory, run command 'npm start'.

## Technologies
The app is built with [React](https://reactjs.org/) (JavaScript framework) and [Greensock](https://greensock.com/) (animations library) is used to build the rotational dials.

## Components

### LensView (main page)
Manages all of the states and calculations (blur/scale values and vertical/horizontal offsets for the specimen img) needed by each of the smaller components (focus/stage dials, circular view, checklist and lenses) on lens view page 

### Dial
Creates a dial given style specifications (color, size etc.) for the dial and its pointer. Also keeps track of the current rotation on each dial and communicates this with LensView

### Dials 
Styles/positions all of the dial components on lens view page

### Checklist
Contains "preperation checklist", tips section and specimen selection (temporarily on lens view page but intented for microscope view page). Keeps track of the chosen/active specimen slide and communicates this with LensView

### ViewCircle
Contains the specimen img and the circular view. Communicates with LensView to get the blurring, scaling and offset values then applies them directly to the img

### Lenses
Keeps track of the current magnification/scale of the img (4x, 10x or 40x) and shares the active lens with LensView


