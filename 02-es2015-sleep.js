async function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function other() {
    await sleep(1000);
    console.log('Прошла одна секунда')
}

other();