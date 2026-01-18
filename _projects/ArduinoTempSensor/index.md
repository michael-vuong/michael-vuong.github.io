---
layout: post
date: 2024-05-01
title: Arduino Temperature Sensor 
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
---
# Objective
Design and prototype a room temperature monitor that displays the current temperature on an LCD screen and triggers an alarm if the temperature moves outside a desired range. The system is built with Arduino and integrates multiple electronic components within a custom enclosure for functional and visual usability.

---

# Design Steps
## 1. Mechanical Design & Component Layout
Designed an enclosure with wall/lid placements for all key sensors and indicators: 
- **Temperature sensor** exposed to ambient air for accurate readings.
- **LCD screen** mounted visibly for real-time monitoring.
- **Switch** placed externally for easy activation/deactivation.
- **Green LED** to indicate on/off status, fixed on the enclosure.
- **Red LED** to signal out-of-range temperature, fixed on the enclosure.
- **Buzzer** positioned to alert user of abnormal temperature conditions.
- **Arduino board** positioned for exterior accessibility to upload code and debug.
- Custom **3D-printed battery holder** secured inside the enclosure.

{% include image-gallery.html images="CADBox.png, CADInsideView.png" height="400" %}
<div style="text-align:center; font-size:1.2rem; font-weight:bold; margin-bottom:12px;">
  CAD of Enclosure's Interior & Exterior 
</div>

## 2. 3D Printing
- CAD-modeled a battery holder tailored to the 9V battery and enclosure dimensions.
- Converted CAD file to STL and generated G-code using Cura slicer.
- Fabricated the holder with an FDM 3D printer and installed it in the enclosure.

{% include image-gallery.html images="CADBatteryHolder.png" height="400" %}
<div style="text-align:center; font-size:1.2rem; font-weight:bold; margin-bottom:12px;">
  CAD of Custom Battery Holder
</div>

## 3. Circuit Wiring
- Practiced wiring on a breadboard, refining the schematic with Tinkercad circuit simulation.
Connected all components:
- Switch, LEDs, buzzer, temperature sensor, LCD, 9V battery.
- Soldered and heat-shrinked connections for durability.
- Used twist nuts and spade connectors for secure electrical contacts.

{% include image-gallery.html images="TinkerCad.png" height="600" %}
<div style="text-align:center; font-size:1.2rem; font-weight:bold; margin-bottom:12px;">
  TinkerCad Simulation
</div>

## 4. Arduino Coding & System Logic
Programmed Arduino to:
- Blink LED for on/off status.
- Activate buzzer and red LED alarm for abnormal temperature.
- Read temperature sensor output (analog/digital).
- Display readings and status messages on LCD.
- Integrated all functionalities in a single Arduino sketch for seamless operation.

{% include image-gallery.html images="Code1.png" height="500" %}
{% include image-gallery.html images="Code2.png" height="400" %}
<div style="text-align:center; font-size:1.2rem; font-weight:bold; margin-bottom:12px;">
  Arduino Code
</div>

---

# Results
Functional Prototype: Successfully assembled and tested an integrated room temperature monitor.
Features: LCD readings are accurate; alarm system reliably signals when temperatures fall outside of defined thresholds; system responsive to user input via the switch.
Prototyping: 3D-printed battery holder and customized enclosure improve ease of assembly, maintenance, and usability.
Testing: System demonstrated robust response in a range of real-world temperature conditions; hardware and code performed consistently under repeated trials.
