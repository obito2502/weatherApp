# weatherApp
Welcome the weather app project. The project helps to know weather of different cities

# Installation

1) Clone the project
2) Install all dependencies using command `npm install` or `yarn add` in terminal in root of project

2.5) (for iOS) in terminal move to directory `weatherApp/ios` and run command `pod install`

3) Move to directory
> weatherApp/android
4) create file `local.properties` and show path to your Android SDK. 
  
  Windows OS:
  `sdk.dir=C:\\Users\\UserName\\AppData\\Local\\Android\\sdk`

  UserName - PC user name

  Mac OS:
  `sdk.dir = /Users/USERNAME/Library/Android/sdk`

  USERNAME - OSX username

5) In your terminal, from root of the project run command `chmod 755 gradlew`


#Running the project

##Android

1) Start android emulator

2) Run two terminals

3) In the first terminal run command `npm start`

4) Make sure that second terminal is connected to emulator via command `adb devices`

5) In the second terminal run project by command `npx react-native run-android`


##iOS

1) Run two terminals

2) In the first terminal run command `npm start`

3) In the second terminal run project by command `npx react-native run-ios`
