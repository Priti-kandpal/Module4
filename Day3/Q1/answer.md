             Understanding Project Management in NodeJS
------------------------------------------------------------------------------------------------
## a. Package Managers
- What is a package manager?
>A package manager is essentially a developer's best friend when it comes to handling external libraries, or packages, that a project relies on. It's a tool for installing, updating, removing, and generally managing these dependencies. This means we don't have to reinvent the wheel; we can leverage code that's already out there, crafted by others.
if we ar\re building a Node.js application and need to work with dates, you could use a package manager to install something like dayjs, rather than building your own date-handling functions from the ground up.

- Why do we need package managers in backend development?

>Package managers significantly cut down on development time by allowing us to reuse pre-existing libraries. 
>They also handle project dependencies automatically, which is a huge help. 
>They help maintain consistency across various development environments. And, of course, they make it simple to update or roll back libraries as needed.

- Problems faced if package managers are not used:
>Without package managers, developers face a few headaches.
>They have to manually hunt down and keep track of libraries.
>Version clashes are a real possibility.
>Setting up projects becomes a drawn-out process, prone to mistakes.
>Collaboration suffers because dependencies aren't consistent.
------------------------------------------------------------------------------------------------

## b. NPM (Node Package Manager)

- What is NPM?
>NPM, short for Node Package Manager, is the go-to package manager for Node.js. It lets developers install, share, and manage JavaScript packages for their Node.js applications.
>NPM is made up of two main parts:
1: A command-line tool, simply called npm.
2: An online registry that hosts thousands of packages.

- Why is NPM important for Node.js applications?
>NPM is important because it offers several key advantages:
1: It opens the door to a vast world of open-source packages.
2: It streamlines how dependencies are handled.
3: It helps keep projects organized and versions under control.
4: It is tightly integrated with Node.js.

- How NPM helps in managing dependencies:
>NPM handles dependencies through several key actions:
1: It installs necessary packages via commands such as npm install.
2: It documents dependencies and their specific versions within package.json.
3: It ensures version consistency by locking exact versions in package-lock.json.

example:
npm install express : This command installs Express and automatically updates package.json.

------------------------------------------------------------------------------------------------


## c. Backend Project Initialization

- What is the command used to initialize a backend (Node.js) project?
The command used is:
npm init

- Explain what npm init and npm init -y do

1. npm init:

>This command initiates an interactive process.
>It prompts the user for information, including project name, version, description, and entry file.
>It generates a package.json file based on the provided responses.

2. npm init -y:

>ignores every question
>generates package.json automatically using default values
>Faster and frequently utilized for speedy setup
------------------------------------------------------------------------------------------------


## d. Files and Folders Created After Project Intialization

- Explain the purpose and importance of:

# 1. package.json
>serves as a Node.js project's primary configuration file.
>includes dependencies, scripts, and project metadata.
>helps NPM in comprehending project management and operation.
>Importance: Project configuration and dependency management are impossible without package.json.

# 2. node_modules

>includes all installed dependencies along with their internal files.
>automatically generated upon installation of packages
>Significance: It permits the use of external libraries by the application.

# 3.package-lock.json
>keeps track of the precise installed dependency versions.
>guarantees that each machine has the same dependency versions installed.
>Prevents unexpected issues caused by version changes.

# Which files/folders should not be pushed to GitHub and why?

1:node_modules
- Extremely big in size
- Can be recreated using npm install
- Thse files should be added to.gitignore.

# Which files must be committed and why in GitHub

1:package.json
- specifies scripts and project dependencies.

2: package-lock.json
- guarantees consistent versions of dependencies

3:Source code files for applications
-Anyone can clone the project and use npm install to run it correctly thanks to these files.

------------------------------------------------------------------------------------------------
