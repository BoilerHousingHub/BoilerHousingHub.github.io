# Boiler Housing Hub

## Our Goal:

Problem – Finding suitable on-campus housing can be a challenging and overwhelming process, especially for incoming freshmen and other students new to Purdue. The housing options vary significantly in terms of amenities, location, room types, costs, and other important factors, making it difficult for students to identify the best fit for their needs and preferences. Due to the sheer number of possible data points that can go into finding a suitable living space, the process of individually searching for and factoring in these options can be very overwhelming and time-consuming.

Our Vision – Due to this problem at hand, our goal was to make this process of factoring the many variables, such as location, room types, costs, etc., that go into the on-campus housing search easier by implementing a streamlined algorithm that aligns housing options with the user’s preferences. Guided by our personalized matching metric, our website empowers students to make better-informed decisions based on their unique preferences, ultimately enhancing their on-campus living experience.

---

## Data Collection:

### Data Type 1 – Raw Percentage:

**Bathrooms** – Percentage of rooms in the residence building with private bathrooms 
(0% = All communal, and 100% = All suite-style)

**Air Conditioning** – Percentage of rooms in the residence building with air conditioning
	(0% = No AC, and 100% = All Air conditioned)

*Rationale* – Since a residence building is composed of multiple different room types, the best/most convenient way to approximate the chances of an individual landing a room that they like can be done through averages. Using the above data-set we were able to provide an approximation of the probabilities of getting into said room types given the residence building. 


### Data Type 2 – Expected Values:

**Expected Residents** – We first distributed the percentage of different possible roommates that one can have in each given residence building. Then the proportionality relationships were used to calculate the expected roommates for each given residence building for comparison purposes.

**Expected Cost** – We first distributed the percentage of different possible costs that each residence building can have based on the room types. If there were variations in the room types (e.g. small single and big single), the costs were averaged for computational purposes. Lastly all the values were then added together to give an expected cost for the given residence building.

*Rationale* – Since all of these parameters were extremely varied within each residence building, we needed a way to distill single values from all of these metrics to summarize each one. To us, the best foot forward seemed like the implementation of “Expected Values” from statistics. This expected value stands almost as a representation of what is the most likely outcome of being in that residence building. E.g. On average you are going to be in a room of 2.5 people.


### Data Type 3 – Raw:

**Distance to Academic Campus Metric** – Using google maps, we estimated the time it takes to walk from each residence building to the Bell Tower (a reference point to centralize and establish comparison data) as an estimate for distance.

*Why time?* Because miles were generally ranging between 0.5-1.5, whereas time from 8-23 minutes; and the second one gives us more precision in the data used.

**Dining hall distribution** – This was done in a more personalized manner, where we surveyed the members of our group and used the general consensus from our other friends to rate a residence hall (1-21) based on the surrounding dining options and the distance from them. With 21 being the best possible location for residence halls pertaining to the surrounding dining halls, we scaled our data into a 0-100 scale, with 100 being the best score.

---

## Our Model:

**User Preferences** – After defining the variables used within our model, we looked to use user input to link the preference of the user to how our model would be used. After giving our user the ability to rank their preferences in order from 1 to 6, we converted their ranking to a constant multiplier in our dataset via a tiered weighting system. This ensured that the user’s preferences were considered the most during our calculations for each housing option and their compatibility with the user.

**Algorithm Calibration** – After collecting the weightage multipliers to be used via our user’s preferences, we needed to find how similar each housing option was from what our user was looking for. By utilizing our expected values and our value indexes for each category, we took the percent error between residence halls and user input. Taking the inverse of these numbers (e.g. 4 converted to 96) we derived a score from 0-100 of the compatibility of each resident hall to the user with each individual variable. From there, we utilized the weightage system to calibrate our overall compatibility scores, providing a comprehensive list of the best residence halls for the user.
Future Development:

---

## Future Improvements:

**Dynamic Data Structures** – Since there is only a limited amount of data to parse through, we decided it would be more time efficient to collect all the data ourselves and store it statically through creating objects in the .js file. Overall, it would be helpful to have an algorithm which can take all the raw-data we used and convert it to the metrics the way we did from another file. Doing so can extend the applicability of the website to not just more housing options in Purdue, but also expand our horizons into other universities.

*Other suggestions are always welcome!*

Most of our team going into this project had no experience in either HTML/CSS or JS (the two languages which are used to complete this project). During this project, our team was able to overcome this lack of experience, and we are incredibly proud of that! By creating a database within Purdue’s housing options, we were able to use the data-points available to us to design a power ranking system (first in a google-sheets file and then implemented into the website) which we then used to create our final metric. Lastly, just the ability to distribute the work across all 4 people and complete the project within the time-limit was an overall satisfying feeling that we’ll carry with ourselves for the foreseeable future.
___________________________________________________________________________

Note All data was collected from:
https://www.housing.purdue.edu/my-housing/info/housing-rates.html
