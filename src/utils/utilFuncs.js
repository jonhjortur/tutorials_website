const slugify = function(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') 		// Replace spaces with -
    .replace(/\+/g, 'p') 		// Skipti út '+' fyrir 'p' til að 'C' og 'C++' vísi ekki eins.
    .replace(/[^\w-]+/g, '') 	// Remove all non-word chars
    .replace(/--+/g, '-') 		// Replace multiple - with single -
    .replace(/^-+/, '') 		// Trim - from start of text
    .replace(/-+$/, '') 		// Trim - from end of text
}

// Næstum alveg stolið héðan: https://stackoverflow.com/questions/3452546/how-do-i-get-the-youtube-video-id-from-a-url
function youtubeId(url){
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return (match&&match[7].length===11)? match[7] : false;
}

module.exports = { slugify, youtubeId }