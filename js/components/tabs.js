// ----- TABS -----
document.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('#tabs > li');
    let tilesToHideNoArray;

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            let previousTab = document.querySelector('#tabs > .is-active');
            previousTab.classList.remove('is-active');
            tab.classList.add('is-active');
            openTab(tab);
        });
    });

    const openTab = (tab) => {

        if (tab.id === 'code') {
            tilesToHideNoArray = document.querySelectorAll('.tile.notification:not(.is-primary)');
        } else if (tab.id === 'design') {
            tilesToHideNoArray = document.querySelectorAll('.tile.notification:not(.is-warning)');
        } else if (tab.id === 'writing') {
            tilesToHideNoArray = document.querySelectorAll('.tile.notification:not(.is-light)');
        } else if (tab.id === 'all') {
            tilesToHideNoArray = [];
        }

        let tilesToHide = Array.prototype.slice.call(tilesToHideNoArray);

        let previousTiles = document.querySelectorAll('.tile.is-hidden');

        previousTiles.forEach(tile => {
            tile.classList.remove('is-hidden');
        });

        tilesToHide.forEach(tile => {
            tile.classList.add('is-hidden');
        })
    }

});
