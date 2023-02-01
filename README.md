# Rulers project

## Code implementation rules

### Use "Project" section in GitHub:

There're tasks that must be done, if you want to create a task use this template:
"#page // task definition" example below
"#mainPage // Manage the height of the first-look class box"
After creating the task, leave as detailed description as it needs to be understandable.

<!-- Main rules -->

### Main rules:

**_1. Each developer works on different pages at the same time!_**

**_2. If you started to work on the specific task, page, don't change anything in other files, that don't need to be changed in your specific task_**

**_3. Create class, id, atribute names dependingly on the page where that classes are located, examples: allcards-filter-box, collection-filter-box_**

### You found the task that you would like to implement, follow these steps:

1.  Drag the task into "In progress" column in "Projects" section in GitHub.
2.  Fetch all the changes from Rules repo. > **git fetch**
3.  Pulling all changes from Rulers repo. > **git pull**
4.  Navigate to "draft" branch. > **git checkout draft**
5.  Create another branch based on "draft" branch, name it "tsk-1", number depends on the task number you took. > **git checkout -b tsk-1**
6.  Open that new branch for that specific task in VS code (check if current branch is correct by looking to bottom-left corner in VS code window).
7.  Write your code, don't be affraid to change old lines of code if it is nescessary, you will not face with conflicts but remember that any cahnges to old code may have some side effects. Don't forget to comment your code to make it more understandable for others.
8.  Save your changes, make sure you are in your task branch > **git branch** or **git status**, then run > **git add -A** and **git commit -m "#1 Short comment what you've done"** (number in comment in commit "#1" depends on the taken task number).
9.  Push your local changes into GitHub. > **git push -u origin tsk-1**
10. Open GitHub in the browser, check for your pushed branch there.
11. Create new pull request from your pushed branch into "draft" branch. (comment your pull request, create pull only). **_NOTE:_** _don't force pull request, wait untill one of other developers make a review of this pull_
12. Mention in Telegram that you've created new pull request.
13. Only when pull accepted, delete your local branch, make sure you have left "draft" and "main" branches only > **git branch**, remote branch will be deleted by reviewer > **git branch -D tsk-1**

<!-- end of the list -->

### You struggled during the coding part and you need somebody to end your taken task (you are on the step 7):

8.  Save your changes, make sure you are in your task branch > **git branch** or **git status**, then run > **git add -A** and **git commit -m "#1 Short comment what you've done and where struggled"** (number in comment in commit "#1" depends on the taken task number).
9.  Push your local changes into GitHub. > **git push -u origin tsk-1**
10. Open GitHub in the browser, check for your pushed branch there.
11. Mention about your problem in Telegram and somebody will take your task.
