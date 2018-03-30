
function component() {
    var element = document.createElement('div');

    element.innerHTML = 'hello public';

    return element;
}

document.body.appendChild(component());