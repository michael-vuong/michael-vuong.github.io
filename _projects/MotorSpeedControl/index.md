---
layout: post
title: Motor Speed Control
description: This project involved the simulation, design, and physical implementation of a system capable of transporting a 1-foot-long vertical prismatic bar across a variable horizontal distance (5–10 ft) and back, without toppling. The system needed to complete the motion in the shortest possible time, while maintaining the bar’s dynamic stability through effective motor speed control. The assignment combined computational simulation (individual) and physical prototyping (team-based competition), applying principles of multibody dynamics, control systems, and mechanical design.

skills: 
- Solidworks
- Motion Analysis
- Laser Cutting
- Arduino
main-image: /IMG_8598.png
---

## Conditions
The first objective before building our car was to find out the maximum linear acceleration the vertical bar can experience before it starts to tip over. Using free body diagrams we found that the max acceleration for the 1 foot tall beam was g/12. Another condition that helped validate our calculations was the reaction force the front edge of the beam would have at the start and just before tipping over. We found that the reaction force should be half the weight at rest, and just above 0 before it would want to tip.

### Maximum Linear Acceleration Calculations
{% include image-gallery.html images="MaxAccel.png" height="400" %}
Maximum Acceleration is g/12


## Car Design
I decided to come up with a simple design of a car with a large platform base that would be able to hold the arduino, motor, motor driver, and beam on top of the car. 


### Car Solidworks Model
{% include image-gallery.html images="Screenshot 2025-10-25 171213.png, Screenshot 2025-10-25 171225.png, Screenshot 2025-10-25 171235.png, Screenshot 2025-10-25 171257.png" height="300" %}
Car Model

## Wheel Design
The radius of the wheel was also an important factor in my design. To determine the best wheel radius I used kinematic equations and linear-rotaional relationship equations.

{% include image-gallery.html images="Motor Speed Control Assignment-3.jpg" height="300" %}


### Assembly and Simulation
[Solidworks Assembly Zip File](https://drive.google.com/file/d/10_lBNCp1_xFcNAUBQ0WyM6Ow-17mYM3Y/view?usp=sharing)

## Simulation Time
When running the motion analysis on Solidworks, I found that my design was able to go 10 feet foward and 10 feet back in 7.725 seconds. I was able to validate these results by referring to the reaction force and linear acceleration plots that were created by Solidworks motion analysis. The plots data both fulfilled the conditions listed above.


### Car Solidworks Model
{% include image-gallery.html images="BarReactionPlot.png, BarAccelerationPlot.png" height="300" %}
Car Model

