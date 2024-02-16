class OASplashScreen extends Phaser.Scene {
    constructor() {
        super({ key: 'OASplashScreen' });
    }
  
    preload() {
        // Carregar assets
        this.load.image('OALogo', '/M1_Grupo-4/assets/OALogo.png');
    }
  
    create() {
        // Exibir logo com animação de fade in 
        const logo = this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'OALogo').setAlpha(0);
  
        logo.setScale(1); // Ajuste da escala da imagem conforme necessário
  
        this.tweens.add({
            targets: logo,
            alpha: 1,
            duration: 1000,
            ease: 'Linear',
            onComplete: () => {
                // Animação de fade out do logo
                this.time.delayedCall(2000, () => {
                    this.tweens.add({
                        targets: logo,
                        alpha: 0,
                        duration: 1000,
                        ease: 'Linear',
                        onComplete: () => {
                            // Transição para a tela de TitleScreen após o fade out do logo
                            this.scene.start('GOATSplashScreen');
                        }
                    });
                });
            }
        });
    }
}
