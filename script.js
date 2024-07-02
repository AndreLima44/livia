document.getElementById('submitButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    const date = document.getElementById('dateInput').value;
    const messageContainer = document.getElementById('messageContainer');
    const message = document.getElementById('message');
    const birthdayContent = document.getElementById('birthdayContent');
    const birthdayImage = document.getElementById('birthdayImage');
    const birthdaySong = document.getElementById('birthdaySong');
    const extraContent = document.getElementById('extraContent');
    const leftImages = document.getElementById('leftImages');
    const rightImages = document.getElementById('rightImages');
    const additionalMessage = document.getElementById('additionalMessage');
    const responseContainer = document.getElementById('responseContainer');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const finalMessageContainer = document.getElementById('finalMessageContainer');
    const surpriseVideo = document.getElementById('surpriseVideo');

    if (name !== 'Livia') {
        alert('TENTA DE NOVO NUM É ESSE NOME');
        return;
    }

    if (date !== '2024-07-04') {
        alert('TENTA DINOVO NUM É ESSA DATA NAO');
        return;
    }

    document.getElementById('inputContainer').classList.add('hidden');
    messageContainer.classList.remove('hidden');
    message.textContent = 'AH! ENTÃO HOJE É... O SEU ANIVERSARIO, MININA!';

    setTimeout(function() {
        birthdayContent.classList.remove('hidden');
        birthdaySong.play();
        message.textContent = 'PARABÉNS, LIVIA!!!';

        const leftImageSources = ['image1.png', 'image2.png']; // Substitua com os nomes das suas imagens
        const rightImageSources = ['image3.png', 'image4.png']; // Substitua com os nomes das suas imagens

        leftImageSources.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            leftImages.appendChild(img);
        });

        rightImageSources.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            rightImages.appendChild(img);
        });

        additionalMessage.textContent = 'A galera te deseja parabéns! Amamos fazer parte da sua vida. Foi o André que chamou a gente!';
        additionalMessage.classList.remove('hidden');

        addLights();

        setTimeout(function() {
            responseContainer.classList.remove('hidden');
        }, 10000);

    }, 5000);

    yesButton.addEventListener('click', function() {
        messageContainer.classList.add('hidden');
        birthdayContent.classList.add('hidden');
        responseContainer.classList.add('hidden');
        finalMessageContainer.classList.remove('hidden');
        surpriseVideo.play();
    });

    noButton.addEventListener('mouseover', function() {
        moveButton(noButton);
    });
});

function addLights() {
    const lightsContainer = document.querySelector('.lights');
    for (let i = 0; i < 100; i++) {
        const light = document.createElement('div');
        light.className = 'light';
        light.style.top = Math.random() * 100 + '%';
        light.style.left = Math.random() * 100 + '%';
        light.style.backgroundColor = getRandomColor();
        light.style.animationDuration = (Math.random() * 0.5 + 0.5) + 's';
        lightsContainer.appendChild(light);
    }
}

function getRandomColor() {
    const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'pink', 'orange'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function moveButton(button) {
    const buttonRect = button.getBoundingClientRect();

    const maxTop = window.innerHeight - buttonRect.height;
    const maxLeft = window.innerWidth - buttonRect.width;

    const newTop = Math.random() * maxTop;
    const newLeft = Math.random() * maxLeft;

    button.style.position = 'absolute';
    button.style.top = `${newTop}px`;
    button.style.left = `${newLeft}px`;
}

const noButton = document.getElementById('noButton');

noButton.addEventListener('mouseover', function() {
    moveButton(noButton);
});
