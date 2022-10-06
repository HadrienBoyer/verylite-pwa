document.addEventListener('DOMContentLoaded', init, false);

function init()
{
  if (!navigator.onLine) {
    const statusElem = document.querySelector('.page-status')

    statusElem.innerHTML = 'offline'
  }

  // Notifications:
  if ("Notification" in window)
  {
    console.log("The Notifications API is supported");

      Notification.requestPermission().then(permission => {
          if (permission === "granted") {
              console.log("The user accepted the notification");
              const notification = new Notification("Hello World!");  //  Send a notification
          }
      });
  }

}
