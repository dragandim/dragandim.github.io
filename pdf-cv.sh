#!/bin/bash

# Step 1: Start Jekyll in detached mode using PDF config
echo "🔧 Starting Jekyll with PDF config..."
bundle exec jekyll serve \
  --config _config.yml,pdfconfigs/cv.yaml \
  --detach \
  --port 4010

# Step 2: Wait for the server to be available
echo "⏳ Waiting for Jekyll to fully start..."
for i in {1..10}; do
  if curl --silent --head http://127.0.0.1:4010/pdf-cv/combined.html | grep "200 OK" > /dev/null; then
    echo "✅ Jekyll is up."
    break
  fi
  sleep 1
done

# Step 3: Generate PDF with Prince
echo "🖨️  Generating PDF..."
prince --javascript \
  --input-list=_site/pdfconfigs/pdf-cv-list.yaml \
  -o pdf/cv.pdf

# Step 4: Kill Jekyll
echo "🛑 Shutting down Jekyll..."
pkill -f "jekyll.*4010"

# Final step
echo "🎉 Done! PDF saved to: pdf/cv.pdf"
