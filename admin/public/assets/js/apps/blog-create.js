$(document).ready(function(){
    $('#summernote').summernote({height:300});
});

var input=document.querySelector('.blog-tags');
new Tagify(input)

var input=document.querySelector('input[name=category]');
new Tagify(input,{
    whitelist:["Bisnis","Bola","Edukasi","Ekonomi","Entrepreneur","Hiburan","Hukum","Internasional","Investment","Kecantikan","Kesehatan","Lifestyle","Market","Metro","Nasional","Olahraga","Opini","Otomotif","Politik","Profil","Sains","Selebriti","Syariah","Teknologi","Terbaru","Travel"],
    userInput:false,
    dropdown:{maxItems:26}
})