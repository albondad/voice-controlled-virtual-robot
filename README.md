
# Voice Controlled Virtual Robot
This repository contains the code for my submission for the **Facebook's Hackathon: AI, Build AI voice interactions with Wit.ai**.

## About
This repository contains my solution to the Developer Test provided by Halo. Below, I thought it would be useful to include my thought process, to help show how I approached this test.

## Set Up
1. **Clone this repository**
This can be done using
2. **Install NPM**
Node Package Manager is the package manager I'm using. Once you have it installed, you can navigate the the repositories directoy and run `npm i` in the terminal to install all the necessary dependencies.
3. **Add Environment Variables**
I've use environment variables to store the token that allows the application to connect to the Wit.ai services. You can view the `.env.example` file to view what variables need to be defined in the `.env` file.
4. **Run the React Application**
You can run the application by running the command `run npm start-react`. This will open the browser application that allows you to record your commands and see the virtual robot reacting to your commands.
5. **Run the Express Application**
You can run the application by running the command `run npm start-express`.  This express application is what the browser application connects to to communicate with the Wit.ai service.
6. **Start playing around.**
The project is still in development, but your should be able to use commands such as "move forward", "move up", "move backwards", and "move down" to get the application to work. You also need to configure your own Wit.ai application so it recognizes these commands and return the appropriate intents.