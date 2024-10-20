<?php

use App\Http\Controllers\DashController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Halaman utama
Route::get('/', function () {
    return Inertia::render('Home', [
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', []);
});

Route::post('/settingweb', [DashController::class, 'store'])->name('Web.store');
Route::get('/dashboard', [DashController::class, 'index'])->name('dashboard');
Route::get('/', [HomeController::class, 'index']);


require __DIR__.'/auth.php';
