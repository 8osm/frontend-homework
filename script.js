class UserCard extends HTMLElement {
    constructor() {
        super();
        let shadow = this.attachShadow({mode: 'open'});

        let wrapper = document.createElement('span');
        wrapper.setAttribute('class', 'user-card');

        this.userAvatar = document.createElement('img');
        this.userAvatar.setAttribute('class', 'user-avatar');

        this.userName = document.createElement('p');
        this.userName.setAttribute('class', 'user-name');

        let style = document.createElement('style');
        style.textContent = '.user-card {' +
            'display: flex;' +
            'border-radius: 3px;' +
            'align-items: center;' +
            'box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19);' +
            '}' +
            '.user-avatar {' +
            'border-radius: 50%;' +
            'margin: 15px;' +
            'width: 55px;' +
            '}' +
            '.user-name {' +
            'text-overflow: ellipsis;' +
            'margin: 0; padding: 0;' +
            'font-family: Arial;' +
            'font-weight: lighter;' +
            'margin-right: 50px;' +
            '}';
        shadow.appendChild(wrapper);
        shadow.appendChild(style);
        wrapper.appendChild(this.userAvatar);
        wrapper.appendChild(this.userName);
    }

    connectedCallback(){
        if(this.hasAttribute('avatar') && this.hasAttribute('name')){
            let avatarUrl = this.getAttribute('avatar').toString();
            let userNameString = this.getAttribute('name').toString();
            this.userAvatar.src = avatarUrl;
            this.userName.innerText = userNameString;
        }
    }
}

class Counter extends HTMLElement {

    static get observedAttributes() {return ['value']; };

    constructor() {
        super();

        let shadow = this.attachShadow({mode: 'open'});

        let wrapper = document.createElement('span');
        wrapper.setAttribute('class', 'counter');

        this.valueDisplay = document.createElement('p');
        this.valueDisplay.setAttribute('class', 'value');

        let buttonDecrease = document.createElement('button');
        buttonDecrease.addEventListener('click', () => {
            this.value--;
            this.setAttribute('value', this.value);
        });
        buttonDecrease.setAttribute('class', 'button');
        buttonDecrease.innerText = '-';

        let buttonIncrease = document.createElement('button');
        buttonIncrease.addEventListener('click', () => {
            this.value++;
            this.setAttribute('value', this.value);
        });
        buttonIncrease.setAttribute('class', 'button');
        buttonIncrease.innerText = '+';


        let style = document.createElement('style');
        style.textContent = '.counter {' +
            'display: flex;' +
            'border-radius: 3px;' +
            'margin-top: 25px;' +
            'align-items: center;' +
            'box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19);' +
            '}' +
            '.value {' +
            'font-family: Arial' +
            '}'+
            '.button {' +
            'border: 1px solid rgba(210,210,210, 0.5);' +
            'border-radius: 50px;' +
            'width: 30px;' +
            'margin: 20px;' +
            'height: 30px;' +
            'text-align: center;' +
            'text-decoration: none;' +
            'background-color: white;' +
            'font-size: 16px;' +
            '}';
        shadow.appendChild(wrapper);
        shadow.appendChild(style);
        wrapper.appendChild(buttonDecrease);
        wrapper.appendChild(this.valueDisplay);
        wrapper.appendChild(buttonIncrease);
    }

    connectedCallback(){
        if(this.hasAttribute('initial')){
            this.setAttribute('value', this.getAttribute('initial'));
            this.value = this.getAttribute('initial');
        } else {
            this.setAttribute('value', 0);
            this.value = 0;
        }
    }
    attributeChangedCallback(name, oldValue, newValue) {
            this.valueDisplay.innerText = newValue;
      }
}

customElements.define('x-user-card', UserCard);
customElements.define('x-counter', Counter);