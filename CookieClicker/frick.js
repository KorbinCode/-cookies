
const readyCheck = setInterval(() => {
    const Game = unsafeWindow.Game;
 
    if (
        typeof Game !== "undefined" &&
        typeof Game.ready !== "undefined" &&
        Game.ready
    ) {var A = "perfectCookie"
       var B = "grandmas1.jpg"
       var C = "grandmas2.jpg"
       var D = "grandmas3.jpg"
       var X = "https://upload.wikimedia.org/wikipedia/en/c/c2/Peter_Griffin.png"
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
 
