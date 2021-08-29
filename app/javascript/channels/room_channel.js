import consumer from "./consumer"

document.addEventListener("turbolinks:load", () => {

  const el = document.getElementById("room-id")
  const room_id = el.getAttribute("data-room-id")

  consumer.subscriptions.create({ channel: "RoomChannel", room_id: room_id}, {
    connected() {
      // Called when the subscription is ready for use on the server
      console.log("Congratulations ! Connected the channel !" + room_id)
    },
  
    disconnected() {
      // Called when the subscription has been terminated by the server
      console.log('See you !')
    },
  
    received(data) {
      // Called when there's incoming data on the websocket for this channel
      console.log(data)
    }
  });
})

