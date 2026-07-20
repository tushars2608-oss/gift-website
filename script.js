// Global variables
let currentGift = '';
let userAddress = '';
let userAmount = '';

// Hide all pages
function hideAllPages() {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
}

// Show specific page
function goToPage(pageId) {
    hideAllPages();
    const page = document.getElementById(pageId);
    if (page) {
        page.classList.add('active');
        window.scrollTo(0, 0);
    }
}

// Page 1 to Page 2
function nextPage() {
    goToPage('page2');
}

// Handle Yes on Page 2
function handleYes() {
    goToPage('page5');
}

// Handle No on Page 2 - Go to Page 3
function handleNo() {
    goToPage('page3');
}

// Handle No on Page 3 - Go to Page 4
function handleNo2() {
    goToPage('page4');
}

// Handle Yes on Page 3 - Go to Page 5
function handleYes2() {
    goToPage('page5');
}

// Handle Yes on Page 4 - Go to Page 5
function handleYes3() {
    goToPage('page5');
}

// Go to Gift Selection (Page 6)
function goToGifts() {
    goToPage('page6');
}

// Select Gift (1-4 options)
function selectGift(gift, currentPage) {
    currentGift = gift;
    goToPage('page8');
}

// Submit Hint (Page 7)
function submitHint() {
    const hint = document.getElementById('hintText').value;
    if (hint.trim() === '') {
        alert('Please write a hint! 💌');
        return;
    }
    currentGift = 'Hint: ' + hint;
    goToPage('page8');
}

// Address Page - Yes
function goToAddressForm() {
    goToPage('page9');
}

// Address Page - No
function handleNoAddress() {
    goToPage('page12');
}

// Submit Address
function submitAddress() {
    const address = document.getElementById('addressInput').value;
    if (address.trim() === '') {
        alert('Please enter your address! 📍');
        return;
    }
    userAddress = address;
    goToPage('page10');
}

// Submit Amount
function submitAmount() {
    const amount = document.getElementById('amountInput').value;
    if (amount === '' || amount <= 0) {
        alert('Please enter a valid amount! 💸');
        return;
    }
    userAmount = amount;
    goToPage('page11');
}

// Submit Amount Direct (Page 12)
function submitAmountDirect() {
    const amount = document.getElementById('amountInput2').value;
    if (amount === '' || amount <= 0) {
        alert('Please enter a valid amount! 💸');
        return;
    }
    userAmount = amount;
    goToPage('page11');
}

// Log collected data (for debugging/reference)
function collectData() {
    return {
        gift: currentGift,
        address: userAddress || 'Not provided',
        amount: userAmount
    };
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    goToPage('page1');
});
