# Folio for everyone

## Generate your portfolio page

All you need to do is create a new file on Github and make a pull request
Or if you don't have an account on Github you can email me your file

After the new file is included Netlify takes over and generates your page

## MD file breakdown

**Use [this file](https://github.com/ronca85/folio-for-everyone/edit/master/src/members/example.md) as the template.**

*Create a new file [HERE](https://github.com/ronca85/folio-for-everyone/edit/master/src/members/) and paste the content from the example.md file*

Now replace existing text with your information. Every piece of information you input is optional. Remove what you don't need or what doesn't apply to your case.

* head:
  * font: ``` use googlefonts for this. pick the one you want to use and paste its link here ```
  Pick font variations - [font example](https://fonts.google.com/specimen/Playfair+Display?sidebar.open=true&selection.family=Playfair+Display)
  In the sidebar copy the href value from the code ```<link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet">```
  Should look something like this ```https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap```
  
  * meta: ``` this information is shown when someone googles your name or when you share the link to your portfolio page on social media. ```
    * title: ``` Should show your name ```
    * description: ``` Describe who you are and what you do in about 20 words ```
    * banner_url: ``` You can create an image that will be shown when sharing page. Recommended dimensions are 1200px x 630px. Use services like Imgur to host your image. ```
    * theme_color: ``` Theme color is the color of the address bar on android devices. ```

* page: ``` You can customize page colors here. By default it's white text on black background. ```
  * customColors: ``` Set to true if you want to use custom colors. ```
  * transition_left: ``` Color of the left half of the loading animation. ```
  * transition_right: ``` Color of the right half of the loading animation. ```
  * background: ``` Color of the page background. ```
  * color: ``` Color of the text on the page. ```

* header: ``` Has 3 sections and is fixed when scrolling. You can use two or only one section. Just keep the text short. ```

* intro: ``` Introduce yourself here. ```
  * show: ``` You can remove true if you want to remove the section but not lose the information that was entered ```
  * title: ``` Shown on the left ```
  * description: ``` Shown on the right. Divide each paragraph like in the example. You can input emojis or html email if you need to. ```

* about: ``` Layout is the same as in the intro section ```

* skills: ``` List your competences here. ```
  * category: ``` You can use one or more categories. Just keep at least one. ```
    - title: ``` You can categorize your skills if needed by giving it a title. ```
      tools: ``` You can list the tools you are using by giving them a name. ```
      - name: ``` Name the software or tool you are using. ```

* work: ``` You can link your projects here. ```
  * project: ``` Lists your projects. Needs text to show and URL. ```
    - text: ``` Text to be shown on the screen. ```
      url: ``` Link to the project page somewhere on the web. ```

* socials: ``` Link your social media here. ```
	* network: ``` Lists social networks you decide to set. ```
	  - text: ``` Text to be shown on the screen. ```
	    url: ``` Link to the social media page. ```

* footer: ``` Final section on the page. ```
  * email: ``` Setup your email template here. ```
    * address: ``` Your email address goes here. ```
    * subject: ``` Placeholder subject of the message. This will show up after someone clicks your email. ```
    * body: ``` Placeholder body of the message. ```
