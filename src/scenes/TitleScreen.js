class TitleScreen extends Phaser.Scene {
    constructor() {
        super({ key: 'TitleScreen' });
    }

    create() {
        // Exibir fundo sólido
        this.add.graphics()
            .fillStyle(0xffffff, 1)
            .fillRect(0, 0, this.game.config.width, this.game.config.height);

        // Exibir título centralizado
        const title = this.add.text(this.game.config.width / 2, 100, 'Título do Jogo', {
            fontSize: '48px',
            fontFamily: 'Arial',
            color: '#000',
        }).setOrigin(0.5);

        // Exibir botão de iniciar o jogo
        const startButton = this.add.text(this.game.config.width / 2, 200, 'Iniciar Jogo', {
            fontSize: '24px',
            fontFamily: 'Arial',
            color: '#000',
            backgroundColor: '#fff',
            padding: {
                x: 20,
                y: 10
            }
        }).setOrigin(0.5);

        // Definir comportamento interativo para o botão de iniciar
        startButton.setInteractive();
        startButton.on('pointerdown', () => {
            // Adicionar funcionalidade para iniciar o jogo
            console.log('Iniciando o jogo...');
        });
    }
}
