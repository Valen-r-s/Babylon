//Particle system, water
const createScene = function () {
	const scene = new BABYLON.Scene(engine);

	const camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 25, BABYLON.Vector3.Zero());
	camera.attachControl(canvas, true);

    // Create a particle system
    var particleSystem = new BABYLON.ParticleSystem("particles", 5000, scene);

    //Texture of each particle
    particleSystem.particleTexture = new BABYLON.Texture("textures/flare.png", scene);

    // Where the particles come from
    particleSystem.emitter = new BABYLON.Vector3(0, 0, 0); // the starting object, the emitter
    particleSystem.minEmitBox = new BABYLON.Vector3(0, 0, 0); // Starting all from
    particleSystem.maxEmitBox = new BABYLON.Vector3(0, 0, 0); // To...

    // Colors of all particles
    particleSystem.color1 = new BABYLON.Color4(0, 1, 0.35);
    particleSystem.color2 = new BABYLON.Color4(1, 0, 0.93);
    particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);

    // Size of each particle (random between...
    particleSystem.minSize = 0.5;
    particleSystem.maxSize = 1;

    // Life time of each particle (random between...
    particleSystem.minLifeTime = 1;
    particleSystem.maxLifeTime = 5;

    // Emission rate
    particleSystem.emitRate = 1500;

    // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
    particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;

    // Set the gravity of all particles
    particleSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);

    // Direction of each particle after it has been emitted
    particleSystem.direction1 = new BABYLON.Vector3(-2,3, 2);
    particleSystem.direction2 = new BABYLON.Vector3(2, 3, -2);

    // Angular speed, in radians
    particleSystem.minAngularSpeed = 5;
    particleSystem.maxAngularSpeed = Math.PI;

    // Speed
    particleSystem.minEmitPower = 1;
    particleSystem.maxEmitPower = 8;
    particleSystem.updateSpeed = 0.025;

    // Start the particle system
    particleSystem.start();


	return scene;
}