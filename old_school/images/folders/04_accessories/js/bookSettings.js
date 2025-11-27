flippingBook.pages = [
	"pages/page-001.jpg",
	"pages/page-002.jpg",
	"pages/page-003.jpg",
	"pages/page-004.jpg",
	"pages/page-005.jpg",
	"pages/page-006.jpg"
];


flippingBook.contents = [
	[ "PS3", 1 ],
	[ "Xbox 360", 2 ],
	[ "Wii", 3 ],
	[ "DS", 4 ],
	[ "PSP", 5 ],
	[ "PS2", 6 ]
];

// define custom book settings here
flippingBook.settings.bookWidth = 822;
flippingBook.settings.bookHeight = 700;
flippingBook.settings.pageBackgroundColor = 0x000000;
flippingBook.settings.backgroundColor = 0x000000;
flippingBook.settings.zoomUIColor = 0x000000;
flippingBook.settings.useCustomCursors = false;
flippingBook.settings.dropShadowEnabled = true;
flippingBook.settings.zoomImageWidth = 940;
flippingBook.settings.zoomImageHeight = 1600;
flippingBook.settings.downloadURL = "pdf/HC09-SE.pdf";
flippingBook.settings.flipSound = "sounds/02.mp3";
flippingBook.settings.flipCornerStyle = "first page only";
flippingBook.settings.zoomHintEnabled = true;

// default settings can be found in the flippingbook.js file
flippingBook.create();
