$(document).ready(function() {
//@:http://stackoverflow.com/questions/8303162/jetty-cross-origin-filter
//    ws = new WebSocket("ws://" + location.hostname + ":9080/");
//    ws = new WebSocket("ws://0.0.0.0:61614");
    ws = new WebSocket("ws://echo.websocket.org");

    ws.onmessage = function(event) {
        $("#messages").append("<p>" + event.data + "</p>");
    };

    ws.onclose = function(event) {
        console.log("Socket closed:",event);
    }

    ws.onerror = function(error) {
        console.log("Socket error:",error);
    }

    ws.onopen = function() {
        console.log("Connected");
        ws.send("Hello from " + navigator.userAgent);
    };

    $("#new-message").bind("submit", function(event) {
        event.preventDefault();
        ws.send($("#message-text").val());
        $("#message-text").val("");
    });
});