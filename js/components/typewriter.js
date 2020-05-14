// ----- TYPEWRITER -----
import Typewriter from 'typewriter-effect/dist/core';

document.addEventListener('DOMContentLoaded', () => {

    const quote = new Typewriter('#typewriter', {
        loop: false,
        deleteSpeed: 25
    });

    quote.typeString('"You can make anything by <span class="has-text-primary">coding</span>')
        .pauseFor(1000)
        .deleteChars(6)
        .typeString('<span class="has-text-warning">designing</span>')
        .pauseFor(1000)
        .deleteChars(9)
        .typeString('writing."')
        .start()

    const quoteMobile = new Typewriter('#typewriterMobile', {
        loop: false,
        deleteSpeed: 25
    });

    quoteMobile.typeString('"You can make<br>anything<br>by <span class="has-text-primary">coding</span>')
        .pauseFor(1000)
        .deleteChars(6)
        .typeString('<span class="has-text-warning">designing</span>')
        .pauseFor(1000)
        .deleteChars(9)
        .typeString('writing."')
        .start()

    setTimeout(() => { document.querySelector('#quoteAuthor').classList.add('is-opaque') }, 12000);

});
