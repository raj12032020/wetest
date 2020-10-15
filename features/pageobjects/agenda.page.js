const Pages = require('./page')
var BasePage = new Pages.Page()
var UIElement = new Pages.UIElement()

const SELECTORS = {
    RecyclerView: UIElement.getRecyclerView('recyclerView'),
    GetStarted: UIElement.getID('Button', 'get_started')
}

class Agenda {
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

module.exports = new Agenda();