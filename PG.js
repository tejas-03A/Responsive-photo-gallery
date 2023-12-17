document.addEventListener('DOMContentLoaded', function() {
    const uploadForm = document.getElementById('upload-form');
    const fileInput = document.getElementById('file-input');
    const imageGallery = document.getElementById('image-gallery');
    const textInput = document.getElementById('text-input');

    uploadForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const file = fileInput.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;

                imageGallery.appendChild(img);
            };

            reader.readAsDataURL(file);
        }
    });
});



function addcomments() {
    var comment = document.getElementById("text-input").value;

    console.log(comment);

    var ul = document.getElementById("ulist");
    var listelement = document.createElement("li");
    listelement.innerText = comment;
    ul.appendChild(listelement);

}