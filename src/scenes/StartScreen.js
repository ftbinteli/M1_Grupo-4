class StartScreen extends Phaser.Scene {
    constructor() {
        super({ key: 'StartScreen' });
    }

    create() {
        // Display solid background
        this.add.graphics()
            .fillStyle(0xF1EFED, 1)
            .fillRect(0, 0, this.game.config.width, this.game.config.height);

        // Display "click anywhere to start" text
        const startText = this.add.text(this.game.config.width / 2, this.game.config.height / 2, 'Click anywhere to start', {
            fontSize: '24px',
            fontFamily: 'Arial',
            color: '#161513'
        }).setOrigin(0.5);

        // Set interactive behavior for the scene
        this.input.on('pointerdown', () => {
            this.scene.start('OASplashScreen');
        });
    }
}
