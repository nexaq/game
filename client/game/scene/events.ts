type Subscriptions = {
    [key in string]: {
        [key in string]: Callback
    };
}

export enum Events {
    SHOOT = 'shoot',
    END_GAME = 'end_game',
    PAUSE = 'pause',
    PLAY = 'play',
    ASSETS_LOADED = 'assets_loaded',
    ENEMY_KILLED = 'enemy_killed',
    RESTART_GAME = 'restart_game',
}

type Callback = () => void

const subscriptions: Subscriptions = {}

const getNextUniqueId = getIdGenerator()

function subscribe(eventType: string, callback: Callback) {
    const id = getNextUniqueId();

    if(!subscriptions[eventType]) {
        subscriptions[eventType] = { };
    }

    subscriptions[eventType][id] = callback;

    return () => {
            delete subscriptions[eventType][id];

            if(Object.keys(subscriptions[eventType]).length === 0) {
                delete subscriptions[eventType];
            }
    }
}

function cancelAllSubscriptions() {
    Object.keys(subscriptions).forEach(key => delete subscriptions[key]);
}

function trigger(eventType: string) {
    if(!subscriptions[eventType]) {
        return
    }

    Object.keys(subscriptions[eventType]).forEach(key => subscriptions[eventType][key]())
}

function getIdGenerator() {
    let lastId = 0

    return function getNextUniqueId() {
        lastId += 1
        return lastId
    }
}

export {
    cancelAllSubscriptions,
    trigger,
    subscribe
}