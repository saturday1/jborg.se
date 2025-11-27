flippingBook.pages = [
	"pages/page-001.jpg",
	"pages/page-002.jpg",
	"pages/page-003.jpg",
	"pages/page-004.jpg",
	"pages/page-005.jpg",
	"pages/page-006.jpg",
	"pages/page-007.jpg",
	"pages/page-008.jpg"
];


flippingBook.contents = [
	[ "Start page", 1 ],
	[ "Super Hot Prices", 2 ],
	[ "Used", 7 ]
];

// define custom book settings here
flippingBook.settings.bookWidth = 992;
flippingBook.settings.bookHeight = 700;
flippingBook.settings.pageBackgroundColor = 0xFFFFFF;
flippingBook.settings.backgroundColor = 0x000000;
flippingBook.settings.zoomUIColor = 0x000000;
flippingBook.settings.useCustomCursors = false;
flippingBook.settings.dropShadowEnabled = true;
flippingBook.settings.zoomImageWidth = 1098;
flippingBook.settings.zoomImageHeight = 1550;
flippingBook.settings.downloadURL = "pdf/HC11-SE.pdf";
flippingBook.settings.flipSound = "sounds/02.mp3";
flippingBook.settings.flipCornerStyle = "first page only";
flippingBook.settings.zoomHintEnabled = true;

// default settings can be found in the flippingbook.js file
flippingBook.create();
