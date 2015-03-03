chrome.browserAction.onClicked.addListener(function() {
  openPanel();
});

function openPanel() {
  chrome.windows.create({
    url: 'panel.html',
    type: 'panel'
  });
}
