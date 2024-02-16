class SplashScreen extends Phaser.Scene {
    constructor() {
        super({ key: 'SplashScreen' });
    }

    preload() {
        // Carrega os recursos cena
        this.load.image('logo', '/M1_Grupo-4/assets/OALogo.png');
    }

    create() {
        // Exibe o logo com animação de fade in
        const logo = this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'logo').setAlpha(0);

        logo.setScale(1); // Ajusta a escala da imagem conforme necessário

        this.tweens.add({
            targets: logo,
            alpha: 1,
            duration: 1000,
            ease: 'Linear',
            onComplete: () => {
                // Fade out do logo
                this.time.delayedCall(2000, () => {
                    this.tweens.add({
                        targets: logo,
                        alpha: 0,
                        duration: 1000,
                        ease: 'Linear',
                        onComplete: () => {
                            // Transição para a tela GOATSplashScreen após fade out
                            this.scene.start('GOATSplashScreen');
                        }
                    });
                });
            }
        });
    }
}

class GOATSplashScreen extends Phaser.Scene {
    constructor() {
        super({ key: 'GOATSplashScreen' });
    }

    preload() {
        // Carrega os recursos para a tela de abertura do GOAT
        this.load.image('logo', '/M1_Grupo-4/assets/GOATLogo.png');
    }

    create() {
        // Exibe o logo com animação de fade in
        const logo = this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'logo').setAlpha(0);

        logo.setScale(1); // Ajusta a escala da imagem conforme necessário

        this.tweens.add({
            targets: logo,
            alpha: 1,
            duration: 1000,
            ease: 'Linear',
            onComplete: () => {
                // Desvanece o logo após 2 segundos
                this.time.delayedCall(2000, () => {
                    this.tweens.add({
                        targets: logo,
                        alpha: 0,
                        duration: 1000,
                        ease: 'Linear',
                        onComplete: () => {
                            // Transição para a tela TitleScreen após o logo desaparecer
                            this.scene.start('TitleScreen');
                        }
                    });
                });
            }
        });
    }
}
