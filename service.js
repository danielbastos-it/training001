var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'Extremis Lotes - Gerencial',
  description: 'Gerencial do Sistema de Loteamento',
  script: 'D:\\SISTEMAS\\Lotes - Gerencial\\training001\\src\\main.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();
