<?php

use App\Http\Controllers\dashboardController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [dashboardController::class, 'index']);

Route::inertia('/tentang-kami', 'about');

// API
Route::get('/api/getDestinationList', [dashboardController::class, 'getDestinationList'])->name('getDestinationList');
Route::post('/api/getCost', [dashboardController::class, 'postOngkir'])->name('postOngkir');
Route::post('/api/getMtrCost', [dashboardController::class, 'postOngkirMotor'])->name('postOngkirMotor');
Route::get('/api/getResi/{noresi}', [dashboardController::class, 'getResiDetail'])->name('getResiDetail');