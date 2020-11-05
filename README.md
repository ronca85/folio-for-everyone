# Folio for everyone

## Two ways to generate your portfolio page

1. Create a new file on Github and make a pull request - more details below

or 

2. If you don't have or want an account on Github you can **[email](mailto:marko.ronik@gmail.com)** me and I'll create one for you

## How to generate portfolio page in detail

1. *Sign in or Sign up on Github*

2. *Fork the repository*

3. *Create a new file [HERE](https://github.com/ronca85/folio-for-everyone/new/master/src/members). Name it **_desired-name.md_** and paste the content from [this file](https://raw.githubusercontent.com/ronca85/folio-for-everyone/master/src/members/example.md) file*

4. Now replace existing text with your information. Every piece of information you input is optional. Remove what you don't need or what doesn't apply to your case.

5. *Create pull request*

6. After I process the request your portfolio page will be generated here: https://folio-for-everyone.netlify.app/members/desired-name

See the example page **_[here](https://folio-for-everyone.netlify.app/members/example)_**. Keep in mind the base URL might change at any point.

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
|            | `font` |               | Use [googlefonts](https://fonts.google.com/) for this. Pick the one you want to use and paste its link here. Defaults to Poppins (sans-serif) if no custom font was set |
|            |        |               | Select styles you need - [font example](https://fonts.google.com/specimen/Playfair+Display?sidebar.open=true&selection.family=Playfair+Display). From the sidebar on the right copy the href value from the code snippet ```<link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet">```. Should look something like this ```https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap``` |
|            | `meta` |               | this information is shown when someone googles your name or when you share the link to your portfolio page on social media |
|            |        | `title`       | Shows your name                                        |
|            |        | `description` | Describe who you are and what you do in about 20 words |
|            |        | `banner_url`  | You can create an image that will be shown when sharing page. Recommended dimensions are 1200px x 630px. Use services like [postimage](https://postimages.org/) to host your image |
|            |        | `theme_color` | Theme color is the color of the address bar on android devices |

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
