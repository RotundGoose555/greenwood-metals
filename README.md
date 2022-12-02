# Development

### Link to Deployed Website
https://rotundgoose555.github.io/greenwood-metals

### Goal and Value of the Application
The goal of this application is to provide a shop interface for Greenwood Silver, a small independent jeweler currently without a web presence. This site will allow users to better peruse Greenwood Metals available merchandise. Users can filter and sort by type of jewlery and cost as well as sort by date added. Finally users can add and remove items from a cart which calculates the total of their selected items. 

### Usability Principles Considered
For the layout of my website I wanted to keep a sleek black and white look while still making the page visually interesting/parsable. To do this I used drop shadows to differentiate the header from the menu from the inventory. For the menu I used bold title and spans to separate the different categories from one another. The menu is almost entirely center aligned, the one exception is the cart list which is right justified so that the remove buttons stay vertically aligned. Because i built this without a third-party library I had a tough time getting hover and clicked state changes to update css styling. This is something I want to continue to work on because right I think the buttons and whether they're active is a little hard to determine as the user. 

### Organization of Components
I broke my project down into a series of components using app to provide the overarching layout for the website. Item is the primary component containing the sort, filter, and cart components while drawing from/updating the inventory component.  

### How Data is Passed Down Through Components
Inventory contains all the items information including three boolean variables cart, filterItems, and filterCost which are true when the item is in the users cart, when it meets the users type criteria and cost criteria respectively. The inventory is filtered using these boolean variables to produce the filtered array in the item component. This filtered array is what's passed to the sort component and what populates the website which allows the site to track/stack multiple filter and sort criteria. 


### How the User Triggers State Changes
When the user clicks a button on the page to sort, filter, or add inventory to the cart the respective components handle the buttons/labels state changes (the button visually being clicked, the slider moving, or the cost label updating) these components then call item component functions (passed via props) to update the filter list and cart which in turn updates the inventory display.