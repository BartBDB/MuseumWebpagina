// voeg controls toe (teleport & WASD controls)
const controls = new Controls(50);
controls.enableMovement();

const roomModel = new Model('assets/models/room/scene.gltf');
roomModel.setPosition(0, 0, 0);
roomModel.setScale(0.8, 0.6, 1.2);
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
chair.setScale(0.06, 0.06, 0.06);
chair.setRotation(0, 0, 0);

const rust = new Model('assets/models/paint_can/scene.gltf');
rust.setPosition(5, 0, 4);
rust.setScale(0.06, 0.06, 0.06);
rust.setRotation(0, 0, 0);

const ladder = new Model('assets/models/aluminium_ladder/scene.gltf');
ladder.setPosition(-4, 0, -4);
ladder.setScale(1.5, 1.5, 1.5);
ladder.setRotation(0, 0, 0);

const bench = new Model('assets/models/workbench/scene.gltf');
bench.setPosition(2.6, 0, 6.9);
bench.setScale(0.04, 0.04, 0.04);
bench.setRotation(0, 180, 0);

const bag = new Model('assets/models/trashbag/scene.gltf');
bag.setPosition(3.629, 0, -6.563);
bag.setScale(0.1, 0.1, 0.1);
bag.setRotation(0, 0, 0);

const tafel = new Model('assets/models/woodentable/scene.gltf');
tafel.setPosition(4.784, 0, -5.871);
tafel.setScale(0.06, 0.05, 0.06);
tafel.setRotation(0, 0, 0);

// listen for an event
// minecraftModel.addEventListener('click', () => console.log('je klikt op mij'));
