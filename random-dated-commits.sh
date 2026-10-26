
#!/usr/bin/env bash

set -euo pipefail

# Configuration
TOTAL_COMMITS=500
START_DATE="2025-01-01"

# Get the current date and time
START_EPOCH=$(date -d "$START_DATE 00:00:00" +%s)
END_EPOCH=$(date +%s)
RANGE=$((END_EPOCH - START_EPOCH))

# Check Git repository
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    echo "Error: Run this script inside a Git repository."
    exit 1
fi

# Avoid accidentally including staged changes
if ! git diff --cached --quiet; then
    echo "Error: Unstage your existing changes first."
    exit 1
fi

# Ensure Git identity exists
if ! git config user.name >/dev/null || ! git config user.email >/dev/null; then
    echo "Error: Configure your Git username and email first."
    exit 1
fi

# Store used timestamps to prevent duplicates
declare -A USED_TIMESTAMPS

echo "Generating $TOTAL_COMMITS random dated commits..."
echo "Period: $START_DATE to $(date +%Y-%m-%d)"
echo ""

for ((i=1; i<=TOTAL_COMMITS; i++)); do

    # Generate a random timestamp within the date range
    while true; do
        RANDOM_NUMBER=$(( ((RANDOM << 15) | RANDOM) % RANGE ))
        TIMESTAMP=$((START_EPOCH + RANDOM_NUMBER))

        if [[ -z ${USED_TIMESTAMPS[$TIMESTAMP]+exists} ]]; then
            USED_TIMESTAMPS[$TIMESTAMP]=1
            break
        fi
    done

    # Convert timestamp to local date
    COMMIT_DATE=$(date -d "@$TIMESTAMP" +%Y-%m-%dT%H:%M:%S%z)

    # Create an empty backdated commit
    GIT_AUTHOR_DATE="$COMMIT_DATE" \
    GIT_COMMITTER_DATE="$COMMIT_DATE" \
    git commit --quiet --allow-empty \
        -m "Contribution $i"

    # Progress indicator
    if (( i % 50 == 0 )); then
        echo "$i / $TOTAL_COMMITS commits created."
    fi

done

echo ""
echo "Successfully created $TOTAL_COMMITS commits!"

# Ask whether to push
read -r -p "Push all commits to GitHub? [y/N] " reply

if [[ "$reply" =~ ^[Yy]$ ]]; then
    git push
    echo "Push completed."
else
    echo "Commits saved locally. Nothing was pushed."
fi
