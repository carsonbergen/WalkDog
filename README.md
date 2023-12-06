# Authors
- Carson Bergen
- Rafael Galindo
- Jacob Adeyemo
- Alliana Dela Pena
- Nusyba Shifa

# Dependencies
- NodeJS
- npm

# How to install and start up
## How to get the project on your machine
- You can download the zip,
- clone with git,
- or use the gh cli to clone the repo.

## How to setup the project
Once you have the project on your machine, install the node modules:
```bash
npm i
```

## How to run the program
```bash
npm run dev
```
This will give you a link to open in your browser. If it does not for whatever reason then try `http://localhost:5173/`.

There is also a deployed version of the application at `https://walk-dog.vercel.app/`.

## How to use the app
The app was designed for mobile phones, so it is recommended to enable the mobile device simulator. You can do this by right-clicking on the app's screen in your browser, then clicking `Inspect`, then clicking the icon in the sidebar/bottom-bar that is either a mobile device, or laptop. The shortcut for this on Firefox and Google Chrome is "Ctrl+Shift+M" on Windows.

**DO NOT REFRESH THE PAGE**. This is intended so that one can reset the demo by refreshing, rather than having to edit the JSON file.

Jazmin is the recommended user to log into, as this is the only account that is not a shell user.

On the empty route (`http://localhost:5173/` or `https://walk-dog.vercel.app/`) click the `Log in!` button.

From there, enter in:
- `jazmin@gmail.com` in the `What is your account's email?` field.
- `guest123` in the `What is your account's password?` field.

Then click `Log in!`.

From here you can click the list icon (the farthest left icon in the bottom-bar) to go to the feed. Feel free to scroll through the feed, and like posts by tapping the heart icon. Additionally, the three vertical dots is an intractable icon that when pressed, prompts you if you want to delete a feed item. 

The middle button in the bottom-bar takes you to the "walk" page where you can initialize a walk by pressing the `Click here to start a walk!` button. From there an animation plays dictating what might happen if a user went on a walk. You can pause the walk during it by pressing the orange button with the pause icon. From there, if you want to end the walk, you may do so by pressing the red button with an X icon; this will prompt you if you want to end the walk or not. You can resume the walk by pressing the green button with a play icon. The purple button with a yellow camera icon allows you to simulate what might happen when a user wants to take a picture. Pressing the camera button opens a modal, which has a button at the bottom, if the user has not reached the target of 0.5km then it will tell them to do so. To reach the target of 0.5km keep playing the animation until the progress bar at the top is full. Once the goal has been met, try taking a picture with the camera button again. When you click `Take photo` it will register and close the modal. Do this a couple times to register more than image (this will be displayed in a carousel later). After this, end the walk using the previously described method (pause the walk then tap the red X button and tap `Yes!` to the prompt). After ending the walk a congratulations page will be displayed, there are a few carousels: one for the picture taken, and one for the achievements earned. Earned achievements will be added to the user's profile page. You can choose to either click `Click here to post!` or you can click `Click here to start another walk!`. If you click the post button this will be displayed in the feed using the first image the user took, it will also display a popup notifying the user that their post was posted. The button to start another walk will simply clear all data so that one can play the walking animation again. 

The farthest right button takes you to the my profile page. There you can edit settings by clicking the gear button in the top right. Clicking this button opens a popup where you can adjust settings for the current user. The immediately to the left of the gear button opens a FAQ popup where users can get some of their questions answered. On the my profile page you can also see the current username, name, dog's name(s), statistics and achievements. Clicking on an achievement displays a modal with a description underneath the title.

The top bar has two buttons:
- the magnifying glass button opens a modal where you can search for users using the username (even though it says email),
- and the bell button opens up the notifications modal where you can see various notifications, and reject or accept any of the incoming friend requests.

# Cases/functions implemented
A great deal of what we wanted to implement, were implemented. Here is comprehensive list:
- Earning achievements
- Tracking walks
    - Additionally a map feature was added to show the user as they walk
    - Another thing added was walk statistics above the map to help indicate to the user how their current walk is progressing
    - To post photos the user needs to reach a prescribed walk distance of at least 0.5km
    - At the end of a walk there is a display of how:
        - How far the user walked
        - How many photos they took
        - A carousel of the photos they took
        - A carousel of the achievements they earned
    - Additionally, users can post the first photo from their walk on the feed, and they can start a new walk
- Users can delete posts in the feed page, either their own, or just remove ones they dislike from their feed
- Users can like posts in the feed page
- Users can search for the friends in the search modal via username
- Users can view notifications
    - Accept/reject friend requests
    - See if their friends posts
    - Receive information about outgoing friend requests
    - See achievements they earned
- Users can also edit some their profile data via the settings modal on the my profile page:
    - Username
    - Name
    - Dog's name
    - Application permissions
- Users can see their data, stats, and achievements on the my profile page