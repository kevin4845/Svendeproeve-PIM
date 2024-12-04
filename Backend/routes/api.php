<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductFamilyController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\StatisticController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VariantController;
use App\Http\Middleware\Cors;
use App\Http\Middleware\PublicApiMiddleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware([Cors::class])->group(function () {
    Route::group([
        'middleware' => 'api',
        'prefix' => 'auth'
    ], function ($router) {
        Route::post('/register', [AuthController::class, 'register'])->name('register');
        Route::post('/login', [AuthController::class, 'login'])->name('login');
        Route::post('/set-password', [AuthController::class, 'setPassword'])->name('set-password');
        Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:api')->name('logout');
        Route::post('/refresh', [AuthController::class, 'refresh'])->middleware('auth:api')->name('refresh');
        Route::post('/me', [AuthController::class, 'me'])->middleware('auth:api')->name('me');
    });

    Route::group([
        'middleware' => 'api',
    ], function ($router) {
        Route::get('roles', [RoleController::class, 'index']);
        Route::apiResource('products', ProductController::class);
        Route::apiResource('users', UserController::class);
        Route::apiResource('product-families', ProductFamilyController::class);
        Route::apiResource('variants', VariantController::class);
        Route::get('total-statistics', [StatisticController::class, 'getTotals']);
    });

    Route::group([
        'prefix' => 'public',
        'middleware' => PublicApiMiddleware::class,
    ], function ($router) {
        Route::get('products', [ProductController::class, 'index']);
        Route::get('products/{id}', [ProductController::class, 'show']);
        Route::get('product-families', [ProductFamilyController::class, 'index']);
        Route::get('product-families/{id}', [ProductFamilyController::class, 'show']);
        Route::get('variants', [VariantController::class, 'index']);
        Route::get('variants/{id}', [VariantController::class, 'show']);
    });



});
