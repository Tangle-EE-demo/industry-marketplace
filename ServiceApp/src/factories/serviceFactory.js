/**
 * Factory for creating services.
 */
export class ServiceFactory {
    /**
     * Store the service callbacks.
     */
    static _services = {};
    /**
     * Store the created instances.
     */
    static _instances = {};

    /**
     * Register a new service.
     * @param name The name of the service.
     * @param instanceCallback The callback to create an instance.
     */
    static register(name, instanceCallback) {
        this._services[name] = instanceCallback;
        if (this._instances[name]) {
            delete this._instances[name];
        }
    }

    /**
     * Unregister a service.
     * @param name The name of the service to unregister.
     */
    static unregister(name) {
        delete this._services[name];
        if (this._instances[name]) {
            delete this._instances[name];
        }
    }

    /**
     * Get a service instance.
     * @param name The name of the service to get.
     * @returns An instance of the service.
     */
    static get(name) {
        if (!this._instances[name] && this._services[name]) {
            this._instances[name] = this._services[name]();
        }
        return this._instances[name];
    }
}
