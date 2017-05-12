declare interface LoadStyle { (css, selector): void };

const loadStyle: LoadStyle = (css, selector) => {
    function addStyleTagToHead() {
        let style = document.createElement("style");
        style.setAttribute("data-selector", selector)
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
    }

    function onDocumentLoad() {
        addStyleTagToHead();
        window.removeEventListener("DOMContentLoaded", onDocumentLoad);
    }

    if (document.readyState === "complete" || document.readyState === 'interactive') {
        addStyleTagToHead();
    }
    else {
        window.addEventListener("DOMContentLoaded", onDocumentLoad);
    }
}

angular.module("ngTransactionsApp.utilities")
    .value("loadStyle", loadStyle);

