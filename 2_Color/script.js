function main(){
    const canvas = document.getElementById("glCanvas");
    
    if(canvas)
        var gl = canvas.getContext("webgl");
    else 
        console.log("Erro acessando elemento canvas")

    if (!gl) {
        alert("Erro ao incializar WebGL");
        return;
      }
      else{
          console.log("WebGL Inicializada");
      }

      const vertexData=[
         -1,1, 0,
         1, -1, 0,
         1,1, 0,
         -1, 0.9, 0,
         -1, -1, 0,
         0.9, -1, 0
      ];

      const colorData=[ //RGB
        1, 0, 0,
        0, 1, 0,
        0, 0, 1,
        1, 0, 0,
        1, 0, 0,
        1, 0, 0 
      ];

      //Comunicação com A GPU

      //Buffer de posições
      const positionBuffer = gl.createBuffer();
      gl.bindBuffer (gl.ARRAY_BUFFER, positionBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData), gl.STATIC_DRAW); 

      //Buffer de Cores
      const colorBuffer = gl.createBuffer();
      gl.bindBuffer (gl.ARRAY_BUFFER, colorBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colorData), gl.STATIC_DRAW); 

      //Shaders
      const vertexShader = gl.createShader(gl.VERTEX_SHADER);
      gl.shaderSource(vertexShader, `
        precision mediump float;
        attribute vec3 position;
        attribute vec3 color;
        varying vec3 vColor;
        void main(){
            vColor = color;
            gl_Position = vec4(position, 1);
        }   
      `);
      gl.compileShader(vertexShader);

      const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
      gl.shaderSource(fragmentShader, `
        precision mediump float;
        varying vec3 vColor;
        void main()
        {
            gl_FragColor = vec4 (vColor, 1);
        }
      `);
      gl.compileShader(fragmentShader);

      const program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);

      gl.linkProgram(program); 

      const positionLocation = gl.getAttribLocation(program, `position`);
      gl.enableVertexAttribArray(positionLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);

      const colorLocation = gl.getAttribLocation(program, `color`);
      gl.enableVertexAttribArray(colorLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
      gl.vertexAttribPointer(colorLocation, 3, gl.FLOAT, false, 0, 0);
      
      gl.useProgram(program);  
      gl.drawArrays(gl.TRIANGLES, 0, 6); 

}
window.onload = main;


