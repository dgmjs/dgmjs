/**
 * From TypeScript Deep Dive
 * https://basarat.gitbook.io/typescript/main-1/typed-event
 */

export interface Listener<T> {
  (event: T): any;
}

export interface Disposable {
  dispose(): void;
}

/** passes through events as they happen. You will not get events from before you start listening */
export class TypedEvent<T> {
  private listeners: Listener<T>[] = [];
  private listenersOncer: Listener<T>[] = [];

  addListener = (listener: Listener<T>): Disposable => {
    this.listeners.push(listener);
    return {
      dispose: () => this.removeListener(listener),
    };
  };

  addOnceListener = (listener: Listener<T>): void => {
    this.listenersOncer.push(listener);
  };

  removeListener = (listener: Listener<T>) => {
    const callbackIndex = this.listeners.indexOf(listener);
    if (callbackIndex > -1) this.listeners.splice(callbackIndex, 1);
  };

  hasListeners = (): boolean => {
    return this.listeners.length > 0 || this.listenersOncer.length > 0;
  };

  emit = (event: T) => {
    /** Update any general listeners */
    this.listeners.forEach((listener) => listener(event));

    /** Clear the `once` queue */
    if (this.listenersOncer.length > 0) {
      const toCall = this.listenersOncer;
      this.listenersOncer = [];
      toCall.forEach((listener) => listener(event));
    }
  };

  pipe = (te: TypedEvent<T>): Disposable => {
    return this.addListener((e) => te.emit(e));
  };
}
