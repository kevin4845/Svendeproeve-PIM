<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class PublicApiMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if ($request->has('token') && $request->get('token') == env('PUBLIC_API_TOKEN')) {
            return $next($request);
        } else {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

    }
}