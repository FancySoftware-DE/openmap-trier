let helloWorldPopup;

// Open the popup when we enter a given zone
helloWorldPopup = WA.onEnterZone('myPopup1', () => {
    WA.openPopup("myPopup1", 'Hello world!', {
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    });
})

// Close the popup when we leave the zone.
WA.onLeaveZone('myPopup1', () => {
    helloWorldPopup.close();
})
