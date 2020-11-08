# Folio for everyone

## Two ways to generate your portfolio page

1. Create a new file on Github and make a pull request - more details below

or 

2. If you don't have or want an account on Github copy content of [this file](https://raw.githubusercontent.com/ronca85/folio-for-everyone/master/src/members/example-designer-illustrator.md), edit the file to your liking and then send the file to me and I'll generate for page manually. My email is **[email](mailto:marko.ronik@gmail.com)**

## How to generate portfolio page in detail

1. *Sign in or Sign up on Github*

2. *Fork the repository*

3. *Create a new file [HERE](https://github.com/ronca85/folio-for-everyone/new/master/src/members). Name it **_desired-name.md_** and paste the content from [this file](https://raw.githubusercontent.com/ronca85/folio-for-everyone/master/src/members/example-designer-illustrator.md) file*

4. Now replace existing text with your information. Every piece of information is optional. Remove what you don't need or what doesn't apply to your case.

5. *Create pull request*

6. After I process the request your portfolio page will be generated here: https://folio-for-everyone.netlify.app/members/desired-name

The example page is approximately what your page will look like: **_[here](https://folio-for-everyone.netlify.app/members/example)_**. Keep in mind the base URL might (but probably won't) change at any point.

You can also download the repo, generate your portfolio page and host it on your own.

## MD file breakdown

| Section  | Description                                                                                               |
| -------- | --------------------------------------------------------------------------------------------------------- |
| `header` | Has 3 sections and is fixed when scrolling. You can use two or only one section. Just keep the text short |

| Section    | Block              | Description                                                                        |
| ---------- | ------------------ | ---------------------------------------------------------------------------------- |
| `page`     |                    | You can customize page colors here. By default it's white text on black background |
|            | `customColors`     | Set to `true` if you want to use custom colors                                     |
|            | `transition_left`  | Color of the left half of the loading animation                                    |
|            | `transition_right` | Color of the right half of the loading animation                                   |
|            | `background`       | Color of the page background                                                       |
|            | `color`            | Color of the text on the page                                                      |

| Section    | Block  | Element       | Description                                                                    |
| ---------- | ------ | ------------- | ------------------------------------------------------------------------------ |
| `head`     |        |               | This section isn't shown on the screen but it holds information used when sharing the page on social media |
|            | `font` |               | Use [googlefonts](https://fonts.google.com/) for this. Pick a typeface you want to use and paste its link here. Defaults to Poppins (sans-serif) if no custom typeface was set. Keep in mind you will need font weights 300, 500 and 700 for best results. The page was designed with Poppins and it fits the layout perfectly. Serif fonts will not look great. |
|            |        |               | Select styles you need - [font example](https://fonts.google.com/specimen/Zilla+Slab?sidebar.open=true&selection.family=Zilla+Slab). From the sidebar on the right copy the href value from the code snippet ```<link href="https://fonts.googleapis.com/css2?family=Zilla+Slab&display=swap" rel="stylesheet">```. Should look something like this ```https://fonts.googleapis.com/css2?family=Zilla+Slab&display=swap``` |
|            | `meta` |               | this information is shown when someone googles your name or when you share the link to your portfolio page on social media |
|            |        | `site_name`   | Shows up when sharing on [discord](https://discord.com/) and possibly other platforms |
|            |        | `title`       | Shows your name                                        |
|            |        | `description` | Describe who you are and what you do in about 20 words |
|            |        | `banner_url`  | You can create an image that will be shown when sharing page. Recommended dimensions are 1200px x 630px. Use services like [postimage](https://postimages.org/) to host your image |
|            |        | `theme_color` | Theme color is the color of the address bar on android devices |

### Share card previews

![Twitter share card](https://user-images.githubusercontent.com/13383578/98464172-5269c400-21c1-11eb-850f-747cf922bf1a.png)
![Facebook share card](https://user-images.githubusercontent.com/13383578/98464175-54cc1e00-21c1-11eb-842e-1e3fdd9c16b8.png)
![Linkedin share card](https://user-images.githubusercontent.com/13383578/98464177-5695e180-21c1-11eb-8471-58a2e5464bd3.png)
![Discord share card](https://user-images.githubusercontent.com/13383578/98463954-a83d6c80-21bf-11eb-971c-ff763d1c4c2a.png)

| Section    | Block         | Description                                                   |
| ---------- | ------------- | ------------------------------------------------------------- |
| `intro`    |               | Introduce yourself here                                       |
|            | `title`       | Section title shown in the left column                        |
|            | `description` | Shown on the right. Divide each paragraph like in the example. You can input emojis or html snippets if you need to |

| Section    | Description                                                   |
| ---------- | ------------------------------------------------------------- |
| `about`    | Layout is the same as in the intro section                    |

| Section    | Block      | List    | Element | Description                                                   |
| ---------- | ---------- | ------- | ------- | ------------------------------------------------------------- |
| `skills`   |            |         |         | List your competences here                                    |
|            | `title`    |         |         | Section title shown in the left column                        |
|            | `category` |         |         | You can use one or more categories. Just keep at least one    |
|            |            | `title` |         | You can categorize your skills if needed by giving it a title |
|            |            | `tools` |         | You can list the tools you are using by giving them a name    |
|            |            |         | `name`  | Name the software or tool you are using                       |

| Section    | Block     | Element  | Image         | Description                                             |
| ---------- | --------- | -------- | ------------- | ------------------------------------------------------- |
| `work`     |           |          |               | You can link your projects here                         |
|            | `title`   |          |               | Section title shown in the left column                  |
|            | `project` |          |               | Lists your projects. Needs text to show and URL         |
|            |           | `text`   |               | Text to be shown on the screen                          |
|            |           | `url`    |               | Link to the social media page                           |
|            |           | `image`  |               | If needed add a preview image                           |
|            |           |          | `url`         | Upload an image to [postimage](https://postimages.org/) and paste the direct link here |
|            |           |          | `description` | Describe what's on the image for accessibility reasons |

| Section    | Block     | Element  | Description                                                   |
| ---------- | --------- | -------- | ------------------------------------------------------------- |
| `socials`  |           |          | Link your social media here                                   |
|            | `title`   |          | Section title shown in the left column                        |
|            | `network` |          | Lists social networks you decide to set                       |
|            |           | `text`   | Text to be shown on the screen                                |
|            |           | `url`    | Link to the social media page                                 |

| Section    | Block     | Element    | Description                        |
| ---------- | --------- | ---------- | ---------------------------------- |
| `footer`   |           |            | Final section on the page          |
|            | `email`   |            | Setup your email template here     |
|            |           | `address`  | Your email address goes here       |
|            |           | `subject`  | Placeholder subject of the message |
|            |           | `body`     | Placeholder body of the message    |

### Show option

| Option | Description                                               |
| ------ | --------------------------------------------------------- |
| `show` | Show option is in most Sections. Set to `true` if you want the block to be shown. Any other value will hide the section. Useful if you want to keep information you've put in but not show at all times |
