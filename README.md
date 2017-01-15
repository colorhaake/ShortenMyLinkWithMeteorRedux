# ShortenMyLinkWithMeteorRedux
## Shorten My Link by Using Meteor + Redux + Redux-Loop

1. `View` only handle rendering data and clicking event from `props`.  

2. Clicking event will send an action to `Reducer`.  

3. `Reducer` will define and run handlers for actions.  

4. Handler only return new `state` and side effects.  
(here, side effects will define what action to send after exectued done)

5. Side effects will be executed by `Redux-Loop`.  

6. After side effects executed done, they will send previous defined action to `Reducer`.  

7. Again, `Reducer` will run handlers for actions.  

8. Every `state` changed (at step 4 and 7) will be sent to `View` and again, `View` will render data from new `state` (at step 1)

## How to run

1. Install meteor  
2. git clone + `npm install` + run `meteor` in terminal
