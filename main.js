//function Loadjson(file,callback) {
//    var x=new XMLHttpRequest();
//   x.overrideMimeType("application/json");
//   x.open("GET",file,true);
//   x.onreadystatechange = function(){
//     if(x.readyState === 4 && x.status=="200"){
//       callback(x.responseText);
//     }
//   };
//   x.send(null);
// }

//Loadjson("data.json",function (text){
  //var data=JSON.parse(text);
//   //console.log(data);
//   basics(data.details);
//   careerinfo(data.career);
//   education(data.education);
//   techinical(data.technical);
//   ach(data.acheive)
// })

function loadjson(file)
{
  return new Promise((resolve,reject)=>
  {
    return fetch(file).then(response=>
    {
      if(response.ok)
      {
        resolve(response.json());
      }
      else
      {
        reject(new Error('error'));
      }
    })
  })
}

var newfile=loadjson("data.json");
newfile.then(data=>
{
  console.log(data);
  basics(data.details);
  careerinfo(data.career);
  education(data.education);
  techinical(data.technical);
  ach(data.acheive)
})

var c1=document.querySelector(".child1");
function basics(det) {

  var image=document.createElement("img");
  image.src=det.image;
  c1.appendChild(image);

  var name=document.createElement("h3");
  name.textContent=det.name;
  c1.appendChild(name);

 var phno=document.createElement("h4");
 phno.textContent=det.Phno;
 c1.appendChild(phno);

var mail=document.createElement("a");
mail.href="mailto:tejakothurthi@gmail.com";
mail.textContent=det.email;
c1.appendChild(mail);

var addr=document.createElement("h2");
addr.textContent="Address";
c1.appendChild(addr);

var hr=document.createElement("hr");
c1.appendChild(hr);

var p=document.createElement("p");
p.textContent=det.Address;
c1.appendChild(p);


}
var c2=document.querySelector(".child2");
function careerinfo(info) {
var heading =document.createElement("h2");
heading.textContent="Career Objective:";
c2.appendChild(heading);


var hr=document.createElement("hr");
c2.appendChild(hr);


  var c=document.createElement("h2");
  c.textContent=info.info;
  c2.appendChild(c);
  var hr=document.createElement("hr");
  c2.appendChild(hr);

}
 function education(edu){
   var hd = document.createElement("h2");
     hd.textContent="Educational Qualifications:";
       c2.appendChild(hd);
       var hr=document.createElement("hr");
       c2.appendChild(hr);

     var table1=document.createElement("table");
     table1.border="1";
     c2.appendChild(table1);

     tabledata="";

     for(i=0;i<edu.length;i++)
     {
       tabledata+="<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].year+"</td><td>"+edu[i].percentage+"</td></tr>";
     }
     table1.innerHTML=tabledata;
   }

     function techinical(tec) {
       var hd = document.createElement("h2");
         hd.textContent="Technical Skills:";
           c2.appendChild(hd);
           var hr=document.createElement("hr");
           c2.appendChild(hr);

           for(i=0;i<tec.length;i++)
           {
             var title=document.createElement("h4");
             title.textContent=tec[i].title;
             c2.appendChild(title);

             var edul =document.createElement("ul");
             var eduli =document.createElement("li");
              eduli.textContent=tec[i].info;
              edul.appendChild(eduli);
              c2.appendChild(edul);

           }

     }
     function ach(a) {

       var hd = document.createElement("h2");
         hd.textContent="Achievements:";
           c2.appendChild(hd);
           var hr=document.createElement("hr");
           c2.appendChild(hr);
           for(i=0;i<a.length;i++)
           {
             var title=document.createElement("h4");
             title.textContent=a[i].title;
             c2.appendChild(title);

             var edul =document.createElement("ul");
             var eduli =document.createElement("li");
              eduli.textContent=a[i].info;
              edul.appendChild(eduli);
              c2.appendChild(edul);
            }
}
            function openpage() {
                window.open("resume.html","_self",true)
            }
