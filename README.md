<h1 align="center">nilAI</h1>

 The live link can be found here - [nilAI Landing Page](https://saas-landing-pi.vercel.app/)

![index_button](client/public/readme/view.png)



## Contents
* [About The Project](#about-the-project)
    * [Description](#description)
    * [Built With](#build-with)
* [Project Goals and UX](#project-goals-and-ux)
    * [Project Goals](#Project-Goals)
    * [User Stories](#User-Stories)
* [Design](#Design)
    <!-- * [Wireframes](#Wireframes) -->
    * [Colour Scheme](#Colour-Scheme)
    * [Fonts](#Fonts)
* [Features](#Features)
    * [Features](#Features)
        * [Reuseable Components](#reuseable-components)
        * [Pricing](#pricing)
        * [Responsive View](#responsive-view)
    * [Future Features](#Future-Features)
* [Testing](#Testing)
    * [Accessibility Testing](#Accessibility-Testing)
    * [Manual Testing](#Manual-Testing)
* [Deployment](#Deployment)
    * [Cloning & Forking](#Cloning-&-Forking)
    * [Remote Deployment](#Remote-Deployment)

***

<br>

## About The Project

### Description

nilAI is a modern, responsive landing page built with React and Tailwind CSS. 
It showcases a component-based architecture with reusable UI elements, smooth 
animations, and production-ready code patterns.

<br><br>

### Built With



 <p>React 18</p>

 <p>Tailwind CSS</p>
 <p>Vite</p>

<br><br>

## Project Goals

Built to demonstrate modern frontend development skills:

- ✅ **Component Architecture** - Modular, reusable UI components
- ✅ **Performance** - 91+ Lighthouse scores
- ✅ **Accessibility** - 100% accessibility rating
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Design System** - Consistent colors, typography, spacing

### User Stories

|Story No.|Story|
| ------------- | ------------- |
|1|As an user, <br> I want smoothly navigate between the sections <br>so that I can see the website content. <br><br>I know I am done when the user is navigated to the desired sections <br> after clicking Navbar item. |
|2|As an user, <br> I want to check features<br> so that I can acklowledge what the project is about. <br><br>I know I am done when the when the user scrolled down a website <br> or been navigated from the Navbar to the Features Section. |
|3|As an user, <br> I want to read FAQ<br> so that I can acklowledge what's the most frequently asked questions.<br><br>I know I am done when the user scrolled down the website <br> or been navigated from the Navbar to the FAQ section. |
|4|As an user, <br> I want to check prices<br> so that I can choose the plan perfectly suits my needs.<br><br>I know I am done when the user scrolled down the website or been <br> navigated from the Navbar to the Pricing Section. |
|5|As an user, <br> I want to have a choice in subscriptions<br> so that I can decide between monthly or annual plan.<br><br>I know I am done when the user click on toggle bar in Pricing section <br> so that he can see all the available plans. |
|6|As an user, <br> I want to download the product<br> so that I can test it on my device.<br><br>I know I am done when the when the user scrolled down the website <br> or been navigated from the Navbar to the Download Section. |
## Design

### Colour Scheme

**Color Palette**
- 9-color system (#C8E480 → #080D27)
- High contrast ratios
- Dark theme optimized
<img src="client/public/readme/nilai-palette.png" alt="Alt Text" width="900" height="400">

### Fonts

**Typography**
The Google Fonts used in this project:
* Poppins (headings)
<br><br>
<img src="client/public/readme/font-poppins.png" alt="Alt Text">


* Inter (body text)
<br><br>
<img src="client/public/readme/font-inter.png" alt="Alt Text">

## Features


### Component Library
Built reusable components following modern React patterns:

**Buttons**
- 3 variants with consistent styling
- Hover/active states
- Icon integration

**Pricing Section**
- Monthly/annual toggle
- Responsive grid layout
- Animated transitions

**FAQ Accordion**
- Smooth expand/collapse
- Keyboard accessible
- ARIA compliant

<table border="0"  >
 <tr align="center">
    <td><b style="font-size:15px">Button #1</b></td>
    <td><b style="font-size:15px">Button #2</b></td>
    <td><b style="font-size:15px">Styled Image</b></td>

 </tr>
 <tr align="center">
    <td><img src="client/public/readme/button2.png" alt="Alt Text" ></td>
    <td><img src="client/public/readme/icon4.png" alt="Alt Text" ></td>
    <td><img src="client/public/readme/icon1.png" alt="Alt Text" ></td>

 </tr>
  <tr align="center">
    <td><img src="client/public/readme/button3.png" alt="Alt Text" ></td>
    <td><img src="client/public/readme/icon5.png" alt="Alt Text" ></td>
    <td><img src="client/public/readme/icon2.png" alt="Alt Text" ></td>

 </tr>
  <tr align="center">
    <td><img src="client/public/readme/button1.png" alt="Alt Text" ></td>
    <td><img src="client/public/readme/icon6.png" alt="Alt Text" ></td>
    <td><img src="client/public/readme/icon3.png" alt="Alt Text" ></td>

 </tr>
</table>


### Pricing

<img src="client/public/readme/pricing-section.png" alt="Alt Text" width="800" >

<br><br>
### Responsive View
<details>
<summary>Desktop View - <b>CLICK</b> to see</summary>

#### Header
<img src="client/public/readme/navbar.png" alt="Alt Text">

#### Footer
<img src="client/public/readme/footer.png" alt="Alt Text">

#### Home Page
<img src="client/public/readme/home-section.png" alt="Alt Text">

#### Features Section
<img src="client/public/readme/features-section.png" alt="Alt Text" >

#### Pricing Section
<img src="client/public/readme/pricing-section.png" alt="Alt Text" >

#### Faq Section
<img src="client/public/readme/faq-header.png" alt="Alt Text" >
<img src="client/public/readme/faq-opened.png" alt="Alt Text" >

#### Download Section
<img src="client/public/readme/download-section.png" alt="Alt Text" >

</details>
<br>
<details>
<summary>Mobile View - <b>CLICK</b> to see</summary>

#### Home Section
<img src="client/public/readme/mobile-home.png" alt="Alt Text" width="300" height="600">

#### Mobile Navigation Toggle Button
<img src="client//public/readme/mobile-navbar.png" alt="Alt Text" width="300" height="600">

#### Features Section
<img src="client//public/readme/mobile-features.png" alt="Alt Text" width="300" height="600">

#### Pricing Section
<img src="client//public/readme/mobile-pricing.png" alt="Alt Text" width="300" height="600">

#### Faq Section
<img src="client//public/readme/mobile-faq.png" alt="Alt Text" width="300" height="600">

#### Testimonials Section
<img src="client//public/readme/mobile-testimonials.png" alt="Alt Text" width="300" height="600">

#### Download Section
<img src="client//public/readme/mobile-download.png" alt="Alt Text" width="300" height="600">
</details>
<br>


---

### Future Features<br>

* Authentication system

* Stripe hooks functionality for authenticated user



## Testing

### Accessibility Testing
#### Lighthouse
<img src="client//public/readme/lighthouse-nilai.png" alt="Alt Text">

- ⚡ **91 Performance Score**
- ♿ **100 Accessibility Score**
- ⚙️ **100 Best Practices**
- 🔍 **100 SEO**

### Manual Testing
- I have tested that this page works in different web browsers.
- I have tested that the project is responsive and works with different device sizes. Looks good and functions as usual. 
- I have tested all links, internal and external. They go to the correct destination and open in the correct way. 
- I have tested that all text and fonts are readable and easy to understand.
- I have tested that the correct data is passed when the forms are submitted. 
- I have tested a navigation in the header to make sure it navigate you to correct sections.
- I have tested that pricing Monthly/Yearly button counting values correctly.


## Deployment

### Cloning & Forking
#### Fork
1. On GitHub.com, navigate to the [nil1143/saas_landing_stripe](https://github.com/nil1143/saas_landing_stripe) repository.
2. In the top-right corner of the page, click Fork.
3. By default, forks are named the same as their parent repositories. You can change the name of the fork to distinguish it further.
4. Add a description to your fork.
5. Click Create fork.

#### Clone
1. Above the list of files click the button that says 'Code'.
2. Copy the URL for the repository.
3. Open Terminal. Change the directory to the location where you want the cloned directory.
4. Type git clone, and then paste the URL.
5. Press Enter.


### Remote Deployment
 The site was deployed to Github pages. If you have forked/cloned the repository the steps to deploy are:
 1. On GitHub.com, navigate to your repository.
 2. Navigate to the settings tab.
 3. Click on the tab called 'pages' on the left hand side.
 4. From the source drop down list under the heading Build and deployment, select main.
 5. The page will hten provide the link to the website.
<br>
<br>
<br>
<br>
<div align="center">

[![Github][Github]][Github-url] [![LinkedIn][LinkedIn]][Linkedin-url]
</div>

<!-- MARKDOWN LINKS & IMAGES -->
[Mongodb]: https://img.shields.io/badge/-MongoDB-black.svg?style=for-the-badge&logo=mongodb&colorB=555
[Mongodb-url]: https://www.mongodb.com/atlas
[Express]: https://img.shields.io/badge/-express-white.svg?style=for-the-badge&logo=express&colorB=333
[Express-url]: https://expressjs.com/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Node]: https://img.shields.io/badge/node-black.svg?style=for-the-badge&logo=nodedotjs&colorB=333
[Node-url]: https://nodejs.org/
[Github]: https://img.shields.io/badge/github-black.svg?style=for-the-badge&logo=github&colorB=333
[Github-url]: https://github.com/nil1143
[LinkedIn]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[LinkedIn-url]: https://www.linkedin.com/in/tomasz-nilipiuk-b5b88a239/
[Tailwind]: https://img.shields.io/badge/Tailwind-blue.svg?style=for-the-badge&logo=tailwind-css&colorB=EFEFFF
[Tailwind-url]: https://tailwindcss.com/
