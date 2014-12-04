#!/bin/bash

# Compile Assets
gulp

# Build App
xcodebuild -project CJDNS.xcodeproj

# Run App
open build/Release/CJDNS.app
