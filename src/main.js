//import StartScreen from '../src/scenes/StartScreen.js'; // Import StartScreen
//import SplashScreen from '../src/scenes/SplashScreen.js'; // Import SplashScreen
//import TitleScreen from '../src/scenes/TitleScreen.js'; // Import TitleScreen

var config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 900,
    backgroundColor: '#F1EFED',
    scene: [StartScreen, OASplashScreen, GOATSplashScreen, TitleScreen],
};

// Create game instance
const game = new Phaser.Game(config);
