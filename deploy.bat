@echo off
echo 🚀 Preparing for Netlify deployment...

REM Build the project
echo 📦 Building project...
npm run build

REM Check if build was successful
if %errorlevel% neq 0 (
    echo ❌ Build failed! Please fix errors and try again.
    exit /b 1
)

echo ✅ Build completed successfully!

REM Check dist folder
if exist dist (
    echo 📁 Dist folder created with contents:
    dir dist /b
) else (
    echo ❌ Dist folder not found!
    exit /b 1
)

echo.
echo 🎉 Ready for deployment!
echo.
echo 📋 Next steps:
echo 1. Go to https://netlify.com
echo 2. Sign up/Login to your account
echo 3. Click "New site from Git" or drag-drop the dist folder
echo 4. Configure build settings (if using Git):
echo    - Build command: npm run build
echo    - Publish directory: dist
echo 5. Click "Deploy site"
echo.
echo 🌐 Your site will be live at: https://your-site-name.netlify.app
echo.
pause