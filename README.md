# Folio for everyone

## Generate your portfolio page

All you need to do is create a new file on Github and make a pull request
Or if you don't have an account on Github you can email me your file

After the new file is included Netlify takes over and generates your page

## MD file breakdown

**Use [this file](https://github.com/ronca85/folio-for-everyone/edit/master/src/members/example.md) as the template.**

1. *Sign in or Sign up on Github*

2. *Fork the repository*

3. *Create a new file [HERE](https://github.com/ronca85/folio-for-everyone/new/master/src/members). Name it **_your-name.md_** and paste the content from the example.md file*

4. Now replace existing text with your information. Every piece of information you input is optional. Remove what you don't need or what doesn't apply to your case.

5. *Create pull request*

| Option | Description                                               |
| ------ | --------------------------------------------------------- |
| `show` | Shown in most Sections. Set to `true` if you want it shown. Anything else will hide the section. Useful if you don't want to keep information you have put in but not show at all times |

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

| Section    | Block     | Element  | Description                                                   |
| ---------- | --------- | -------- | ------------------------------------------------------------- |
| `work`     |           |          | You can link your projects here                               |
|            | `title`   |          | Section title shown in the left column                        |
|            | `project` |          | Lists your projects. Needs text to show and URL               |
|            |           | `text`   | Text to be shown on the screen                                |
|            |           | `url`    | Link to the social media page                                 |

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
