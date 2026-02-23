// vars & cons
const video = document.getElementById("video-element");
const startBtn = document.getElementById("start-btn");
const testBtn = document.getElementById("test");
const Result = document.getElementById("result");
const charge = document.getElementById("charge");
const chargeBtn = document.getElementById("chargeBtn");
let currentStream = null;
let constraints = {
    video: {
        facingMode: "user",
    },
    audio: false,
}
// functions
// const startCamera = async () => {
//     const constraints = {
//         video: {
//             facingMode: "environment",
//             width: { ideal: 1280 },
//             heigt: { ideal: 720 },
//         },
//         audio: false,
//     };

//     // Check if geolocation is supported

//     try {
//         currentStream = await navigator.mediaDevices.getUserMedia(constraints);
//         video.srcObject = currentStream;
//     }
//     catch (err) {
//         console.error("Error", err);
//         alert(err);
//     }
// };

const startCamera = async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        video.srcObject = stream;
    }
    catch (err) {
        alert("not working", err)
    }
};

const testFunc = async () => {
    try {
        const battery = await navigator.getBattery();
        Result.textContent = `${battery.level}%`;
    }
    catch (err) {
        alert("Failed to test the API:", err);
    };
}

const chargeFunc = async () => {
    try {
        const isCharge = await navigator.getBattery();
        charge.textContent = `${isCharge.charging}`;
    }
    catch (err) {
        alert("can't reach the charging api");
    }
};

// event listeners
startBtn.addEventListener("click", startCamera);
testBtn.addEventListener("click", testFunc);
chargeBtn.addEventListener("click", chargeFunc);
// test
console.log();