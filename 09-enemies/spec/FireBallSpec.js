/*
 * FireBallSpec
 */

//----------Especificación----------------------
//Comprobar si se borra cuando esta fuera del rango
//Comprobar si sigue una trayectoria parabolica
//Comprobar si se añade al tablero?
//
describe("09 - FireBall", function() { 

    var canvas, ctx;

    beforeEach(function() {
        loadFixtures('index.html');

        canvas = $('#game')[0];
        expect(canvas).toExist();

        ctx = canvas.getContext('2d');
        expect(ctx).toBeDefined();

        SpriteSheet.map = sprites;
        fireb = new FireBall(140, 428, 1);
        fireb.board = new GameBoard(); 
        fireb.board.remove = function(obj) {}; 
    });
 
    it("Add to board", function() {  
        fireb.board.add(fireb);
        expect(_.contains(fireb.board.objects, fireb)).toBe(true);
    });

    it("Method step: Comprobar fuera del tablero", function() {

    });
});