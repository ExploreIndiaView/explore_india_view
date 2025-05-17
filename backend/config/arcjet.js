import arcjet, { tokenBucket, shield, detectBot } from "@arcjet/node";
import 'dotenv/config'

// initialize arcjet

export const aj = arcjet({
    key: process.env.ARCJET_KEY,
    characteristics: ["ip.src"],
    rules: [
        // sheild protects app from common bot attacks eg. SQL injection, XSS, CSRF attacks
        shield({ mode: "LIVE" }),
        detectBot({
            mode: "LIVE",
            // blocks all bots except search engines and crawlers
            allow: [
                "CATEGORY:SEARCH_ENGINE",
            ]
        }),
        // rate limiter to prevent DDOS attacks
        tokenBucket({
            mode: "LIVE",
            refillRate: 10,
            interval: 10,
            capacity: 15
        }),
    ]
})