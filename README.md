# React 3D Portfolio Website for Yao 🐶

This project is a React-based portfolio website dedicated to my best dog friend, Yao. It showcases various features including 3D rendering with Three.js, interactive maps with `react-simple-maps`, and email functionality with EmailJS. The website is hosted on Netlify, and CircleCI is integrated for continuous integration and deployment (CI/CD).

## Features
- **3D Rendering with Three.js**: Create stunning 3D visuals and interactions.
- **Interactive Maps**: Integrate and display maps using `react-simple-maps`.
- **EmailJS Integration**: Allow users to send emails directly from the website.
- **Continuous Deployment**: Host the website on Netlify and automate the deployment process with CircleCI.

## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **Three.js**: JavaScript library for creating 3D graphics.
- **react-simple-maps**: Library for integrating and displaying maps in React.
- **EmailJS**: Service to send emails using client-side technologies.
- **Netlify**: Platform for hosting static websites and web applications.
- **CircleCI**: Continuous integration and continuous deployment service.

## Getting Started

### Prerequisites
- Node.js (v18 or later)
- npm (v6 or later)
- Running the Development Server
   ```bash
   yarn run dev
   ```

### Continuous Integration with CircleCI
The project is configured to use CircleCI for continuous integration and deployment. Here is the .circleci/config.yml file used:
```bash
version: 2.1

executors:
  node-executor:
    docker:
      - image: cimg/node:20.0.0-browsers

jobs:
  build:
    executor: node-executor
    steps:
      - checkout
      - run:
          name: Install Dependencies
          command: npm install
      - run:
          name: Build Project
          command: npm run build
      - run:
          name: Install Netlify CLI Locally
          command: npm install netlify-cli
      - run:
          name: Deploy to Netlify
          command: npx netlify deploy --dir=dist --prod --auth $NETLIFY_AUTH_TOKEN --site $NETLIFY_SITE_ID

workflows:
  version: 2
  build_and_deploy:
    jobs:
      - build
```
## License
This project is licensed under the MIT License.	👽🤘






