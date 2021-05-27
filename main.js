Webcam.set({
    width:350,
    height:300,
    image_format:'png';
    png_quality:100
});

camera = document.getElementById("camera1");

Webcam.attach("#camera1");

function take_snapshott(){
    Webcam.snap(function(data_uri){
        document.getElementById("outputt").innerHTML = '<img id="picture_caputured" src="'+data_uri+'"/>'
    });
};

console.log("ml5.version", ml5.version);

classifier = ml5.imageClassifier = ("https://teachablemachine.withgoogle.com/models/SwFWkHmGH/model.json", modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
};