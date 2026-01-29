// 1) Initialize a new Git repository in the project folder
// Command:
// git init

// Explanation:
// This command converts the current folder into a Git repository by creating a .git directory.
// Git can now track changes in this project.

// --------------------------------------------------

// 2) Try to commit before adding any files
// Command:
// git commit -m "first commit"

// Explanation:
// Git shows “nothing to commit” because there were no files added or tracked yet.
// A commit is only possible after files are added.

// --------------------------------------------------

// 3) Rename the default branch to main
// Command:
// git branch -M main

// Explanation:
// Renames the default branch (master) to main, which is the standard branch name used by GitHub.

// --------------------------------------------------

// 4) Add GitHub repository as a remote
// Command:
// git remote add origin https://github.com/naveencoderepo-star/JavaScript-Code.git

// Explanation:
// Links the local repository to the remote GitHub repository.
// "origin" is the default name for the remote repository.

// --------------------------------------------------

// 5) Try pushing to GitHub before any commit exists
// Command:
// git push -u origin main

// Explanation:
// Git throws an error because no commit exists yet.
// A branch is created only after the first commit.

// --------------------------------------------------

// 6) Create a README file
// Command:
// echo "# JavaScript Code" > README.md

// Explanation:
// Creates a README.md file which is commonly used to describe the project.

// --------------------------------------------------

// 7) Add files to the staging area
// Command:
// git add .

// Explanation:
// Adds all files (README.md) to Git’s staging area so they are ready to be committed.

// --------------------------------------------------

// 8) Create the first commit
// Command:
// git commit -m "first commit"

// Explanation:
// Saves the current state of the project into Git history.
// This is the first (root) commit.

// --------------------------------------------------

// 9) Ensure the branch name is main
// Command:
// git branch -M main

// Explanation:
// Confirms that the current branch is named main.

// --------------------------------------------------

// 10) Push the code to GitHub
// Command:
// git push -u origin main

// Explanation:
// Uploads the local commits to the GitHub repository.
// The -u flag sets upstream tracking so future pushes can be done using `git push`.

// --------------------------------------------------

// Final Result:
// - Local repository created
// - README.md committed
// - Remote GitHub repository connected
// - Code successfully pushed to the main branch
