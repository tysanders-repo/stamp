---
title: "High Performance Video Chat"
date: 2024-03-20
description: "A high-performance local network video chat system built off of raw UDP sockets and FFMPEG."
category: "Software"
tags: ["System Design", "Real-Time", "Performance", "FFMPEG", "Socket Programming"]
featured: true
year: "2025"
---

A high-performance local network video chat system built off of raw UDP sockets and FFMPEG.

## Overview

I have always been more comfortable with C/C++ and low-level programming and while many of my projects recently have been to develop web apps, I wanted to take the time to "relax" a little and work on a low level piece of software.

This project started like many of mine, a late night notes app idea. Video chat is a common feature in many apps but short of facetime, there aren't many options that feel native. I wanted to build an experience that felt native, but could use the benifit of the effectively limitless bandwidth of a local network.

Gopher, as I called it, is built off of FFMPEG. Since we prioritize performance, we use UDP sockets to send and receive video frames. FFMPEG is in charge of capturing, encoding, and decoding video frames and SDL2 takes care of the rendering.

## Technical Architecture
- **Resolution**: 1080p at 30fps
- **Latency**: Sub-millisecond processing times (<5ms)
