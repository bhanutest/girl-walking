var level1 = function(fame) {

};

level1.prototype = {
	preload: function() {
		this.load.spritesheet('player','assets/player-girl.png', 95,130);
	},

	create: function() {
		this.game.stage.backgroundColor = "#79A1CF";
		this.player = this.add.sprite(40,this.game.world.height-200,'player');
		this.player.animations.add('walkRight', [0, 1, 2, 3,4,5,6,7,8,9,10,11], 12, true);
		this.game.physics.arcade.enable(this.player);
	},

	update: function() {

		this.player.body.velocity.x = 80;
		this.player.animations.play('walkRight');

	}
};