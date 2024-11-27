<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductFamilyController;
use App\Http\Controllers\VariantController;
use App\Http\Middleware\Cors;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware([Cors::class])->group(function () {
    Route::group([
        'middleware' => 'api',
        'prefix' => 'auth'
    ], function ($router) {
        Route::get('/test', function () { return "test"; });
        Route::post('/register', [AuthController::class, 'register'])->name('register');
        Route::post('/login', [AuthController::class, 'login'])->name('login');
        Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:api')->name('logout');
        Route::post('/refresh', [AuthController::class, 'refresh'])->middleware('auth:api')->name('refresh');
        Route::post('/me', [AuthController::class, 'me'])->middleware('auth:api')->name('me');
    });

    Route::group([
        'middleware' => 'api',
    ], function ($router) {
        Route::apiResource('products', ProductController::class);
        Route::apiResource('statistics', 'StatisticController');
        Route::apiResource('users', 'UserController');

        Route::group([
            'prefix' => 'product-families'
        ], function ($router) {
            Route::get('/', [ProductFamilyController::class, 'index']);
            Route::post('/', [ProductFamilyController::class, 'store']);
            Route::get('/{id}', [ProductFamilyController::class, 'show']);
            Route::put('/{id}', [ProductFamilyController::class, 'update']);
            Route::delete('/{id}', [ProductFamilyController::class, 'destroy']);
        });

        Route::apiResource('variants', VariantController::class);
    });
});
