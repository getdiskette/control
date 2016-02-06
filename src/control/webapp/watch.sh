#!/bin/bash
fswatch -o -r src | xargs -n1 ./compile.sh
