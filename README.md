
# Nu-Tracker

Creating an app in order for an individual to track their intake and monitor their journey. The goal is for users to set goals for themselves and have healthier lifestyles. This app helps users accomplish their goals by visualizing their nutritional intake. Each user is displayed their own unique data that they can keep track of and make new entries when needed.

Check out our current build here:
https://nu-tracker.onrender.com

![Nu_Tracker_home](https://user-images.githubusercontent.com/105254750/219965103-c3357c4f-c2a4-440c-9d19-8e2a746e9d31.png)

![Nu-Tracker_dash](https://user-images.githubusercontent.com/105254750/219965108-be31630e-3880-4f3b-be5f-997449510a8c.png)

![Lighthouse_metrics](https://user-images.githubusercontent.com/105254750/219964856-10bdd7e4-c345-440b-8568-b10b5ad31ee9.png)


Take a look at our backend!
https://github.com/EricLGDev/Nu-Tracker-Backend

# Functions

- Inputting daily calorie intake
    - Allowing users to write in their personal meals and nutrition value.
    - These value are then displayed in a graph and history log for the user to reference
- Creating an account
    - Utilizing PostgreSQL to store account information
- Signing in
    - Utilizing PostgreSQL to remember login credentials 

# Technology Used
- Database
    - PostgreSQL
- Backend API
    - Flask
        - Flask_CORS
        - Flask_SQLAlchemy
        - Pyscopg2
        - Flask_JWT_Extended
        - Flask_Bcrypt
        - Flask_Migrate
- Frontend
    - React
        - Recharts
        - React_Bootstrap
        - Axios

# Challenges
- Learning a new framework (Flask) within two weeks.
    - The backend started off slow trying to avoid circular imports.
    - Eventually created a file structure that suited our needs
- UX/UI
    - Figuring out what the needs of a typical user would be.
    - What would the user like to see on the application.
- First Python backend
    - This is the first Python backend for all of us, which meant learning what kind of tools we need for our project.

# Future Goals

- The graph should be ~Dynamic~
- Implementing a goal page for user to reference.
- The user should be able to DELETE previous entries just in case they make a mistake while making a new entry.
- Connecting to an API to allow users to quickly search up meals.
- Create a social network to have users connect and encourage other users.

# Bugs!

- useEffect dependency error for the Dashboard! Requires getEntries to be part of the dependency array or wants the array removed entirely. Satisfying either will cause an infinite error loop as the app tries to continuely refresh the user's entries.
- Mobile views S to L are being formatted properly for the time being. Navbar doesn't adjust to screen size length. History log and Graph over-extend.
- Sometimes the response to get the required data from the backend server is too slow for the user's Dashboard. 95% of the time the request is just fine.
- Unsure but it seems like the frontend sends DOUBLE the requests to the backend server. Could be the answer to the useEffect bug or even the server response delay.
- The chart shouldn't be displaying duplicate dates on the X-Axis if there are multiple entries for the same day. This is more of a design fix we should do later.

## Authors

- Jerrorld Kanda
- Garo Kechkarian
- Tommy Voir
- Eric Giron

