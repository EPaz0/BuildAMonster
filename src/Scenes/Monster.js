class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
        this.leftHandX = this.bodyX - 90;
        this.lefthandY = this.bodyY + 10;

        this.rightHandX = this.bodyX + 85;
        this.rightHandY = this.bodyY + 10;

        this.rightEyeX = this.bodyX + 40;
        this.rightEyeY = this.bodyY - 120;

        this.leftEyeX = this.bodyX - 40;
        this.leftEyeY = this.bodyY - 120;

        this.mouthX = this.bodyX;
        this.mouthY = this.bodyY -50;


        this.rightLegX = this.bodyX +50;
        this.rightLegY = this.bodyY +160;


        this.leftLegX = this.bodyX -50;
        this.leftLegY = this.bodyY +160;

        this.mustacheX1 = this.bodyX + 29;
        this.mustacheY1 = this.bodyY - 70;
        
        this.mustacheX2 = this.bodyX - 24;
        this.mustacheY2 = this.bodyY - 70;
        


    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
       

                // Create the sprite for the left and right hands
                my.sprite.leftOpenHand = this.add.sprite(this.leftHandX, this.lefthandY, "monsterParts","arm_darkA.png");
                my.sprite.leftOpenHand.flipX = true;   // flip sprite to have thumb on correct side
                my.sprite.rightOpenHand = this.add.sprite(this.rightHandX, this.rightHandY, "monsterParts","arm_darkA.png");

                

                my.sprite.rightLeg = this.add.sprite( this.rightLegX, this.rightLegY, "monsterParts","leg_darkA.png");
                my.sprite.leftLeg = this.add.sprite( this.leftLegX, this.leftLegY, "monsterParts","leg_darkA.png");
                my.sprite.leftLeg.flipX = true; 

                
                my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_redF.png");
                my.sprite.mouth = this.add.sprite( this.mouthX, this.mouthY, "monsterParts","mouthC.png");

                my.sprite.eyeYellowRight = this.add.sprite(this.rightEyeX,this.rightEyeY, "monsterParts", "eye_yellow.png");
                my.sprite.eyeYellowLeft = this.add.sprite(this.leftEyeX,this.leftEyeY, "monsterParts", "eye_yellow.png");
                my.sprite.mustacheOne = this.add.sprite(this.mustacheX1,this.mustacheY1,"monsterParts","eyebrowC.png");
                my.sprite.mustacheTwo = this.add.sprite(this.mustacheX2,this.mustacheY2,"monsterParts","eyebrowC.png");
                my.sprite.mustacheTwo.flipX = true; 


                //Add fangs
                my.sprite.fangs = this.add.sprite(this.mouthX, this.mouthY, "monsterParts","mouth_closed_fangs.png");
                my.sprite.fangs.visible = false;

                        //regular smile event hanlding
                this.input.keyboard.on('keydown-S', (event) => {
                    my.sprite.mouth.visible = true;
                    my.sprite.fangs.visible = false;
                });


                this.input.keyboard.on('keydown-F', (event) => {
                    my.sprite.mouth.visible = false;
                    my.sprite.fangs.visible = true;
                });


                this.input.keyboard.on('keydown-A', (event) => {
                    const moveAmount = -10; // Negative for moving left
                    this.updateMonsterPosition(moveAmount);
                });

                this.input.keyboard.on('keydown-D', (event) => {
                    const moveAmount = 10; // Positive for moving right
                    this.updateMonsterPosition(moveAmount);
                });
    }

    updateMonsterPosition(moveAmount) {
        let my = this.my;
        // Update the x position of each monster part
        for (const part in my.sprite) {
            my.sprite[part].x += moveAmount;
        }
    }


    update() {
        let my = this.my;    // create an alias to this.my for readability

       
    }

}