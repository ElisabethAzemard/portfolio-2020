// ----- TABS -----
document.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('#tabs > li');
    let tilesToHideNoArray;

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            let previousTab = document.querySelector('#tabs > .is-active');
            previousTab.classList.remove('is-active');
            previousTab.classList.remove('has-text-dark-grey');
            tab.classList.add('is-active');
            tab.classList.add('has-text-dark-grey');
            openTab(tab);
        });
    });

    const openTab = (tab) => {

        if (tab.id === 'code') {

            tilesToHideNoArray = document.querySelectorAll('.tile.notification:not(.is-primary)');

        } else if (tab.id === 'design') {

            tilesToHideNoArray = document.querySelectorAll('.tile.notification:not(.is-warning)');

        } else if (tab.id === 'writing') {

            tilesToHideNoArray = document.querySelectorAll('.tile.notification:not(.is-dark-grey)');

        } else if (tab.id === 'all') {

            tilesToHideNoArray = [];

        }

        let tilesToHide = Array.prototype.slice.call(tilesToHideNoArray);

        let previousTilesHidden = document.querySelectorAll('.tile.notification.is-light');

        previousTilesHidden.forEach(tile => {
            tile.classList.remove('is-light');

            let tileButtons = tile.querySelectorAll('button');
            tileButtons.forEach(button => {
                button.classList.remove('is-light')
            })

            let tileImages = tile.querySelectorAll('img, iframe');
            tileImages.forEach(image => {
                image.classList.remove('fade-image');
            })
            console.log('coucou')
        });

        tilesToHide.forEach(tile => {
            tile.classList.add('is-light')

            let tileButtons = tile.querySelectorAll('button');
            tileButtons.forEach(button => {
                button.classList.add('is-light')
            })

            let tileImages = tile.querySelectorAll('img, iframe');
            tileImages.forEach(image => {
                image.classList.add('fade-image');
            })

        })

    }

});
