/**
 * @description 文档的标题组件
 */
class HDocTitle extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                h1 {
                    color: #2c3e50;
                    border-bottom: 2px solid #3498db;
                    padding-bottom: 10px;
                    margin-top: 0;
                    width: var(--width, 630px);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
            </style>
            <h1><slot></slot></h1>
        `;
    }
}
customElements.define('hdoc-title', HDocTitle);