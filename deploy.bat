set CATALINA_HOME=C:\Program Files\Apache Software Foundation\Tomcat 8.5
set NAME=employee-webapp.war
set OUT_DIR=%CATALINA_HOME%\webapps

start /b /wait if exists %OUT_DIR%\%NAME% rmdir %OUT_DIR%\%NAME%
start /b /wait cmd /c mvn clean package
cd target
start /b /wait cmd /c copy %NAME%  "%OUT_DIR%"
cd ..
