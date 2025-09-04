const express = require('express');
const verify_payment = express.Router();
const crypto = require("crypto");
const Database = require("../database/main");
const service = require('../services/main');

verify_payment.post('/', (req, res) => {
    try {
        const { orderId, razorpayPaymentId, razorpaySignature, user_email } = req.body;
        if (!orderId || !razorpayPaymentId || !razorpaySignature) {
            res.status(400).json({ success: false, message: 'Invalid request parameters' });
        }

        const generatedSignature = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET || "rzp_test_RUGErNMHKD0mmg")
            .update(`${orderId}|${razorpayPaymentId}`)
            .digest('hex');

        if (generatedSignature === razorpaySignature) {

            Database.makePrime(user_email).then(() => {
                console.log("try to make cluster...")
                service.create_file_backend(user_email).then(()=>{
                    res.status(200).json({ success: true, message: 'Payment verified successfully' });
                })
                .catch((err)=>{
                    res.send({
                    status: "error",
                    msg: "error while create the file system ! "
                }) 
                })
            }).catch((err) => {
                res.send({
                    status: "error",
                    msg: "error while make the user as prime "
                })
            })
        } else {
            res.status(400).json({ success: false, message: 'Payment verification failed' });
        }
    } catch (error) {
        console.error('Payment Verification Error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to verify payment',
            error: error,
        });
    }
});
module.exports = verify_payment; 