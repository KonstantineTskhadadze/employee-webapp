set CATALINA_HOME=C:\Program Files\Apache Software Foundation\Tomcat 8.5
set NAME=employee-ui.war
set OUT_DIR=%CATALINA_HOME%\webapps

start /b /wait cmd /c if exists %OUT_DIR%\%NAME% rmdir %OUT_DIR%\%NAME%
start /b /wait cmd /c npm run build
cd build
start /b /wait cmd /c jar -cvf %NAME% .

echo %OUT_DIR%
start /b /wait cmd /c copy %NAME% "%OUT_DIR%"
cd ..
