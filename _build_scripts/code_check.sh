#!/usr/bin/env bash

MAX="7"

echo "============================="
echo "Checking for TODOs and FIXMEs"
echo "============================="

TODOS=$(grep -irInH --exclude-dir="node_modules" --exclude-dir=".git" --exclude-dir="*/vendor/*" --exclude-dir="_build_scripts" TODO . | wc -l)
echo -e "Total TODOs:\t$TODOS"

FIXMES=$(grep -irInH --exclude-dir="node_modules" --exclude-dir=".git" --exclude-dir="*/vendor/*" --exclude-dir="_build_scripts" FIXME . | wc -l)
echo -e "Total FIXMEs:\t$FIXMES"

echo ""
SUM=$(($TODOS + $FIXMES))

if ((SUM > MAX)); then
  echo "Too many TODOs and FIXMEs ($SUM > $MAX)"
  
  echo "TODOs"
  grep -irInH --exclude-dir="node_modules" --exclude-dir="*/vendor/*" --exclude-dir="_build_scripts" TODO .
  echo "FIXMEs"
  grep -irInH --exclude-dir="node_modules" --exclude-dir="*/vendor/*" --exclude-dir="_build_scripts" FIXME .
  echo ""
  echo "Failing build..."

  exit 2
fi

echo "All okay... ($SUM < $MAX)"

