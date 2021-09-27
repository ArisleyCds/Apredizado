window.onload = function() {
        var andar = null
         
    var canvas = document.querySelector('#ss');
    var cvap = canvas.getContext('2d');
    beison = new Image();
    beison.src = "Persona.png";
    
    //Personagem
    const personagem = {
        x : 0,
        y : 800,
        l : 187,
        d : 152,
        v : 15,
    }
    const animation = {
        e() {
            cvap.drawImage(beison, 0, 0, 187, 152, personagem.x, personagem.y, personagem.l, personagem.d)
        }
    }
    setInterval(100, animation.e())
    const move = {
        d() {
            personagem.x += personagem.v;
        },
        ArrowRight() {
            this.d();
        },
        ArrowLeft() {
            this.a()
        },
        ArrowDown() {
            this.s();
        },
        ArrowUp() {
            this.w()
        },
        a() {
            personagem.x += personagem.v;   
        },
        s() {
            personagem.y += personagem.v;
        },
        w() {
            personagem.y -= personagem.v;
        }
    }
        //Interação
        onkeydown = s; 
        function s(e) {
            andar = e.key;
            console.log(e.key)
            /*const personagem = [
                xo= 0,
                yo= 0,
                largura= 187,
                altura= 152,
                x= 0,
                y= 0,
            ]*/
            
            move[andar]()
        }
        window.addEventListener("touchstart", function() {
            canvas.onpointerdown = function a(s) {
                console.log(s.x)
                const botões = {
                    pbx : [0, 187], pby : [1360, 1512],
                    
                    colisão() {
                        cvap.drawImage(beison, 0, 0, 187, 152, personagem.x, personagem.y, personagem.l, personagem.d);
                        if(s.x >= this.pbx[0] && s.x <= this.pbx[1]) {
                            personagem.x += -personagem.v;
                        }
                    },
                }
                botões.colisão()
            }
        } )
        window.addEventListener("touchend", function() {
            console.log("Parado")
        })

    var canvas = document.querySelector('#ss');
    var cvap = canvas.getContext('2d');    
function cenario() {
cvap.fillStyle = "black"
cvap.fillRect(0, 0, 1000, 2000);

cvap.fillStyle = "red";
cvap.fillRect(0, 1360, 187, 152);

cvap.fillStyle = "yellow";
cvap.fillRect(0, 1360, 187, 10);
cvap.fillStyle = "yellow";
cvap.fillRect(0, 1360, 10, 152);
cvap.fillStyle = "yellow";
cvap.fillRect(0, 1502, 187, 10);
cvap.fillStyle = "yellow";
cvap.fillRect(177, 1360, 10, 152);

cvap.fillStyle = "red";
cvap.fillRect(190, 1360, 187, 152);

cvap.fillStyle = "yellow";
cvap.fillRect(190, 1360, 187, 10);
cvap.fillStyle = "yellow";
cvap.fillRect(190, 1360, 10, 152);
cvap.fillStyle = "yellow";
cvap.fillRect(190, 1502, 187, 10);
cvap.fillStyle = "yellow";
cvap.fillRect(367, 1360, 10, 152);
//
cvap.fillStyle = "red";
cvap.fillRect(380, 1360, 187, 152);

cvap.fillStyle = "yellow";
cvap.fillRect(380, 1360, 187, 10);
cvap.fillStyle = "yellow";
cvap.fillRect(380, 1360, 10, 152);
cvap.fillStyle = "yellow";
cvap.fillRect(380, 1502, 187, 10);
cvap.fillStyle = "yellow";
cvap.fillRect(557, 1360, 10, 152);
//
cvap.fillStyle = "red";
cvap.fillRect(190, 1206, 187, 152);

cvap.fillStyle = "yellow";
cvap.fillRect(190, 1206, 187, 10);
cvap.fillStyle = "yellow";
cvap.fillRect(190, 1206, 10, 152);
cvap.fillStyle = "yellow";
cvap.fillRect(190, 1348, 187, 10);
cvap.fillStyle = "yellow";
cvap.fillRect(367, 1206, 10, 152);
}
setInterval(cenario, 500)
}











/*window.onload = function(){
    x=10 
    y=100
    window.addEventListener("touchstart", function(p) {
        console.log("Pressionado")
    } )
    window.addEventListener("touchend", function() {
        console.log("Parado")
    })
    window.addEventListener("keydown", function() {
        Pmvt = 0;
    }, false);
    window.addEventListener("keyup", function() {

    }, false);

    //Dentro do canvas
    cns = document.querySelector('canvas');
    cvsp = cns.getContext('2d');

    //Dados do canvas
    canvasWidht = window.innerWidth;
    canvasHeight = window.innerHeight;

    //Movimentação
    //Fisica
     x=10 
     y=100
     tmo=32

    function fisica() {
    }
    setInterval(fisica, 10);
    //
    //Tela
    function atualizartela() {
        //Cénario
        cvsp.fillStyle = "gray"
        cvsp.fillRect(0, 0, canvasWidht, window.innerHeight)
        //
        //Inimigos
        for(var p = 0; p <= Obj.length; p++) {
        }
        //
        //Personagem
        cvsp.fillStyle = "white";
        cvsp.fillRect(x, y, tmo, tmo)
        //
    }
    setInterval(atualizartela, 50);
    //
    //Personagem
        //Sprites
            var Pmvt = 0;
            const Obj = []; 
            var g = 0;
        //
        //Hitbox Personagem
        function mover(tecla) {
            const teclap = tecla.keyCode;
            console.log(teclap)
            console.log(Obj)
            console.log(Obj[0])
            if(teclap == 107) {
                console.log(x + " " + y)
                function a(s) {
                console.log(s)
                    for(var p = 0; p <= Obj.length; p++) {
                        if(Obj[p] == s) {
                            a("_obj" + Math.round(Math.random()*1000));
                            p = 0;
                            break;
                        } 
                        if(p >= Obj.length) {
                            let s = ["red", x, y, tmo, tmo];
                            break;
                        }
                    }
                }
                a("_obj" + Math.round(Math.random()*9));
            }
            //animação
            animation = function(){
                if(this.mvLeft || this.mvUp || this.mvRight || this.mvDown){
                    //Caso qualquer seta seja pressionada, o contador de animação é incrementado
                    this.countAnim++;
                    if(this.countAnim >= 40){
                        this.countAnim = 0;
                    }
                    this.srcX = Math.floor(this.countAnim / 5) * this.width;
                } else {
                    //Caso nenhuma tecla seja pressionada, o contador de animação é zerado e a imagem do personagem parado é exibida
                    this.srcX = 0;
                    this.countAnim = 0;
                }
            }
            if(teclap == 16) {
                console.log('Correndo');
                Pmvt = "Correndo"
            }
            if(teclap == 39) {
                x += 5;
            }
            if(teclap == 37) {
                x -= 5;
            }
            if(teclap == 38) {
                y -= 5;
                console.log('Pulou')
            }
            if(teclap == 40) {
                y += 5;
                console.log('Agachou');
            }
            console.log("Acabou")
        }
        //
        //Animações
        onkeydown.keyCode = mover;
    //
}*/
