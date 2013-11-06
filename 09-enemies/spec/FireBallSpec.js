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

        SpriteSheet.map = sprites;
        ctx = canvas.getContext('2d');
        expect(ctx).toBeDefined();
    });
 
    it("add to board", function() {
        e = new Enemy(enemies.basic);
        var board = {
            remove: function(obj) {}
        };
        //this.board es indefinido si no hago eso. 
        e.board = board;
    });
    
    it("parabola/posicion", function() {

    });

    it("fuera del tablero", function() {

    });
});