---
layout: post
date: 2024-12-14
title: SureSlice - Automatic Food Slicer
description:  A compact, 3D-printed countertop slicer that assists users with limited hand mobility by using a 300 lb linear actuator to press food through removable wire blades. I worked on the mechanical design and integration, including 3D-printing the actuator housing and presser, and helped implement the ultrasonic-sensor safety system with Arduino-controlled LED indicators. 
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
Create a mechanically-assistive countertop food slicer that enables users with limited hand/wrist mobility to safely and consistently slice a variety of foods.

## Metrics:
- **Slice Food**: deliver ~300 lb actuation force to reliably cut typical soft-to-medium produce and some firmer items.
- **Usability**: single-action activation and clear ready/safe indicator.
- **Safety**: prevent accidental contact with blades using mesh walls, acrylic covers, and an ultrasonic-sensor-based interlock.
- **Cleanability**: key components removable for easy cleaning.
- **Versatility**: successfully slice at least 3 different food types with consistent results.
- **Affordability**: total BOM cost under $200.

---
# Design Steps

## 1. Requirements & Concept Selection
- Defined user needs and translated into objectives/metrics.
- Used pairwise comparison and morph charts to evaluate slicing methods, actuators, and safety features. Selected wire loops for blades and a linear actuator for actuation.
{% include image-gallery.html images="Pairwise.png, Morph.png" height="300" %}
<div style="text-align:center; font-size:1.2rem; font-weight:bold; margin-bottom:12px;">
  Pairwise Comparision & Morph Chart
</div>

{% include image-gallery.html images="LinearActuator.jpeg" height="300" %}
<div style="text-align:center; font-size:1.2rem; font-weight:bold; margin-bottom:12px;">
  Actuator Selected
</div>

## 2. Mechanical Design
- Designed 3D-printable enclosure and mounting features.
- Dimensioned and printed a secure linear actuator holder to ensure straight motion.
- Designed a slotted presser to align wires and ensure full cuts.
- Designed removable wire holders and a drawer for cleaning and collection.
{% include image-gallery.html images="Assem.png" height="400" %}
{% include image-gallery.html images="Lid.png, Top.png" height="200" %}
{% include image-gallery.html images="Drawer.png, Bottom.png" height="200" %}
{% include image-gallery.html images="Press.png, WireHolder.png" height="200" %}
<div style="text-align:center; font-size:1.2rem; font-weight:bold; margin-bottom:12px;">
  CAD Components
</div>

## 3. Actuation & Power
- Specified a linear actuator capable of ~300 lb force to meet slicing metric.
- Performed a power budget and selected power source consistent with cost and safety requirements.
{% include image-gallery.html images="Power.png" height="400" %}
<div style="text-align:center; font-size:1.2rem; font-weight:bold; margin-bottom:12px;">
  Power Budget Chart
</div>

## 4. Sensing & Controls
- Integrated an HC-SR04-style ultrasonic sensor for presence detection.
- Implemented Arduino Uno control: sensor input → LED ready/unsafe indicator, and actuator control via rocker switch for single-action operation.
- Developed code flow and debugging iterations to improve sensing reliability.

## 5. Prototyping & Iteration
- Fabricated parts using PLA 3D printing and assembled electronics on a breadboard.
- Iteratively adjusted sensor positioning and code after inconsistent detection on smaller food items.
- Tuned presser geometry and wire placement to improve cut completeness.

## 6. Testing & Validation
- Conducted repeatability and durability tests on wire strength and actuator performance.
- Performed functional sensing tests across multiple foods and recorded slicing success rates.
- Verified single-action usability and component removability for cleaning.


---
# Results

## Performance
- Actuation: device produced the designed force and enabled slicing of a variety of foods.
- Slicing success: 100% success on several tested foods, ~80% success on apples and carrots, and lower/patchy detection for very small items.
{% include image-gallery.html images="Sensing.png, SuccessRate.png" height="400" %}
<div style="text-align:center; font-size:1.2rem; font-weight:bold; margin-bottom:12px;">
  Sensing & Success Rates
</div>
## Usability & Safety
- Single-action activation achieved via rocker switch; ultrasonic sensor + LED signaling provided a clear ready/unsafe indication. Detection was reliable for larger items; smaller items required sensor/code tuning.
- Physical guards prevented accidental contact; removable parts simplified cleaning.
## Cost & Build
- Final BOM kept total cost under $200.
- Major components are 3D printed, off-the-shelf linear actuator, Arduino Uno, ultrasonic sensor, LEDs, and common hardware—making reproduction feasible from the appendix material.
{% include image-gallery.html images="BOM.png" height="400" %}
<div style="text-align:center; font-size:1.2rem; font-weight:bold; margin-bottom:12px;">
  Bill of Materials
</div>
## Limitations & Next Steps
- Improve sensing for small or irregularly shaped foods by optimizing sensor placement or add complementary sensing.
- Increase reliability on firmer items by testing alternative wire tensions, blade configurations, or slightly higher actuation travel/force control.
- Replace the breadboard prototype with a PCB and more robust enclosure fasteners for production-level durability.
