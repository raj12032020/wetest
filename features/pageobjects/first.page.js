const { Page, UIElement } = require("./page")

const SELECTORS = {
    WelcomeMessage: new UIElement().getID('TextView','welcome_post_message'),
    GetStarted: new UIElement().getID('Button', 'get_started')
}

class FirstPage extends Page {
    get getStarted(){
        return $(SELECTORS.GetStarted)
    }

    get welcomeText() {
        return $(SELECTORS.WelcomeMessage)
    }

    waitToBeDisplayed(isShown) {
        return $(SELECTORS.WelcomeMessage).waitForDisplayed({
            timeout: 4000,
            reverse: !isShown,
        });
    }
}
module.exports = new FirstPage();