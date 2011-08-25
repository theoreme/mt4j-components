 void main(void)
 {
     vec2 pos = mod(gl_FragCoord.xy, vec2(50.0)) - vec2(25.0);
     float dist_squared = dot(pos, pos);
 
     gl_FragColor = (dist_squared < 400.0) 
         ? vec4(0.0, 1.0, 0.0, 1.0)
         : vec4(1.0, 0.0, 0.0, 1.0);
 }
