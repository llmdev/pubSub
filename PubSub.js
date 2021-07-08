
class PubSub {
  events = {}

  publish(event, callback) {
    if (this.events[event]) {
      this.events[event](callback);
    } else {
      throw new Error('Not found event ' + event);
    }
  }

  subscribe(event, eventFunction) {
    if (this.events[event]) {
      throw new Error(`Event ${event} has found`)
    }
    this.events[event] = eventFunction
  }

  unsbuscribe(event) {
    if (this.events[event]) {
      delete this.events[event]
    } else {
      throw new Error('Not found event ' + event);
    }
  }
}

const ClikbGB = new PubSub();

ClikbGB.subscribe('ga-click', (callback) => {
  console.log('evento de click')
  callback();
})

ClikbGB.publish('ga-click', () => {
  console.log('teste')
});

ClikbGB.unsbuscribe('ga-click');