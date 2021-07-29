var togle1 = document.querySelector('.toggle-btn');
var togle2 = document.querySelector('.toggle-hdn');
var togle3 = document.querySelector('.desc');
var lay1 = document.querySelector('.layout1');
var dogru = 0;
var yanlis = 0;
function nonnne() {
    document.querySelectorAll('.d-none-f').forEach(zz => {
        zz.style.display='none';
    });
}

togle1.addEventListener('click', () => {

    if (togle3.classList.contains('opa1')) {



        togle3.classList.remove('opa1');
        togle3.classList.add('opa0');

        setTimeout(() => {
            togle2.style.WebkitAnimation = "togglenas 1s";
            togle3.style.WebkitAnimation = "togglenas 1s";
            setTimeout(() => {
                togle2.style.display = 'none'
                togle3.style.display = 'none'
            }, 1000);

        }, 1000);

    } else {


        togle2.style.display = 'block';
        togle3.style.display = 'block';



        togle2.style.WebkitAnimation = "toggle 1s";
        togle3.style.WebkitAnimation = "toggle 2s";
        togle3.style.WebkitAnimation = "hg 1s";

        setTimeout(() => {
            togle2.classList.add('opa1');
            togle3.classList.add('opa1');
        }, 1100);




    }


})





function func1() {
    nonnne();
    document.querySelectorAll('.d-none-f').forEach(el => {
        el.classList.remove('opa1');
        el.classList.add('none');
        el.classList.add('opa0');
    });
    document.querySelector('.d-none-f').style.display='block'

    document.querySelectorAll('.lay button').forEach(el => {

        el.classList.remove('shadow')
    });


    document.querySelector('.layout2').style.display = 'none'
    lay1.classList.remove('none');

    setTimeout(() => {

        lay1.classList.add('opa1');
    }, 300);

    document.querySelectorAll('.lay button')[0].classList.add('shadow');

}




function func2() {
    nonnne();
    ikiactive()
    document.querySelectorAll('.lay button').forEach(el => {

        el.classList.remove('shadow')
    });

    document.querySelectorAll('.d-none-f').forEach(el => {

        el.classList.remove('opa1');
        el.classList.add('none');
        el.classList.add('opa0');
    });
    document.querySelector('.layout2').classList.remove('opa0');
    document.querySelector('.layout2').style.display = 'block';
    document.querySelector('.layout2').classList.add('opa1');
    document.querySelector('.layout2').style.WebkitAnimation = "toggle 2s";



    document.querySelectorAll('.lay button')[0].style.backgroundColor = 'green'
    document.querySelectorAll('.lay button')[0].style.color = '#fff'
    document.querySelectorAll('.lay button')[1].classList.add('shadow');








}







document.querySelector('.go1').addEventListener('click', () => {
    func2()
})



document.querySelectorAll('.dnn').forEach(el => {
    el.addEventListener('click', () => {
        document.querySelectorAll('.active').forEach(z => {
            z.classList.remove('active')
        });

        el.classList.add('active')
    })
});



document.querySelector('.bir').addEventListener('click', () => {
    func1()
})

var yas = document.querySelector('.yasiniz');
var em = document.querySelector('.emailas');
var mm = false;
var zfc = 0;
yas.addEventListener('keyup', () => {
    if (Number(yas.value) >= 18 && yas.value.length<=2) {
        yas.style.backgroundColor = 'green';
        mm = true;

    } else {
        yas.style.backgroundColor = 'red';
        mm = false;
    }
    yas.style.color = '#fff';
})
var zfc = false;
em.addEventListener('keyup', () => {

    if (String(em.value).indexOf('@') > -1 && String(em.value).indexOf('.') > -1 && String(em.value).split('@')[1].length > 3) {
        em.style.backgroundColor = 'green';
        zfc = true;
    } else {
        em.style.backgroundColor = 'red';
        zfc = false;
    }
    em.style.color = '#fff';
})
var on = document.getElementById('onam');
var rm = false;
on.addEventListener('click', () => {
    if (on.checked == true) {
        document.querySelector('.go2').disabled = false;
        rm = true;
    } else {
        document.querySelector('.go2').disabled = true;
        rm = false;
    }
})


function ikiactive() {
    document.querySelector('.iki').addEventListener('click', () => {
        func2();
    })
}















function func3() {
    nonnne();




    document.querySelectorAll('.lay button').forEach(el => {

        el.classList.remove('shadow')
    });
    document.querySelectorAll('.lay button')[1].style.backgroundColor = 'green'
    document.querySelectorAll('.lay button')[1].style.color = '#fff'
    document.querySelectorAll('.lay button')[1].classList.remove('shadow');


    document.querySelector('.uc').classList.add('shadow')
    document.querySelectorAll('.d-none-f').forEach(el => {

        el.classList.remove('opa1');
        el.classList.add('none');
        el.classList.add('opa0');
    });
    document.querySelector('.layout3').classList.remove('opa0');
    document.querySelector('.layout3').style.display = 'block';
    document.querySelector('.layout2').style.display = 'none';
    document.querySelector('.layout3').classList.add('opa1');
    document.querySelector('.layout3').style.WebkitAnimation = "toggle 2s";




}




function ucactive() {
    document.querySelector('#ucc').addEventListener('click', () => {
        console.log('uccc')
        func3();

    })


}



function besactive() {
    document.querySelector('#bes').addEventListener('click', () => {
    
        func5();

    })


}

// kaydet butonuna basıldığında bilgileri kaydeder. Sadece localdedir. Ajax ile bir apiye gönderilebilir
function save2() {
    var radio;

    
    document.querySelectorAll('.radio').forEach(el => {
        if (el.checked==true) {
            radio = Number(el.id);
            console.log(String(el.id))
        }
    });


    var json = {
        "email": `${String(document.querySelector('.emailas').value)}`,
        "ses":`${radio}`,
        "cinsiyet":`${document.querySelector('.active').id}`,
        "yas":`${document.querySelector('.yasiniz').value}`
    
    }

    localStorage.setItem('json',JSON.stringify(json))
}








document.querySelector('.go2').addEventListener('click', () => {



    var control = false;
    document.querySelectorAll('.label .radio').forEach(el => {
        if (el.checked == true) {
            control = true;
        }
    });
    if (document.getElementById('onam').checked == true && control == true && zfc == true && rm == true && document.querySelector('.active') && mm == true) {
        save2();
        func3();
    }
    ucactive()



})




// test sesleri için seçilmiş sabit seslerdir. 
var audio1 = new Audio('/data/audio/Track01_01_c.wav');
var audio2 = new Audio('/data/audio/Track01_01_n.wav');

// test seslerinin ses seviyesini ayarlar
function setvall() {
    audio1.volume=Math.round(Number(rng.value))/100;
    audio2.volume=Math.round(Number(rng.value))/100;
}


function testgo() {
    setTimeout(() => {
        

      
        audio1.volume=Number(document.querySelector('.zpppr').value / 100);
        audio2.volume=Number(document.querySelector('.zpppr').value / 100);
        
        audio1.play();
        audio2.play();

        // test sesinin sürekli çalmasını sağlar.
        audio1.loop = true;
        audio2.loop = true;


    }, 700);
}



document.querySelector('.dccza').addEventListener('click',()=>{
  document.querySelector('.ddrp').classList.remove('none');
    testgo();
})


// kaydırarak test sesi seviyesini değiştirmemizi sağlar. test sesinin başlangıç seviyesini html içinde crtrl f yapıp range yi aratıp value değerini değiştirebilirsiniz
var rng = document.querySelector(".zpppr");

read("mousedown");
read("mousemove");
read("keydown");

function read(evtType) {
  rng.addEventListener(evtType, function() {
    window.requestAnimationFrame(function () {
      document.querySelector(".valgoo").innerHTML = Math.round(rng.value)+'%';
      setvall();
      rng.setAttribute("aria-valuenow", rng.value); 
    });
  });
}






function ucactive() {
    document.querySelector('.uc').addEventListener('click',()=>{
        func3();
    })
}


function func4() {

    dortactive()
    nonnne();
    ucactive();
    audio1.pause();
    audio2.pause();

    document.querySelectorAll('.lay button').forEach(el => {

        el.classList.remove('shadow')
    });
    document.querySelectorAll('.lay button')[2].style.backgroundColor = 'green'
    document.querySelectorAll('.lay button')[2].style.color = '#fff'
    document.querySelectorAll('.lay button')[2].classList.remove('shadow');


    document.querySelector('.dort').classList.add('shadow')
    document.querySelectorAll('.d-none-f').forEach(el => {

        el.classList.remove('opa1');
        el.classList.add('none');
        el.classList.add('opa0');
    });
    document.querySelector('.layout4').classList.remove('opa0');
    document.querySelector('.layout4').style.display = 'block';
    document.querySelector('.layout3').style.display = 'none';
    document.querySelector('.layout4').classList.add('opa1');
    document.querySelector('.layout4').style.WebkitAnimation = "toggle 2s";


    

}

document.querySelector('.go3').addEventListener('click',()=>{
    audio1.pause();
    audio2.pause();
    localStorage.setItem('value',JSON.stringify(document.querySelector('.zpppr').value))
    func4();
})



document.querySelector('.go5').addEventListener('click',()=>{
    func5();
})


// bilgileri kaydedebilmeniz için post sonksiyonu
// function post() {
    

//     var dm = JSON.parse(localStorage.getItem('json'));
    
//         var data = {
//             "email": `${dm.email}`,
//             "grup":`${dm.ses}`,
//             "cinsiyet":`${dm.cinsiyet}`,
//             "yas":`${dm.yas}`,
//             "dogru":`${dogru}`,
//             "yanlis":`${yanlis}`,
//             "snr":`${20*Math.log(Number(JSON.parse(localStorage.getItem('value')))/zfc)}`
//         }
//         // yazılımcı buraya post adresi yazmalı
//     var url = "/home/upload";
//     var xhr = new XMLHttpRequest();
//     xhr.open('POST',url,true);
//     xhr.onload = function(){
//        console.log('tamamlandı.')
//     }
//     xhr.send(data);
//     }



function func6() {
    document.querySelector('.dogru').textContent=dogru;
    document.querySelector('.yanlis').textContent=yanlis;
    document.querySelector('.snr').textContent=20*Math.log(Number(JSON.parse(localStorage.getItem('value')))/zfc);
    nonnne();
    audio1.pause();
    audio2.pause();

    document.querySelectorAll('.lay button').forEach(el => {

        el.classList.remove('shadow')
    });
    document.querySelectorAll('.lay button')[4].style.backgroundColor = 'green'
    document.querySelectorAll('.lay button')[4].style.color = '#fff'
    document.querySelectorAll('.lay button')[4].classList.remove('shadow');


    document.querySelector('.alti').classList.add('shadow')
    document.querySelectorAll('.d-none-f').forEach(el => {

        el.classList.remove('opa1');
        el.classList.add('none');
        el.classList.add('opa0');
    });
    document.querySelector('.layout6').classList.remove('opa0');
    document.querySelector('.layout6').style.display = 'block';
    document.querySelector('.layout5').style.display = 'none';
    document.querySelector('.layout6').classList.add('opa1');
    document.querySelector('.layout6').style.WebkitAnimation = "toggle 2s";


    // post();


}


function disabled(as) {
        document.querySelectorAll('.calc-button').forEach(element => {
           element.disabled=as; 
        });
}
var sval;
var group=[];
var sesler=[];
var volume= Number(JSON.parse(localStorage.getItem('value')));
var c1= document.querySelector('.ac1');
var c2= document.querySelector('.ac2');
var c3= document.querySelector('.ac3');
var index=24;
var mc=[];
var st;
var dpa = true;
var str;

// doğru yanlış kontrolünün yapıldığı fonksiyondur
function contas(a1,a2,a3) {
   if (mc[0].listen[0]==Number(a1) && mc[0].listen[1]==Number(a2) && mc[0].listen[2]==Number(a3)) {
       // ses 98 veya daha küçükse ve sonuç doğruysa sese 2 ekler
       if (volume<=98) {
           
     
        volume= volume + 2;
    }
    // doğru sayısı arttırılır
        dogru++;
       console.log('Cevap Doğru: '+dogru)
  
   } else{
       //eğer yanlışsa ve ses 2 veya daha büyükse ses seviyes 2 azalır
    if (volume>=2) {
        
    
    volume= volume - 2;
}
    yanlis++;
    console.log('Cevap Yanlış: '+yanlis)
 
   }
   mc=[];
   // 24 ses dosyası içinden çalınanlar splice ile silinir
   group.splice(group[str] - 1, 1);
   // eğer grupta hiç eleman kalmadıysa bitirmek için kullanılır
   if (group.length==0) {
       document.querySelector('.calc-kalan').textContent='0';
       // dpa değişkeni true ise diye aşağıda kontrol etmiştik. bunu false yapıyoruz ki ses çalmasın.
       dpa=false;
    // 6. ekran gelir ve test biter
       func6();
       console.log('bitti')
   }
}


// bir tuşa basıldığında değerin yansıtan kısımdır. Tıklanan rakamları otomatik girer

function inputcontrol(tus) {


    if (c1.value==' ' && c2.value==' ' && c3.value==' ') {
        c1.value=Number(tus);
     
    }else if (c1.value!=' ' && c2.value==' ' && c3.value==' ') {
        c2.value=Number(tus);

    } else if (c1.value!=' ' && c2.value!=' ' && c3.value==' ') {
        // tüm değerler girildiyse çalışan bölümdür.
        c3.value=Number(tus);
      
   
        setTimeout(() => {
            // doğru yanlış kontrolü için girilen değerleri başka bir fonksiyona gönderir. Doğru yanlış kısmı arka planda çalışır
            contas(c1.value,c2.value,tus)
            // ses çalımını tekrar başlatır.
            startlisten();
            // yazıları temizler
            c1.value=' ';
            c2.value=' ';
            c3.value=' ';
            // kalanı 1 azaltır
            index--;
            // aradaki geçişlerin bekleme süresi
        }, 1000);
      
    }
    
}


// silme işleminin yapıldığı kısımdır sadece ilk iki bölümü silmek için kullanılıyor
document.querySelectorAll('.calc-button').forEach(es => {
    es.addEventListener('click',()=>{
        if (es.id!='back') {
            inputcontrol(es.textContent) 
            console.log(es.textContent)
        }else{
            if (c1.value!=' ' && c2.value==' ' && c3.value==' ') {
                c1.value=' ';
             
            }else if (c1.value!=' ' && c2.value!=' ' && c3.value==' ') {
                c2.value=' ';
            }
        }
        
    })
});






var a1,a2;
var a1a,a2a;

var d1,d2;

function startlisten() {
    // dpa değişkeni tüm dizi bitti mi diye kontrol eder bittiyse false olur ve son adıma geçip sonuçlar açıklanır
if (dpa==true) {

    // o an okunacak sayıyı rasgele seçer 0 yaparsanız sayıları sıra sıra okur
    str = Math.abs(Math.ceil(Math.random()*group.length - 1));


// tuşların yazılamaz kalacağı süreyi ayarlar. 1000 olduğundan ses çalmaya başladığında ilk 1 saniye tuşlar kullanılamaz. 1000 3000 yapılırsa 3 saniye olur
    setTimeout(() => {
     
        disabled(true);
        setTimeout(() => {
            disabled(false);
        }, 1000);
        
   
        // cevapları konsolda görmenizi sağlar silebilirsiniz dilerseniz.
console.log('----------------------------------------')
        console.log('Seçilen grup: '+sval.ses);
        console.log('Okunan numaralar: '+group[str].listen);
        console.log('Kalan ses '+group.length);
   
// grubun rasgele seçilen elemanının rakamlarının listen-json içinde aranmasını sağlar. Bulunan verinin dosya adları a1a a2a değişkenlerine kaydedilir.
sesler.forEach(ses => {
    ses.forEach(r => {

        if (r.digits[0] == group[str].listen[0] && r.digits[1] == group[str].listen[1] && r.digits[2] == group[str].listen[2]) {
             a1a = r.digit_fname
             a2a = r.noise_fname
        }  
    });
});
// yukarıda bulunan dosya isimleri burada çalmaya başlar 
console.log(a1a)
a1 = new Audio(`/data/audio/${a1a}`);
a2 = new Audio(`/data/audio/${a2a}`);
// sesin seviyesidir direk kullanıcının seçtiği seviyede başlar aşağıdeki yorum satırını kapatıp diğerini yorum satırı yaparak sesi daha kısık başlatabilirsiniz. 2 yerine 100 üzerinden değer yazabilirsiniz
// a1.volume=(Number(JSON.parse(localStorage.getItem('value'))) - 2) / 100;
a1.volume=JSON.parse(localStorage.getItem('value')) / 100;


console.log('Gürültü düzeyi: '+volume);
if (zfc<volume) {
    zfc = volume;
}
// gürültünün seviyesini seçer. Başlangıç seviyesi kullanıcının seçtiğidir sonradan +2 -2 şeklinde güncellenir.
// aşağıdaki kodu kullanarak gürültüyü daha yüksek bir seviyede başlatabilirsiniz.
// a2.volume=(volume + 10)/100;
a2.volume=volume/100;

// seslerin başlatıldığı kısım aynı anda başlıyor.
a1.play();
a2.play();




mc.push(group[str]);

st=str;
// kalanın yazıldığı kısım 24 23 şeklinde azalmasını sağlıyor index - 1; ygibi değeri değiştirebilirsiniz
document.querySelector('.calc-kalan').textContent=index;
// 3 alanı da temizler baştan yazılmaya müsade eder
c1.value=' ';
c2.value=' ';
c3.value=' ';







// 300 saniye gecikmeli başlar değiştirebilirsiniz
    }, 300);

}

}













function func5() {
    sval = JSON.parse(localStorage.getItem('json'))
    // besactive dortactive gibi fonksiyonlar 5 veya 4 gibi adımlara tıklandığında o adımlara dönmek için kullanılır. 5. Adımda geçince 5 e dönme kilidi açılıyor
    besactive();

  // jsonların içindeki bilgilerin alınıp bir değişkene eşitlendiği ya da bir diziye aktarıldığı kısımdır. 
function reqListener () {
JSON.parse(this.responseText)[0].forEach(es => {

    if (es.group == Number(sval.ses)) {
        group.push(es);
    } 
});


  }

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "/data/data-group.json");
oReq.send();


function reqListenera () {
JSON.parse(this.responseText).forEach(esa => {
        sesler.push(esa);
});


  }

var oReqa = new XMLHttpRequest();
oReqa.addEventListener("load", reqListenera);
oReqa.open("GET", "/data/listen-json.json");
oReqa.send();




// başladı ve bitti arasındaki kodlar her fonksiyonda sabittir o adımdaki html i getirir.
//başladı
    nonnne();
document.querySelectorAll('.lay button').forEach(el => {

    el.classList.remove('shadow')
});



document.querySelectorAll('.lay button')[3].style.backgroundColor = 'green'
document.querySelectorAll('.lay button')[3].style.color = '#fff'
document.querySelectorAll('.lay button')[3].classList.remove('shadow');


document.querySelector('.bes').classList.add('shadow')
document.querySelectorAll('.d-none-f').forEach(el => {

    el.classList.remove('opa1');
    el.classList.add('none');
    el.classList.add('opa0');
});
document.querySelector('.layout5').classList.remove('opa0');
document.querySelector('.layout5').style.display = 'block';
document.querySelector('.layout4').style.display = 'none';
document.querySelector('.layout5').classList.add('opa1');
document.querySelector('.layout5').style.WebkitAnimation = "toggle 2s";
//bitti




// bu kod 5. adımdaki sesi başlatır ve döngüyü açar 

startlisten()


}

//  aşağıdaki fonksiyonlar testin hangi aşamadan başlanacağını anlatır. 1. aşama için func1() açık kalmalı. Direk 2. aşamadan başlasın isterseniz func1 i silip func2 yi yorum satırı olmaktan kaldırmanız yeterlidir.

func1();
// func2();
// func3();
// func4();
// func5();
// func6();

function dortactive() {
    document.querySelector('#dortt').addEventListener('click', () => {
    
        func4();

    })


}