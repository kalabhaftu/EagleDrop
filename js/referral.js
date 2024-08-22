function copyLink() {
    const referralLink = document.getElementById('referralLink').textContent;
    navigator.clipboard.writeText(referralLink).then(() => {
        const copyMessage = document.getElementById('copyMessage');
        copyMessage.style.display = 'block';
        setTimeout(() => {
            copyMessage.style.display = 'none';
        }, 2000);
    });
}

function replace() {
    window.location.replace('../index.html');
}