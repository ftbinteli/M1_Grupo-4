class GOATSplashScreen extends Phaser.Scene {
  constructor() {
      super({ key: 'GOATSplashScreen' });
  }

  preload() {
      // Carregar recursos
      this.load.image('GOATLogo', '/assets/GOATLogo.png');
  }

  create() {
      // Exibir logo com animação de fade in
      const logo = this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'GOATLogo').setAlpha(0);

      logo.setScale(0.1); // Ajustar escala da imagem conforme necessário

      this.tweens.add({
          targets: logo,
          alpha: 1,
          duration: 1000,
          ease: 'Linear',
          onComplete: () => {
              // Fade out a logo após 2 segundos
              this.time.delayedCall(2000, () => {
                  this.tweens.add({
                      targets: logo,
                      alpha: 0,
                      duration: 1000,
                      ease: 'Linear',
                      onComplete: () => {
                          // Transição para a cena TitleScreen após fade out completo
                          this.scene.start('TitleScreen');
                      }
                  });
              });
          }
      });
  }
}