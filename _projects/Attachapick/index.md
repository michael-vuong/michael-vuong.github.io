---
layout: post
title: Attachapick
date: 2025-12-15
description: Attachapick is a portable guitar pick storage system that integrates with a standard capo, allowing musicians to securely store and quickly access picks while playing. It features a CNC-milled HDPE body with precision slots for reliable retention and easy removal, paired with a removable polycarbonate press-fit lid for bulk loading and jam prevention. <br> <br> The design was optimized for automated manufacturing, accounting for machining and robotic tolerances and utilizing CNC mills, UR5 robotic handling, conveyor transport, and robotic assembly for scalable production.

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
{% include image-gallery.html images="ADML.png, UniversalRobot.png" height="400" %}
<div style="text-align:center; font-size:1.2rem; font-weight:bold; margin-bottom:12px;">
  Boston University EPIC's ADML & Universal Robot Used
</div>

# Design Steps
## 1. Product & Part Design
- Conceived a dual-component pick storage device compatible with standard capos. 
- Designed precision slots for pick retention, and a bulk-load lid for rapid access and jam prevention.
- CAD modeled both parts, iterating for fit, manufacturability, and robotic assembly requirements.
- Compensated for CNC and robot tolerances (±0.0005 in. for mill, ±0.009 in. for robots) in critical dimensions and mating features.
- Included press-fit/chamfer features to enable consistent robotic assembly.

## 2. Design Iterations
{% include image-gallery.html images="DesignIterations.png" height="500" %}
<div style="text-align:center; font-size:1.2rem; font-weight:bold; margin-bottom:12px;">
  Previous Design Iterations For Lid & Body
</div>
<br>


## Final Design
{% include image-gallery.html images="CADBody.png, CADLid.png, CADAssemLabeled.png" height="300" %} 
<div style="text-align:center; font-size:1.2rem; font-weight:bold; margin-bottom:12px;">
  CAD of Final Design
</div>

## 3. CNC Milling & Manufacturing Strategy
- Selected HDPE and polycarbonate stock sizes from ADML inventory.
- Utilized CAM software (Fusion360) to generate toolpaths, accounting for vise jaw constraints and safe wall thicknesses.
- Developed a manufacturing sequence involving robot pick-and-place, conveyor transport, CNC machining, and automated assembly.

{% include image-gallery.html images="bodyvid.gif, BodyMilling.png" height="350" %}
<div style="text-align:center; font-size:1.2rem; font-weight:bold; margin-bottom:12px;">
  Body CAM & Operation Order
</div>
<br>
{% include image-gallery.html images="lidvid.gif, LidMilling.png" height="350" %}
<div style="text-align:center; font-size:1.2rem; font-weight:bold; margin-bottom:12px;">
  Lid CAM & Operation Order
</div>


## 4. CIM Programming & Automation
- Created BUMES scripts to suit Attachapick’s sequence.
- Developed unique commands for robotic handling and CNC integration.
- Created CIM tables mapping BUMES code to manufacturing operations, referencing operation times and throughput. 
- Continuously improved scripts to optimize assembly yield and throughput.
{% include image-gallery.html images="CIMEdie.png, CIMMary.png" height="250" %}
<div style="text-align:center; font-size:1.2rem; font-weight:bold; margin-bottom:12px;">
  Edie & Mary CIM Tables
</div>

## 5. Scheduling & Lean Manufacturing
- Constructed a routing diagram with blocks for each operation, labeling bottleneck processes, idle time, and concurrency.
- Calculated maximum throughput, steady-state work-in-progress, cycle time, and non-value-added time.
- Used staggered inventory release and parallel operations to minimize steady state WIP.
- Evaluated assembly and functional yields by testing multiple production runs, documenting solutions to reach 100% robot assembly success.
{% include image-gallery.html images="Routing.png" height="350" %}
<div style="text-align:center; font-size:1.2rem; font-weight:bold; margin-bottom:12px;">
  Routing Diagram
</div>

## 6. Cost Estimation
- Calculated operating costs and material usage based on final CAM outputs.
- Presented per-part and batch manufacturing cost breakdowns, including throughput-based analysis.

---

# Results
- Functional Attachapick prototypes successfully manufactured and assembled via ADML automated line.
- Assembly yield: 100% after iterative script and part design refinements.
- Functional yield: 100% (successful pick retention and removal in user testing).
- Manufacturing cost: $4.85 per part (from CIM and material analysis).
- Cycle time: 8.7 min/unit, throughput close to theoretical maximum after lean improvements.
- Impact: Enables musicians to efficiently store and access picks, demonstrating integration of modern manufacturing and automation for a scalable and accessible product.

{% include image-gallery.html images="WithPics.png" height="500" %}
<br>
