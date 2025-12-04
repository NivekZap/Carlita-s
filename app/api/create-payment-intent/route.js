// app/api/create-payment-intent/route.js
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
    try {
        const { cartItems } = await request.json();


        const totalAmount = await calculateSecureAmount(cartItems); 
        
        
        if (totalAmount <= 0) {
            return NextResponse.json({ error: "El monto del pedido es inválido" }, { status: 400 });
        }

   
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(totalAmount * 100), 
            currency: 'usd', 
           
            metadata: { 
                userId: 'ID_DEL_USUARIO', 
                orderItems: JSON.stringify(cartItems)
            },
        });

        return NextResponse.json({ clientSecret: paymentIntent.client_secret }, { status: 200 });

    } catch (error) {
        console.error("Error al crear Payment Intent:", error);
        return NextResponse.json({ error: error.message || "Error interno del servidor" }, { status: 500 });
    }
}