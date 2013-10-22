/*

  Requisitos: 

  La nave del usuario disparar� 2 misiles si est� pulsada la tecla de
  espacio y ha pasado el tiempo de recarga del arma.

  El arma tendr� un tiempo de recarga de 0,25s, no pudi�ndose enviar
  dos nuevos misiles antes de que pasen 0,25s desde que se enviaron
  los anteriores



  Especificaci�n:

  - Hay que a�adir a la variable sprites la especificaci�n del sprite
    missile

  - Cada vez que el usuario presione la tecla de espacio se a�adir�n
    misiles al tablero de juego en la posici�n en la que est� la nave
    del usuario. En el c�digo de la clase PlayerSip es donde tienen
    que a�adirse los misiles

  - La clase PlayerMissile es la que implementa los misiles. Es
    importante que la creaci�n de los misiles sea poco costosa pues va
    a haber muchos disparos, para lo cual se declarar�n los m�todos de
    la clase en el prototipo

*/
describe("Clase PlayerMissile", function(){


    it("defined missile in spriteSheet", function(){
        SpriteSheet.map['missile'] = sprites.missile;
        expect(SpriteSheet.map['missile']).toBeDefined();
    });

    it("add 2 missile to spriteSheet", function(){
        board = new GameBoard();
        pShip = new PlayerShip();
        pShip.reload = -1;
        board.add(pShip);

        board.step(20);
        Game.keys['fire'] = true;
        board.step(20);
        Game.keys['fire'] = false;
        board.step(20);
        Game.keys['fire'] = true;
        board.step(20);
        expect(board.objects.length).toBe(3);
        //1 ship + 2 missile
    });


    it("draw missile",function(){
        SpriteSheet.map['missile'] = sprites.missile;
        board = new GameBoard();
        //pShip = new PlayerShip();
        ctx={};
        var m1 = new PlayerMissile();
        var m2 = new PlayerMissile();

        spyOn(m1,'draw');
        spyOn(m2,'draw');
        board.add(m1); 
        board.add(m2); 
        board.draw(ctx)
        expect(m1.draw).toHaveBeenCalled();
        expect(m2.draw).toHaveBeenCalled();
    });

});

