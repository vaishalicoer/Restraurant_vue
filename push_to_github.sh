#!/bin/bash

# Step 1: Git Init
git init

# Step 2: Add all files
git add .

# Step 3: Commit with message
git commit -m "Initial Vue.js project commit"

# Step 4: Rename branch to main
git branch -M main

# Step 5: Set Remote Origin (Change this URL if needed)
git remote remove origin 2> /dev/null
git remote add origin https://github.com/vaishalisharma101/restraurant.vue.git

# Step 6: Push to GitHub
git push -u origin main
