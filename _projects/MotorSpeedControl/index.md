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
Radius of 2.5 inches

### Assembly and Simulation
[Solidworks Assembly Zip File](https://drive.google.com/file/d/10_lBNCp1_xFcNAUBQ0WyM6Ow-17mYM3Y/view?usp=sharing)

## Simulation Time
When running the motion analysis on Solidworks, I found that my design was able to go 10 feet foward and 10 feet back in 7.725 seconds. I was able to validate these results by referring to the reaction force and linear acceleration plots that were created by Solidworks motion analysis. The plots data both fulfilled the conditions listed above.


### Car Solidworks Model
{% include image-gallery.html images="BarReactionPlot.png, BarAccelerationPlot.png" height="300" %}
The reaction force does not exceed 0 and the acceleration does not exceed g/12

---

## Prototyping Process
For our initial design, we decided to make the base out of laser cut wood and 3D print the rest of the components such as the motor mount, axel mount, and wheels. We later decided against this because we found out that the 3D process would take too long for the amount of time we had left to build our car. We transitioned to laser cutting the rest of the components with wood stock. 
{% include image-gallery.html images="BaseLaserSketch.png, WheelLaserSketch.png" height="300" %}
Base and Wheel Sketch For Laser Printing


To assemble the parts together we used combination of wood glue, screws, and nuts. To balance out of the car we mounted the arduino and motor driver in the front, the motor in the back, and the beam in the middle. While testing however, we found out that our wheels were too flimsy as the wood it was made out of was too thin and flexible. We changed the wheel material to acrylic and made it thicker to solve this problem.
{% include image-gallery.html images="CarDesign.png" height="300" %}
Design Plans

## Testing
Our testing process included many trial and errors. Our code was based off of a error correction equation. In essence, we would set a target RPM for the motor to reach and the closer it got to the target RPM, the slower it would accelerate. This would control the angular acceleration of the motor and restrain the linear acceleration from overshooting and exceeding g/12, causing the beam to topple. For each test, we played around with the correction error constant, duration of the run, and the target RPM until we found a balance of the factors that resulted in a fast run without the beam toppling.

## Embedding youtube video
The second video has the autoplay on. copy and paste the 11-digit id found in the url link. <br>
{% include youtube-video.html id="Zf3iwgYW0Xs" autoplay= "false"%}
Successful Test Run

## Results
Our final runtime would run just over 12 seconds. This is slightly different from our simulated time which is most likely due to errors in our assembly process and environmental factors which led to changes in the our code and ability to accelerate faster to account for.
{% include image-gallery.html images="IMG_8597.png, IMG_8598.png, IMG_8599.png, IMG_8600.png, IMG_8601.png, IMG_8602.png" height="175" %}
Final Prototype
