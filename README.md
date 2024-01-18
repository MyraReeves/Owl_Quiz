# AboutMe
A 201 project (starting with Lab 2 on 10/24/2023)

### 🦋 Author: Myra Reeves

## Project Name:  AboutMe Lab

Quoted instructions from the Lab 2 assignment on Canvas:
>Build out an “About Me” webpage that quizzes the user on fun facts which give the user some basic information about who you are and where you came from.
>
><br>
>
>* Create an About Me guessing game that utilizes HTML, CSS, & JavaScript.
>* Include on your HTML page a short biography, your education history, an overview of your job experience, and any goals that you may have.
>* Prompt the user a total of five yes or no questions. The user input for the answer must accept either y/n or yes/no responses while taking into consideration case sensitivity by normalizing the user input so that it can be validated (hint: look into the `.toUpperCase()` or `.toLowerCase()` functions). Be sure to let the user know if they answered the question correctly by alerting them with a response.
>* `Add console.log()` messages within your app to notify the user if they are correct. Before submitting this lab, comment out (don’t delete) your `console.log()` messages and replace them with `alerts()` to complete the project.
>
><br>
>
>* Ask the user their name through a `prompt()`
>* Display that name back to the user through a custom greeting welcoming them to your site.
>* Display the user’s name back to them in your final message to the user.
>
><br>
>
>### Developer Style Guide
>
>A style guide is a series of standards and practices that must be followed in order for your code to be accepted by the team. This can include variable naming, file structure, and process. Below is a list of practices that you will be required to follow within this lab:
>* Your JS file must contain a `'use strict'` declaration at the top, and your javascript file must be linked in your html file as an external script file.
>* Make sure that all code is cleanly written with correct indentation and syntax. Look at an example [JavaScript Style Guide](https://javascript.info/coding-style#syntax). Note that your JS must pass the rules in the linter that you installed.

<br>

<br>

### Lab 3

Quoted instructions from the Lab 3 assignment on Canvas:

>Continue to build off of your lab 2 submission by adding additional functionality to your About Me guessing game. Work in the same repository as you did for Lab 2, and modify your README.md file to describe your project with the new features you are adding.
>
>Convert your work experience and education summary into an unordered list using HTML.
>
>As a user, I would like to view a series of data related to the site owner's interests so that the I can quickly view the new information. Create a “Top Ten” at the bottom of your HTML page as an ordered list in HTML. Some ideas that you can include could be ten movies, ten favorite places, or ten places to visit. You may choose to do whatever top ten list that you wish.
>
>As a user, I would like to be guided to an answer through a series of feedback responses so that I can learn more about the site owner. Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number. Indicates through an alert if the guess is “too high” or “too low”. It should give the user exactly four opportunities to get the correct answer. After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.
>
>As a user, I would like to guess the answer to a question that could have many possibilities so that I can have fun with with a guessing game. Add a 7th question that has multiple possible correct answers that are stored in an array. Give the user 6 attempts to guess the correct answer. The guesses will end once the user guesses a correct answer or they run out of attempts. Display all the possible correct answers to the user. Consider using a loop of some sort for this question.
>
>As a user, I would like to know my final score so that I can know how well I did. Keep track of the total number of correct answers. At the end tell them how many they got correct out of the 7 questions asked.

<br>

<br>

### Lab 4

Pair Partner:  Immanuel Shin

Since I had not yet finished Lab 3 at the time of this lab, the instructor gave permission for my code being worked on to be my Lab 3 assignment instead of the new coding challenges.

I was Navigator (I said what to write while he was the one writing it) on my Lab 3 assignment: https://github.com/Myra-Sea/AboutMeLinks to an external site. 

I was Driver (I wrote the code that he told me to write) on his Lab 4 assignment:  https://github.com/Myra-Sea/PairProgrammingLinks to an external site. 

<br>

Quoted instructions from the Lab 4 assignment on Canvas:

>**Problem Domain**
>
>When available, your instructor will pair you with another student for this exercise in pair programming. The two of you will work on and extend each other’s About Me guessing game projects. Be sure to read and follow these instructions for pair programming very carefully.
>
>**Instructions for pair programming**
>
>Review all four sections below for lab. Pair program with your assigned partner to refactor each codebase. Equally divide your lab time so that you and your partner spend the same amount of time in each other’s code. Time management is critical.
>
>1. How To Get Code Ready For Work
>
>Be sure to follow these instructions VERY carefully.
>
>Note: Before starting these steps, make sure that both of your repositories are ‘clean’. In other words, everything is committed and pushed so that both the remote and local versions of your projects are in sync. This will prevent potential problems later.
>
>Decide whose code you will work on first. The owner of that code (who will be the Navigator) provides the link to their GitHub repo to the other member of the pair (who will be the Driver). You can send this link over Slack.
>
>The Driver follows the link to that repo and creates a fork of the repo in GitHub like we did in lecture.
>
>The Driver then goes to their fork of the repo (the URL should have the Driver’s GitHub name in it) and copies the link to that repo (the link should have the Driver’s GitHub name in it and should end in .git).
>
>Inside of the Driver’s main work directory on their laptop, make a directory with your partner’s name and then navigate (cd) into it. From there, enter the command `git clone the-link-you-copied`. That will create a local version of the forked repo on the Driver’s laptop.
>
>cd into that directory and enter `code .` in the terminal to open all of the files in VSCode.
>
>**Start working on the code!**
>
>2. Extend and Refine
>
>You’ll be making some edits to each other’s websites. After each bit of work is completed (in other words, after each successful modification of a single question), be sure to do an add-commit-push cycle (a-c-p) to place the code on GitHub and preserve a versioned history of your work.
>
>Move the logic for all questions into functions: In this class we learned about functions, and now we’ll move the logic for the individual questions into separate functions, and call those functions to run the game.
>
>In its most basic sense, this is pretty simple and straightforward: ‘wrap’ the logic and variables for a given question with function someFuncNameYouChoose() { at the beginning, and add a closing curly brace } at the end. To make the function execute, just call it afterwards: someFuncNameYouChoose(); After completing this step the game should behave exactly as it did before. a-c-p
>
>Update the README file: In the README file, add in the names of the Driver and Navigator and indicate that the code was worked on together. This is basic record-keeping so that you can keep up with how the code has been edited in a user-friendly format. a-c-p
>
>3. Push to GitHub; Make a Pull Request
>
>Once everything is finished, and the Driver has done the last edits and pushed them to GitHub, it’s time to send the edited code to the owner (who has been in the Navigator role the whole time, of course). We do this with a GitHub feature called a Pull Request, which we generally refer to as a PR.
>
>From the Driver’s repo that is a fork of the Navigator’s repo, hit the green button that says ‘Create pull request’.
>
>Follow the remaining steps as described onscreen and as shown here: https://help.GitHub.com/articles/using-pull-requests. (These instructions for doing a pull request from a forked repo to its source are deliberately vague, to give you practice in reading through instructions, trying things out, solving problems collaboratively, and getting guidance from documentation).
>
>The owner of the code (the Navigator) then goes to their GitHub repo for the project and accepts the pull request. After that, in terminal on their laptop, while in the same directory, enter the command ‘git pull origin main’ to retrieve the modified code from GitHub.
>
>When everything is finished for one person’s project, submit the links for the last pull request made from the Driver to the Navigator (in both cases) in the Canvas assignment.
>
>4. Pair Programming Basics
>
>In pair programming, there are two developers working on a single body of code on a single computer.
>
>One member of the pair is the Driver, and this person will be the one doing all of the actual typing work on the laptop. The Driver will be working on the Navigator’s code by way of forking and cloning the Navigator’s repository.
>
>The other member of the pair is the Navigator, and this person will work with only their voice and their thoughts.
>
>The Navigator does not touch the keyboard, nor does the Navigator work on their laptop “on the side”. The Navigator is fully engaged with the work that the pair is doing, typically using a piece of scratch paper to sketch diagrams, take notes, or list ideas. At most the Navigator uses their laptop to perhaps keep a copy of this assignment document open or to look up something needed to write the code, such as a reference page like MDN.
>
>Under no circumstances does the Navigator work on any code on their laptop: for the pair programming process to be effective, both parties must be fully engaged on the code they’re working on together.
>
>The lab time should be divided into two sections of approximately two hours each. At the halfway mark, you should swap roles and work on the other person’s code. Remember to watch the clock and determine the best point to swap roles.
>
>In the case of an odd number of students, one group will have three members and you should rotate through three roles: Driver, Navigator, Observer. Each person should take on each role one time. You will need to be even more mindful about watching the clock to ensure that equal time is devoted to all three projects.
<br>

<br>

### Lab 5

Quoted instructions from the Lab 5b assignment on Canvas:

>Apply finishing touches to your About Me website. Make sure your final app meets all of the requirements for this project.
>
>Deploy your app to GitHub Pages and add any additional final touches to your CSS. Run a Lighthouse report making sure your site scores between the 50-65 range and add a screenshot of your score to your README.md. Make sure your app is complete and meets all of the requirements from the prior labs. Remove any commented out console logs that were used in the questionnaire.

<br>

### Links and Resources

* [Setting Up A New 201 Code Project](https://codefellows.github.io/code-201-guide/curriculum/class-02/project-setup)
* [CodeFellows provided linter code](https://github.com/codefellows/seattle-code-201d106/blob/main/configs/.eslintrc.json)
* [CodeFellows provided .gitignore code](https://github.com/codefellows/seattle-code-201d106/blob/main/configs/.gitignore)
* [Default 201 README template](https://codefellows.github.io/code-201-guide/curriculum/class-02/README-template.html)
* [JavaScript Style Guide.](https://javascript.info/coding-style#syntax)
* [Eric Meyer’s reset.css file ](https://meyerweb.com/eric/tools/css/reset/)

<br>

### Lighthouse Accessibility Report Score

* Lab 2 score = 100%  Woot!

![A screenshot of today's 100% score from Lighthouse](img/ResizedLighthouseScreenshot.jpg)

* Lab 3 score = Still at 100%  Yeay!

![A screenshot of Lab 3's score from Lighthouse](img/ResizedLighthouse2.jpg)

* Lab 5b score = 100%

![A screenshot of Lab 5b's accessibility score from Lighthouse](img/Lighthouse10-30.jpg)

<Br>

<br>

### 🤔💭 Reflections and Comments 🤔💭

#### 📓 Lab 4 - Pair Programming Submission Notes:

I worked with Immanuel Shin.
Since I had not yet finished Lab 3 at the time of this lab, the instructor gave permission for my code being worked on to be my Lab 3 assignment.

I was Navigator (I said what to write while he was the one writing it) on my Lab 3 assignment: https://github.com/Myra-Sea/AboutMeLinks to an external site. 
I was Driver (I wrote the code that he told me to write) on his Lab 4 assignment:  https://github.com/Myra-Sea/PairProgrammingLinks to an external site. 

This was a great opportunity for me to learn from my fellow student!  Immanuel was exceptional at talking about the JavaScript situation in order to guide me towards what the solutions to my code should be (so that I could then tell him what code to write on my behalf) without ever giving me the solutions!  With his explanations of what he saw missing within my code, I solved how to finish the number guessing game, how to finish the array assignment, and how to add a counter at the end of my questions.

I know I wasn't nearly as much help to him on his own code, due to my lack of knowledge.  In fact, I fear I may have slowed down his coding since he had to tell me what to do and wait for me to do it instead of him being able to directly do it himself.  However, he was very patient and empathetic towards me throughout our entire interaction. 💜 I hope that explaining things outloud to me helped him with gaining understanding.

Thank you Immanuel!

Time Spent:
We worked on finishing my Lab 3 code for 1 hour.
We spent the second hour on converting his yes/no questions into one function and using a for loop (Stretch Goal 2).
We then spent slightly over one final hour on solving how to keep a tally of correct answers after having made that change above to his code, since that part of the Stretch Goal was the most difficult piece to solve.
Total = Slightly over 3 hours total spent on this lab.

That was within the amount of time I had expected to spend on it. 🙂

<br>

<Br>

#### 📓 Lab 5 - Submission Notes:

GitHub repo is at:  https://github.com/Myra-Sea/AboutMeLinks to an external site. 

Deployed website is at:  https://myra-sea.github.io/AboutMe/Links to an external site. 

I am now content with the visual layout of all the elements.  There is something odd going on with the font size, but it's not worth continuing to try to fix.  I had made it size 18px font (due to the accessibility video recommending that), and that was working for awhile, but then something at a later point seems to have overridden that command because it is no longer look that size anymore on my browsers.  Otherwise, I think all of the CSS is working how I had wanted it.

Problem solving how to stack the boxes on top of each other but also side-by-side was a fun puzzle.  I enjoyed the opportunity the weekend offered to review CSS knowledge better.