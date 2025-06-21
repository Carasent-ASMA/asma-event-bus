const getKeys = Object.keys;
const realWindow = window.rawWindow || window;
export function EventBus(name, local_idx) {
    const name_idx = local_idx ? `${name}-${local_idx}` : name;
    if (realWindow.ASMA_EVENT_BUS?.[name_idx]) {
        return realWindow.ASMA_EVENT_BUS[name_idx];
    }
    const subscribers = {};
    const storage = {};
    let nextId = 0;
    /**
     *
     * @param shouldPersist - default true
     */
    function dispatch(event, arg, shouldPersist = true) {
        storage[event] = arg;
        const subscriber = subscribers[event];
        if (subscriber) {
            getKeys(subscriber).forEach((key) => subscriber[key]?.(storage[event]));
        }
        if (!shouldPersist) {
            delete storage[event];
        }
    }
    function register(event, callback) {
        const id = getNextId();
        if (!subscribers[event]) {
            subscribers[event] = {};
        }
        subscribers[event][id] = callback;
        if (storage[event]) {
            callback(storage[event]);
        }
        return {
            unregister: () => {
                // deepcode ignore DeleteOfNonProperty: <this is intended>
                delete subscribers[event]?.[id];
                if (Object.keys(subscribers[event] || {}).length === 0) {
                    delete subscribers[event];
                    delete storage[event];
                }
            },
        };
    }
    function getNextId() {
        return nextId++;
    }
    const fns = {
        dispatch,
        register,
    };
    if (!realWindow.ASMA_EVENT_BUS) {
        realWindow.ASMA_EVENT_BUS = {};
    }
    realWindow.ASMA_EVENT_BUS[name_idx] = fns;
    return fns;
}
//# sourceMappingURL=event-buss.js.map