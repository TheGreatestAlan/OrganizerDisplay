@echo off

REM Set the REGISTRY_LOCATION environment variable
set REGISTRY_LOCATION=localhost:5000

REM Run docker-compose up
docker-compose up

REM Print a message to indicate the process has completed
echo Docker Compose has been executed with REGISTRY_LOCATION set to %REGISTRY_LOCATION%.
