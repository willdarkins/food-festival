//createEl() dynamically generates HTML elements and attributes based on the inputs or arguments passed into it
require("bootstrap");
const createEl = require("./domMethods");

//separating conditional statement from script.js realted to DOM created events
// DOM manipulation code specific to each page
/*Because the DOM manipulation will now be linked to each HTML page directly through bundles,
we should remove the page checker conditional from each of these three JavaScript files and
replace it with the DOM ready method, which will then wrap the DOM manipulation just as
the conditional statements had done*/

$(document).ready(function () {
    function purchaseTicket() {

        modalEl.removeChild(modalBodyEl)
        modalEl.removeChild(modalFooterEl)

        modalEl.append(createEl("div", { class: "modal-body" },
            createEl("h5", { class: "modal-title" },
                `Thanks for requesting a ticket purchase! We will send an email to ${purchaseEmail.value} to complete the order form!`
            ),
        ))

    }
    purchaseBtn.addEventListener("click", purchaseTicket);
})