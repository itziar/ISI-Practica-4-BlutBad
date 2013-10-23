/*
* FireBallSpec
*/

describe("Enemies", function() {
	var canvas, ctx;
	beforeEach(function(){
		loadFixtures('index.html');

		canvas = $('#game')[0];
		expect(canvas).toExist();

		ctx = canvas.getContext('2d');
		expect(ctx).toBeDefined();
	});
    it("enemy step", function(){
        var sprites = {
                enemy_purple: { sx: 37, sy: 0, w: 42, h: 43, frames: 1 },
                };
        var enemies = {
                basic: { x: 100, y: -50, sprite: 'enemy_purple', B: 100, C: 2 , E: 100 }
        };
        SpriteSheet.map = sprites;
        
        e = new Enemy(enemies.basic);

        var board = {
            remove:  function(obj){}
            };
        //this.board es indefinido si no hago eso. 
        e.board = board;

        spyOn(board,'remove');
        e.step(0.02); // En el tablero
        expect(board.remove).not.toHaveBeenCalled();
        e.step(200); //fuera del tablero
        expect(board.remove).toHaveBeenCalled();
});
    it("enemy draw", function(){

        });

    it("enemy position",function(){
        //Añadir un test que comprueba  la posicion de la nave enemiga al inicio 
        //y despues de un ciero dt
        });
});
