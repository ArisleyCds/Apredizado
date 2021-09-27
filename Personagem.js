window.onload = function() {
    var andar = null
    
    var canvas = document.querySelector('#ss');
    var cvap = canvas.getContext('2d');
    beison = new Image();
    beison.src = "Persona.png";
    var apertado = false
    
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
        personagem.x += -personagem.v;   
    },
    s() {
        personagem.y += personagem.v;
    },
    w() {
        personagem.y -= personagem.v;
    }
}
function cenario() {
cvap.fillStyle = "black"
cvap.fillRect(0, 0, 1000, 2000);
//pb
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
//sb
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
//tb
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
//eb
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
animation.e()
if(apertado != false) {move[apertado]()}
}
setInterval(cenario, 200)
    //Interação
    onkeydown = s; 
    function s(e) {
        cenario()
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
    152
    187

        addEventListener("touchstart", function() {
        canvas.onclick = function a(e) {
            x = e.pageX - canvas.offsetLeft;
            y = e.pageY - canvas.offsetTop;
            
            console.log(x)
            const botões = {
                pbx : [0, 187], pby : [1360, 1512],
                sbx : [190, 377], sby : [1360, 1512],
                tbx : [380, 567], tby : [1360, 1512],
                ebx : [190, 377], eby : [1206, 1358],
                
                colisão() {
                        console.log(x + " " + y)
                        cvap.drawImage(beison, 0, 0, 187, 152, personagem.x, personagem.y, personagem.l, personagem.d);               
                        if(x >= this.pbx[0] && x <= this.pbx[1] && y >= this.pby[0] && y <= this.pby[1]) {
                            apertado = "a";
                        } else if (x >= this.sbx[0] && x <= this.sbx[1] && y >= this.sby[0] && y <= this.sby[1]) {
                            apertado = "s";
                        } else if (x >= this.tbx[0] && x <= this.tbx[1] && y >= this.tby[0] && y <= this.tby[1]) {
                            apertado = "d"; 
                        } else if (x >= this.ebx[0] && x <= this.ebx[1] && y >= this.eby[0] && y <= this.eby[1]) {
                            apertado = "w"; 
                        }
                },
            }
            botões.colisão()
        }})
    window.addEventListener("touchend", function() {
        apertado = false;
    })
}
