function shuffleNoButton() {
    var noButton = document.getElementById('noButton');

    // Get viewport dimensions
    var viewportRect = document.body.getBoundingClientRect();
    var viewportWidth = viewportRect.width;
    var viewportHeight = viewportRect.height;

    // Get button dimensions
    var buttonRect = noButton.getBoundingClientRect();
    var buttonWidth = buttonRect.width;
    var buttonHeight = buttonRect.height;

    // Calculate random positions within the viewport
    var leftPosition = Math.random() * (viewportWidth - buttonWidth);
    var topPosition = Math.random() * (viewportHeight - buttonHeight);

    // Apply the calculated positions to the button
    noButton.style.left = leftPosition + 'px';
    noButton.style.top = topPosition + 'px';
}
function showHappyBoy() {
    // Hide the current content
    document.getElementById('question').style.display = 'none';
    document.getElementById('buttons').style.display = 'none';
    document.getElementById('naruto-img').style.display = 'none';

    // Show the happy boy content
    var happyBoyContent = document.getElementById('happyBoyContent');
    happyBoyContent.style.display = 'block';
}