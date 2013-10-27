describe("10 - SpriteSpec", function() {
    beforeEach(function() {
        var sprites = {
            ship: {
                sx: 0,
                sy: 0,
                w: 37,
                h: 42,
                frames: 1
            }
        }

        SpriteSheet.map = sprites;
    });

    it("sprite defined & set", function() {

        var spro = function() {
            this.setup("ship", {});
        }
        spro.prototype = new Sprite()
        sp = new spro()
        expect(SpriteSheet.map[sp.sprite]).toBeDefined();
        expect(sp.sprite).toEqual('ship');
    });

    it("setup", function() {

        var spro = function() {
            this.setup("ship", {
                var1: 1,
                var2: 2
            });
        }
        spro.prototype = new Sprite()
        sp = new spro()
        expect(sp.var1).toBeDefined();
        expect(sp.var2).toBeDefined();
        expect(sp.var1).toBe(1);
        expect(sp.var2).toBe(2);
    });
});