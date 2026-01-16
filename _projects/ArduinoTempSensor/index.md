---
layout: post
date: 2024-05-01
title: Arduino Temperature Sensor (coming soon!)
description:  I designed and built a room temperature monitoring device using an Arduino Uno, a digital temperature sensor, and a 16×2 I2C LCD. The system reads ambient temperature, displays real-time data, and activates a red LED and buzzer when the temperature goes outside a preset range. I created a custom enclosure layout, 3D-printed a battery holder, wired the full circuit on a breadboard, and programmed the device in Arduino IDE. The final prototype successfully integrates mechanical design, electronics, and embedded code into a functional temperature alarm system.
skills: 
  - Arduino
  - 3D Printing
  - Soldering
  - Prototyping
  - Engineering Drawing
  - CAD
  - Circuits
  - Laser Cutter
  - Drill Press
main-image: /Thumbnail.png
---

# Objective
Design and prototype a room temperature monitor that displays the current temperature on an LCD screen and triggers an alarm if the temperature moves outside a desired range. The system is built with Arduino and integrates multiple electronic components within a custom enclosure for functional and visual usability.

# Design Steps
## Mechanical Design & Component Layout
Designed an enclosure with wall/lid placements for all key sensors and indicators: <br>
• Temperature sensor exposed to ambient air for accurate readings.<br>
• LCD screen mounted visibly for real-time monitoring.<br>
• Switch placed externally for easy activation/deactivation.<br>
• Green LED to indicate on/off status, fixed on the enclosure.<br>
• Red LED to signal out-of-range temperature, fixed on the enclosure.<br>
• Buzzer positioned to alert user of abnormal temperature conditions.<br>
• Arduino board located for exterior accessibility to upload code and debug.<br>
• Custom 3D-printed battery holder secured inside the enclosure.<br>

## 3D Printing
• CAD-modeled a battery holder tailored to the 9V battery and enclosure dimensions.<br>
• Converted CAD file to STL and generated G-code using Cura slicer.<br>
• Fabricated the holder with an FDM 3D printer and installed it in the enclosure.<br>

## Circuit Wiring
• Practiced wiring on a breadboard, refining the schematic with Tinkercad circuit simulation.<br>
Connected all components:<br>
• Switch, LEDs, buzzer, temperature sensor, LCD, 9V battery.<br>
• Soldered and heat-shrinked connections for durability.<br>
• Used twist nuts and spade connectors for secure electrical contacts.<br>

## Arduino Coding & System Logic
Programmed Arduino to:<br>
• Blink LED for on/off status.<br>
• Activate buzzer and red LED alarm for abnormal temperature.<br>
• Read temperature sensor output (analog/digital).<br>
• Display readings and status messages on LCD.<br>
• Integrated all functionalities in a single Arduino sketch for seamless operation.<br>

{% include image-gallery.html images="CADBox.png, CADInsideView.png, CADLid.png" height="400" %}

{% include image-gallery.html images="CADBatteryHolder.png" height="400" %}

{% include image-gallery.html images="TinkerCad.png" height="400" %}

{% include image-gallery.html images="Code1.png, Code2.png" height="400" %}

