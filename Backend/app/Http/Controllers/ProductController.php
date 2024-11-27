<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Product;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Product::all();
        $headers = ['Content-Type' => 'application/json'];
        return response()->json($data, 200, $headers);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        Product::create($request->all());
        return response()->json(['message' => 'Product family created'], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $productFamily)
    {
        $headers = ['Content-Type' => 'application/json'];
        return response()->json($productFamily, 200, $headers);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        $product->update($request->all());
        return response()->json(['message' => 'Product family updated'], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return response()->json(['message' => 'Product family deleted'], 200);
    }
}
