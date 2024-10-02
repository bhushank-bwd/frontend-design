// check service worker present or not
if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register("./sw.js", {
      scope: "./",
    })
    .then((res) => console.log("service worker registered successfully"))
    .catch((err) => console.log("error in registering service worker", err));
}
