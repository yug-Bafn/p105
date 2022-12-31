Webcam.set({
    width:350,
    height:300,
    image_format:  'png',
    png_quality:90
});
  camera=document.getElementById("camera");
  Webcam.attach('#camera');
   
  function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML ='< img id="captured_image" src="'+data_uri+'" />';
    });

  }
console.log('ml5 version:' , ml5.version);
classifier =ml5.imageclassifier('https://teachablemachine.withgoogle.com/models/wncLUreC-/.model.json',modelLoaded);

function modelLoaded(){
  console.log('Model Loaded!');
}
function check(){
  img =document.getElementById('capture_image');
  classifier.classify(img, gotresult);
}
function gotresult(error ,results ){
  if(error) {
    console.error(error);
  }else{
    console.log(result);
    document.getElementById("result_object_name").innerHTML =result [0].label;
    document.getElementById("result_object_accuracy").innerHTML =result [0].confidence.tofixed(3);
  }
}