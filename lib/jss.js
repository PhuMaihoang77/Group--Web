function showImage(index) {
    console.log('Index:', index);
    var images = document.querySelectorAll('.img img');
    images.forEach(function (img) {
        img.style.display = 'none';
    });
    var selectedImage = document.querySelector('.img img:nth-child(' + index + ')');
    if (selectedImage) {
        selectedImage.style.display = 'block';
        console.log('Selected Image:', selectedImage);
    }
}
function showTabImage(tabId, index) {
    var images = document.querySelectorAll(tabId + ' .img img');
    var imageArray = Array.from(images);

    imageArray.forEach(function (img) {
        img.style.display = 'none';
    });

    var selectedImage = document.querySelector(tabId + ' .img img:nth-child(' + index + ')');
    if (selectedImage) {
        selectedImage.style.display = 'block';
    }
}
function updateWebLink(link) {
    var webButton = document.getElementById('webButton');
    webButton.setAttribute('data-link', link);
}

function openWebLink() {
    var webButton = document.getElementById('webButton');
    var link = webButton.getAttribute('data-link');
    if (link) {
        window.open(link, '_blank');
    }
    console.log(link)
}
function showTabAndWebLink(tabId, index, link) {
    showTabImage(tabId, index);
    updateWebLink(link);
}
function downloadImage() {
    var selectedImage = document.querySelector('.img img[style*="display: block"]');
    if (selectedImage) {
        var downloadLink = document.createElement('a');
        downloadLink.href = selectedImage.src;
        downloadLink.download = 'image.jpg';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }
}
function downloadAllImages() {
    var images = document.querySelectorAll('.img img');
    images.forEach(function (img, index) {
        var downloadLink = document.createElement('a');
        downloadLink.href = img.src;
        downloadLink.download = 'image' + (index + 1) + '.jpg';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    });
}