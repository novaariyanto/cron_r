var cron = require('node-cron');
const {exec} = require('child_process');

cron.schedule('0 0 * * *',()=>{
    exec('pm2 restart app',(err,stdout,stderr)=>{
        if(err){
            console.log('err');
        }
        console.log({stdout:stdout});
        console.log(stderr:stderr);

    })
    console.log('running a task efery at 00:00');
})