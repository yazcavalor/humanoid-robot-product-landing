#!/bin/bash

# Simple Git Push Script
# Usage: ./gitpush.sh "your commit message"

# If no message is given, use a default one
msg=${1:-"update"}

echo "🚀 Adding all changes..."
git add .

echo "📝 Committing with message: '$msg'"
git commit -m "$msg"

echo "📤 Pushing to main..."
git push origin main

echo "✅ Done!"
