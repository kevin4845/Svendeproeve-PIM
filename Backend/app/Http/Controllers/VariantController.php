<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreVariantRequest;
use App\Http\Requests\UpdateVariantRequest;
use App\Models\Variant;

class VariantController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Variant::with(['media', 'product'])->get();
        $headers = ['Content-Type' => 'application/json'];
        return response()->json($data, 200, $headers);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreVariantRequest $request)
    {
        $variant = Variant::create($request->all());
        if ($request->has('image') && $request->get('image') != 'undefined') {
            $variant->addMediaFromRequest('image')->toMediaCollection('image');
        }
        return response()->json(['message' => 'Product family created'], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Variant $variant)
    {
        $headers = ['Content-Type' => 'application/json'];
        return response()->json($variant, 200, $headers);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateVariantRequest $request, Variant $variant)
    {
        $variant->update($request->all());

        if ($request->has('image') && $request->get('image') != 'undefined') {
            $variant->clearMediaCollection('image');
            $variant->addMediaFromRequest('image')->toMediaCollection('image');
        }
        return response()->json(['message' => 'Variant updated'], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Variant $variant)
    {
        $variant->delete();
        return response()->json(['message' => 'Product family deleted'], 200);
    }
}
