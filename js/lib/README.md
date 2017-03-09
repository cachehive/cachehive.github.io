The API for the Store contains the following:

*Store.initialize(key,value) initializes a key-value pair in the store.
*Store.set(key, value, [squashEvents=false]) sets a key-value pair in the store. Normally, a store changed event will be triggered. If you set squashEvents=true, then the store changed event is squashed, allowing you to set multiple things before issuing a store changed event.
*Store.get(key) returns the value of the key in the store.
*Store.storeChanged() issues a store changed event.
*Store.registerView(callback) calls the callback whenever the store is changed. Returns an ID that you can use to de-register the view.
*Store.deregisterView(id) de-registers a prior view registration.