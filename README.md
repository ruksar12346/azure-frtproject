### NOTE: I was not able to create Azure MySQL database service with my Azure subscription, hence I am using MySQL installed on Azure VM.
### Kindly consider this reason, and that is why I am only able to demonstrate usage of Azure VM and Azure Cognitive Speech service for the Future ready talent project.
### Thus , this project is only using 2 Azure service against the guideline of using atleast 3 Azure service.
### Screenshots https://ruksar.blob.core.windows.net/ruk/Screenshot (1).png   https://ruksar.blob.core.windows.net/ruk/Screenshot (2).png
## VEHICLE PARKING MANAGEMENT SYSTEM
### Overview
Vehicle Parking Management System (VPMS) is a very simple web application which uses PHP on the server side and Apache httpd is the webserver, MySQL is the datastore. The purpose of this application is to demonstrate knowledge of and use of Azure Cloud services to deliver some useful application using Cloud serrvices over the Internet.
This application has admin and User panels. The admin user can perform vehicle ,parking slot and parking management task. The user can view, print, listen to a  vehicle parking details (Text to Speech Application). The parking and vehicle details are saved in the MYSQL DB running on the AzureVM, which is a Ubuntu Linux instance. The runtime for the web application is PHP. For the listen functionality am using Azure Speech Service. The parking number readout can be played on the speaker. Thus making this application useful for users.

### Prerequisites and Installation

This application uses PHP scripting on the server side. The dynamic web pages are backed by MySQL database.
The stack is Linux, Apache, MySQL, PHP.

* Prerequisites: The following must be installed on the Azure Linux VM.
    * Apache httpd
    * PHP
    * MySQL

* Installation: Execute the following steps 
    * SSH to the remote Azure Linux VM from your local desktop
    * Run the folling commands on the Azure Linux VM.
    * sudo apt update
    * sudo apt install apache2 \
                 ghostscript \
                 libapache2-mod-php \
                 mysql-server \
                 php \
                 php-bcmath \
                 php-curl \
                 php-imagick \
                 php-intl \
                 php-json \
                 php-mbstring \
                 php-mysql \
                 php-xml \
                 php-zip

  * sudo mkdir -p /srv/www/vpms
* sudo chown -R www-data: /srv/www

    * Download the PHP application code to the vpms folder from Github
    * Create Apache site for VPMS app. Create /etc/apache2/sites-available/vpms.conf with following lines:   
<VirtualHost *:80>
    DocumentRoot /srv/www/vpms
    <Directory /srv/www/vpms>
        Options FollowSymLinks
        AllowOverride Limit Options FileInfo
        DirectoryIndex index.php
        Require all granted
    </Directory>
    <Directory /srv/www/vpms/>
        Options FollowSymLinks
        Require all granted
    </Directory>
</VirtualHost>

   * Enable the site with:

sudo a2ensite vpms
   * Finally reload the APache service with: sudo systemctl reload apache2   

### Configure database
To configure VPMS application to use the database, we need to run these commands and create MySQL database. 
sudo mysql -u root    
CREATE DATABASE vpmdb;    
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER ON vpmsdb.* TO root@localhost;    
FLUSH PRIVILEGES;    

   * Enter the db parameters in the includes/dbconnection.php file

## Azure services
### Azure Linux Virtual machine (VM)
### Azure Cognitive Speech service
##### I have used the Azure VM to host this PHP, Apache MYSQL based application. 
##### Azure Cognitive Speech service is used for Text to Speech conversion.
  I have created Azure Sppech service in the Azure portal, using the S0 tier. and used the Key and Region in the Javascript code inside PHP app.
  To use the speech service, SpeechSDK\microsoft.cognitiveservices.speech.sdk.bundle.js javascript bundle is included in the code.

  ### Application URL: vpms.westus.cloudapp.azure.com   

Admin Credential    
Username: admin   
Password: Test@123   

User Credential   
Username: 1234567890   
Password: Test@123

Admin Usecases: Add vehicle category, Add vehicle, Manage In and Out vehicle, Report, Search vehicle, Regusers.
User  Usecases: View vehicle(view,print,listen).


