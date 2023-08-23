
export class plantillasDatos {

    static naP(lot, amount){
    return `#NorthAtlantic #CuentaBanco                                                                                 Banco Nacional 
    Cuenta IBAN: CR97 0151 0041 0026 0110 25
    A nombre de North Atlantic International Ocean Carrier Inc.
    Cedula jurídica: 3-012-789511
    ------------   Monto: *$${amount}*
    Detalle a agregar:  
    Barco  *${lot}* `
};



static atmP(lot, amount, tipoPagoNaviera){
    return `Group ATM SC Logistic Sociedad de Responsabilidad Limitada
    CJ 3-102-785133
    Cuenta bancaria:
    Dólares Banco Nacional de CR
    BNCR #200-02-006-010159-6
    IBAN CR29 0151 0062 0020 1015 92 
    ------------   Monto: *$${amount}*
    Detalle a agregar:  
    ${tipoPagoNaviera}  *${lot}* `
};

static mtP(lot, amount){
  return `Banco Nacional # 200-02-031-008944-9
  Cuenta IBAN: CR88015103120020089444
    A nombre de Matus International INC.
  Cedula jurídica: 3012784695
  ------------   Monto: *$${amount}*
  Detalle a agregar:  
  ${tipoPagoNaviera}  *${lot}* `
};


static copartP(lot, amount) {
    return `Deposita a la cuenta de Copart .

    BENEFICIARY: Copart, Inc. Member Wire Account
    ABA (ROUTING): 121000248
    
    
    SWIFT CODE: WFBIUS6S 
    
    ACCOUNT #: 4114145394
    
    
    Bank Name: Wells Fargo Bank
    
    Bank Address: 420 Montgomery Street, San Francisco, CA 94104
    
     
    
    Direccion de Copart:
    Copart
    14185 Dallas Parkway, Suite 300
    Dallas, TX 75254
    
    
    
    Detalle que debe agregar al deposito:
    
    Member Number: 139565 
    
    Lot: 	*${lot}* 
    MONTO: *${amount}*                                                                                                                                                                                      MONTO:$6.813`;
  }

  static iaaP(lot, amount ) {
    return ` A la cuenta de IAA:


    Account Name: IAA Buyer Wires
    
    
    Account Number: 3756658677
    
    
    Routing Number: 026009593
    
    
    Bank Name: Bank of America
    
    
    Bank Address: 100 West 33rd Street, New York, NY 10001
    
    
    Swift Code: bofaus3n
    
    
    Chips Code: 0959
    
    -----------------------------------------------
    Dirección de  la subasta:
    
     701 Harger Road, Suite 201 | Oak Brook, IL 60523
    -----------------------------------------------
    Detalle que debe agregar:
    
    Buyer id: 294658
    Stock: ${lot}
     
    Monto que debe depositar: $*${amount}*`
  }
}