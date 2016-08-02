var app = new Phaser.Game(600,400,Phaser.AUTO);
app.state.add('level1',level1);
app.state.start('level1');