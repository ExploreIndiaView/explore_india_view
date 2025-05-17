import cron from 'cron';
import https from 'https';

const job = new cron.CronJob("*/14 * * * *", function() {
    https.get(process.env.API_URL, (res) => {
        if(res.statusCode === 200) console.log("Get request sent successfully");
        else console.log("GET request failed",res.statusCode)
    })
    .on("error", (e)=>console.error("Error in GET request", e));
})

export default job;

// CRON JOB EXPLAINATION
// CRON jobs are scheduled tasks that run periodically at fixed intervals
// we want to sent 1 Get request for every 14 minutes

// How to define a "Schedule"?
// you define a schedule using a cron expression, which consists of 5 fields representing

//! MINUTE, HOUR, DAY OF MONTH, MONTH, DAY OF WEEK 

// ? EXAPLES && EXPLAINATION
//* 14 * * * * -> every 14 minutes
//* 0 0 * * 0 -> AT 00:00 every Sunday
//* 30 3 15 * * -> AT 03:30 every 15th day of the month
//* 0 0 1 1 *  -> AT 00:00 on 1ST JANUARY
//* 0 * * * * -> every HOUR 
