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

### Environment setup for Android that is applied:
* In the android/build.gradle file, the following needs to be added:
  * Kotlin version and class path are added to "ext" and "dependencies"respectively (make sure that kotlin version is matching to android studio kotlin version)
  * Set Maven repo inside "All projects" object
 
* In the android/app/build.gradle file, the following needs to be added:
  * In the defaultconfig object, the following is added:
    +    testBuildType System.getProperty('testBuildType', 'debug')
    +    testInstrumentationRunner 'androidx.test.runner.AndroidJUnitRunner'
  * In buildtypes/release object, the following is added:
    +      proguardFile "${rootProject.projectDir}/../node_modules/detox/android/detox/proguard-rules-app.pro"
  * In the dependencies object, the following is added:
    +  androidTestImplementation('com.wix:detox:+')
    +  implementation 'androidx.appcompat:appcompat:1.1.0'
  * An auxillary test has been added under androidTest/java in order to be picked up by the runner
  * Create a new network security config file for Android "android/app/src/main/res/xml/network_security_config.xml"
  * And, then register it in android/app/src/main/AndroidManifest.xml by adding the following into the applicatin object:
    +    android:networkSecurityConfig="@xml/network_security_config">
   
### Detox setup
* From cmd, run the following command: yarn global add detox-cli
* add cucumber using the following command: yarn add -D detox @cucumber/cucumber
* Setup the apps object inside .detoxrc.js to accomodate for both android and IOS
* Also, define the devices to be used in testing in same file
* In package.json, define the build commands to build the app with detox
* Also, define the test runner commands to accomodate with cucumber via defining a custom configuration
      
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

