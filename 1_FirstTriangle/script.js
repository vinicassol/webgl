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

      //Comunicação com A GPU
      const myBuffer = gl.createBuffer();
      gl.bindBuffer (gl.ARRAY_BUFFER, myBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData), gl.STATIC_DRAW); 


      //Shaders
      const vertexShader = gl.createShader(gl.VERTEX_SHADER);
      gl.shaderSource(vertexShader, `
        attribute vec3 position;
        void main(){
            gl_Position = vec4(position, 1);
        }   
      `);
      gl.compileShader(vertexShader);

      const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
      gl.shaderSource(fragmentShader, `
        void main()
        {
            gl_FragColor = vec4 (0, 1, 0, 1);
        }

      `);
      gl.compileShader(fragmentShader);

      const program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program); 

      const positionLocation = gl.getAttribLocation(program, `position`);
      gl.enableVertexAttribArray(positionLocation);
      gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);

      gl.useProgram(program);  
      gl.drawArrays(gl.TRIANGLES, 0, 6); 

}
window.onload = main;


