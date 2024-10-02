# Offline Support

## Service Worker

1. SW is javascript code run on different thread of browser, run behind different/separate thread of browser. Does not block main thread.
2. Run offline website by service worker
3. SW run only HTPPS, not access in private tab(for firefox etc.)
4. Allows push notifications & background sync API
5. SW works on event driven
   - does not have access to DOm
   - can't access local & session storage

### Service worker implementation

1. Check for SW supports by browser
2. Register Service Worker
3. Check Service worker status on APplication-> Service-worker and check for other option like toggle offline update on-update-load etc.
4. Add event listener for SW

- **install** to add assets in cache
- **activate** clean up useless cache
- **fetch** fetch updated src from network or cache

## `Progressive Web Apps` - PWA

1. Generate manifest and logos online and store in root folder
2. link manifest file in HTML file

```html
<link rel="manifest" href="./manifest.json" />
```
