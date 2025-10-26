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

## Design
I decided to come up with a simple design of a car with a large platform base that would be able to hold the arduino, motor, motor driver, and beam on top of the car. 

### Car Solidworks Model
{% include image-gallery.html images="Screenshot 2025-10-25 171213.png, Screenshot 2025-10-25 171225.png, Screenshot 2025-10-25 17235.png, Screenshot 2025-10-25 171257.png" height="400" %}
