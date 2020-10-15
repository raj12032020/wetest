class Page {
    // currently nothing much to add, but this shall be useful as the tests expand
    open() {
    }
}

class UIElement {
    getID(className, id, pkg = 'com.google.samples.apps.iosched'){
        return `//android.widget.${className}[@resource-id="${pkg}:id/${id}"]`
    }

    getRecyclerView(id, pkg = 'com.google.samples.apps.iosched'){
        return `//androidx.recyclerview.widget.RecyclerView[@resource-id="${pkg}:id/${id}"]`
    }
}

module.exports = {
    Page: Page,
    UIElement: UIElement
}
