#!/bin/bash

# CrestWin Theme Rollback Script
# This will restore the original blue theme

echo "🔄 Rolling back to original theme..."

# Restore original CSS
cp src/index.css.backup src/index.css

echo "✅ Original theme restored!"
echo "🔄 Restart your dev server to see changes: npm start"

# Note: Logo component changes need to be reverted manually if desired
echo "📝 Note: Logo sizes will remain bigger (that's probably good!)"
echo "📝 If you want to revert logo colors too, let me know!"