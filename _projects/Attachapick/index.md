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
{% include image-gallery.html images="ADML.png" height="400" %}
<div style="text-align:center; font-size:1.2rem; font-weight:bold; margin-bottom:12px;">
  Boston University EPIC's ADML
</div>

# Design Steps
## Product & Part Design
• Conceived a dual-component pick storage device compatible with standard capos. <br>
• Designed precision slots for pick retention, and a bulk-load lid for rapid access and jam prevention.<br>
• CAD modeled both parts, iterating for fit, manufacturability, and robotic assembly requirements.<br>
• Compensated for CNC and robot tolerances (±0.0005 in. for mill, ±0.009 in. for robots) in critical dimensions and mating features.<br>
• Included press-fit/chamfer features to enable consistent robotic assembly.<br>

## Design Iterations
{% include image-gallery.html images="DesignIterations.png" height="500" %}
<div style="text-align:center; font-size:1.2rem; font-weight:bold; margin-bottom:12px;">
  Previous Design Iterations For Lid & Body
</div>


## Final Design
{% include image-gallery.html images="CADBody.png, CADLid.png, CADAssemLabeled.png" height="300" %} 
<div style="text-align:center; font-size:1.2rem; font-weight:bold; margin-bottom:12px;">
  CAD of Final Design
</div>

# CNC Milling & Manufacturing Strategy
• Selected HDPE and polycarbonate stock sizes from ADML inventory.<br>
• Utilized CAM software (Fusion360) to generate toolpaths, accounting for vise jaw constraints and safe wall thicknesses.<br>
• Developed a manufacturing sequence involving robot pick-and-place, conveyor transport, CNC machining, and automated assembly.<br>

{% include image-gallery.html images="bodyvid.gif, BodyMilling.png" height="350" %}
<div style="text-align:center; font-size:1.2rem; font-weight:bold; margin-bottom:12px;">
  Body CAM & Operation Order
</div>
<br>
{% include image-gallery.html images="lidvid.gif, LidMilling.png" height="350" %}
<div style="text-align:center; font-size:1.2rem; font-weight:bold; margin-bottom:12px;">
  Lid CAM & Operation Order
</div>
<br>

# CIM Programming & Automation
• Created BUMES scripts to suit Attachapick’s sequence.<br>
• Developed unique commands for robotic handling and CNC integration.<br>
• Created CIM tables mapping BUMES code to manufacturing operations, referencing operation times and throughput. <br>
• Continuously improved scripts to optimize assembly yield and throughput.<br>

# Scheduling & Lean Manufacturing
• Constructed a routing diagram with blocks for each operation, labeling bottleneck processes, idle time, and concurrency.<br>
• Calculated maximum throughput (TH_max), steady-state work-in-progress (WIP_ss), cycle time, and non-value-added time.<br>
• Used staggered inventory release and parallel operations to minimize WIP_ss.<br>
• Evaluated assembly and functional yields by testing multiple production runs, documenting solutions to reach 100% robot assembly success.<br>

# Cost Estimation
• Calculated operating costs (robot, mill, conveyor hourly rates) and material usage based on final CAM outputs.<br>
• Presented per-part and batch manufacturing cost breakdowns, including throughput-based analysis.<br>

---

# Results
• Functional Attachapick prototypes successfully manufactured and assembled via ADML automated line.<br>
• Assembly yield: 100% after iterative script and part design refinements.<br>
• Functional yield: 100% (successful pick retention and removal in user testing).<br>
• Manufacturing cost: $X per part (from CIM and material analysis).<br>
• Cycle time: X min/unit, throughput close to theoretical maximum after lean improvements.<br>
• Impact: Enables musicians to efficiently store and access picks, demonstrating integration of modern manufacturing and automation for a scalable and accessible product.<br>

{% include image-gallery.html images="WithPics.png" height="500" %}
