# places You've Been

# Author
Daniel Manyara

.....

## Project Description

This project is a dynamic travel or experience journal that allows users to document and display key details about their trips or visits.
 it captures important landmarks visited, the time of the year, and any personal notes or observations.Using a clean and
 structured template, the project presents this information clearly, making it easy to review and share memorable experiences. 


The implementation leverages JavaScript template literals for seamless integration of user data into the HTML display,
 ensuring a responsive and interactive interface.

...

## technologies used
-HTML
-CSS
-JavaScript

...


## set up instruction
1. Clone or download the repository
2. Open the project foldier
3. Open 'index.html'in a web browser
4. Fill in the form to add a place
5. Click a place name to view its details

...

## Business logic
- A 'place constructor is used to create place objects
- Each place object contains:
   - location
   - landmarks
   - timeofYear\
   - notes
- A prototype method'get "getDetails" return formatted place
details
- All places objects are strored in an array

...

## tests (Pseudo Code)

### Describe place()  

**Test:** It should create a place object with the correct properties.


code:
...javascript

const place = new Place("Kisii", "cammel park", "November", "Amazing experience");

place.location === "kisii";
place.landmarks === "cammel park";
place.timeOfYear === "November";
place.notes === "Amazing experience";
