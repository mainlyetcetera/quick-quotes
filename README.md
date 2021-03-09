## About The Project

![home-page](https://user-images.githubusercontent.com/70294115/110416690-5e6f7080-8051-11eb-8436-7d66618990e6.png)

You're in a discussion with friends. And someone says: "I need a good quote on this topic for inspiration!"
And here YOU COME to the rescue! Pull out `QuickQuotes`, select a category, and get a relevant quote instantly!

That's `QuickQuotes`, your one-stop shop for quotes on almost any relevant topic! But just because it's fast doesn't mean it's not versatile! You can `favorite` any quote you come across for later refernce, so no worries about losing your next favorite quote! 

This project is the final project for [Turing School of Software and Design's](https://turing.io/) Frontend Mod 3. For this project we were challenged to not only use React to build an entire app with the help of an outside API, but we needed to make the app for a specific [niche audience](https://frontend.turing.io/projects/module-3/niche-audience.html). The audience I chose was: a person who wants to quickly access a quote in a conversation AND be able to reference it later!

## Learning Goals
- use React hooks to set up and maintain state
- include thorough `Cypress` end-to-end testing
- employ `React Router`, which evolved into `Hash Router` to allow for multiple routes and urls
- deploy the app on GitHub Pages
- successfully use asynchronous JavaScript with the use of `async/await`, including error handling
- create user personas and be driven by user stories
- design my own MVP

## Reflections
#### wins:
- had little issue getting state to cooperate
  - kept state where it should be
  - easily passed props, including methods
- solid `Cypress` testing 
  - aiming to test happy and sad paths
- kept myself to a simple MVP
  - did not try to overdo it
  - stayed focused on making a solid MVP
- using `async/await`, displayed user-friendly error-handling!
- properly watching passed props' types with `PropTypes` 

#### areas of growth:
- though working, `HashRouter` deployment could work better
  - starts on a view that's not intended and not intuitive
- want more from the styling
  - got a semblance of mobile-first, not much attention paid desktop view
- a couple functions not strictly SRP
- no specific data-cleaning

### Built With

* [React](https://reactjs.org/docs/create-a-new-react-app.html)
* [Cypress](https://www.cypress.io/)
* [Prop Types](https://reactjs.org/docs/typechecking-with-proptypes.html)

## Getting Started

To get a local copy up and running follow these simple example steps.

### Installation

1. No API key needed! I used [Quotable](https://github.com/lukePeavey/quotable)
2. Clone the repo
   ```sh
   git clone https://github.com/mainlyetcetera/quick-quotes.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Launch the app!
   ```sh
   npm start
   ```

## Usage

* the deployed version of this site may be found [here](https://mainlyetcetera.github.io/quick-quotes/)
* you will need to click on `To Home` to begin using the app in this version

![from-deployed-start](https://media.giphy.com/media/hUQI4PrFFjXzbG30Id/giphy.gif)
![favorite-from-main](https://media.giphy.com/media/s3D02QGO991bHcvk4O/giphy.gif)
![favorite-from-details](https://media.giphy.com/media/bcS4SwcI2YhNflDMpl/giphy.gif)


## Roadmap

See the [open issues](https://github.com/mainlyetcetera/quick-quotes/issues) for a list of proposed features (and known issues).


## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Contact

Eric Campbell - [My GitHub](https://github.com/mainlyetcetera/)

Project Link: [quick-quotes link](https://github.com/mainlyetcetera/quick-quotes)

<img src="https://avatars0.githubusercontent.com/u/70294115?s=460&u=b24fae5febb30e7d1c9507c51ee760dba5e396e5&v=4" alt="Mr. Campbell"
width="150" height="auto" />


## Acknowledgements
* [Omar Alvarado for the dark-wood!](https://www.transparenttextures.com/dark-wood.html)
* [Zingerbug for the marble!](https://www.zingerbug.com/background.php?MyFile=brown_marble.php&ID=C720.php)
