#!/bin/bash

# Cleanup script for unused directories and files
# Run this script to remove empty/unused directories

echo "🧹 Cleaning up unused directories..."

# Remove empty API directories
echo "Removing empty API directories..."
rm -rf app/api/notifications
rm -rf app/api/outreach
rm -rf app/api/daily-report
rm -rf app/api/email

# Remove empty page directories
echo "Removing empty page directories..."
rm -rf app/notifications
rm -rf app/outreach
rm -rf app/daily-report

# Remove empty cron directories
echo "Removing empty cron directories..."
rm -rf app/api/cron/followups
rm -rf app/api/cron

echo "✅ Cleanup completed!"
echo ""
echo "📝 Note: If you plan to use these directories in the future,"
echo "   you can recreate them when needed."
