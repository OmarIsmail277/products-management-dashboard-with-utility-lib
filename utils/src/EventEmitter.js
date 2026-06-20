// ─── Event Emitter (Final Boss) ───────────────────────

// 14. EventEmitter
export function createEventEmitter() {
  const listeners = {};

  const emitter = {
    // .on(event, callback)   — register a listener
    on(event, callback) {
      if (!listeners[event]) {
        listeners[event] = [];
      }
      listeners[event].push(callback);
      return () => emitter.off(event, callback);
    },

    // .off(event, callback)  — remove a listener
    off(event, callback) {
      const listener = listeners[event];
      const filteredListeners = [];

      if (listener) {
        for (let i = 0; i < listeners[event].length; i++) {
          if (listener[i] !== callback) {
            filteredListeners.push(listener[i]);
          }
        }
      }
      listeners[event] = filteredListeners;
    },

    // .emit(event, ...args)  — trigger all listeners for an event
    emit(event, ...args) {
      const handlers = listeners[event];

      if (handlers) {
        for (let i = 0; i < listeners[event].length; i++) {
          handlers[i].apply(null, args);
        }
      }
    },

    // .once(event, callback) — listener fires only once then removes itself
    once(event, callback) {
      const onceWrapper = (...args) => {
        emitter.off(event, onceWrapper);
        callback(...args);
      };
      emitter.on(event, onceWrapper);
    },
  };

  return emitter;
}

// This is called decoupling, and it's one of the biggest reasons Event Emitters are used in large applications.
