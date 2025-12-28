---
layout: post
title: Attachapick
date: 2025-12-15
description: Attachapick is a portable guitar pick storage system that integrates with a standard capo, allowing musicians to securely store and quickly access picks while playing. It features a CNC-milled HDPE body with precision slots for reliable retention and easy removal, paired with a removable polycarbonate press-fit lid for bulk loading and jam prevention. <br> <br> The design was optimized for automated manufacturing, accounting for machining and robotic tolerances and utilizing HAAS CNC mini mills, UR5 robotic handling, conveyor transport, and robotic assembly for scalable production.

skills: 
- SolidWorks
- Fusion360
- CNC Milling
- Robotics
- PLC
- CIM
- SPC
- Vision Systems
- MES
- Manufacturing Automation
- Lean Manufacturing
  
main-image: /Thumbnail.png
---

---

{% include youtube-video.html id="b_yYclsaWBs" autoplay= "true" width="1000px"%}
<div style="text-align:center; font-size:1.2rem; font-weight:bold; margin-bottom:12px;">
  Attachapick Automated Assembly
</div>

# Objective
Design and manufacture a new product using HDPE on an automated assembly line environment (ADML). The process should aim to optimize manufacturing strategies, integrate computer-controlled processes, and apply lean principles to produce a functional, cost-efficient product that positively impacts society.
{% include image-gallery.html images="ADML.png" height="400" %}
<div style="text-align:center; font-size:1.2rem; font-weight:bold; margin-bottom:12px;">
  Boston University EPIC's ADML
</div>

# Design Steps
## Product & Part Design
Conceived a dual-component pick storage device compatible with standard capos.
Designed precision slots for pick retention, and a bulk-load lid for rapid access and jam prevention.
CAD modeled both parts, iterating for fit, manufacturability, and robotic assembly requirements.
Compensated for CNC and robot tolerances (±0.0005 in. for mill, ±0.009 in. for robots) in critical dimensions and mating features.
Included press-fit/polycarbonate shelf features to enable consistent robotic assembly.

## Design Iterations
{% include image-gallery.html images="DesignIterations.png" height="500" %}

## Final Design
{% include image-gallery.html images="CADBody.png, CADLid.png, CADAssemLabeled.png" height="300" %}

# CNC Milling & Manufacturing Strategy
Selected HDPE and polycarbonate stock sizes from ADML inventory.
Utilized CAM software to generate toolpaths, accounting for vise jaw constraints and safe wall thicknesses.
Developed a manufacturing sequence involving robot pick-and-place, conveyor transport, CNC machining, and automated assembly.
Documented each step with annotated screenshots from CAM and CAD.

{% include image-gallery.html images="bodyvid.gif, BodyMilling.png" height="350" %}
<div style="text-align:center; font-size:1.2rem; font-weight:bold; margin-bottom:12px;">
  Body CAM & Operation Order
</div>
{% include image-gallery.html images="lidvid.gif, LidMilling.png" height="350" %}
<div style="text-align:center; font-size:1.2rem; font-weight:bold; margin-bottom:12px;">
  Lid CAM & Operation Order
</div>



{% include image-gallery.html images="WithPics.png" height="500" %}
