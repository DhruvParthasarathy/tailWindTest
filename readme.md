## Setup
- Clone project and pull main branch
- Run npm install to download required dependencies
- Serve locally

## How Tailwind works

- There is a source css file which has the core tailwind styles and functionalities and then we can also write own css using tailwind features and syntaxes

- Then we use Tailwind to process the css to a vanilla css at build time with all the CSS rules inside it and then we can link to that css to our html page

- Everytime we make changes to source css file, we have to run a tailwind script to process that to a new output css file, we will rarely have to do this

## Project structure

- There is a source and a public folder. The source folder is where the source code for the css is written and tailwind compiles that and writes the output css file to the public folder. Along with the output css file, other html and js files are placed here and deployed

- Tailwind installation docs : https://tailwindcss.com/docs/installation
- When the project is build, the following script is run which takes the source css file and gives out the output css file in the public folder "tailwindcss build src/styles.css -o public/styles.css"

## Tailwind config file

- We can add a tailwind config file to extend existing rules or add extra classes for colors / fonts or spacing
- This config file can also be used to modify existing rules
- Initially the config file is not present it can be created by using the command "npx tailwindcss init --full"
- After making changes to any property in the tailwind.config.js file, the output css file can be update by running the "npm build-css " command. This same command can be used after creating a custom config file and adding properties to it
- The best practice is to create a blank config file to extend the default rules so that we can keep track of the changes implemented
- To create one use "npx tailwindcss init" - this creates a blank config file

## Tailwind classes

### Responsive size
- Classes can be prefixed with 'sm', 'md', 'lg', 'xl' - these are for screen sizes 640px and up, 768px and up, 1024px and up, 1280px and up.
- We need to make note that the media querries use the min-width as the starting point and the style changes for sizes greater than the min width. This is a mobile first approach.


### Icons are from https://heroicons.com/