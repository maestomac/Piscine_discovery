#!/bin/bash
#appel du script argv.sh
if [ $# -eq 0 ]
then
echo "no arguments supplied"
fi
if [ $# -eq 1 ]
then
echo $1
fi
if [ $# -eq 2 ]
then
echo $1
echo $2
fi
if [ $# -ge 3 ]
then
echo $1
echo $2
echo $3
fi
