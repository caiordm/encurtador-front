<header>
</header>
<slot/>
<footer>
    <a href="https://github.com/caiordm/encurtador-de-link"><ion-icon name="logo-github"></ion-icon>GitHub</a>
</footer>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@10..48,400;10..48,500;10..48,600;10..48,700&display=swap');

    :global(html) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    :global(body) {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        width: 100%;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: 'Bricolage Grotesque', sans-serif;
    }

    header {
        display: flex;
        padding: 1rem;
        justify-content: center;
    }

    footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 1rem;
        display: flex;
        justify-content: center;
    }

    a {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        font-size: 16pt;
        color: #252627;
        text-decoration: none
    }

    a > ion-icon {
        font-size: 36pt;
    }
</style>