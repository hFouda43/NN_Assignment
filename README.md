# NN_Assignment

* React native app is cloned from the following repo:https://github.com/pinnacleQAAcademy/pqaa_detox
* Platform used: Windows

### Prerequisites:
***
* NodeJs
* Java
* Android studio

### Environment Setup for IOS: (this part was not included as the used platform was windows)
***
* xcode: xcode-select --install
* applesimutils: 
  brew tap wix/brew
  brew install applesimutils
* cocoapods: sudo gem install cocoapods
* pods need to be installed in order to build projects on IOS: pod install
* Access xcode app and test building the app

### To run the tests on Azure pipeline:
***
* Sign in to Azure DevOps and create a new project.
*  Set up a new pipeline
*  yml file has been configured and added to the root directory of the project, please refer to aws_detox.yml
*  Trigger the pipeline: In Azure Pipelines, navigate to the project and start a new pipeline run; select the branch or commit you want to build and test.

### Challenges Faced:
***
* Didnt have a prior knowledge to detox framework, javascript and react native apps, I managed to overcome this by:
   * Got through detox documentation
   * Got some online tutorials
   * Went through a udemy course
* Finding a proper react native app for testing and setting it up on windows platform
* Faced many versions incompatibility issues that I managed to resolve them as follows:
  * looking for the compatible version for each package, I update it in the package.json file and then I run yarn install command
  * Sometimes I used to remove the node_modules when the versions are incorrectly reflected and re-run the yarn install command
* Unfortunately, I am currently stuck in a server error in the app setup on windows and I couldn't find any solution after applying a thorough search
  
*  For that, I built up a sample POM and simple test using cucumber in building the test framework as I have no access to the app so thought about including a sample of the framework structure

