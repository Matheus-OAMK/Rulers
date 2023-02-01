# Rulers project

## Code implementation rules

### Use the "Project" section in GitHub:

There're tasks that must be done, if you want to create a task using this template: "#page // task definition" example below "#mainPage // Manage the height of the first-look class box" After creating the task, leave as detailed description as it needs to be understandable.

### Main rules:

**_1. Each developer works on different pages at the same time!_**

**_2. If you started to work on the specific task, page, don't change anything in other files, that don't need to be changed in your specific task_**

**_3. Create class, id, and attribute names dependently on the page where that classes are located, examples: allcards-filter-box, collection-filter-box_**

### You found the task that you would like to implement, follow these steps:

1.  Drag the task into the "In progress" column in the "Projects" section in GitHub.
2.  Fetch all the changes from the Rules repo. > **git fetch**
3.  Pulling all changes from Rulers repo. > **git pull**
4.  Navigate to the "draft" branch. > **git checkout draft**
5.  Create another branch based on the "draft" branch, name it "tsk-1", the number depends on the task number you took. > **git checkout -b tsk-1**
6.  Open that new branch for that specific task in VS code (check if the current branch is correct by looking to the bottom-left corner in VS code window).
7.  Write your code, and don't be afraid to change old lines of code if it is necessary, you will not face conflicts but remember that any changes to old code may have some side effects. Don't forget to comment on your code to make it more understandable for others.
8.  Save your changes, make sure you are in your task branch > **git branch** or **git status**, then run > **git add -A** and **git commit -m "#1 Short comment what you've done"** (number in a comment in commit "#1" depends on the taken task number).
9.  Push your local changes into GitHub. > **git push -u origin tsk-1**
10. Open GitHub in the browser, and check for your pushed branch there.
11. Create a new pull request from your pushed branch into the "draft" branch. (comment your pull request, create pull only). **_NOTE:_** *don't force a pull request, wait until one of the other developers makes a review of this pull*
12. Mention in Telegram that you've created a new pull request.
13. Only when the pull is accepted, delete your local branch for that task > **git branch -D tsk-1**. Make sure you have "draft" and "main" branches left only > **git branch**, the remote branch will be deleted by reviewer

<!-- end of the list -->

### You struggled during the coding part and you need somebody to end your taken task (you are on step 7):

8.  Save your changes, make sure you are in your task branch > **git branch** or **git status**, then run > **git add -A** and **git commit -m "#1 Short comment what you've done and where struggled"** (number in a comment in commit "#1" depends on the taken task number).
9.  Push your local changes into GitHub. > **git push -u origin tsk-1**
10. Open GitHub in the browser, and check for your pushed branch there.
11. Drag the task into the "Got a problem" column in the "Projects" section in GitHub.
12. Mention your problem in Telegram and somebody will take your task.

### You are taking unfinished task:

1.  Drag the task into the "In progress" column in the "Projects" section in GitHub.
2.  Fetch all the changes from the Rules repo. > **git fetch**
3.  Pulling all changes from Rulers repo. > **git pull**
4.  Navigate to the "draft" branch. > **git checkout tsk-1**
5.  Write your code, and don't be afraid to change old lines of code if it is necessary, you will not face conflicts but remember that any changes to old code may have some side effects. Don't forget to comment on your code to make it more understandable for others.
6.  Save your changes, make sure you are in your task branch > **git branch** or **git status**, then run > **git add -A** and **git commit -m "#1FIX Short comment what you've done"** (number in a comment in commit "#1" depends on the taken task number).
7.  Push your local changes into GitHub. > **git push -u origin tsk-1**
8.  Open GitHub in the browser, and check for your pushed branch there.
9.  Create a new pull request from your pushed branch into the "draft" branch. (comment your pull request, create pull only). **_NOTE:_** *don't force a pull request, wait until one of the other developers makes a review of this pull*
10. Mention in Telegram that you've created a new pull request.
11. Only when the pull is accepted, delete your local branch for that task > **git branch -D tsk-1**. Make sure you have "draft" and "main" branches left only > **git branch**, the remote branch will be deleted by reviewer
