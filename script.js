function sendMessage() {
  var phoneNumber = "919343792826";
  var message = "Hello, Mr. Lokesh Azad";
  var encodedMessage = encodeURIComponent(message);
  var url = "https://wa.me/" + phoneNumber + "?text=" + encodedMessage;

  var a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.click();
}
