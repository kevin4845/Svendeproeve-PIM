<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    public function index() {
        return response()->json(Role::all());
    }

    public function isSuperadmin(User $user) {
        return response()->json($user->hasRole('superadmin'));
    }

    public function isAdmin(User $user) {
        return response()->json($user->hasRole('admin'));
    }

    public function isECatalog(User $user) {
        return response()->json($user->hasRole('ecatalog'));
    }

}
