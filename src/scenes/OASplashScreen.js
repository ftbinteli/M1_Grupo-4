class OASplashScreen extends Phaser.Scene {
    constructor() {
        super({ key: 'OASplashScreen' });
    }

    preload() {
        // Load assets
        // this.load.image('background', 'assets/images/background.png');
        this.load.image('logo', '/assets/OALogo.png');
    }

    create() {
        // Display background
        // this.add.image(400, 300, 'background');

        // Display logo with fade in animation
        const logo = this.add.image(400, 300, 'logo').setAlpha(0);

        logo.setScale(1); // Ajuste da escala da imagem conforme necessário

        this.tweens.add({
            targets: logo,
            alpha: 1,
            duration: 1000,
            ease: 'Linear',
            onComplete: () => {
                // Add functionality to start the next splash screen after logo fades in
                const startText = this.add.text(this.game.config.width / 2, this.game.config.height / 2, 'Click anywhere to continue', {
                    fontSize: '24px',
                    fontFamily: 'Arial',
                    color: '#161513'
                }).setOrigin(0.5);

                // Set interactive behavior for the scene
                this.input.on('pointerdown', () => {
                    // Fade out logo
                    this.tweens.add({
                        targets: logo,
                        alpha: 0,
                        duration: 1000,
                        ease: 'Linear',
                        onComplete: () => {
                            // Transition to GOATSplashScreen after logo fades out
                            this.scene.start('GOATSplashScreen');
                        }
                    });
                });
            }
        });
    }
}