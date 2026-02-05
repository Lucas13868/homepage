//Create personal html element for navbar
class NavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="header">
                <div class="header__content">
                    <a href="/" class="logo">HOMEPAGE</a>

                    <nav class="nav">
                        <ul class="nav__list">
                            <li class="nav__item">
                                <a href="/" class="nav__link">About me</a>
                            </li>
                            <li class="nav__item">
                                <a href="/studies/" class="nav__link">Studies</a>
                            </li>
                            <li class="nav__item">
                                <a href="/technologies/" class="nav__link">Technologies</a>
                            </li>
                            <li class="nav__item">
                                <a href="/contact/" class="nav__link">Contact</a>
                            </li>
                            <li class="nav__config">
                                <button class="config-btn" id="config-btn">
                                    <img height=40 src="/images/cogs-logo.png" alt="config-btn" class="cog-img">
                                </button>

                                <div class="config" hidden>
                                    <form class="config__form" id="configForm">
                                        <button type="button" id="theme-btn" class="theme-btn">Dark theme</button>

                                        <label>
                                            Font size <br>
                                            <input type="range" min=18 max=28 id="slider">
                                        </label>
                                        <div class="font-opts">
                                            Font family:
                                           
                                            <label class="radio"><input type="radio" name="font" value="Roboto" checked> Roboto</label>
                                            <label class="radio"><input type="radio" name="font" value="Roboto Mono"> Roboto Mono</label>
                                            <label class="radio"><input type="radio" name="font" value="Times New Roman"> Times New Roman</label>
                                            
                                        </div>
                                    </form>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        `;
    }
}

customElements.define("nav-bar", NavBar);
