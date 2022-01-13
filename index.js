var cron = require('node-cron');

/**
 * Síntaxe do Cron
 * 
 * ┌────────────── second (optional)
 # │ ┌──────────── minute
 # │ │ ┌────────── hour
 # │ │ │ ┌──────── day of month
 # │ │ │ │ ┌────── month
 # │ │ │ │ │ ┌──── day of week
 # │ │ │ │ │ │
 # │ │ │ │ │ │
 # * * * * * *
 * 
 */


 /**
  * Exemplo de chamada de Cron para ser executado em determinada hora do dia 
  * 
  */

cron.schedule('10 17 * * *', () => {
    console.log('Executando o job às at 16:59:00 at America/Sao_Paulo timezone, hora servidor -> ', Date());
  }, {
    scheduled: true,
    timezone: "America/Sao_Paulo"
  });


/**
  * Exemplo de chamada de Cron para ser executado minuto a minuto
  * 
  */


// cron.schedule('*/1 * * * *', () => {
//     console.log('Executando uma task de minuto a minuto no horário - > ', Date());
//   });


