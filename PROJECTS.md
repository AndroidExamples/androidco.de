# http://androidco.de 

A GitHub repository collecting Android examples. For more information check project website at [http://androidco.de](http://androidco.de). Contributions are more than welcome, just fork the [PROJECTS.md](https://github.com/AndroidExamples/androidco.de/blob/master/PROJECTS.md) file to udpate the project listing and create a pull request so we get notified. 

## Android AppCompat example using Toolbar and NavigationDrawer (Android Studio)

This examples upgrades the ActionBar example provided by Android Sample Projects replacing the actionbar with a toolbar and reusing the NavigationDrawer.

https://github.com/hanscappelle/android-toolbar-example

## Android Beacon Example

This app shows how to use the altbeacon library with a custom parser so we can scan for true ibeacon specced beacons.

https://github.com/hanscappelle/android-beacon-example

## Android JUnit - Robolectric - Android Studio Sample Project

Example project of writing JUnit tests using robolectric 0.13.+ on gradle build 0.13.2 and Android Studio 0.8.14

https://github.com/hanscappelle/android-studio-junit-robolectric

TODO: review since this example is still failing for UI stuff. Instead check https://github.com/blundell/tests-app-robolectric-junit for a complete working example including UI related testing.

## Android REST client example

Android REST client example using retrofit for api calls. Demonstrates keeping cookies for session
in singleton Application object as well as using the http response cache.

Realm.io for android is used to cache data on device when network is available so that we can show
something if app is gone offline.

TODO: add caching example

https://github.com/hanscappelle/android-rest-example.git

## ListView with Custom Adapter & ViewHolder pattern

https://github.com/hanscappelle/so-2250770

quick android listview example with custom adapter showing how to reload data properly. ListView is also using ViewHolder pattern for performance.

## SwipeRefreshLayout-ListViewExample

Example SwipeRefreshLayout with ListView-EmptyView combination.

https://github.com/AndroidExamples/SwipeRefreshLayout-ListViewExample

https://plus.google.com/114880761689491946950/posts/AgmWt8ajZR3

## Actionbar Compat & Menu Drawer (Eclipse ADT)

Example based on the official Android ActionBar example but now implemented with the actionbar compat implementation and a menu drawer added. This is how to use the menu drawer (aka sliding menu) and actionbar on 2.1 and up devices the right way. 

[https://github.com/hanscappelle/menu-drawer-compat-example](https://github.com/hanscappelle/menu-drawer-compat-example)

Check next example for Android Studio implementation.

## Fragment Based Navigation + Actionbar Compat & Menu Drawer (Android Studio)

A simple project showing Fragment based navigation with responsive layout options and back navigation support.

https://github.com/AndroidExamples/fragment-navigation

Forget about the ActionBar and use a toolbar instead, check https://github.com/hanscappelle/android-toolbar-example

## Android Camera Preview 

This is a fork of mine of an already nice project with the required API checks in code and fallbacks for missing parameters. Check the original example if you need the tags to go through the different steps of preview configuration. 

https://github.com/hanscappelle/CameraPreviewSample

## Sensor Data Handling

Info on how to retrieve sensor information. Besides managing available sensors and listening for data there is also a use case for monitoring sensor data in a service. When the data goes beyond a configured threshold value the screen will be activated and unlocked. Configured for light sensor by default.

https://github.com/AndroidExamples/android-sensor-example

## Pick An Image (Android Studio)

Image selection in response to this SO question: http://stackoverflow.com/questions/2169649/get-pick-an-image-from-androids-built-in-gallery-app-programmatically/2636538#2636538

https://github.com/hanscappelle/SO-2169649

TODO: multiple images needs work

## Unzip

Basic example for on Android device file unzipping.

https://github.com/hanscappelle/more-android-examples/tree/master/Unzip

TODO: wip, needs work

## Weather Forecast

A weather forecast app based on the forecast lib hosted at https://github.com/hanscappelle/android-forecast-lib

