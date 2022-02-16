# Basic SPA

For steps on how to work with this repository [please see here](https://docs.labs.lambdaschool.com/labs-spa-starter/)

# african-marketplace

You can find the deployed project on Vercel https://african-marketplace-tau.vercel.app/
The API is hosted on heroku (https://african-marketplace-1.herokuapp.com/api/items).

## Contributors


|                                                       [Taras Shulhan](https://github.com/tarasshulhan)                                                    
|                                                       [Amethyst Williams](https://github.com/AmethystWillia/)                                                   |                                                       [Marcel Rodriguez](https://github.com/Marcel-rodriguez/)                                                        |                                                       [Phillip Galbraith](https://github.com/topstock/)                                                        
|
| :-----------------------------------------------------------------------------------------------------------------------------------------: 
| :-------------------------------------------------------------------------------------------------------------------------------------------: 
| :-----------------------------------------------------------------------------------------------------------------------------------------: 
| :-------------------------------------------------------------------------------------------------------------------------------------------: 
| :-----------------------------------------------------------------------------------------------------------------------------------------: 
|
| [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-male.png" width = "200" />](https://github.com/tarasshulhan/)   
| [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-female.png" width = "200" />](https://github.com/AmethystWillia/) 
| [<img src="https://avatars.githubusercontent.com/u/55255486?v=4" width = "200" />](https://github.com/Marcel-rodriguez/) 
| [<img src="https://avatars.githubusercontent.com/u/81811191?v=4" width = "200" />](https://github.com/topstock/) 
|
|                               
|                                [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/tarasshulhan/)                                
|                            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/AmethystWillia/)                             
|                          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Marcel-rodriguez/)                           
|                          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/topstock/)                           
|
|                [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/taras-shulhan/)                
|                 [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/amethyst-r-williams/)                 
|                [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/marcelrodriguez0/)                
|                 [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/phillip-galbraith-web/)                 

<br>
<br>

![React](https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg)

### Key Features

A small business owner in can login and see relevant prices in various categories to help them set their own prices.

They can also make listing for items they want to sell, which will show up to all users.

They add a new item by selecting their market location and typing in their item's name, description, and price.

A shopper is able to view items by category.

#### Front end deployed to Vercel

This SPA was is build from create react app with Redux and global styling

https://african-marketplace-tau.vercel.app/

#### [Back end] built using: https://african-marketplace-1.herokuapp.com/api/items Heroku

GET https://african-marketplace-1.herokuapp.com/api/items
headers {Authorization: token}

POST https://african-marketplace-1.herokuapp.com/api/items
headers {Authorization: token}
body {name, category, price, location, description(optional), user_id}


PUT https://african-marketplace-1.herokuapp.com/api/items/:id
headers {Authorization: token}
body {name, category, price, location, description(optional), user_id}
id is item_id in this case (edited) 

DELETE https://african-marketplace-1.herokuapp.com/api/items/:id
headers {Authorization: token}
id is item_id in this case (edited) 

#### Documentation


# APIs

# Installation Instructions

 npm install

## Proposal

Small business owners struggle to market their products by using the advantage of their location and also set prices effectively.
Africa Locally Owned Sales 
gives small business owners tools to market their products effectively by comparing prices and sharing locations, and is also a resource for local shoppers.
"Where local products thrive with competitive prices."

## MVP  Features

A small business owner in an African country can login and see relevant prices in various categories to help them set their own prices.

They can also make listing for items they want to sell, which will show up to all users.

They add a new item by selecting their market location and typing in their item's name, description, and price.

## Front-End Developers: To begin building a component

make sure you are on the main branch for the first pull. it's okay if this doesn't "do anything".
 - $ git branch// make sure you're working on main 

 - $ git pull origin main // make sure your local main branch is up to date

 - $ git checkout -b <the name of the component you are working on & your first name>
  --- example: - $ git checkout -b login-form-phil

// now you are working on your own branch

## When you want to submit your changes
 - $ git add .
 - $ git commit -m "< describe last change made >
 
Navigate to main
 - $ git checkout main             
 
Pull the latest main 
- $ git pull origin main

Navigate to branch to make sure it's got the most up to date changes from main
 - $ git checkout < your branch name>
 - $ git merge main

Make sure your component still works
Push to your branch
 - $ git push origin < your branch name>

 Submit a pull request to main on GitHub.com
