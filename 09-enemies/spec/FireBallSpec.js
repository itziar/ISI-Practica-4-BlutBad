/*
* FireBallSpec
*/

//----------Especificaci�n----------------------
//Comprobar si se borra cuando esta fuera del rango
//Comprobar si sigue una trayectoria parabolica
//Comprobar si se a�ade al tablero?
//
describe("FireBall", function() {
	var canvas, ctx;
	beforeEach(function(){
		loadFixtures('index.html');

		canvas = $('#game')[0];
		expect(canvas).toExist();

		ctx = canvas.getContext('2d');
		expect(ctx).toBeDefined();
	});

    it("add to board", function(){
        var board = {
            remove:  function(obj){}
            };
        //this.board es indefinido si no hago eso. 
        e.board = board;
});
    it("parabola/posicion", function(){

        });

    it("fuera del tablero",function(){

        });
});
