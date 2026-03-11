function openRoom(game) {

const room = "room-" + Math.random().toString(36).substring(2,8)

window.location.href = "/games/" + game + "/?room=" + room

}
