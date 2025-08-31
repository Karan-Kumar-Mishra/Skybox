function GenerateName() {
    const names = 'qwertyuioplkjhgfdsazxcvbnm'
    let ans = "";
    for (let index = 0; index < 10; index++) {
        ans = ans + names[Math.round(Math.random() * 10)];
    }
    return ans;
}
module.exports = GenerateName