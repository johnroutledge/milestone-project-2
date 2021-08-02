# Pop Bang Boing
**Interactive Frontend Development Milestone Project**

![Main Mockup](https://johnroutledge.github.io/milestone-project-2/assets/images/mockup.jpg "Main Mockup")

[Link to Live Website](https://johnroutledge.github.io/milestone-project-2/index.html)

[GitHub Repo](https://github.com/johnroutledge/milestone-project-2)

**Rationale**

With the ever increasing ubiquity of mobile devices and tablets, there is a huge demand for games that require very little time investment.
Users want a game that is easy to understand, quick to play and gives instant gratification.

This website meets such needs through an adaptation of a classic drinking game which I renamed 'Pop, Bang, Boing'. This change came about when in 
a classroom scenario and the three action words had to be more student-friendly. In the original version, people sat in a circle and take it in turns
to say either 'pop', 'bang' or 'boing' which, in turn, would determine who was next to speak.  Players who were too slow to respond, or who spoke out 
of turn, would be eliminated from the game (and would have to perform a forfeit of some kind).  

I thought it would be a fun idea to bring this game to electronic devices in order to provide users with some light relief and entertainment.  In my version,
rather than people being eliminated from the game, the aim is to click on the correct circle as many times as possible in thirty seconds.  The action word 
is chosen at random by the program.

The typical user for the website would be someone:
* Looking for some quick, light-hearted entertainment
* Who likes retro-style games
* Who is trying to improve their hand-eye coordination
* Who wants to speed up their reactions
* Who doesn't have too much time to invest in a game

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

To make sure the game intuitive to navigate and play, I kept the controls in a central position. This is very important for 
mobile users as it allows for one-handed gameplay and also for desktop users as it keeps mouse-movement to a single movement.
Through a minimum of visual content, I also reduced distraction and maximized engagement.


**Skeleton**

![Wireframes](https://johnroutledge.github.io/milestone-project-2/assets/images/ms2_gameplay_wireframes.png "Wireframes")

To make sure the game intuitive to navigate and play, I kept the controls in a central position. This is very important for 
mobile users as it allows for one-handed gameplay and also for desktop users as it keeps mouse-movement to a single movement.
Through a minimum of visual content, I also reduced distraction and maximized engagement.

**Surface**

The 'arcade' font was chosen to give a classic arcade game feel, while the neon colour scheme added to this style.  The colour scheme was chosen as it feels kitsch and retro, while at the same time being visually stimulating.

***


## Features

**Implemented**
* Highlighted buttons on hover to enhance the UX and intuitiveness of gameplay
* Random color each time action word changes to emphasise when a new action appears
* Neon color scheme and fonts to give a retro feel
* Classic game play sound effects to maintain the retro feel and also give extra user feedback
* Instructions that load as a modal when page is loaded and also when 'help' button is pressed
* High score area to add an element of competitiveness

**Future Features to Implement**
* Have extra leaderboards which save scores permanently. There could be one for the user's all-time best score, and another for all users globally.
* Add a demo mode which helps visual learners with the game instructions
* Give a choice of background images and color schemes to add to the UX

***

## Technologies Employed

* HTML
* CSS
* JavaScript
* JQuery
* Github/Gitpod
* BootstrapCDN (Bootstrap 4)
* Google Fonts
* Google Dev Tools 
* Google Lighthouse

***

## Testing

|  Test Label                                   | Action         | Expected Outcome                                          | Test Outcome  |
|-----------------------------------------------|----------------|-----------------------------------------------------------|---------------|
|  Initial page load                            | Page load      |  Instrucion modal should appear on top                    | PASS          |
|  Instruction modal close button               | Click          |  Instruction modal should close when clicked              | PASS          |
|  Marquee text                                 | Page load      |  Should scroll consistently at all times                  | PASS          |
|  Help button                                  | Pre-play       |  Should be enabled and highlighted on focus               | PASS          |
|  Play button                                  | Pre-play       |  Should be enabled and highlighted on focus               | PASS          |
|  Help button                                  | Click          |  Instrucion modal should appear on top                    | PASS          |
|  Play button                                  | Click          |  Countdown should trigger followed by game start          | PASS          |
|  Eight circle buttons                         | Pre-play       |  Should be disabled pre-play                              | PASS          |
|  Help button                                  | In-play        |  Should be disabled in-play                               | PASS          |
|  Play button                                  | In-play        |  Should be disabled in-play                               | PASS          |
|  Eight circle buttons                         | In-play        |  Should be enabled and highlighted on focus               | PASS          |
|  Countdown timer                              | In-play        |  Should perform a three-second countdown then 'Ready?'    | PASS          |
|  Gameplay timer                               | In-play        |  Should run for 30 seconds unless incorrect button click  | PASS          |
|  Action word                                  | In-play        |  Should change to new action if correct button clicked    | PASS          |
|  Action word color                            | In-play        |  Should change colour if correct button clicked           | PASS          |
|  Game score update                            | In-play        |  Should increment by one if correct button clicked        | PASS          |
|  Correct click sound                          | In-play        |  Should be audible if correct button clicked              | PASS          |
|  Incorrect click sound                        | In-play        |  Should be audible if incorrect button clicked            | PASS          |
|  Game over sound                              | In-play        |  Should be audible if time runs out                       | PASS          |
|  High score update                            | Game end       |  Should update if new high score achieved                 | PASS          |
|  High score sound                             | Game end       |  Should be audible if new high score achieved             | PASS          |
|  Countdown timer                              | Game end       |  Should reset to zero                                     | PASS          |
|  Action word                                  | Game end       |  Should display 'Game over' or 'New High'                 | PASS          |
|  Game score                                   | Game end       |  Should reset to zero                                     | PASS          |
|  Media Query mobile screen size               | Resize screen  |  Page should display correctly on mobile screen           | PASS          |
|  Media Query tablet screen size               | Resize screen  |  Page should display correctly on tablet screen           | PASS          |
|  Media Query desktop screen size              | Resize screen  |  Page should display correctly on 14 inch screen          | PASS          |
|  Media Query 5k screen size                   | Resize screen  |  Page should display correctly on 5k screen               | PASS          |
|  Marquee text                                 | Resize screen  |  Should fit partial width of screens above mobile size    | PASS          |
|  Marquee text                                 | Resize screen  |  Should fit entire width of mobile screen                 | PASS          |
|  Copyright text                               | Resize screen  |  Should be visible on screens above mobile size           | PASS          |
|  Copyright text                               | Resize screen  |  Should not be visible mobile screens                     | PASS          |

**Testing User Stories**

1. As someone who only has a few minutes to spare, I want a game that can be picked up and put down without any commitment.
* Yes, the game requires mimimal time investment (30 seconds per game) with no need to revisit the game in terms of saving progress.
2. As someone short on time, I need a game which is intuitive to play.
* Yes, by showing the instructions on page load and having responsive gameplay feedback (both visual and audible), the game is very intuitive.
3. As a person who enjoys a challenge, I want a game to test my reflexes.
* Yes, due to the time constraints of the game as well as including a high score, the game requires focus, concentration and quick reflexes.
4. As someone who enjoys classic arcade games, I want a game that appeals to me in a retro-way.
* Yes, this is achieved by the use of a retro-style font and audio clips, a neon color scheme and a classic arcade background.  


**Testing Browser Compatibility**

The website was successfully opened and rendered correctly in Chrome (both desktop and mobile versions), Edge and Safari.

**Code Validation**

Both the HTML and CSS were validated using the W3C Markup Validation Service. This was initially done using the 'Validate by URI' option and pasting the link to the
Github repo...

**Testing with Lighthouse in Google Chrome Devtools**

![Lighthouse](https://johnroutledge.github.io/milestone-project-2/assets/images/lighthouse_results_desktop.png "Lighthouse")

* Performance: this was initially 91% which was acceptable. However, to improve load speed further, the 
background image was saved at a reduced resolution as it doesn't detract from the gameplay UX. Having 
done this, performance was increased to 95% (see Lighthouse screenshot above).
* Accessibility: was 98% after first test. This was due to the contrast between the font color and 
background on the instruction modal. Having changed the font color used on the instruction modal from a neon pink to a neon green, it went up to 100% (see Lighthouse screenshot above).
* Best Practices: was 100% after first test, so no changes needed.
* SEO: was 100% after first test, so no changed needed.

**Notable bug fixes**

1. When the first play() function is called, there is a noticable delay before the audio file is played. 
All subsequent audio files play without delay. Having tried various fixes (using MP3 files instead of WAV) without success, I decided to just play an empty sound before the start of the game. This fixed the problem as now the sounds are immediate when clicking circles during gameplay. ***INCLUDE SCREENSHOT OF CODE
2. Having played the game numerous times to make sure it played correctly, I noticed that when landing on circle number 0 (in the 12 o'clock position) from an anti-clockwise direction, if the next action word was 'boing' then the game flagged up wrong when clicking on the correct circle (number six). Having done a console.log to see which circle it was expecting, it turned out to be circle seven rather than circle six.  After looking at the code to see what the error could be, I discovered that I had mis-calculated when experiencing a negative number in my if...else if statement in the calculateCorrectCircle function. ***INCLUDE SCREENSHOT OF CODE
3. The three-second countdown timer on game start was very buggy initially.  Having researched this and discussing it with my mentor, this issue was found to be synchronicity
within the JavaScript.  The countdown timer was originally within its own function, but calling this prior to starting the main game timer resulted in both timers running concurrently which caused multiple DOM updates at the same time.  To rectify this, I took the countdown timer out of its own function and put it into a loop in the playGame function which removed any synchronicity issues and fixed the bug.  ***INCLUDE SCREENSHOT OF CODE
4. After clicking the play button, it was discovered that it could be clicked again before becoming
disabled and so causing further instances of the resetGame function being called. This resulted in it being possible to start multiple games at the same time. Having inspected the code, it was discovered that both the play and help buttons were being disabled within the countdown timer loop. To fix the bug, the code which disables both the play and help buttons was simply moved to the top of the resetGame function.  ***INCLUDE SCREENSHOT OF CODE

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

- The unknown person who created the drinking game from which Pop Bang Boing was derived.
- All gameplay code (with the exception of the countdown and timer) was created by myself.

**Media**

- The background arcade image was taken from www.wallpaper-mania.com
- Sound effects were taken from www.freesound.org

**Code**

- The neon color scheme and effect was adapted from Kevin Powell's YouTube channel.
- To position the circles in a circular fashion, I gained help www.stackoverflow.com
- The countdown and game timers used code adapted from 'How to set one minute counter in JavaScript' 
found on www.stackoverflow.com
- Matt Rudge at Code Institute for the basics behind the 'Register Modal' in the 'Whiskey Drop' mini-project which was adapted for my 'Instruction Modal'.

**Acknowledgements**

- To my wife, Chonchanok Routledge, and several work colleagues for testing the game on various mobile devices.
- To @Nat_Kate (via Slack) who discovered the play button bug.
- To Brian Machiara, my Code Institute mentor, for giving me invaluable tips and insight throughout the whole process.
