Webcam.set({
    width:350,
    height:300,
    image_format:'png',
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

function speak(){
    var synth = window.speechSynthesis;
    statement1 = "This is " + answer;
    var utterThis = new SpeechSynthesisUtterance(statement1);
    synth.speak(utterThis);
}

function check(){
    img = document.getElementById("picture_captured");
    classifier.classify(img, gotResult)
}

function gotResult(error, results){
    if(error){
    console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label
        answer = results[0].label;
        speak()
    }
    if (results[0] == "Victory"){
        document.getElementById("updated_emoji").innerHTML = "&#9996;";
    }
    if(results[0] == "Best"){
        document.getElementById("updated_emoji").innerHTML = "&#128076;";
    }
    if (results[0] == "Amazing"){
        document.getElementById("updated_emoji").innerHTML = "&#128077";
    }
}