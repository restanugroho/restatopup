<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Webs;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index() {
        $webNama = Webs::find(1);
        return Inertia::render("Home", [
            "NamaWebnya"=> $webNama ? $webNama->name : "RestaTopup",
        ]);
    }
}
