let myPopup1;

// Open the popup when we enter a given zone
myPopup1 = WA.onEnterZone('myZone', () => {
    WA.openPopup("popupRectangle", 'Hello world!', {
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    });
})

// Close the popup when we leave the zone.
WA.onLeaveZone('myZone', () => {
    helloWorldPopup.close();
})