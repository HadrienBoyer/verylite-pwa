'use strict';

document.addEventListener('DOMContentLoaded', init, false);

function init()
{
  if (!navigator.onLine) {
    const statusElem = document.querySelector('.page-status')
    statusElem.innerHTML = 'offline'
  }


  // Notifications: https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/notifications-badges
  //TODO: create notifications.js and add permission fallback in the cache: https://developer.mozilla.org/fr/docs/Web/API/Notifications_API/Using_the_Notifications_API
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
