---
layout: post
title: Mechanism Synthesis
description: I completed a series of mechanism synthesis exercises focused on the design and analysis of planar linkages to achieve specified motion patterns. These projects involved designing two-position mechanisms such as rocker and fast-return linkages, as well as systems incorporating both angular and translational displacement. I applied kinematic synthesis techniques to determine optimal link dimensions, pivot locations, and motion ratios that met the design constraints. Additionally, I developed a linkage-based door mechanism for an ISO shipping container, integrating spatial and geometric constraints to ensure realistic and collision-free operation. Across all exercises, I combined theoretical motion design with geometric modeling and practical design reasoning to produce functional, efficient mechanical systems.
skills:
  - Solidworks
  - Mechanism synthesis and four-bar linkage design
  - Kinematic and geometric analysis
  - Quick-return mechanism optimization
  - Spatial reasoning and motion generation
  - Application of engineering standards (ISO dimensions)
  - CAD-based modeling and visualization
  - Analytical problem-solving and mechanical design validation
  - Technical documentation and communication
main-image: /Thumbnail.png
---
All models were made on Math Illustrations
## Rocker
The rocker was made by finding the distance between two points of the intial and final position, and creating a bar of equal distance, and rotating component of half the distance. The additional bars were parallel to the intial and final points of the rocking bar.
{% include image-gallery.html images="Rocker.png" height="400" %}
{% include youtube-video.html id="0wQgtpj-8jY" autoplay= "false"%} <br>
 
## Fast Return Rocker
This rocker was made similarily to the first one, but the additional bars were not parallel to the rocking bar, which causes unequal rocking motions.
{% include image-gallery.html images="RockerFastReturn.png" height="400" %}
{% include youtube-video.html id="OAwmlHhRhN8" autoplay= "false"%}  <br>
 
## Two Position Complex Motion
The complex motion of this bar was made by using perpendicular bisectors between intial and final positions of the bar. Due to the nature of circular rotation, this technique made it so that the bar would hit both positions as it rotated.
{% include image-gallery.html images="TwoPosition.png" height="400" %}
{% include youtube-video.html id="CnD9sjfQou4" autoplay= "false"%} <br>
 
## Two Position Complex Motion Ex. 2
{% include image-gallery.html images="TwoPositionEx2.png" height="400" %}
{% include youtube-video.html id="39jrc_kIY04" autoplay= "false"%} <br>
 
## Container Door
For this design, I needed to make the door of this container avoid hitting the edge of the container wall. To do this, I set an intermediate position between the intial and final positon of the door. I then created perpendicular bisectors between all positions points to located where I could put the pivot points. The location of the intermediate position had to be far enough so the door could clear the corner of the container.
{% include image-gallery.html images="ContainerDoor.png" height="400" %}
{% include youtube-video.html id="9vsIbTB0a54" autoplay= "false"%} <br>
 
## Container Door CAD
To simulate real world design, I modeled the container and door on Solidworks. This showcases the usefulness of basic modeling softwares in early stage development of moving systems.
{% include image-gallery.html images="ContainerDoorCAD.png" height="400" %}
