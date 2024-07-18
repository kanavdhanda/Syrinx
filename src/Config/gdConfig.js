const GODOT_CONFIG = {
}

const games = [
    {
        name: "Game Instance 1",
        args: [],
        canvasResizePolicy: 2,
        executable: "Game",
        experimentalVK: true,
        fileSizes: { "Game.pck": 22994432, "Game.wasm": 35708238 },
        focusCanvas: true,
        gdextensionLibs: [],
        serviceWorker: "Game.service.worker.js",
        packfile: "Game",
        wasmFile: `/${GODOT_CONFIG.executable}.wasm?cache-bust=${new Date().getTime()}`,     //replace with link to pck file
        mainPack: `/${GODOT_CONFIG.executable}.pck?cache-bust=${new Date().getTime()}`,    //replace with link to main file
      },
  ];
  
  export { games };
  