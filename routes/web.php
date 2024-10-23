<?php

use App\Http\Controllers\DashController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Rute untuk halaman utama
Route::get('/', [DashController::class, 'Home']);

// Rute untuk Authentication
Route::get('/login', function() {
    return Inertia::render('Home', [ 'Authnya' => 'login']);
});

// Rute untuk dashboard dengan middleware otentikasi
Route::get('/dashboard', [DashController::class, 'index']);


// Rute untuk pengaturan website
Route::post('/settingweb', [DashController::class, 'store'])->name('Webs.store');

// Rute untuk API warna dan judul
Route::get('/api/warna', [DashController::class, 'WarnaCss']);
Route::get('/api/title', [DashController::class, 'Title']);

// Rute untuk profil pengguna
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Mengimpor rute autentikasi
require __DIR__.'/auth.php';
