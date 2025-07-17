---
title: "Font Parser and Renderer"
date: 2025-01-20
description: "Developed a custom font parser and renderer in c++ to parse raw OTF font files and use them to render text in a simple opengl/glfw application." 
category: "Software"
tags: ["System Design", "Font Rendering", "C++", "OpenGL", "Graphics"]
featured: false
year: "2023"
---


# Font Parser and Renderer

Over the summer I first watched sebastian lague's video on font rendering and wanted to give it a go myself. I had some previous experience with parsing files but I had never forayed into binary parsing before. To understand how it works, you need to understand the OpenType format.

## OpenType Overview
The OpenType format, one of many ways fonts are distributed, is a binary format that is made of multiple tables. The most important tables are the `cmap` table, which maps character codes to glyph indices, and the `glyf` table, which contains the actual glyph data. The `head`, `hhea`, and `maxp` tables provide metadata about the font. The `head` table is especially relevant as it contains the offsets to the other tables, allowing us to navigate the font file.

