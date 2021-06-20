<?php

use App\Http\Controllers\CmsController;
use App\Http\Controllers\NewsletterController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/cmspage/{identifier}', [CmsController::class, 'getCmsPage']);

Route::post('/newslettersignup', [NewsletterController::class, 'submitEmail']);