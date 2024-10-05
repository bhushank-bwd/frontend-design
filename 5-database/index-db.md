# Index DB

> **What** -> client side storage to store persistent data

> **How it works** -> function Like indexDB open(), transaction() objectStore()

> **Size** -> > 100 MB, large data set

> **Performance** -> Asynchronous, non blocking operation

> **Data persistance** -> persist across browser session.

> **Data Structure** key:value _(value may be any data like complex file or blob etc)_. Create indexes for performance

> **Security** csrf, xsrf, authentication, clean up data on logout

> **When to use** -> large data set, data cache. offline data, lots of history

> **When not to use** -> small data, secured/sensitive data

> Use Reference [dexie](https://dexie.org/)
