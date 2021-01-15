// voeg controls toe (teleport & WASD controls)
const controls = new Controls(50);
controls.enableMovement();

const roomModel = new Model('assets/models/room/scene.gltf');
roomModel.setPosition(0, 0, 0);
roomModel.setScale(0.8, 0.6, 1.2);
roomModel.setRotation(0, 0, 0);

//const schilderij = new Model('assets/models/blank_canvas/scene.gltf'); werkt nie :(
//schilderij.setPosition(0, 1, -8.09);
//schilderij.setScale(1, 1, 1);
//schilderij.setRotation(0, 0, 0);

const image = new XRImage('assets/images/FolkertdeJong.jpg');
image.setPosition(0, 3, -8.11);
image.setScale(2, 2, 2);

//const image2 = new XRImage('assets/images/Lisse-049.jpg');
//image2.setPosition(0, 2, 8.10);
//image2.setRotation(180, 0, 0)

const chair = new Model('assets/models/chair/scene.gltf');
chair.setPosition(5, 0, 5);
chair.setScale(0.06, 0.06, 0.06);
chair.setRotation(0, 0, 0);

const rust = new Model('assets/models/paint_can/scene.gltf');
rust.setPosition(5, 0, 4);
rust.setScale(0.06, 0.06, 0.06);
rust.setRotation(0, 0, 0);

const ladder = new Model('assets/models/aluminium_ladder/scene.gltf');
ladder.setPosition(0, 0, -7,515);
ladder.setScale(2, 2, 2);
ladder.setRotation(0, 90, 0);

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

const easel = new Model('assets/models/easel_low_poly/scene.gltf');
easel.setPosition(-4.784, 1, -5.871);
easel.setScale(1, 1, 1);
easel.setRotation(0, 90, 0);

const table = new Model('assets/models/workbench_or_craftingtable/scene.gltf');
table.setPosition(-4.593, 0, 4,888);
table.setScale(0.02, 0.015, 0.03);
table.setRotation(0, 0, 0);

const brush1 = new Model('assets/models/brush/scene.gltf');
brush1.setPosition(-4.593, 1.3, 5,333);
brush1.setScale(0.005, 0.005, 0.005);
brush1.setRotation(0, 0, 90);

const brush2 = new Model('assets/models/brush2/scene.gltf');
brush2.setPosition(-4.593, 1.3, 4,888);
brush2.setScale(0.005, 0.005, 0.005);
brush2.setRotation(0, 0, 90);

const pallet = new Model('assets/models/pallet/scene.gltf');
pallet.setPosition(2.513, 0.006, 0.813);
pallet.setScale(0.007, 0.007, 0.007);
pallet.setRotation(0, 0, 0);

const blik1 = new Model('assets/models/plastic/scene.gltf');
blik1.setPosition(2.136, 0.421, 0.757);
blik1.setScale(0.01, 0.01, 0.01);
blik1.setRotation(0, 0, 0);

const box = new Model('assets/models/palletbox/scene.gltf');
box.setPosition(-3.338, 0.576, )-0.869;
box.setScale(0.1, 0.1, 0.1);
box.setRotation(0, 0, 0);

const kunst1 = new Model('assets/models/hooman/hooman.gltf');
kunst1.setPosition(4.508, 0.083, -2.861);
kunst1.setScale(7, 7, 7);
kunst1.setRotation(0, -59.151, 0);

const bucket = new Model('assets/models/bucket/scene.gltf');
bucket.setPosition(2.374, 0.234, 0.941);
bucket.setScale(7, 7, 7);
bucket.setRotation(0, 0, 0);

const bucket2 = new Model('assets/models/bucket/scene.gltf');
bucket2.setPosition(2.374, 0.664, 1.664);
bucket2.setScale(7, 7, 7);
bucket2.setRotation(80.099, 0.001, 0.001);

const bucket3 = new Model('assets/models/bucket/scene.gltf');
bucket3.setPosition(2.374, 0.267, 0.941);
bucket3.setScale(7, 7, 7);
bucket3.setRotation(0, 0, 0);

const truck = new Model('assets/models/pallettruck/scene.gltf');
truck.setPosition(-1.689, 0.910, -0.215);
truck.setScale(0.005, 0.005, 0.005);
truck.setRotation(0, 59.168, 0);

const trashpile = new Model('assets/models/trashpile/scene.gltf');
trashpile.setPosition(-3.5, .10, -1);
trashpile.setScale(1, 1, 1);
trashpile.setRotation(0, 0, 0);

// listen for an event
// minecraftModel.addEventListener('click', () => console.log('je klikt op mij'));