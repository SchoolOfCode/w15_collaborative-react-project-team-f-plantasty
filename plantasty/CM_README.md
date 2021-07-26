# Plantasty - personalised meals at just one click away

Plantasty React app was created by Alina Savin, Maryam Dar, Tania Yeromiyan and Tom Walker. The problem that the app is trying to solve is to help people reduce meat an dairy consumption from their diets.

The website allows the user to create and generate a costumised daily meal plan based on the user diet preferences, maximum calories target for the day and the ability to exclude any food intolerances they might have. The recipes are fetched from the Spoonacular API, sot he user gets detailed meal information for each of the recipes generated.

The React app has some extra features, such as a page with information about nutrition and myth busters explained around a vegan diet. Using the shopping list feature you can create a shopping list. There is also a favourites page where you can save your favourite recipes to come back to.

COMING SOON : sing in/sing up page

## Plantasty presentation of the project

[VIDEO](https://vimeo.com/573594031/43b86ff6b6)

## Run Locally

Clone the project

```bash
  git clone https://github.com/SchoolOfCode/w15_collaborative-react-project-team-f-plantasty.git
```

Go to the project directory

```bash
  cd plantasty
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Components

Using React Developers Tools on Google Chrome you can inspect and see each component in the Plantasty App.

![image](https://user-images.githubusercontent.com/81428418/127002095-20ac7028-370e-44d6-b811-a7489e6a5f28.png)

All components are located inside the components folder inside src folder. The main components used in the app are:

- Header
- Navbar
- InfoCard
- Single Choice Form
- Multiple Choice Form
- MealList
- FullRecipeCard
- Mythbusters
- ShoppingItems
- VegucateMe Card

[Please see a diagram of the component tree here and also the UX/UI design process and planning of the project](https://www.figma.com/file/n8EQaExWEpB0CUSXmXBrfc/Week-11---UX-Project-Board?node-id=0%3A1)

## App

This is the main component of the app. React router is used to navigate between the different pages of the app.

It also holds the functions needed to:

- select and set diet preference of the user
- select and set food intolerance of the user
- select and set Calories input value from the user

## Pages

There is a separate folder of the pages that are linked using React router that are accesed by the user in the navbar.

### Homepage

This page includes:

- Hero components with explination of the website
- InfoCard components rendered with a button that link to the CreateMealPlan page

![image](https://user-images.githubusercontent.com/81428418/127004255-dca8684e-625b-4650-a624-0bc8e5b90844.png)

### CreateMealPlan

This page includes:

- Single Choice Form component where the user can select his dietary preference
- Multiple Choice Form component that allows the user to select his food intolerances
- CaloriesInput component that allows the user to input the maximum calories target for the day
- Button that generates meal plan and links to the MealPlanCreated page

![image](https://user-images.githubusercontent.com/81428418/127004349-80d302b1-3fc0-4555-9220-5df0d8513ccc.png)

### MealPlanCreated

This page will display the daily meal plan with 3 recipes for each day. The FullRecipeCard component will display the recipe information including a button that takes you to the full recipe link and a Favouritesbutton that allows the user to save the recipe to the Favourites page for later access.

There is also a Calendar component that allows the user to switch between the days of the week and get a new meal plan generated for each day.

![image](https://user-images.githubusercontent.com/81428418/127005061-06bf2e89-687b-4404-8a86-d1320bdaa275.png)

### ShoppingList

This page allows the user to create a personalised shopping list by adding and deleting any ingredients.

![image](https://user-images.githubusercontent.com/81428418/127005394-23a2fdaa-466c-410a-9a13-034036b5bc28.png)

### VegucateMe

This page hold the Mythbusters component and also the VegucateMe Card that hold nutritional information.

## Reusable components

- Logo
- TextButton
- IconButton

## CSS

Each component has its own CSS and _CSS modules stylesheet_ is used to add the CSS.

# Dependencies

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

API information is fetched from [Spoonacular](https://spoonacular.com/food-api)

- "@syncfusion/ej2-react-calendars": "^19.2.46",
- @testing-library/jest-dom": "^5.14.1"
- "@testing-library/react": "^11.2.7",
- "@testing-library/user-event": "^12.8.3",
- "react": "^17.0.2",
- "react-dom": "^17.0.2",
- "react-icons": "^4.2.0",
- "react-router-dom": "^5.2.0",
- "react-scripts": "4.0.3",
- "react-star-ratings": "^2.3.0",
- "router": "^1.3.5",
- "simple-react-footer": "^1.0.2",
- "styled-components": "^5.3.0",
- "web-vitals": "^1.1.2"

## Git Hub Links

- [Alina Savin](https://github.com/alinasavin)
- [Tania Yeromiyan](https://github.com/TaniaY21)
- [Maryam Dar](https://github.com/md126)
- [Tom Walker](https://github.com/Pillroy)
