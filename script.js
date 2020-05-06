class UserCard extends HTMLElement {
    constructor() {
        super();
        let shadow, wrapper, userAvatar, userName, style;
        shadow = this.attachShadow({mode: 'open'});

        wrapper = document.createElement('span');
        wrapper.setAttribute('class', 'user-card');

        userAvatar = document.createElement('img');
        userAvatar.setAttribute('class', 'user-avatar');

        userName = document.createElement('p');
        userName.setAttribute('class', 'user-name');

        style = document.createElement('style');
        style.textContent = '.user-card {' +
            'display: flex;' +
            'border-radius: 5px;' +
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
            '}';

        let avatarUrl, userNameString;

        if(this.hasAttribute('avatar') && this.hasAttribute('name')){
            avatarUrl = this.getAttribute('avatar').toString();
            userNameString = this.getAttribute('name').toString();
        }

        userAvatar.src = avatarUrl;
        userName.innerText = userNameString;

        shadow.appendChild(wrapper);
        shadow.appendChild(style);
        wrapper.appendChild(userAvatar);
        wrapper.appendChild(userName);

    }
}


customElements.define('x-user-card', UserCard);