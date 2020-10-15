
const SELECTORS = {
    MENU: "~Open navigation drawer",
    SCHEDULE: '~Schedule',
    AGENDA: '~Agenda',
    ALERTNO: 'android=new UiSelector().text("No").className("android.widget.Button")',
    ALERTGOTIT: 'android=new UiSelector().text("Got it").className("android.widget.Button")'
}

class HomePage {

    get menuBar () {
        return $(SELECTORS.MENU)
    }

    get schedule() {
        return $(SELECTORS.SCHEDULE)
    }

    get agenda() {
        return $(SELECTORS.AGENDA)
    }

    get alertNo() {
        return $(SELECTORS.ALERTNO)
    }

    get alertGotIt() {
        return $(SELECTORS.ALERTGOTIT)
    }
}

module.exports = new HomePage();