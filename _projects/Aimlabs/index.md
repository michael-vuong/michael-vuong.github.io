---
layout: post
title: Aimlabs
date: 2025-12-10
description: Designed and prototyped a backpack-portable 2.5-DOF Cartesian motion system that acts as a carnival type shooter game. Integrates custom mechanical components, 8020 extrusion linear stages, stepper-based actuation, and embedded control. Developed 3D-printed parts, implemented prismatic and revolute joint embodiments, and built a functional prototype with a custom end effector to meet performance, robustness, and assembly constraints.

skills: 
- SolidWorks
- DFM
- 3D printing 
- Motion system design
- Stepper motor control & tuning
- Embedded systems integration
- Prototyping
- Mechanical assembly & tolerance design
- Sensing & actuation integration
- Failure mode identification & troubleshooting
- Rapid iteration and design optimization
  
main-image: /Thumbnail.png
---

## Conceptual Designs
I generated multiple concept sketches exploring belt-driven XY stages and compact Z-axis designs. Using CAD and simulation, I modeled the first linear stage and evaluated manufacturability. Early design reviews focused on kinematic layout, motor placement, frame stiffness, and ease of assembly/disassembly.
  {% include image-gallery.html images="Sketches.png" height="500" %}

Early Designs
{% include image-gallery.html images="FirstLinearStageCAD.png" height="500" %}
CAD of First Linear Stage
{% include youtube-video.html id="CbORn8VtayM" autoplay= "false"%}
Actual Linear Stage Testing

## Ball Launcher
For the ball-launching end effector I initially tested a spring-based launcher, but inconsistent preload and alignment made the shots unreliable. Switching to a rubber-band design provided smoother force application, easier tuning, and more consistent launch performance with simpler mechanics. I used a rack-and-pinion mechanism with a partial-tooth gear to draw back and fire the launcher.

{% include image-gallery.html images="BallShooterSS.png" height="500" %}
CAD of Ball Launcher
{% include youtube-video.html id="sr1cJBNBgoY" autoplay= "false"%}
Ball Launcher Testing


## Assembly and Testing
I assembled all three linear stages and integrated the ball-launching end effector into the full Cartesian system. Each axis was aligned, tensioned, and tested to ensure smooth travel and correct orientation. Once the mechanical subsystem was complete, I connected the electronics and loaded the control code, which programmed the system to move the launcher to a random position within the workspace and fire a ball. This will then repeat two more times.
{% include image-gallery.html images="Prototype.PNG" height="500" %}
Fully Assembled Prototype

{% include youtube-video.html id="MrKlsuJymK4" autoplay= "false"%}
All Degrees of Movement

## Game Time!
We presented the completed prototype in class, demonstrating full 2.5-DOF motion, task-specific operation of the end effector, and rapid assembly/disassembly. The system satisfied requirements for portability, functionality, robustness, and design originality. For the game, players are given 3 chances to shoot and hit the ball out of the air. If they can hit the ball they win!
{% include youtube-video.html id="YJN7ZNlGA1I" autoplay= "false"%}
Professor Playing
{% include youtube-video.html id="tA-7GpVwnq8" autoplay= "false"%}
Winner!
