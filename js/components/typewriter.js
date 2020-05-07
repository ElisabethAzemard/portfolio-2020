// ----- TYPEWRITER -----
import Typewriter from 'typewriter-effect/dist/core';

document.addEventListener('DOMContentLoaded', () => {

    const quote = new Typewriter('#typewriter', {
        loop: true,
        deleteSpeed: 25
    });

    quote.typeString('"You can make anything by <span class="has-text-primary">coding</span>')
        .pauseFor(1000)
        .deleteChars(6)
        .typeString('<span class="has-text-warning">designing</span>')
        .pauseFor(1000)
        .deleteChars(9)
        .typeString('writing."')
        .pauseFor(10000)
        .start()

});
