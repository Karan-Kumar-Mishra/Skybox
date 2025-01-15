function generateRandomName() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let name = '';
    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        name += characters[randomIndex];
    }
    return name;
}

//console.log(generateRandomName()); // Example output: "A4Bc9"

let nameOfFolder="Unknown";
function generateFolder() {
 nameOfFolder=generateRandomName; 
}
module.exports = {
    generateFolder,
    nameOfFolder
};