class TitleScreen extends Phaser.Scene {
    constructor() {
        super({ key: 'TitleScreen' });
    }

    preload() {
        // Carregar fonte e imagens
        this.load.image('TitleScreenBG', '/assets/TitleScreenBG.png');
        this.load.image('TitleScreenLogo', '/assets/TitleScreenLogo.png');
        this.load.image('OracleTag', '/assets/OracleTag.png');
    }

    create() {
        // Definir imagem de fundo
        const background = this.add.image(0, 0, 'TitleScreenBG').setOrigin(0);

        // Esticar a imagem de fundo para preencher a tela do jogo
        background.displayWidth = this.game.config.width;
        background.displayHeight = this.game.config.height;

        const gameWidth = this.game.config.width;
        const logoScale = 0.15; // Ajuste a escala conforme necessário
        
        // Carregar e posicionar a tag Oracle para que obedeça o brand guidelines
        const oracleTag = this.add.image(gameWidth - (512 * logoScale), 0, 'OracleTag').setOrigin(1, 0);
        oracleTag.setScale(logoScale);

        // // Configurar e adicionar texto de Bem-vindo
        // this.add.text(this.cameras.main.centerX, 100, 'Bem-Vindo', {
        //     fontFamily: 'Oraclesans',
        //     fontSize: '48px',
        //     color: '#ffffff'
        // }).setOrigin(0.5);

        // Configurar imagem do logo
        this.add.image(this.cameras.main.centerX, 200, 'TitleScreenLogo').setScale(0.5);
        
        // Criar gráficos para o botão
        const graphics = this.add.graphics();
        graphics.fillStyle(0xff0000, 1); // Definir a cor de preenchimento do botão como vermelho
        
        // Criar um retângulo com bordas arredondadas (botão)
        graphics.fillRoundedRect(this.cameras.main.centerX - 100, 425 - 45, 200, 90, 20);
        graphics.setInteractive(new Phaser.Geom.Rectangle(this.cameras.main.centerX - 100, 425 - 45, 200, 90), Phaser.Geom.Rectangle.Contains);
    
        // Adicionar e configurar o texto do botão de jogar sobre o botão
        const playButtonText = this.add.text(this.cameras.main.centerX, 425, 'JOGAR', {
            fontFamily: 'Oraclesans',
            fontSize: '32px',
            color: '#F1EFED',
        }).setOrigin(0.5);
        playButtonText.setShadow(2, 2, 'rgba(0,0,0,0.5)', 2);
    
        // Interação alteração de cor do botão quando mouse em cima
        // playButton.on('pointerover', () => {
        //     this.game.canvas.style.cursor = 'pointer';
        //     playButton.clear(); // Clear the previous button state
        //     playButton.fillStyle(0xff5555, 1); // Lighter red color
        //     playButton.fillRoundedRect(this.cameras.main.centerX - 100, 425 - 45, 200, 90, 20);
        // });
        
        // Interação alteração de cor do botão quando mouse em cima
        // playButton.on('pointerout', () => {
        //     this.game.canvas.style.cursor = 'default';
        //     playButton.clear(); // Clear the hover state
        //     playButton.fillStyle(0xff0000, 1); // Original dark red color
        //     playButton.fillRoundedRect(this.cameras.main.centerX - 100, 425 - 45, 200, 90, 20);
        // });       

        // Adicionar interatividade ao objeto gráfico em vez do texto
        graphics.on('pointerdown', () => {
            // Navegar para a próxima cena quando o botão for clicado
            this.scene.start('NextScene');
            // Adicionar funcionalidade para iniciar o jogo
            // console.log('Iniciando o jogo...')
        });

        this.cameras.main.fadeIn(1000, 0, 0, 0);


    }
}










// class TitleScreen extends Phaser.Scene {
//     constructor() {
//         super({ key: 'TitleScreen' });
//     }

//     create() {
//         // Exibir fundo sólido
//         this.add.graphics()
//             .fillStyle(0xffffff, 1)
//             .fillRect(0, 0, this.game.config.width, this.game.config.height);

//         // Exibir título centralizado
//         const title = this.add.text(this.game.config.width / 2, 100, 'Título do Jogo', {
//             fontSize: '48px',
//             fontFamily: 'Arial',
//             color: '#000',
//         }).setOrigin(0.5);

//         // Exibir botão de iniciar o jogo
//         const startButton = this.add.text(this.game.config.width / 2, 200, 'Iniciar Jogo', {
//             fontSize: '24px',
//             fontFamily: 'Arial',
//             color: '#000',
//             backgroundColor: '#fff',
//             padding: {
//                 x: 20,
//                 y: 10
//             }
//         }).setOrigin(0.5);

//         // Definir comportamento interativo para o botão de iniciar
//         startButton.setInteractive();
//         startButton.on('pointerdown', () => {
//             // Adicionar funcionalidade para iniciar o jogo
//             console.log('Iniciando o jogo...');
//         });
//     }
// }
