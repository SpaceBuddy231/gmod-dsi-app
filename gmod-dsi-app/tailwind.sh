#!/bin/bash
konsole --new-tab -e bash -c 'cd ~; cd "/home/spacebuddy/Schreibtisch/Development Projects/gmod-dsi-app/gmod-dsi-app/"; npx @tailwindcss/cli -i frontend/frontend/inp_style.css -o frontend/frontend/style.css --watch; exec bash' &
