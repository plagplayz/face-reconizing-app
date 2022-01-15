
Webcam.set({
    width:350, height:300, Image_format:'png',png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function check()
{
    img=document.getElementById('captured_image');
    classifier.classify(img,gotResult);
}

function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    }
    );
}

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ByETJTdnm/model.json',modelLoaded);

function modelLoaded()
{
    console.log('model is loaded');
}

function gotResult(error,results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        console.log(results[0]);

        if(results[0].label=="Sumy")
        {
            document.getElementById("result_person1").innerHTML=results[0].label+"is present";
            document.getElementById("result_person2").innerHTML=results[1].label+"is absent";

        }
        if(results[0].label=="Paarthan")
        {
            document.getElementById("result_person1").innerHTML=results[0].label+"is present";
            document.getElementById("result_person2").innerHTML=results[1].label+"is Absent";
        }
        
    }
}




