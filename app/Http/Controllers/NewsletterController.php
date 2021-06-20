<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NewsletterController extends Controller
{
    public function submitEmail(Request $request)
    {
        // be validate email is correct, if not return unprocessable entry
        $request->validate([
            'email' => 'required|string|email',
        ]);

        // Do sommething with email address here, i.e. send to database, send to
        // mail chimp etc, from BE to keep any API keys hidden

        // example function to save to database:
        // $subscriber = Newsletter::updateOrCreate([
            // 'email'=>$request->email
        // ]);
        // $subscriber->save();

        return response()->json([
            'success' => true,
            'message' => 'Successfully signed up '.$request->email.' to the newsletter'
        ], 201);
    }
}
