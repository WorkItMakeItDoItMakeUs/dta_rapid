#!/usr/bin/env bash

MAX="10"

echo "============================="
echo "Checking for TODOs and FIXMEs"
echo "============================="

EXCLUDE_DIRS=(
  'node_modules'
  '.git'
  '*/vendor/*'
  '_sass'
  '_build_scripts'
)

EXCLUDE_FILES=(
  'bundle.js'
)

TODOS=$(grep -irInH "${EXCLUDE_DIRS[@]/#/--exclude-dir=}" "${EXCLUDE_FILES[@]/#/--exclude=}" TODO . | wc -l)

echo -e "Total TODOs:\t$TODOS"

FIXMES=$(grep -irInH "${EXCLUDE_DIRS[@]/#/--exclude-dir=}" "${EXCLUDE_FILES[@]/#/--exclude=}" FIXME . | wc -l)
echo -e "Total FIXMEs:\t$FIXMES"

echo ""
SUM=$(($TODOS + $FIXMES))

if ((SUM > MAX)); then
  echo "Too many TODOs and FIXMEs ($SUM > $MAX)"

  echo "TODOs"
  grep -irInH "${EXCLUDE_DIRS[@]/#/--exclude-dir=}" "${EXCLUDE_FILES[@]/#/--exclude=}" TODO .
  echo "FIXMEs"
  grep -irInH "${EXCLUDE_DIRS[@]/#/--exclude-dir=}" "${EXCLUDE_FILES[@]/#/--exclude=}" FIXME .
  echo ""
  echo "Failing build..."

  exit 2
fi

echo "All okay... ($SUM < $MAX)"
