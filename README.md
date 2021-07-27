# Pop Bang Boing
**Interactive Frontend Development Milestone Project**

![Main Mockup](https://johnroutledge.github.io/milestone-project-2/assets/images/mockup.jpg "Main Mockup")

[Link to Live Website](https://johnroutledge.github.io/-milestone-project-2/index.html)

[GitHub Repo](https://github.com/johnroutledge/milestone-project-2)

**Rationale**

With the ubiquity of mobile devices and tablets presently, there is an ever increasing demand for games that require very little time investment.
Users want a game that is easy to understand, quick to play and gives instant gratification.

This website meets such needs through an adaptation of a classic drinking game which I renamed 'Pop, Bang, Boing'. This change came about when in 
a classroom scenario and the three action words had to be child-friendly. In the original version, people who be sat in a circle and take it in turns
to say either 'pop', 'bang' or 'boing' which, in turn, would determine who was next to speak.  Players who were to slwo to respond, or who spoke out 
of turn, would be eliminated from the game (and would have to perform a forfeit of some kind).  

I thought it would be a fun idea to bring this game to electronic devices in order to provide users with some light relief and entertainment.  In my version,
rather than people being elimnated from the game, the aim is to click on the correct circle as many times as possible in one minute.  The action word 
being chosen at random by the program.

The typical user for the website would be someone:
* Looking for some quick, light-hearted entertainment
* Who likes classic-style games
* Who is trying to improve their hand-eye co-ordination
* Who wants to speed up their reactions

People visiting this website are looking for:
* Entertainment
* Fun
* A quick five-minute distraction
* A test of their reflexes

Pop Bang Boing is the ideal site for such people because:
* It includes all of the above in one place
* It has intuitive controls and layout
* It is both clear and concise in its layout

***

## Index – Table of Contents

* [User Experience (UX)](#user-experience) 
* [Features](#features)
* [Technologies Employed](#technologies-employed)
* [Testing](#testing)
* [Deployment](#deployment)
* [Acknowledgements](#credit)

***

## UX

**Strategy**

User needs:  quick entertainment and gratification, a reaction challenge, intuitive gameplay, visual appeal

Being a big mobile gamer myself who only has a few minutes to spend playing a game, I decided that the game should fulfil the following needs: be visually pleasing, provide quick feedback and gratification, be extremely quick to pick up.


**Scope**

User Stories:
1. As someone who only has a few minutes to spare, I want a game that can be picked up and put down without any commitment.
1. As someone short on time, I need a game which is intuitive to play.
1. As a person who enjoys a challenge, I want a game to test my reflexes.
1. As someone who enjoys classic arcade games, I want a game that appeals to me in a retro-way.


**Structure**

To make sure the game intuitive to navigate, I kept the controls to a minimum. 
Through a minimum of visual content, I reduced distraction and maximized engagement.


**Skeleton**

The key reasoning behind the design of the game was to disclose information progressively by giving snippets of what 
lay on other pages.  By using icons and breaking it into three main sections which mirror the three main user/business needs,
this also minimized cognitive overload.

By being consistent with the design and simplicity of all pages, it is both predictable and intuitive, and therefore increases the overall UX.


**Surface**

The 'arcade' font was chosen to give a classic arcade game feel, while the neon colour scheme added to this style.  The colour scheme was chosen as it feels kitsch and retro, while at the same time being visually stimulating.

***


## Features

**Implemented**
* Classic game play sound effects to maintain a retro feel and also give extra user feedback
* Blah blah blah

**Future Features to Implement**
* Have extra leaderboards which save scores permanently. There could be one for the user's all-time best score, and another for all users globally.

***

## Technologies Employed

* HTML
* CSS
* JavaScript
* JQuery
* Github/Gitpod
* BootstrapCDN (Bootstrap 4)
* Font Awesome
* Google Fonts
* Google Dev Tools 
* Google Lighthouse

***

## Testing

|  Test Label                                   | Action         | Expected Outcome                                          | Test Outcome  |
|-----------------------------------------------|----------------|-----------------------------------------------------------|---------------|
|  Media Query mobile screen size               | Resize screen  |  All pages should display correctly on iPhone 5           | PASS          |
|  Media Query tablet screen size               | Resize screen  |  All pages should display correctly on iPad               | PASS          |
|  Media Query desktop screen size              | Resize screen  |  All pages should display correctly on 14 inch screen     | PASS          |
|  Media Query 5k screen size                   | Resize screen  |  All pages should display correctly on 5k screen          | PASS          |


**Testing User Stories**

1. As someone who only has a few minutes to spare, I want a game that can be picked up and put down without any commitment.
* Yes, they...
2. As someone short on time, I need a game which is intuitive to play.
* Yes, by ...
3. As a person who enjoys a challenge, I want a game to test my reflexes.
* Yes, the ...
4. As someone who enjoys classic arcade games, I want a game that appeals to me in a retro-way.
* Yes, by ...


**Testing Browser Compatibility**

The website was successfully opened and rendered correctly in Chrome (both desktop and mobile versions), Edge and Safari.

**Code Validation**

Both the HTML and CSS were validated using the W3C Markup Validation Service. This was initially done using the 'Validate by URI' option and pasting the link to the
Github repo...

**Testing with Lighthouse in Google Chrome Devtools**

* Performance: 
* Accessibility:
* Best Practices:
* SEO:

**Notable bug fixes**

1. When the first play() function is called, there is a noticable delay before the audio file is played. 
All subsequent audio files play without delay. Having tried various fixes (using MP3 files instead of WAV) without success, I decided to just play an empty sound before the start of the game. This fixed the problem as now the sounds are immediate when clicking circles during gameplay.
2. Having played the game numerous times to make sure it played correctly, I noticed that when landing on circle number 1 (in the 12 o'clock position) in an anti-clockwise direction, if the next action word was 'boing' then the game flagged up wrong when clicking on the correct circle (number seven). Having done a console.log to see which circle it was expecting, it turned out to be circle eight rather than circle seven.  After looking at the code to see what the error could be, I discovered that I had mis-calculated when experiencing a negative number in my if...else if statement in the calculateCorrectCircle function.

***

## Deployment 

**The project can be deployed by following these steps**

1. Log into GitHub
1. Click "Settings" in the menu above the Repository.
1. Scroll down through the settings to the "GitHub Pages" Section.
1. Underneath "Source", click the dropdown labelled "None" and then select "Master Branch".
1. The page should refresh automatically and then deploy the website.
1. If the page refuses to load, scroll down to "template" and select a template underneath "source". 
1. Scroll back down to the section entitled "GitHub Pages" and the link to the deployed website should be available.

**How to run this project locally**

To clone this project into Gitpod you will need:
* A Github account. [Create a Github account here](https://github.com/)
* Use the Chrome browser 

Then follow these steps:
1. Install the [Gitpod Browser Extensions for Chrome](https://www.gitpod.io/docs/browser-extension/)
1. After installation, restart your browser
1. Log into your [Gitpod](https://gitpod.com) account.
1. Navigate to the [Project GitHub repository](https://github.com/johnroutledge/milestone-project-1)
1. Click the green "Gitpod" button located on the right of the repository
1. This initiates a fresh gitpod workspace allowing you to work locally on the code.

**Adding and committing files**

Adding files to the Github repository is done as follows:

Type the following into the command line:

        git add .  
        git commit -m "this is what I have done"
        git push

Using the '.' will add all files to the repository staging area. Single files are added using file path names, i.e.: about.html or assets/images/hero.png.
Be clear and consistent with your commit comments - it's a good idea to use imperatives to explain your changes. 
Pushing moves your work from the staging area to your repository.

***

## Credits

**Content**

- 

**Media**

- 

**Code**

- 

**Acknowledgements**

- To Brian Machiara, my Code Institute mentor, for giving me invaluable tips and insight throughout the whole process.
- 
