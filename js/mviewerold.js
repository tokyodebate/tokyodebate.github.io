/*
 * Motion Viewer
 *
 * Author: Yifu Liao
 * License: MIT
 * 
 */


function loadMotions(url) {
	var results = Papa.parse(url, {
		download: true,
		delimiter: "\t",
		quoteChar: '',
		escapeChar: '',
		header: false,
		skipEmptyLines: 'greedy',
		complete: completeFn
	});
}

function completeFn(results) {
	showMotions(results.data);
}

function len(data) {
	return (data ? data.length : 0);
}

function showMotions(array) {
	console.table(array);
	console.log(array.length);
	const myArticle = document.createElement('article');
	const myCup = document.createElement('p');
	myCup.className = "h2"
	myCup.textContent = 'Motions for ' + array[0][0];
	myArticle.appendChild(myCup);

	var ln = 1;
	while(ln <= array.length + 3) {
		
		if (len(array[ln]) <= 1) {
			break;
		} else if (len(array[ln]) == 2) {
			const myYear = document.createElement('div');
			myYear.className = "card mb-3";
			const myYear1 = document.createElement('div');
			myYear1.className = "card-body";
			const myYear2 = document.createElement('h3');
			myYear2.className = "card-title px-3";
			myYear2.textContent = array[ln][1];
			myYear1.appendChild(myYear2);
			ln++;
			while(ln <= array.length + 3) {
				
				if (len(array[ln]) <= 2) {
					break;
				} else if (len(array[ln]) == 3) {
					const myRound = document.createElement('div');
					myRound.className = "card bg-light border";
					const myRound1 = document.createElement('div');
					myRound1.className = "card-header border-bottom border-danger"
					myRound1.textContent = array[ln][2];
					myRound.appendChild(myRound1);
					ln++;
					while(ln <= array.length + 3) {
						
						if (len(array[ln]) <= 3) {
							break;
						} else if (len(array[ln]) == 4) {
							const myMotion = document.createElement('div');
							myRound.className = "card-body";
							const myMotion1 = document.createElement('h3');
							myMotion1.className = "card-title px-3 pt-4"
							myMotion1.textContent = array[ln][3];
							myMotion.appendChild(myMotion1);
							ln++;
							while(ln <= array.length + 3) {
								
								if (len(array[ln]) <= 4) {
									break;
								} else if (len(array[ln]) == 5) {
									const myInfo = document.createElement('p');
									myInfo.className = "card-text mx-3 px-3";
									myInfo.textContent = array[ln][4];
									myMotion.appendChild(myInfo);
									ln++;
								} else {
									console.warn("Parse error at line" + ln);
									console.warn(array[ln]);
									ln++;
								}
							}
							myRound.appendChild(myMotion);
						} else {
							console.warn("Parse error at line" + ln);
							console.warn(array[ln]);
							ln++;
						}
					}
					myYear1.appendChild(myRound);
				} else {
					console.warn("Parse error at line" + ln);
					console.warn(array[ln]);
					ln++;
				}
			}
			myYear.appendChild(myYear1);
			myArticle.appendChild(myYear);
		} else {
			console.warn("Parse error at line" + ln);
			console.warn(array[ln]);
			ln++;
		}
			
	}
	section.appendChild(myArticle);
}