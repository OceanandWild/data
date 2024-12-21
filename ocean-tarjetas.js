const tarjetasOcean = [
    { numero: '123456789', saldo: 5500 },
    { numero: '987654321', saldo: 50 },
    { numero: '112233445', saldo: 200 },
  ];
  
  // Validar si la tarjeta existe
  function validarTarjetaOcean(numero) {
    return tarjetasOcean.some(tarjeta => tarjeta.numero === numero);
  }
  
  // Obtener el saldo de la tarjeta
  function obtenerSaldoTarjetaOcean(numero) {
    const tarjeta = tarjetasOcean.find(tarjeta => tarjeta.numero === numero);
    return tarjeta ? tarjeta.saldo : 0;
  }
  
  // Descontar saldo de la tarjeta
  function descontarSaldoTarjetaOcean(numero, monto) {
    const tarjeta = tarjetasOcean.find(tarjeta => tarjeta.numero === numero);
    if (tarjeta) {
      tarjeta.saldo -= monto;
    }
  }
  