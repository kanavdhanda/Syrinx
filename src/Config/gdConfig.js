// const GODOT_CONFIG = {
//     executable: "syrinx-test-build",
// }

const games = [
  //   {
  //     name: "Level 1",
  //     args: [],
  //     canvasResizePolicy: 2,
  //     executable: "http://localhost:5173/game",
  //     experimentalVK: true,
  //     fileSizes: { "game.pck": 30483344, "game.wasm": 35708238 },
  //     focusCanvas: true,
  //     gdextensionLibs: [],
  //     serviceWorker: `game.service.worker.js`,
  //   },
  {
    name: "level-1",
    args: [],
    canvasResizePolicy: 2,
    executable: "/level-1/level-1",
    // executable:"/api/proxy/level-1",
    // executable: "https://srinx-ccs.blr1.cdn.digitaloceanspaces.com/level-1/level-1",
    experimentalVK: true,
    fileSizes: { "level-1.pck": 24219360, "level-1": 1758196 },
    focusCanvas: true,
    gdextensionLibs: [],
    serviceWorker: "level-1.service.worker.js",
    // mainPack:"https://srinx-ccs.blr1.cdn.digitaloceanspaces.com/level-1/level-1.pck",
  },
];

export { games };


