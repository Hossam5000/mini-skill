// vars & cons
const video = document.getElementById('video-element');
const startBtn = document.getElementById('start-btn');
const switchBtn = document.getElementById('switch-btn');
const stopBtn = document.getElementById('stop-btn');

let currentStream = null;
let useFacingMode = "user"; // "user" = front, "environment" = back

// functions
// 1. Start Camera Function
async function startCamera() {
    // Stop any existing tracks before starting new ones
    stopCamera();

    const constraints = {
        video: {
            facingMode: useFacingMode,
            width: { ideal: 1280 },
            height: { ideal: 720 }
        },
        audio: false
    };

    try {
        currentStream = await navigator.mediaDevices.getUserMedia(constraints);
        video.srcObject = currentStream;

        // UI Updates
        startBtn.style.display = 'none';
        stopBtn.style.display = 'inline-block';
        switchBtn.style.display = 'inline-block';

        // Toggle mirror class based on camera
        video.className = (useFacingMode === "user") ? "" : "environment";

    } catch (err) {
        console.error("Error: ", err);
        alert("Could not access camera. Ensure you are on HTTPS or Localhost.");
    }
}

// 2. Stop Camera Function
function stopCamera() {
    if (currentStream) {
        currentStream.getTracks().forEach(track => track.stop());
        video.srcObject = null;
    }
    startBtn.style.display = 'inline-block';
    stopBtn.style.display = 'none';
    switchBtn.style.display = 'none';
}

// 3. Switch Camera Logic
function switchCamera() {
    useFacingMode = (useFacingMode === "user") ? "environment" : "user";
    startCamera(); // Restart with new constraints
}

// Event Listeners
startBtn.addEventListener('click', startCamera);
stopBtn.addEventListener('click', stopCamera);
switchBtn.addEventListener('click', switchCamera);