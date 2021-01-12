// voeg controls toe (teleport & WASD controls)
const controls = new Controls(50);
controls.enableMovement();

const roomModel = new Model('assets/models/cube-room/cube-room.gltf');
roomModel.setPosition(0, 0, 0);
roomModel.setScale(5, 1, 5);
roomModel.setRotation(0, 0, 0);

const ezel = new Model('assets/models/blank-canvas/source/SMS-Canvas-Sketchfab/SMS Canvas.OBJ');
ezel.setPosition(1, 1, 1);
ezel.setScale(1, 1, 1);
ezel.setRotation(0, 0, 0);

const paintcan = new Model('assets/models/paint-can/source/bucket.OBJ');
paintcan.setPosition(2, 2, 2);
paintcan.setScale(1, 1, 1);
paintcan.setRotation(0, 0, 0);