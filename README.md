# pusher-myo-hand

Pusher Hackathon game using Myo

## Requirements

- You must have a **Myo** and **Myo Connect** installed.

## Setting up

- Install dependencies using `npm install`
- Create a `config.json` file in the root with pusher credentials.
- Check the `example-config.json` file to structure it.
  Alternatively, you can set Node environment variables
  ```
  PUSHER_KEY
  PUSHER_SECRET
  PUSHER_APP_ID
  ```
- Install bower dependencies using `bower install`
- Start the server using `npm start`

## Notes

- Can't use https endpoint since the **myo.js** library does not support it.
- This whole thing is quite experimental and it may or may not work as intended.
- Pusher is used to sync multiple players in real time.
