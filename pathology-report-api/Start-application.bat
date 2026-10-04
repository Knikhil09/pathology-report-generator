@echo off

title Pathology Report Generation System

cd /d "%~dp0"

echo ==========================================
echo   Pathology Report Generation System
echo ==========================================
echo.
echo Current folder:
cd
echo.

if not exist "mvnw.cmd" (
    echo ERROR: mvnw.cmd not found!
    echo.
    echo Expected location:
    echo %CD%\mvnw.cmd
    echo.
    pause
    exit /b 1
)

echo [1/2] Building application...
echo.

call "%CD%\mvnw.cmd" clean package

if errorlevel 1 (
    echo.
    echo ==========================================
    echo BUILD FAILED
    echo ==========================================
    echo.
    pause
    exit /b 1
)

echo.
echo ==========================================
echo BUILD SUCCESSFUL
echo ==========================================
echo.

echo [2/2] Starting application...
echo.

java -jar "%CD%\target\pathology-report-api-0.0.1-SNAPSHOT.jar"

pause