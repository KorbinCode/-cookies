
const readyCheck = setInterval(() => {
    const Game = unsafeWindow.Game;
 
    if (
        typeof Game !== "undefined" &&
        typeof Game.ready !== "undefined" &&
        Game.ready
    ) {var A = "bgBlue.jpg"
       var B = "grandmas1.jpg"
       var C = "grandmas2.jpg"
       var D = "grandmas3.jpg"
       var X = "https://i.pinimg.com/originals/67/02/32/670232f4144343e71cbe7b11b7f4e232.jpg"
if (Game.Loader.assetsLoaded.indexOf(A) == -1)
	Game.Loader.Load([A]);
Game.Loader.Replace(A, X);
if (Game.Loader.assetsLoaded.indexOf(B) == -1)
	Game.Loader.Load([B]);
Game.Loader.Replace(B, X);
if (Game.Loader.assetsLoaded.indexOf(C) == -1)
	Game.Loader.Load([C]);
Game.Loader.Replace(C, X);
if (Game.Loader.assetsLoaded.indexOf(D) == -1)
	Game.Loader.Load([D]);
Game.Loader.Replace(D, X);
        clearInterval(readyCheck);
    }
}, 1000);
 
