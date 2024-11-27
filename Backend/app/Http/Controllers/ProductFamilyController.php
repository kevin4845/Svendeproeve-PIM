<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductFamilyRequest;
use App\Http\Requests\UpdateProductFamilyRequest;
use App\Models\ProductFamily;

class ProductFamilyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = ProductFamily::with('media')->get();
        $headers = ['Content-Type' => 'application/json'];
        return response()->json($data, 200, $headers);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductFamilyRequest $request)
    {
        $productFamily = ProductFamily::create($request->all());
        if ($request->has('image') && $request->get('image') != 'undefined') {
            $productFamily->addMediaFromRequest('image')->toMediaCollection('image');
        }
        return response()->json(['message' => 'Product family created'], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(ProductFamily $productFamily)
    {
        $headers = ['Content-Type' => 'application/json'];
        return response()->json($productFamily, 200, $headers);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductFamilyRequest $request, ProductFamily $productFamily)
    {
        $productFamily->name = $request->get('name');
        $productFamily->save();

        if ($request->has('image') && $request->get('image') != 'undefined') {
            $productFamily->clearMediaCollection('image');
            $productFamily->addMediaFromRequest('image')->toMediaCollection('image');
        }
        return response()->json(['message' => 'Product family updated'], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ProductFamily $productFamily)
    {
        $productFamily->delete();
        return response()->json(['message' => 'Product family deleted'], 200);
    }
}
