
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.124.0/examples/jsm/controls/OrbitControls.js";


const canvas = document.querySelector("#canvas");
const part = document.querySelector("#particles-js");
const originalBtn = document.querySelector(".original-btn");
const contentOne = document.querySelector(".content-1");
const contentTwo = document.querySelector(".content-2");
const contentThree = document.querySelector(".content-3");
const contentFour = document.querySelector(".content-4");
const contentFive = document.querySelector(".content-5");
const outOne = document.querySelector("#out-1");
const outTwo = document.querySelector("#out-2");
const outThree = document.querySelector("#out-3");
const outFour = document.querySelector("#out-4");
const outFive = document.querySelector("#out-5");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
var circle = document.getElementById("circle");


let scene, camera, renderer;
let rotateAroundGroup = false;

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(
    45, canvas.clientWidth / canvas.clientHeight, 0.1, 100
);
camera.position.set(0, 0, 5);
const light = new THREE.HemisphereLight(0xffffff, "cornflowerblue", 1);
scene.add(light);
const group = new THREE.Group();
const geometry = new THREE.PlaneBufferGeometry(1, 1, 1);


const textureLoader = new THREE.TextureLoader();

const texture1 = textureLoader.load('./assets/images/laptop.png');
texture1.encoding = THREE.sRGBEncoding;

const texture2 = textureLoader.load('./assets/images/mobile3.png');
texture2.encoding = THREE.sRGBEncoding;

const texture3 = textureLoader.load('./assets/images/game.png');
texture3.encoding = THREE.sRGBEncoding;

const texture4 = textureLoader.load('./assets/images/digital.png');
texture4.encoding = THREE.sRGBEncoding;

const texture5 = textureLoader.load('./assets/images/media.png');
texture5.encoding = THREE.sRGBEncoding;

// const texture6 = textureLoader.load('./assets/images/1.png');
// texture6.encoding = THREE.sRGBEncoding;

// const texture7 = textureLoader.load('./assets/images/2.png');
// texture7.encoding = THREE.sRGBEncoding;

// const texture8 = textureLoader.load('./assets/images/3.png');
// texture8.encoding = THREE.sRGBEncoding;

const texture9 = textureLoader.load('./assets/images/spider-2.png');
// texture9.encoding = THREE.sRGBEncoding;

const texture10 = textureLoader.load('./assets/images/web_1.png');
texture10.encoding = THREE.sRGBEncoding;

// const texture11 = textureLoader.load('./assets/images/background.png');
// texture11.encoding = THREE.sRGBEncoding;


const material1 = new THREE.MeshBasicMaterial({ map: texture1, transparent: true, alphaTest: 0.8 });
const material2 = new THREE.MeshBasicMaterial({ map: texture2, transparent: true, alphaTest: 0.6 });
const material3 = new THREE.MeshBasicMaterial({ map: texture3, transparent: true, alphaTest: 0.8 });
const material4 = new THREE.MeshBasicMaterial({ map: texture4, transparent: true, alphaTest: 0.5 });
const material5 = new THREE.MeshBasicMaterial({ map: texture5, transparent: true, alphaTest: 0.8 });
// const material6 = new THREE.MeshBasicMaterial({ map: texture6, transparent: true, alphaTest: 0.8 });
// const material7 = new THREE.MeshBasicMaterial({ map: texture7, transparent: true, alphaTest: 0.8 });
// const material8 = new THREE.MeshBasicMaterial({ map: texture8, transparent: true, alphaTest: 0.8 });
const material9 = new THREE.MeshBasicMaterial({ map: texture9, transparent: true, alphaTest: 0.9 });
const material10 = new THREE.MeshBasicMaterial({ map:texture10, transparent: true, alphaTest: -1 });
// const material11 = new THREE.MeshBasicMaterial({ map:texture11, transparent: true, alphaTest: -1 });


const box = new THREE.Mesh(geometry, material1);
group.add(box);

const box2 = new THREE.Mesh(geometry, material2);
group.add(box2);

const box3 = new THREE.Mesh(geometry, material3);
group.add(box3);

const box4 = new THREE.Mesh(geometry, material4);
group.add(box4);

const box5 = new THREE.Mesh(geometry, material5);
group.add(box5);

// const box6 = new THREE.Mesh(geometry, material6);
// group.add(box6);

// const box7 = new THREE.Mesh(geometry, material7);
// group.add(box7);

// const box8 = new THREE.Mesh(geometry, material8);
// group.add(box8);

const box9 = new THREE.Mesh(geometry, material9);
group.add(box9);

const box10 = new THREE.Mesh(geometry, material10);
group.add(box10);

// const box11 = new THREE.Mesh(geometry, material11);
// group.add(box11);


// Function to adjust box positions based on screen width
function adjustBoxPositions() {
    if (window.innerWidth <= 375) {

        box.position.set(0, -2.2, -5);
        box.scale.set(1.5, 1.5, 1.5);
        box2.position.set(1.4, -1.1, -7);
        box3.position.set(1.1, 0.9, -7);
        box4.position.set(-1.1, 0.9, -7);
        box5.position.set(-1.6, -1.1, -7);
        // box6.position.set(0, 1.4, -6);
        // box6.scale.set(0.6, 0.6, 0.6);
        // box7.position.set(1.7, 2, -6);
        // box7.scale.set(0.6, 0.6, 0.6);
        // box8.position.set(0.3, -0.7, -5);
        // box8.scale.set(0.5, 0.5, 0.5);
        box9.position.set(0, 1.2, 0.7);
        box10.position.set(0, 0, -9);
        box10.scale.set(8, 8, 8);

    } else if (window.innerWidth <= 576) {

      box.position.set(0, -2.1, -5);
      box.scale.set(1.7, 1.7, 1.7);
      box2.position.set(1.8, -1.1, -7);
      box3.position.set(1.4, 0.8, -7);
      box4.position.set(-1.4, 0.9, -7);
      box5.position.set(-1.8, -1.1, -7);
      // box6.position.set(-0.3, 1.6, -7);
      // box6.scale.set(0.7, 0.7, 0.7);
      // box7.position.set(2.1, 1.9, -7);
      // box7.scale.set(0.6, 0.6, 0.6);
      // box8.position.set(0.3, -0.2, -7);
      // box8.scale.set(0.6, 0.6, 0.6);
      box9.position.set(0, 1.2, 0.8);
      box10.position.set(0, 0, -9);
      box10.scale.set(9, 9, 9);

  } else if (window.innerWidth <= 850) {

        box.position.set(0, -1.1, -2);
        box.scale.set(1.6, 1.6, 1.6);
        box2.position.set(-2.5, -1.1, -4);
        box3.position.set(-2.2, 1.3, -4);
        box4.position.set(2.5, 0.3, -4);
        box5.position.set(2.9, -2.2, -4);
        // box6.position.set(1.4, 1.1, -4);
        // box6.scale.set(0.6, 0.6, 0.6);
        // box7.position.set(3.2, 1.6, -4);
        // box7.scale.set(0.6, 0.6, 0.6);
        // box8.position.set(-0.6, 0.4, -4);
        // box8.scale.set(0.6, 0.6, 0.6);
        box9.position.set(0, 1, 1.2);
        box10.position.set(0, 0, -5);
        box10.scale.set(9, 9, 9);

    } else if (window.innerWidth <= 1024) {

    box.position.set(0, -1, -1.6);
    box.scale.set(1.6, 1.6, 1.6);
    box2.position.set(-3.4, -1.1, -4);
    box3.position.set(-2.8, 1.3, -4);
    box4.position.set(3.2, 0.3, -4);
    box5.position.set(3.8, -2.2, -4);
    // box6.position.set(1.4, 1, -4);
    // box6.scale.set(0.6, 0.6, 0.6);
    // box7.position.set(3.4, 1.9, -4);
    // box7.scale.set(0.6, 0.6, 0.6);
    // box8.position.set(-0.8, 0.4, -4);
    // box8.scale.set(0.6, 0.6, 0.6);
    box9.position.set(0, 1, 1.2);
    box10.position.set(0, 0, -5);
    box10.scale.set(9, 9, 9);

  } else if (window.innerWidth <= 2560) {

    box.position.set(0, -0.8, -1.6);
    box.scale.set(1.8, 1.8, 1.8);
    box2.position.set(-4, -1.1, -4);
    box2.scale.set(1, 1.1, 1.1);
    box3.position.set(-3.2, 1.3, -4);
    box4.position.set(3.1, 0.3, -4);
    box5.position.set(3.7, -2.3, -4);
    // box6.position.set(1.4, 1.2, -4);
    // box6.scale.set(0.7, 0.7, 0.7);
    // box7.position.set(3.4, 1.9, -4);
    // box7.scale.set(0.7, 0.7, 0.7);
    // box8.position.set(-1, 0.8, -4);
    // box8.scale.set(0.6, 0.6, 0.6);
    box9.position.set(0, 1, 1.2);
    box10.position.set(0, 0, -5);
    box10.scale.set(10, 10, 10);
    // box11.position.set(0, 0, -20);
    // box11.scale.set(15, 15, 15);
}}

adjustBoxPositions();


window.addEventListener('resize', adjustBoxPositions);

scene.add(group);

renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true  });
renderer.setSize(canvas.clientWidth, canvas.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
// renderer.outputEncoding = THREE.sRGBEncoding;
canvas.appendChild(renderer.domElement);


const zoomInTimeline = (x, y, z, zoomOutFactor = 0) => {
    let tl = gsap
        .timeline({ defaults: { duration: 2, ease: "expo.out" } })
        .to(controls.target, { x, y, z })
        .to(camera.position, { x, y, z: z + zoomOutFactor }, 0)
        .to(group.rotation, { x: 0, y: 0 }, 0);
};


originalBtn.addEventListener("click", () => {
    zoomInTimeline(0, 0, 0, 5);
    // rotateAroundGroup = true;
    contentOne.style.display = "none";
    contentOne.style.opacity = "0";
    contentTwo.style.display = "none";
    contentTwo.style.opacity = "0";
    contentThree.style.display = "none";
    contentThree.style.opacity = "0";
    contentFour.style.display = "none";
    contentFour.style.opacity = "0";
    contentFive.style.display = "none";
    contentFive.style.opacity = "0";

    gsap.to(outOne, { display: "block", opacity: 1, duration: 0.5 });
    gsap.to(outTwo, { display: "block", opacity: 1, duration: 0.5 });
    gsap.to(outThree, { display: "block", opacity: 1, duration: 0.5 });
    gsap.to(outFour, { display: "block", opacity: 1, duration: 0.5 });
    gsap.to(outFive, { display: "block", opacity: 1, duration: 0.5 });
    gsap.to(originalBtn, { opacity: 0, display: "none", duration: 0.5 });
    gsap.to(one, { display: "block", opacity: 1, duration: 0.5 });
    gsap.to(two, { display: "block", opacity: 1, duration: 0.5 });
    gsap.to(three, { display: "block", opacity: 1, duration: 0.5 });

});


const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

const interactiveObjects = [box, box2, box3, box4, box5];

window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(interactiveObjects, true);

    if (intersects.length > 0) {

        canvas.style.cursor = 'pointer';

        const x = event.clientX;
        const y = event.clientY;
        
        circle.style.left = x + "px";
        circle.style.top = y + "px";

        follower.style.display = "none";
        circle.style.display = "block";

        gsap.to(circle, { duration: 0.4, opacity: 1, scale: 1, ease: "easeInOut" });
        gsap.to(follower, { duration: 0.4, opacity: 0, scale: 1, ease: "easeInOut" });

    } else {

        canvas.style.cursor = 'default';
        follower.style.display = "block";
        circle.style.display = "none";
        
        gsap.to(follower, { duration: 0.4, opacity: 1, scale: 1, ease: "easeInOut" });
        gsap.to(circle, { duration: 0.4, opacity: 0, scale: 1, ease: "easeInOut" });
}});


window.addEventListener('click', () => {

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
        const clickedObject = intersects[0].object;

        handleBoxClick(clickedObject);
}});


function handleBoxClick(clickedBox) {
  if (![box, box2, box3, box4, box5].includes(clickedBox)) {
    return; fggg
}
    contentOne.style.display = "none";
    contentOne.style.opacity = "0";
    contentTwo.style.display = "none";
    contentTwo.style.opacity = "0";
    contentThree.style.display = "none";
    contentThree.style.opacity = "0";
    contentFour.style.display = "none";
    contentFour.style.opacity = "0";
    contentFive.style.display = "none";
    contentFive.style.opacity = "0";

gsap.to(outOne, { display: "none", opacity: 0, duration: 0.5 });
gsap.to(outTwo, { display: "none", opacity: 0, duration: 0.5 });
gsap.to(outThree, { display: "none", opacity: 0, duration: 0.5 });
gsap.to(outFour, { display: "none", opacity: 0, duration: 0.5 });
gsap.to(outFive, { display: "none", opacity: 0, duration: 0.5 });
gsap.to(originalBtn, { display: "block", opacity: 1, duration: 0.5 });
gsap.to(one, {  opacity: 0, duration: 0.2 });
gsap.to(two, {  opacity: 0, duration: 0.2 });
gsap.to(three, {  opacity: 0, duration: 0.2 });


    let zoomOutFactor = 2.6;

    if (window.innerWidth <= 576) {
        zoomOutFactor = 3.6; 

    } else if (window.innerWidth <= 992) {
        zoomOutFactor = 3.3; 

    } else if (window.innerWidth <= 1400) {
        zoomOutFactor = 3.3; 
    }

    if (clickedBox === box) {

        zoomInTimeline(box.position.x, box.position.y, box.position.z, zoomOutFactor,);
        gsap.to(contentOne, { display: "block", opacity: 1, duration: 0.3 });

    } else if (clickedBox === box2) {
        zoomInTimeline(box2.position.x, box2.position.y, box2.position.z, zoomOutFactor);
        gsap.to(contentTwo, { display: "block", opacity: 1, duration: 0.3 });

    } else if (clickedBox === box3) {
        zoomInTimeline(box3.position.x, box3.position.y, box3.position.z, zoomOutFactor);
        gsap.to(contentThree, { display: "block", opacity: 1, duration: 0.3 });

    } else if (clickedBox === box4) {
        zoomInTimeline(box4.position.x, box4.position.y, box4.position.z, zoomOutFactor);
        gsap.to(contentFour, { display: "block", opacity: 1, duration: 0.3 });

    } else if (clickedBox === box5) {
        zoomInTimeline(box5.position.x, box5.position.y, box5.position.z, zoomOutFactor);
        gsap.to(contentFive, { display: "block", opacity: 1, duration: 0.3 });
        
}}


let currentBoxIndex = 0;

document.addEventListener('DOMContentLoaded', function () {
    const leftArrow = document.querySelector('.left');
    const rightArrow = document.querySelector('.right');

    if (leftArrow && rightArrow) {
        leftArrow.addEventListener('click', () => navigateBoxes(-1)); 
        rightArrow.addEventListener('click', () => navigateBoxes(1)); 
    }
});


function navigateBoxes(direction) {
    // Find the next clickable box
    do {
        currentBoxIndex = (currentBoxIndex + direction) % group.children.length;
        if (currentBoxIndex < 0) {
            currentBoxIndex = group.children.length - 1;
        }
        var nextBox = group.children[currentBoxIndex];
    } while (![box, box2, box3, box4, box5].includes(nextBox));

    handleBoxClick(nextBox);
}


const controls = new OrbitControls(camera, renderer.domElement);
controls.enableRotate = false;

controls.enableZoom = false;

controls.enableRotate = false;

controls.enablePan = false;

const onWindowResize = () => {
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
};


window.addEventListener("resize", onWindowResize, false);

const clock = new THREE.Clock();

const animate = () => {
    const elapsedTime = clock.getElapsedTime();

    gsap.to(box.rotation, { x: Math.sin(elapsedTime) * 0.3, y: Math.cos(elapsedTime) * 0.3 });
    gsap.to(box2.rotation, { x: Math.sin(elapsedTime ) * 0.3, y: Math.cos(elapsedTime) * 0.2 });
    gsap.to(box3.rotation, { x: Math.sin(elapsedTime) * 0.3, y: Math.cos(elapsedTime) * 0.2 });
    gsap.to(box4.rotation, { x: Math.sin(elapsedTime) * 0.3, y: Math.cos(elapsedTime) * 0.3 });
    gsap.to(box5.rotation, { x: Math.sin(elapsedTime) * 0.2, y: Math.cos(elapsedTime) * 0.3 });
    // gsap.to(box6.rotation, { x: Math.sin(elapsedTime ) * 0.2, y: Math.cos(elapsedTime) * 0.2 });
    // gsap.to(box7.rotation, { x: Math.sin(elapsedTime) * 0.2, y: Math.cos(elapsedTime) * 0.3 });
    // gsap.to(box8.rotation, { x: Math.sin(elapsedTime) * 0.3, y: Math.cos(elapsedTime) * 0.3 });
    gsap.to(box9.rotation, { x: Math.sin(elapsedTime) * 0, y: Math.cos(elapsedTime) * 0 });
    gsap.to(box10.rotation, { x: Math.sin(elapsedTime) * 0, y: Math.cos(elapsedTime) * 0 });
    // gsap.to(box11.rotation, { x: Math.sin(elapsedTime) * 0, y: Math.cos(elapsedTime) * 0 });

    // Rotate inner box
    // innerBox.rotation.z += 0.01;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
};

animate();



particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 30,
      "density": {
        "enable": true,
        "value_area": 800
          
      }
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 1,
        "color": "#c78100"
      },
      "polygon": {
        "nb_sides": 7
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 3,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 10,
        "size_min": 0.1,
        "sync": false,
        "start_size": "zoom",
        "destroy": "zoom" 
      }
    },
    "line_linked": {
      "enable": false
    },
    "move": {
      "enable": true,
      "speed": 0.4,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
      
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
        
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 300,
        "size": 70,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 500,
        "duration": 0.9
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
 
});



document.addEventListener("DOMContentLoaded", function() {
  var follower = document.getElementById("follower");

  document.addEventListener("mousemove", function(event) {
      var x = event.clientX;
      var y = event.clientY;

      follower.style.left = x + "px";
      follower.style.top = y + "px";

      gsap.to(follower, { duration: 0.4, opacity: 1, scale: 1, ease: "easeInOut" });
  });
});



 


