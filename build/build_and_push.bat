@echo off

REM Call the build script
call build.bat

REM Call the push script
call push_to_registry.bat

REM Print a message to indicate the tasks have been completed
echo Image has been built and pushed successfully.
