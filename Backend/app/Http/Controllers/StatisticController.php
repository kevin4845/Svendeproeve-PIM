<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductFamily;
use App\Models\User;
use App\Models\Variant;
use Illuminate\Http\Request;

class StatisticController extends Controller
{

    public function getTotals() {
        $totalProducts = Product::count();
        $totalVariants = Variant::count();
        $totalProdutFamilies = ProductFamily::count();
        $users = User::count();
        return response()->json([
            'totalProducts' => $totalProducts,
            'totalVariants' => $totalVariants,
            'totalProdutFamilies' => $totalProdutFamilies,
            'users' => $users
        ]);
    }

   public function getTotalProducts() {
    $totalProducts = Product::count();
    return response()->json(['totalProducts' => $totalProducts]);
   }

   public function getTotalVariants() {
    $totalVariants = Variant::count();
    return response()->json(['totalVariants' => $totalVariants]);
   }

   public function getTotalProdutFamilies() {
    $totalProdutFamilies = ProductFamily::count();
    return response()->json(['totalProdutFamilies' => $totalProdutFamilies]);
   }

   public function getUsers() {
    $users = User::count();
    return response()->json(['users' => $users]);
   }


}
