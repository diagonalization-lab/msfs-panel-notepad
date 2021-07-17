class IngamePanelCustomPanel extends TemplateElement {
    constructor() {
        super(...arguments);
    }
    connectedCallback() {
        super.connectedCallback();
        this.m_MainDisplay = document.querySelector("#MainDisplay");
        this.m_MainDisplay.classList.add("hidden");
        this.m_Footer = document.querySelector("#Footer");
        this.m_Footer.classList.add("hidden");

        const textBuffer = document.getElementById("textBuffer");
        const lockBuffer = document.getElementById("lockBuffer");
        lockBuffer.addEventListener("click", () => {
            textBuffer.readOnly = !textBuffer.readOnly;
            if (textBuffer.readOnly) {
                lockBuffer.title = "Unlock Notepad";
            } else {
                lockBuffer.title = "Lock Notepad";
            }
        });
    }
    initialize() {
    }
    disconnectedCallback() {
        super.disconnectedCallback();
    }
    updateImage() {
    }
}
window.customElements.define("ingamepanel-custom", IngamePanelCustomPanel);
checkAutoload();