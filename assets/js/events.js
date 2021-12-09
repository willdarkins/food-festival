//separating conditional statement from script.js realted to DOM created events
// DOM manipulation code specific to each page
/*Because the DOM manipulation will now be linked to each HTML page directly through bundles,
we should remove the page checker conditional from each of these three JavaScript files and
replace it with the DOM ready method, which will then wrap the DOM manipulation just as
the conditional statements had done*/

$(document).ready(function () {
    const currentEvent = JSON.parse(localStorage.getItem("currentEvent")) || {
        title: "Title Placeholder",
        subtitle: "",
        description: ""
    };

    const pageEl = document.querySelector("#page");
    
    const containerEl = createEl("div", {class: "container"},
      createEl("div", {class: "card mb-3"}, 
        createEl("img", {class: "card-img-top", src: currentEvent.image || "https://via.placeholder.com/350x150"}),
        createEl("div", {class: "card-body"}, 
          createEl("h1", {class: "card-title"}, currentEvent.title || ""),
          createEl("h2", {class: "text-muted"}, currentEvent.subtitle || ""),
          createEl("p", {class: "card-text mt-3"}, currentEvent.description || createLoremIpsum(100)),
          createEl("a", {class: "btn btn-primary", href: "tickets.html"}, "Buy Tickets")
        )
      ),
      
    )
    pageEl.appendChild(containerEl)
})
