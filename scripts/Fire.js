var createScene = function () {
  // This creates a basic Babylon Scene object (non-mesh)
  var scene = new BABYLON.Scene(engine);

  // Set up environment
  var hdrTexture = BABYLON.CubeTexture.CreateFromPrefilteredData(
    "/textures/Runyon_Canyon_A_2k_cube_specular.dds",
    scene
  );
  hdrTexture.name = "envTex";
  hdrTexture.gammaSpace = false;
  scene.environmentTexture = hdrTexture;

  // Camera
  var camera = new BABYLON.ArcRotateCamera(
    "ArcRotateCamera",
    0,
    1.25,
    25,
    new BABYLON.Vector3(0, 0, 0),
    scene
  );
  camera.attachControl(canvas, true);

  // Analytical Light
  var directionalLight = new BABYLON.DirectionalLight(
    "directional",
    new BABYLON.Vector3(0.5, -2.0, 0.0),
    scene
  );

  // Scene color
  scene.clearColor = new BABYLON.Color3(0.2, 0.2, 0.2);

  //Ground
  var ground = BABYLON.Mesh.CreatePlane("ground", 10.0, scene);
  ground.position = new BABYLON.Vector3(0, 0, 0);
  ground.rotation = new BABYLON.Vector3(Math.PI / 2, 0, 0);

  var groundMat = new BABYLON.PBRMetallicRoughnessMaterial("groundMat", scene);
  groundMat.baseColor = new BABYLON.Color4(0.2, 0.2, 0.5, 1.0);
  groundMat.metallic = 0;
  groundMat.roughness = 0.8;
  ground.material = groundMat;
  ground.material.backFaceCulling = false;

  // Set up new rendering pipeline
  var pipeline = new BABYLON.DefaultRenderingPipeline("default", true, scene);

  // Tone mapping
  scene.imageProcessingConfiguration.toneMappingEnabled = true;
  scene.imageProcessingConfiguration.toneMappingType =
    BABYLON.ImageProcessingConfiguration.TONEMAPPING_ACES;
  scene.imageProcessingConfiguration.exposure = 1;

  // Bloom
  pipeline.bloomEnabled = true;
  pipeline.bloomThreshold = 0.8;
  pipeline.bloomWeight = 1;
  pipeline.bloomKernel = 64;
  pipeline.bloomScale = 0.5;

  // Fire!
  BABYLON.ParticleHelper.CreateAsync("fire", scene).then((set) => {
    set.start();
  });

  return scene;
};
