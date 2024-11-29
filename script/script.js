
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const hiddenDiv = document.getElementById("hiddenDiv");
const closeLetterButton = document.getElementById("closeLetter");

envelope.addEventListener("click", function() {
    hiddenDiv.classList.remove("hidden");
    envelope.classList.add("hidden");
});


function closeLetterResetEnvelope() {
    hiddenDiv.classList.add("hidden");
    envelope.classList.remove("hidden");
}

closeLetterButton.onclick = closeLetterResetEnvelope;

document.getElementById('closeLetter').addEventListener('click', function() {
    const hiddenDiv = document.getElementById('hiddenDiv');
    hiddenDiv.classList.toggle('hidden');
});
