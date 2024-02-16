class GOATSplashScreen extends Phaser.Scene {
  constructor() {
      super({ key: 'GOATSplashScreen' });
  }

  preload() {
      // Load assets
      this.load.image('GOATLogo', '/M1_Grupo-4/assets/GOATLogo.png');
  }

  create() {
      // Display logo with fade in animation
      const logo = this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'GOATLogo').setAlpha(0);

      logo.setScale(0.1); // Ajuste da escala da imagem conforme necessário

      this.tweens.add({
          targets: logo,
          alpha: 1,
          duration: 1000,
          ease: 'Linear',
          onComplete: () => {
              // Fade out logo after 2 seconds
              this.time.delayedCall(2000, () => {
                  this.tweens.add({
                      targets: logo,
                      alpha: 0,
                      duration: 1000,
                      ease: 'Linear',
                      onComplete: () => {
                          // Transition to TitleScreen after logo fades out
                          this.scene.start('TitleScreen');
                      }
                  });
              });
          }
      });
  }
}