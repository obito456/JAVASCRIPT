async function getLion() {
    return '🦁'; 
}

async function fetchLion() {
    const lion = await getLion();
    console.log(lion === '🦁');
}
fetchLion();
