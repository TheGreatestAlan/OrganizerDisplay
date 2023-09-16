@echo off
REM Change to the directory where the script is located
cd %~dp0
REM
REM Go one level above the script's directory
cd ..
REM
REM Run the docker build command
docker build -t web .
