// voeg controls toe (teleport & WASD controls)
const controls = new Controls(50);
controls.enableMovement();

const roomModel = new Model('assets/models/room/scene.gltf');
roomModel.setPosition(0, 0, 0);
roomModel.setScale(1.2, 0.6, 1.2);
roomModel.setRotation(0, 0, 0);

//const schilderij = new Model('assets/models/blank_canvas/scene.gltf');
//schilderij.setPosition(0, 1, -8.09);
//schilderij.setScale(1, 1, 1);
//schilderij.setRotation(0, 0, 0);

const image = new XRImage('assets/images/FolkertdeJong.jpg');
image.setPosition(0, 2, -8.11);
image.setScale(2, 2, 2);

const image2 = new XRImage('assets/images/Lisse-049.jpg');
image2.setPosition(0, 2, 8.10);
image2.setRotation(180, 0, 0)

const chair = new Model('assets/models/chair/scene.gltf');
chair.setPosition(5, 0, 5);
chair.setScale(0.07, 0.07, 0.07);
chair.setRotation(0, 0, 0);

const rust = new Model('assets/models/paint_can/scene.gltf');
rust.setPosition(5, 1.1, 5);
rust.setScale(0.07, 0.07, 0.07);
rust.setRotation(0, 0, 0);

// listen for an event
// minecraftModel.addEventListener('click', () => console.log('je klikt op mij'));