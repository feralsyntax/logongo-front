# LogOnGo-Front
A fuel station management app.

# Delivered
#### An application that manages a fuel station, and enables users to create & manipulate data, generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3

### Author
[Benson Langat](https://github.com/benie254)

### Description
This station management app is complete with CRUD functionalities, and generated with Angular & Django. It enables users to record daily fuel station logs, view, edit/update, and delete the logs. 

Upon authentication: 

Standard users  | Technical features | Admin users
------------------------ | ------------------------ | ------------------------
Add logs  | Search tool with filter  | Add/Update/Delete logs/announcements /fuels
View daily/all logs  | Loader  | View daily/all logs/log details
View log details  |  Notifier  | Request email report 
Edit logs  |  Error handling  | Print log report
Request email report  |  Form validation  | Manage profile
Print log report  |  Email service  | View/Delete contacts/incident reports 
Manage profile  |  Lazy loading  | View all users

## Screenshot #1 ##
<img src="https://user-images.githubusercontent.com/99865051/235606162-3d900c8e-b9fe-4ca6-a30a-98607f60ecc6.png">

## Screenshot #2 ##
<img src="https://user-images.githubusercontent.com/99865051/235606333-0f26d5be-f9fd-4f61-8737-efc2e3d07001.png">

## Live Page: [LogOnGo](https://log-on-go.web.app/)

## Technologies Used

### Front-end development
* [Angular](https://angular.io/)- app structure, data collection, API requests, app management.
* CSS & [Bootstrap](https://getbootstrap.com/)- page styling & animations.
* [Firebase](https://firebase.com/)- deployment & hosting.
#### Packages
* [Angular Material](https://material.angular.io/)- UI design & themes.
* [NGX Pagination](https://www.npmjs.com/package/ngx-pagination/)- app pagination.
* [Notiflix](https://notiflix.github.io/)- loading & notifications.
* [NG Password Validator]()- password validation.
* [NG Recaptcha]()- recaptcha.
* [NG2 Search Filter]()- search filter.
* [NGX Editor]()- text editor.
### Back-end development
* [Click here for Back-end logic](https://github.com/benie254/LogOnGo-API/)

## Other Resources Used 

* SiteIcon made with [Favicon](https://favicon.io). 
* Other app icons from [FontAwesome](https://fontawesome.com/)
* Stylized fonts from [Google Fonts](https://fonts.google.com/)
* Color scheme generated with [Adobe Color Wheel](https://color.adobe.com/)
* Illustrations from [Paaatterns!](https://products.ls.graphics/paaatterns/)


## Behavior Driven Development (BDD)
**1. Landing Page**
   - OUTPUT: Navbar, Welcome guide, Footer
   
**2. Home**
   - INPUT: Click: Navbar: 'Home'
   - OUTPUT: Home page content
   - OUTPUT: Daily fuel summary 
   
**3. All Logs:** 
   - INPUT:  Click : Navbar : 'All Logs'
   - OUTPUT: All logs content
   - OUTPUT: All records in the database
   
**4. Logs Today:**
   - INPUT:  Click : Navbar : 'Logs Today'
   - OUTPUT: Dropdown-list: 'Petrol', 'Diesel', 'Gas'
   - OUTPUT: Divider
   - OUTPUT: Dropdown-list: 'Add Log', 'Add Mpesa', 'Add CreditCard'
   
**5. Petrol/Diesel/Gas:**
   - INPUT:  Click : Navbar : 'Logs Today': Dropdown-list: 'Petrol/Diesel/Gas'
   - OUTPUT: Today fuel logs page
   - OUTPUT: Today fuel logs 
   - OUTPUT: Add logs helper if none
   
**5. Add Log/Mpesa/CreditCard:**
   - INPUT:  Click : Navbar : 'Logs Today': Dropdown-list: 'Add Log/Mpesa/CreditCard'
   - OUTPUT: Add new records page
   - OUTPUT: Add new records form(s)
   
**6. User:**
   - INPUT:  Click : Navbar : 'Username'
   - OUTPUT: Dropdown-list: 'Profile', if superuser: 'Admin'
   - OUTPUT: Divider
   - OUTPUT: Dropdown-list: 'Report Incident', 'Contact Admin'
   - OUTPUT: Divider
   - OUTPUT: Dropdown-item: 'Logout'
   
**7. Profile:**
   - INPUT:  Click : Navbar : Username: Dropdown-list: 'Profile'
   - OUTPUT: User profile page 
   - OUTPUT: App guide
   - OUTPUT: Announcements 
   - OUTPUT: User logs
   - OUTPUT: Calendar
   - OUTPUT: Footer: Toggle btn: 'Profile details'
   
**8. Profile Details:**
   - INPUT:  Click : Profile Footer : Toggle btn: 'Profile details'
   - OUTPUT: Sidebar
   - OUTPUT: Sidebar contents
   - OUTPUT: User details: 'Username', 'Email', 'Site name'
   - OUTPUT: Divider
   - OUTPUT: 'Change Password', 'Reset Password', 'Close'
   
**9. Change/Reset Password:**
   - INPUT:  Click : Profile Footer : Toggle btn: 'Profile details'
   - OUTPUT: Sidebar
   - INPUT:  Click: 'Change Password'
   - OUTPUT: Change password page
   - OUTPUT: Change password form 
   - INPUT: Click: 'Reset Password'
   - OUTPUT: Reset password page
   - OUTPUT: Reset password form
   
**10. Admin:**
   - INPUT:  Click : Navbar: Username: Dropdown-list: 'Admin'
   - OUTPUT: Admin platform
   
**11. Report Incident:**
   - INPUT:  Click : Navbar: Username: Dropdown-list: 'Report Incident'
   - OUTPUT: Report Incident page
   - OUTPUT: Reporting incidents guide
   - OUTPUT: Report incident form
  
**12. Contact Admin:**
   - INPUT:  Click : Navbar: Username: Dropdown-list: 'Contact Admin'
   - OUTPUT: Contact Admin page
   - OUTPUT: Contact admin form

**13. Footer**
   - OUTPUT: Footer
   - OUTPUT: 'Company name & copyright', 'Management', 'Incidents'
   - INPUT:  'Management'
   - OUTPUT: Contact Admin page 
   - INPUT:  'Incidents'
   - OUTPUT: Report Incident page 
   - 
**14. Logout:**
   - INPUT:  Click : Navbar: Username: Dropdown-list: 'Logout'
   - OUTPUT: Redirect: Login Page
   - OUTPUT: Login form
   - OUTPUT: Navbar: 'Login', 'Sign Up'
   - OUTPUT: Footer: Disabled: 'Company name & copyright', 'Management', 'Incidents' 

## Known Bugs

No known bugs. Please report any issues or bugs! 

## Support and contact details

You can reach me through [mail](mailto:davinci.monalissa@gmail.com) or [LinkedIn](https://www.linkedin.com/in/benson-langat-fullstack-developer)

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## License 
*Copyright (c) 2023* ***[Benson Langat](https://github.com/benie254)***

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.*

###
*Copyright (c) 2023* ***[Benson Langat](https://github.com/benie254)***

[Angular CLI](https://github.com/angular/angular-cli) version 14.1.3