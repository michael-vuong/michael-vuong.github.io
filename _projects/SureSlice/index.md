---
layout: post
date: 2024-12-14
title: SureSlice - Automatic Food Slicer (coming soon!)
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
- **Usability**: single-action activation (one switch movement) and clear ready/safe indicator (LEDs).
- **Safety**: prevent accidental contact with blades using mesh walls, acrylic covers, and an ultrasonic-sensor-based interlock.
- **Cleanability**: key components (drawer, presser, wire holders) removable for easy cleaning.
- **Versatility**: successfully slice at least 3 different food types with consistent results.
- **Affordability**: total BOM cost under $200.

---
# Design Steps

## 1. Requirements & Concept Selection
- Defined user needs (assistive, safe, easy-to-use) and translated into objectives/metrics.
- Used pairwise comparison and morph charts to evaluate slicing methods, actuators, and safety features. Selected wire loops for blades and a linear actuator for actuation.
{% include image-gallery.html images="Pairwise.png, Morph.png" height="400" %}
<div style="text-align:center; font-size:1.2rem; font-weight:bold; margin-bottom:12px;">
  Pairwise Comparision & Morph Chart
</div>

## 2. Mechanical Design
- Designed 3D-printable enclosure and mounting features (Figures 8a–8c).
- Dimensioned and printed a secure linear actuator holder to ensure straight motion.
- Designed a slotted presser (Figure 8d) to align wires and ensure full cuts.
- Designed removable wire holders and a drawer (Figures 8e, 8b) for cleaning and collection.

## 3. Actuation & Power
- Specified a linear actuator capable of ~300 lb force to meet slicing metric.
- Performed a power budget (Table 1) and selected power source consistent with cost and safety requirements.

## 4. Sensing & Controls
- Integrated an HC-SR04-style ultrasonic sensor for presence detection.
- Implemented Arduino Uno control: sensor input → LED ready/unsafe indicator (green/red), and actuator control via rocker switch for single-action operation (Figure 7, Figure 6).
- Developed code flow and debugging iterations (Figure 7) to improve sensing reliability.

## 5. Prototyping & Iteration
- Fabricated parts using PLA 3D printing and assembled electronics on a breadboard.
- Iteratively adjusted sensor positioning and code after inconsistent detection on small items (strawberries, carrots).
- Tuned presser geometry and wire placement to improve cut completeness.

## 6. Testing & Validation
- Conducted repeatability and durability tests (Table 3) on wire strength and actuator performance.
- Performed functional sensing tests across multiple foods (Table 2) and recorded slicing success rates (Figure 9).
- Verified single-action usability and component removability for cleaning.

---
# Results

## Performance
Actuation: device produced the designed force and enabled slicing of a variety of foods.
Slicing success: 100% success on several tested foods (bananas, avocados, hotdogs, etc.), ~80% success on apples and carrots, and lower/patchy detection for very small items (strawberries, some carrot geometries). See Figure 9 and Table 3.
## Usability & Safety
Single-action activation achieved via rocker switch; ultrasonic sensor + LED signaling provided a clear ready/unsafe indication. Detection was reliable for larger items; smaller items required sensor/code tuning.
Physical guards (mesh and acrylic) prevented accidental contact; removable parts simplified cleaning.
## Cost & Build
Final BOM kept total cost under $200 (Figure 5).
Major components are 3D printed (PLA), off-the-shelf linear actuator, Arduino Uno, ultrasonic sensor, LEDs, and common hardware—making reproduction feasible from the appendix material.
## Limitations & Next Steps
Improve sensing for small or irregularly shaped foods (optimize sensor placement or add complementary sensing).
Increase reliability on firmer items (carrots, dense cheeses) by testing alternative wire tensions, blade configurations, or slightly higher actuation travel/force control.
Replace the breadboard prototype with a PCB and more robust enclosure fasteners for production-level durability.

{% include image-gallery.html images="SureSlice.png" height="400" %}
{% include image-gallery.html images="Bottom.png" height="400" %}
{% include image-gallery.html images="Assem.png" height="400" %}
{% include image-gallery.html images="Drawer.png" height="400" %}
{% include image-gallery.html images="Lid.png" height="400" %}
{% include image-gallery.html images="Press.png" height="400" %}
{% include image-gallery.html images="WireHolder.png" height="400" %}

