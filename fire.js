//Particle system, fire
var createScene = function () {
    var scene = new BABYLON.Scene(engine);

    var camera = new BABYLON.ArcRotateCamera("ArcRotateCamera", 0, 1.25, 25, new BABYLON.Vector3(0, 0, 0), scene);
    camera.attachControl(canvas, true);

    var directionalLight = new BABYLON.DirectionalLight("directional", new BABYLON.Vector3(0.5, -2.0, 0.0), scene);

    var ground = BABYLON.MeshBuilder.CreatePlane("ground", { size: 500.0 }, scene);
    ground.position = new BABYLON.Vector3(0,0, 0);
    ground.rotation = new BABYLON.Vector3(Math.PI / 2, 0, 0);

    var groundMat = new BABYLON.PBRMetallicRoughnessMaterial("groundMat", scene);
    groundMat.baseColor = new BABYLON.Color4(0.59, 0.98, 0.4);
    groundMat.metallic = 0;
    groundMat.roughness = 0.1;
    ground.material = groundMat;
    ground.material.backFaceCulling = false;

    var pipeline = new BABYLON.DefaultRenderingPipeline("default", true, scene);

    pipeline.bloomEnabled = true;
    pipeline.bloomThreshold = 0.8;
    pipeline.bloomWeight = 1;
    pipeline.bloomKernel = 100;
    pipeline.bloomScale = 0.5;

    BABYLON.ParticleHelper.CreateAsync("fire", scene).then((set) => {
        set.start();
    });

    return scene;
};
