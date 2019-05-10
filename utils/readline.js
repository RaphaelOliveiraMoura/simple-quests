module.exports = () => {
    return new Promise((resolve, reject) => {
        process.stdin.on('data', (data)=>{ 
            resolve(data.toString()); 
        });
    })
}