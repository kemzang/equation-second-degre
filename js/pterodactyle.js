class PterodactylAnimation {
    constructor(containerId, imageUrls, speed) {
        this.container = document.getElementById(containerId);
        this.images = imageUrls;
        this.index = 0;
        this.speed = 0;
        // var speed_transition =  speed % 10;
        if (speed >= 0 && speed <= 5)
            this.speed = 20;
        else
            this.speed = 50;
        this.pterodactyl = document.createElement('img');
        this.pterodactyl.src = this.images[0];
        this.pterodactyl.style.position = "absolute";
        this.pterodactyl.style.right = 0;
        this.pterodactyl.style.transform = "translateX(100%)";
        this.container.appendChild(this.pterodactyl);
        this.animatePterodactyl();
        this.movePterodactyl();
    }

    animatePterodactyl() {
        setInterval(() => {
            this.pterodactyl.src = this.images[this.index];
            this.index = (this.index + 1) % this.images.length;
        }, (this.speed <= 20) ? 200 : 100);
    }

    movePterodactyl() {
        setInterval(() => {
            const currentPosition = parseInt(this.pterodactyl.style.right);
            this.pterodactyl.style.right = (currentPosition + this.speed) + "px";
        },100);
    }
    destroy() {
        clearInterval(this.animationInterval);
        clearInterval(this.moveInterval);
        this.container.removeChild(this.pterodactyl);
    }
}

// Créez une instance de PterodactylAnimation avec les paramètres nécessaires
