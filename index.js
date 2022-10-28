async function lottery() {
	try {
		console.log("Вы начали игру");
		const promise = new Promise(function (resolve, reject) {
			setTimeout(function () {
				Math.random(0) > 0.5
					? resolve(`You're winner`)
					: reject("LoOsSsEeErR(or)");
			}, 1000);
		});
		let res = await promise;
		console.log(res);
	} catch (e) {
		console.log(e);
	} finally {
		console.log("Buy - buy!");
	}
}

lottery();