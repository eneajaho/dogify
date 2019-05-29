let webImages = document.getElementsByTagName('img')

let imgNr = webImages.length

for (let i = 0; i < imgNr; i++) {
  let randX = Math.floor(Math.random() * 1000)
  webImages[i].src = 'https://placedog.net/' + randX
}

var elementNames = ['div', 'body', 'td', 'img'] // Put all the tags you want bg images for here
var allBackgroundURLs = new Array()
elementNames.forEach(function(tagName) {
  var tags = document.getElementsByTagName(tagName)
  var numTags = tags.length
  for (var i = 0; i < numTags; i++) {
    tag = tags[i]
    if (tag.style.background.match('url')) {
      var bg = tag.style.background
      allBackgroundURLs.push(
        bg.substr(
          bg.indexOf('url') + 4,
          bg.lastIndexOf(')') - (bg.indexOf('url') + 4)
        )
      )
    }
  }
})

let bgNr = allBackgroundURLs.length

for (let i = 0; i < bgNr; i++) {
  let randX = Math.floor(Math.random() * 1000)
  allBackgroundURLs[i].src = 'https://placedog.net/' + randX
}
