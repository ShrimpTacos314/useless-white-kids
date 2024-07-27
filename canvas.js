//If the current display both has a width greater than 1366px and a height greater than 768px, return true.
const checkDisplaySize = () => {
	if (window.innerWidth >= 1366 && window.innerHeight >= 768) {
		return true;
	}

	return false;
};

const getRefreshRate = () => {
	
};

//Initialize the demo, loading promises for font etc.
const initDemo = () => {
	//Initalize Canvas2DContext
	const canvas = document.querySelector("#main-view");
	const ctx = canvas.getContext("2d");

	//Get font face from Google Fonts and add it to the document as a promise.
	//We start to load it also.
	const encodeSans = new FontFace(
		"encodeSansExpanded",
		"url(https://fonts.gstatic.com/s/encodesansexpanded/v11/c4mw1mF4GcnstG_Jh1QH6ac4hNLeNyeYUpLWChNPVo0.woff2)"
	);
	document.fonts.add(encodeSans);
	const fontPromise = encodeSans.load();

	//Background
	ctx.fillStyle = "#2b3b33";
	ctx.fillRect(0, 0, 1366, 768);

	//Draw necessary messages
	ctx.fillStyle = "#f0fff7";
	ctx.font = "20pt sans-serif";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	//If the display is greater than 1366x768...
	if (checkDisplaySize()) {
		//Wait for all the promises above to resolve.
		Promise.all([fontPromise]).then(() => {
			runDemo();
		}, () => {
			console.log(fontPromise);
			//PLACEHOLDER
			ctx.fillText("Boo!", 683, 374);
		});
	} else { //If the display is smaller than 1366x768...
		//Display an error message.
		ctx.fillText(
			"Your window must be at least 1366x768 to run this demo.",
			683,
			334
		);
		ctx.fillText(
			"To resize your window, full-screen your browser,",
			683,
			374
		);
		ctx.fillText(
			"modify your display settings, or maximize your window.",
			683,
			414
		);
	}

	const runDemo = () => {
		const image = document.getElementById("test-image");
	
		ctx.drawImage(image, 0, 0, 1366, 768);
	};
	
};
