# ROSS Mini Interview Question

## Requirements

Create an application where users can enter keywords and search for documents.

The user must be able to do the following:

- React must be used. Please add any supporting libraries you feel are needed.
- Project must compile and load in a web browser
- Enter a query up to a maxiumum of 200 characters
  - Input field must dynamically grow and shrink
- Switch between two types of search: `keyword` and `citation`
- View results and navigate through detected passages for each decision
  - Sort Results alphabetically by title or by most recent
- Open a document and view all of its passages.
  - User can navigate between results from the document view
  - User can configure font and font size of document
  - User can copy the citation of the decision
- Application is responsive
  - Smallest device (320x568) iPhone 5/SE in Chrome DevTools
- Performance considerations are taken into account

Complete to the best of your abilities. A working application has more value than a fully featured application that crashes or does not compile.

## Designs

General design documentation can be accessed here: https://www.figma.com/file/gtjvMuYQmWUpZmCJnnGCrC?embed_host=share&node-id=0%3A1&viewer=1

For any css styles that are missing, please use your best judgement.

## Getting started

The project was setup with [YARN](https://yarnpkg.com/lang/en/). If NPM is used replace `yarn` with `npm` in steps below.

### API

The api that is to be used is located in `api` folder. To run this API locally you have the following options:

Navigate in terminal to `api` folder.

**YARN**

Install dependencies: `yarn install`

Run server: `yarn run-server`

**DOCKER**

Run `docker-run.sh`. This will build and run the server.

To clean up just run `docker-stop.sh`

In both scenarios the service will be hosted at `http://localhost:4000`. API documentation can be found at: `http://localhost:4000/api-docs`

### React Application

Navigate to `app` folder and install core dependencies: `yarn install`.

To run application run: `yarn serve`. Application will run at `http://localhost:1234`

### Sample Queries

1. type: `keyword` text: `good faith`
2. type: `keyword` text: `air conditioner pipes containing residual refrigeranth`
3. type: `keyword` text: `unlawful compensation black-jack game beat-the-dealer`
4. type: `keyword` text: `debt plaintiff`
5. type: `citation` text: `43 Cal.4th 56`
6. type: `citation` text: `474 So.2d 224`
7. type: `citation` text: `So.`
8. type: `citation` text: `So.2d`
