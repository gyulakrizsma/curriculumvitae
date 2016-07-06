# Curriculum Vitae

This source code represents my **Resume** website.

During the implementation I used several technologies, which may help you as well, using those in a real world application.

## Technologies:

*   ASP.NET Core 1.0.0 RTM.
*   Docker
*   Gulp tasks
*   Bower
*   NPM package manager

## To make it run

*   [Download](https://www.microsoft.com/net) .NET Core 1.0
*   Clone my repository into you working directory
*   Run **dotnet restore** in a terminal/command prompt
*   Run **npm install**. If you don't have npm then [download](https://nodejs.org/en/download/) node.js
*   Run **bower install**
*   Run **gulp bower** and then **gulp prod**. Have a look at the gulpfile.js for the other gulp tasks
*   Run **dotnet run**

At this point you should be able to go to the **http://localhost:5000** and the website should be running.
You can set the environment to either DEVELOPMENT or PRODUCTION. Just run **set ASPNETCORE_ENVIRONMENT=DEVELOPMENT** or **set ASPNETCORE_ENVIRONMENT=PRODUCTION**, and then run **dotnet run** again.
You should see in the console log after **dotnet run** in which environment does the website run.

Happy coding!