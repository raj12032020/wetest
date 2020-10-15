const Pages = require('./page')
var UIElement = new Pages.UIElement()

const SELECTORS = {
    RecyclerView: UIElement.getRecyclerView('recyclerview_schedule')
}

class Schedule {
    get listOfEvents() {
        return $(SELECTORS.RecyclerView)
    }

    waitToBeDisplayed(isShown) {
        return this.listOfEvents.waitForDisplayed({
            timeout: 4000,
            reverse: !isShown,
        });
    }
}

module.exports = new Schedule();